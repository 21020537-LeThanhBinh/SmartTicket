import Image from "next/image"

export const Card = ({ label, children }: { label: string, children: React.ReactNode }) => {
  return (
    <div className="flex-1 gap-4 p-5 px-6 bg-white rounded-3xl">
      <div className="flex justify-between mb-4">
        <span className="text-xl">{label}</span>
        <Image alt="two dot" src="/icons/two_dot.svg" width={4} height={4} />
      </div>

      {children}
    </div>
  )
}