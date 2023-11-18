import { IMember } from "@/types/Member"
import { formatDuration } from "@/utils/formatDuration"
import Image from "next/image"
import { DurationView } from "../DurationView"

export const Members = ({ members }: { members: IMember[] }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex text-neutral-500 text-sm">
        <div className="w-1/2 px-2">Member Info</div>

        <div className="w-1/5 px-2">Today</div>
        <div className="w-1/5 px-2 whitespace-nowrap">This Week</div>
      </div>

      {members.map((member) => (
        <div key={member.id} className="relative border rounded-lg p-2 px-4 flex items-center">
          <div className="w-1/2 h-full flex items-center mr-2">
            <button className="rounded-full mr-4 flex-shrink-0">
              <Image alt="avatar" src={member.avatar || "/images/placeholder.svg"} width={36} height={36} />
            </button>
            <div className="text-sm">
              <div>{member.name}</div>
              <div>{member.role}</div>
              <div className="text-xs text-neutral-600">{member.currentTask}</div>
            </div>
          </div>

          <div className="w-1/4 flex">
            <DurationView duration={member.todayDuration} backgroundStyle="bg-light-green" />
          </div>

          <div className="w-1/4 flex">
            <DurationView duration={member.thisWeekDuration} backgroundStyle="bg-light-green" />
          </div>
        </div>
      ))}

      {/* <div className="flex justify-end mt-2">
        <button className="p-2 px-4 bg-light-green rounded-xl text-sm">View All</button>
      </div> */}
    </div>
  )
}