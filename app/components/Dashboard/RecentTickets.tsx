import { ITicket } from "@/types/Ticket"
import Image from "next/image"
import { Tag } from "../Tag"
import { MultiAvatar } from "../MultiAvatar"

export const RecentTickets = ({ tickets }: { tickets: ITicket[] }) => {
  return (
    <div className="flex flex-col gap-2">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="relative border rounded-lg p-3 px-4 space-y-2">
          <div className="font-semibold text-sm mb-3">{ticket.title}</div>

          <div className="flex flex-wrap gap-2 ml-2">
            {ticket.tags?.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}

            {ticket.status == 'not_processed' ? (
              <Tag tag="Chưa xử lý" textStyle="text-absolute-red" backgroundStyle="bg-pink" />
            ) : ticket.status == 'processing' ? (
              <Tag tag="Đang xử lý" textStyle="text-yellow-600" backgroundStyle="bg-light-yellow" />
            ) : ticket.status == 'processed' ? (
              <Tag tag="Đã xử lý" textStyle="text-blue-600" backgroundStyle="bg-light-blue" />
            ) : (
              null
            )}
          </div>

          <div className="flex gap-8 ml-2">
            <div className="flex">
              <MultiAvatar users={ticket.customers} size={32} />

              <button className="p-[1px] ml-1">
                <div className="border border-dashed border-neutral-300 w-7 h-7 rounded-full flex justify-center items-center">
                  <Image alt="add" src="/icons/ic_plus.svg" width={12} height={12} />
                </div>
              </button>
            </div>

            <div className="flex gap-2 items-center">
              <Image alt="file" src="/icons/ic_file.svg" width={20} height={20} />
              <span className="font-semibold text-sm text-purple-600">2</span>

              <Image alt="message" src="/icons/ic_message.svg" width={20} height={20} />
              <span className="font-semibold text-sm text-yellow-600">3</span>
            </div>
          </div>

          <button className="absolute top-0 right-2 p-2 px-4 bg-light-green rounded-xl text-sm">View</button>
        </div>
      )
      )}
    </div>
  )
}