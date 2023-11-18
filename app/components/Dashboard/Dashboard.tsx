import { membersTest, ticketsTest } from "@/testData/testData"
import { getTimeLabel } from "@/utils/getTimeLabel"
import Image from "next/image"
import { Card } from "./Card"
import { Members } from "./Members"
import { ProcessedTickets } from "./ProcessedTickets"
import { ProcessingTickets } from "./ProcessingTickets"
import { RecentTickets } from "./RecentTickets"

export const Dashboard = () => {
  const notProcessedTickets = ticketsTest.filter(ticket => ticket.status === 'not_processed')
  const processingTickets = ticketsTest.filter(ticket => ticket.status === 'processing')
  const processedTickets = ticketsTest.filter(ticket => ticket.status === 'processed')

  return (
    <div className="w-full sm:rounded-l-3xl bg-[#F9F9F9] px-4 sm:px-8 flex flex-col gap-4 py-12">
      <div className="pb-8">
        <div className="text-3xl mb-3">Today</div>
        <div className="text-lg">{getTimeLabel()}</div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <Card label="Ticket chưa xử lý">
          <div className="py-8 flex justify-between items-center">
            <span className="text-3xl">{notProcessedTickets.length}</span>
            <div className="bg-pink p-4 rounded-2xl">
              <Image alt="not processed" src="/icons/not_processed.svg" width={28} height={28} />
            </div>
          </div>
        </Card>
        <Card label="Ticket đang xử lý">
          <div className="py-8 flex justify-between items-center">
            <span className="text-3xl">{processingTickets.length}</span>
            <div className="bg-light-yellow p-4 rounded-2xl">
              <Image alt="processing" src="/icons/processing.svg" width={28} height={28} />
            </div>
          </div>
        </Card>
        <Card label="Ticket đã xử lý">
          <div className="py-8 flex justify-between items-center">
            <span className="text-3xl">{processedTickets.length}</span>
            <div className="bg-light-blue p-4 rounded-2xl">
              <Image alt="processed" src="/icons/processed.svg" width={28} height={28} />
            </div>
          </div>
        </Card>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <Card label="Ticket gần đây">
          <RecentTickets tickets={ticketsTest.slice(0, 2)} />
        </Card>
        <Card label="Ticket đang xử lý">
          <ProcessingTickets tickets={processingTickets} /> 
        </Card>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <Card label="Members">
          <Members members={membersTest} />
        </Card>
        <Card label="Ticket đã xử lý">
          <ProcessedTickets tickets={processedTickets} />
        </Card>
      </div>
    </div>
  )
}