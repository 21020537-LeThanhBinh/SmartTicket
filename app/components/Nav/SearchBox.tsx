import Image from "next/image"

export const SearchBox = () => {
  return (
    <div className="relative flex justify-center items-center gap-2">
      <input
        className="hidden md:block bg-[#EFEFEF78] rounded-xl p-2 px-4 lg:w-96 placeholder:text-sm"
        placeholder="Search ticket..."
      />
      <button className="absolute right-4">
        <Image alt="search_btn.svg" src='/icons/search_btn.svg' width={16} height={16} />
      </button>
    </div>
  )
}