import { ITicket } from "@/types/Ticket"
import { formatDuration } from "@/utils/formatDuration"
import Image from "next/image"
import { DurationView } from "../DurationView"

export const ProcessingTickets = ({ tickets }: { tickets: ITicket[] }) => {
  return (
    <div className="flex flex-col gap-2">
      {tickets.map((ticket) => (
        <div key={ticket.id} className="relative border rounded-lg p-3 px-4 flex items-center">
          <div className="w-1/2 flex items-center">
            <button className="bg-light-yellow rounded-full p-3 xl:mr-8 mr-4 flex-shrink-0">
              <Image alt="folder" src="/icons/ic_folder.svg" width={16} height={16} />
            </button>
            <div className="text-sm">{ticket.title.slice(0, 7) + (ticket.title.length > 7 && '...')}</div>
          </div>

          <div className="w-1/2 flex items-center">
            <DurationView duration={ticket.duration} />
            <progress max={ticket.estimateComplete} value={ticket.duration}></progress>
          </div>
        </div>
      ))}

      <div className="flex justify-end mt-2">
        <button className="p-2 px-4 bg-light-green rounded-xl text-sm">View All</button>
      </div>
    </div>
  )
}