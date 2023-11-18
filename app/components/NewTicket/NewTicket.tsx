import Image from "next/image";
import { TicketForm } from "./TicketForm";
import { ITicket } from "@/types/Ticket";
import { CloseFormBtn } from "./CloseFormBtn";

export const NewTicket = ({ ticket }: { ticket?: ITicket }) => {
  const mechantName = "Minhanhgreen";
  const username = "Minhanhgreen";

  return (
    <div className="p-4 md:px-12 py-6">
      <div className="relative pb-8 rounded-lg shadow-[0px_30px_60px_#1f375526]">
        <div className="border-b flex justify-between p-4">
          <div className="pl-8 text-2xl font-medium tracking-[0.30px] leading-[23px]">
            {ticket ? (
              `TICKET #${ticket.id}`
            ) : (
              "NEW TICKET"
            )}
          </div>

          <CloseFormBtn />
        </div>

        <div className="mx-4 md:mx-20 my-4 space-y-4">
          <div className="flex items-center">
            <p className="w-36 font-medium text-lg tracking-[0.30px] leading-[23px]">
              <span className="">Tên mechant </span>
              <span className="text-absolute-red">*</span>
            </p>
            <p className="rounded-lg bg-neutral-200 py-2 px-3 text-sm">
              {mechantName}
            </p>
          </div>
          <div className="flex items-center">
            <p className="w-36 font-medium text-lg tracking-[0.30px] leading-[23px]">
              <span className="">Username </span>
              <span className="text-absolute-red">*</span>
            </p>
            <p className="rounded-lg bg-neutral-200 py-2 px-3 text-sm">
              {username}
            </p>
          </div>
        </div>

        <TicketForm data={ticket}/>
      </div>
    </div>
  );
};
