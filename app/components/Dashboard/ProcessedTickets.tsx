import { ITicket } from "@/types/Ticket"
import { formatDuration } from "@/utils/formatDuration"
import Image from "next/image"
import { DurationView } from "../DurationView"

export const ProcessedTickets = ({ tickets }: { tickets: ITicket[] }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex text-neutral-500 text-sm">
        <div className="w-1/2 px-2">Todo</div>

        <div className="w-1/2 px-2">Time</div>
      </div>

      {tickets.map((ticket) => (
        <div key={ticket.id} className="relative border rounded-lg p-3 px-4 flex items-center">
          <div className="w-1/2 h-full flex items-center mr-2">
            <button className="bg-light-blue rounded-full p-3 xl:mr-8 mr-4 flex-shrink-0">
              <Image alt="folder" src="/icons/ic_folder_blue.svg" width={16} height={16} />
            </button>
            <div className="text-sm">{ticket.title}</div>
          </div>

          <div className="w-1/2 flex items-center">
            <DurationView duration={ticket.duration} backgroundStyle="bg-light-blue" />
          </div>
        </div>
      ))}

      <div className="flex justify-end mt-2">
        <button className="p-2 px-4 bg-light-green rounded-xl text-sm">View Reports</button>
      </div>
    </div>
  )
}