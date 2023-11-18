import { prioritiesTest, statusTest } from "@/testData/testData"
import { ITicket } from "@/types/Ticket"
import { formatDurationPast } from "@/utils/formatDurationPast"
import Avatar from "../Avatar"
import { DurationView } from "../DurationView"
import { PercentSlider } from "../Input/PercentSlider"
import { MultiAvatar } from "../MultiAvatar"

export const TicketOverview = ({ ticket }: { ticket?: ITicket }) => {
  if (!ticket) return null

  return (
    <div className="h-screen relative w-full sm:rounded-l-3xl bg-[#F9F9F9] px-4 sm:px-8 py-12 space-y-8">
      <div className="">
        <div className="text-3xl mb-3">Ticket #{ticket.id}</div>
      </div>

      <div className="flex gap-4">
        <div>
          <Avatar src={""} size={50} />
        </div>

        <div>
          <p className="text-lg font-semibold">{ticket.title}</p>
          <p className="text-sm">
            Được tạo bởi {' '}
            <span className="underline text-blue-600">{"Minhanhgreen"}</span>
            {' ' + formatDurationPast(new Date().getTime() - ticket.createAt)}. {' '}
            {ticket.updateAt && (
              <span>
                Cập nhật lần cuối {' '}
                <span className="underline text-blue-600">{formatDurationPast(new Date().getTime() - ticket.updateAt)}</span>
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="flex pb-4 border-b-2">
        <div className="flex-1 space-y-2">
          <div className="flex">
            <div className="w-36">
              <span className="font-semibold">Trạng thái:</span>
            </div>
            <div>
              <span>{statusTest.find(s => s.value == ticket.status)?.label}</span>
            </div>
          </div>

          <div className="flex">
            <div className="w-36">
              <span className="font-semibold">Độ ưu tiên:</span>
            </div>
            <div>
              <span>{prioritiesTest.find(p => p.value == ticket.priority)?.label}</span>
            </div>
          </div>

          <div className="flex">
            <div className="w-36">
              <span className="font-semibold">Loại danh mục:</span>
            </div>
            <div>
              <span>Vận hành</span>
            </div>
          </div>

          <div className="flex">
            <div className="w-36">
              <span className="font-semibold">Nhóm hỗ trợ:</span>
            </div>
            <div className="flex">
              <MultiAvatar users={ticket.customers} size={24} />
            </div>
          </div>

          <div className="flex">
            <div className="w-36">
              <span className="font-semibold">Người hỗ trợ:</span>
            </div>
            <div>
              <Avatar src={""} size={24} />
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex">
            <div className="w-36">
              <span className="font-semibold">Ngày tạo:</span>
            </div>
            <div>
              <span>{new Date(ticket.createAt).toLocaleDateString('en-GB')}</span>
            </div>
          </div>

          <div className="flex">
            <div className="w-36">
              <span className="font-semibold">SLA:</span>
            </div>
            <div>
              <span>{ticket.sla}</span>
            </div>
          </div>

          <div className="flex">
            <div className="w-36">
              <span className="font-semibold">Cảnh báo:</span>
            </div>
            <div>
              <span className="text-sm rounded-md bg-[#33CC5E33] text-[#33CC5E] px-2 py-1 whitespace-nowrap">Đúng tiến độ</span>
            </div>
          </div>

          <div className="flex">
            <div className="mr-4">
              <span className="font-semibold">Tiến độ công việc:</span>
            </div>
            <div className="w-1/2">
              <PercentSlider percent={48} />
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-4">
              <span className="font-semibold">Tổng thời gian hoàn thành công việc:</span>
            </div>
            <div>
              <DurationView duration={ticket.duration} small />
            </div>
          </div>
        </div>
      </div>

      <div>
        Mô tả
        Đính kèm
      </div>

      <div>
        Công việc
      </div>

      <div>
        Lịch sử
      </div>
    </div>
  )
}