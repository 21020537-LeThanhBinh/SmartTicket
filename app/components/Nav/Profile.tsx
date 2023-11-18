import { userTest } from "@/testData/testData"
import Avatar from "../Avatar"

export const Profile = () => {
  return (
    <div className="flex justify-center items-center gap-2 hover:cursor-pointer flex-shrink-0">
      <div className="hidden sm:block">
        <div>{userTest.name}</div>
        <div className="text-sm text-neutral-400">{userTest.role}</div>
      </div>
      <Avatar src={userTest.avatar} size={50}/>
    </div>
  )
}