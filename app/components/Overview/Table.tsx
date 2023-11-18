import Image from "next/image"
import Link from "next/link"

export const Table = () => {
  const Th = ({ children }: { children: React.ReactNode }) => {
    return (
      <th className="px-2 py-3 first:rounded-tl-lg last:rounded-tr-lg bg-[#5B5B5B] text-white font-normal whitespace-nowrap">{children}</th>
    )
  }

  const Td = ({ children }: { children: React.ReactNode }) => {
    return (
      <td className="px-2 py-3 group-last:first:rounded-bl-lg group-last:last:rounded-br-lg">{children}</td>
    )
  }

  const WarningOk = () => {
    return (
      <span className="rounded-md bg-[#33CC5E33] text-[#33CC5E] px-2 py-1 whitespace-nowrap">Đúng tiến độ</span>
    )
  }

  const WarningReminder = () => {
    return (
      <span className="rounded-md bg-pink text-absolute-red px-2 py-1 whitespace-nowrap">Nhắc nhở phản hồi</span>
    )
  }

  const ChatCount = ({ count }: { count: number }) => {
    return (
      <span className="flex gap-2">
        <Image alt="message" src="/icons/ic_message.svg" width={20} height={20} />
        <span className="font-semibold text-yellow-600">{count}</span>
      </span>
    )
  }

  const Priority = ({ priority }: { priority: string }) => {
    return priority == "Urgent" ? (
      <span className="text-absolute-red">Urgent</span>
    ) : priority == "High" ? (
      <span className="text-absolute-red">High</span>
    ) : priority == "Medium" ? (
      <span className="text-yellow-600">Medium</span>
    ) : (
      <span>Low</span>
    )
  }

  return (
    <table className="w-full text-xs text-left">
      <thead className="">
        <tr className="">
          <Th><input type="checkbox" name="" id="" /></Th>
          <Th>Ticket</Th>
          <Th>Trạng thái</Th>
          <Th>Độ ưu tiên</Th>
          <Th>SLA</Th>
          <Th>Loại danh mục</Th>
          <Th>Tiêu đề</Th>
          <Th>Assignee</Th>
          <Th>Cảnh báo</Th>
          <Th>Nhóm hỗ trợ</Th>
          <Th>Update</Th>
          <Th>Chat</Th>
        </tr>
      </thead>
      <tbody>
        <tr className="group border-b bg-white hover:bg-neutral-200">
          <Td><input type="checkbox" name="" id="" /></Td>
          <Td><Link href={`/overview/${1234}`} className="text-blue-600">#1234</Link></Td>
          <Td><span>Đang xử lý</span></Td>
          <Td><Priority priority="Urgent" /></Td>
          <Td><Priority priority="Urgent" /></Td>
          <Td><span>Vận hành</span></Td>
          <Td><span>Sửa lỗi máy bán hàng</span></Td>
          <Td><span>[Hyper] Haiyen</span></Td>
          <Td><WarningOk /></Td>
          <Td><span>Nhóm 1</span></Td>
          <Td><span>24/10/2023 09:41 AM</span></Td>
          <Td><ChatCount count={3} /></Td>
        </tr>

        <tr className="group border-b bg-white hover:bg-neutral-200">
          <Td><input type="checkbox" name="" id="" /></Td>
          <Td><Link href={`/overview/${123}`} className="text-blue-600">#123</Link></Td>
          <Td><span>Đang xử lý</span></Td>
          <Td><Priority priority="Low" /></Td>
          <Td><Priority priority="Urgent" /></Td>
          <Td><span>Vận hành</span></Td>
          <Td><span>Sửa lỗi máy bán hàng</span></Td>
          <Td><span>[Hyper] Haiyen</span></Td>
          <Td><WarningReminder /></Td>
          <Td><span>Nhóm 1</span></Td>
          <Td><span>24/10/2023 09:41 AM</span></Td>
          <Td><ChatCount count={3} /></Td>
        </tr>

        {Array.from(Array(13).keys()).map((_, index) => (
          <tr key={index} className="group border-b bg-white hover:bg-neutral-200 last:border-b-0">
            <Td><input type="checkbox" name="" id="" /></Td>
            <Td><Link href={`/overview/${123}`} className="text-blue-600">#123</Link></Td>
            <Td><span>Đang xử lý</span></Td>
            <Td><Priority priority="Urgent" /></Td>
            <Td><Priority priority="Urgent" /></Td>
            <Td><span>Vận hành</span></Td>
            <Td><span>Sửa lỗi máy bán hàng</span></Td>
            <Td><span>[Hyper] Haiyen</span></Td>
            <Td><WarningOk /></Td>
            <Td><span>Nhóm 1</span></Td>
            <Td><span>24/10/2023 09:41 AM</span></Td>
            <Td><ChatCount count={3} /></Td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}