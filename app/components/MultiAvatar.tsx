import { IMember } from "@/types/Member"
import Avatar from "./Avatar"

export const MultiAvatar = ({ users, size = 50 }: { users: IMember[], size?: number }) => {
  return (
    <>
      {users?.slice(0, 2).map((user) => (
        <div key={user.id} title={user.name || "User"} className="list-avatar rounded-full bg-white p-[1px]">
          <Avatar src={user.avatar || ''} size={size} />
        </div>
      ))}

      {users?.length > 2 ? (
        <div className="list-avatar rounded-full bg-white p-[1px]">
          <div className="rounded-full bg-neutral-200 text-xs text-neutral-500 font-semibold flex justify-center items-center" style={{ width: size, height: size }}>
            <span>+{users.length - 2}</span>
          </div>
        </div>
      ) : null}
    </>
  )
}