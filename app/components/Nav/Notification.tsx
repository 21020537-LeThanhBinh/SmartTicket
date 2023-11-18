import Image from "next/image"

export const Notification = () => {
  const notificationCount = 12

  return (
    <button className="relative flex justify-center items-center w-10 h-10">
      <Image alt="ic_bell.svg" src='/icons/ic_bell.svg' width={20} height={20}/>
      <div className="absolute top-0 right-0 bg-[#00D7B0] w-5 h-5 rounded-full flex justify-center items-center">
        <span className="text-xs">{notificationCount}</span>
      </div>
    </button>
  )
}