import Image from "next/image"

export const WorkSpace = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border rounded-xl w-56 pt-1 pb-5 px-4">
        <span className="text-sm text-neutral-400">Workspace</span>
        <div className="flex justify-between">
          <span className="ml-4">Matrix Domain</span>
          <button className="bg-light-yellow rounded-lg w-6 h-6 flex justify-center items-center">
            <Image alt="arrow down" src="/icons/angle_down.svg" width={18} height={18} />
          </button>
        </div>
      </div>
    </div>
  )
}