'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"

export const CloseFormBtn = () => {
  const router = useRouter()
  
  return (
    <button onClick={() => router.back()} className="">
      <Image
        alt="Menu close"
        src="/icons/close_small.svg"
        height={16}
        width={16}
      />
    </button>
  )
}