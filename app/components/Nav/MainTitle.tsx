'use client'

import Image from "next/image"
import { usePathname } from "next/navigation"

export const MainTitle = () => {
  const pathname = usePathname()
  const label = pathname === '/' ? 'Dashboard'
    : pathname.startsWith('/new_ticket') ? 'Tạo Ticket'
      : pathname.startsWith('/overview') ? 'Overview'
        : pathname === '/timesheets' ? 'Timesheets'
          : pathname === '/todo' ? 'Todo'
            : pathname === '/report' ? 'Report'
              : pathname === '/settings' ? 'Settings'
                : ''

  const onToggleSideBar = () => {
    console.log(document?.getElementById("sidebar")?.offsetWidth)
    const curWidth = document?.getElementById("sidebar")?.offsetWidth
    if (!curWidth || curWidth < 200) {
      document.getElementById("sidebar")?.style?.setProperty('width', '260px')
    } else {
      document.getElementById("sidebar")?.style?.setProperty('width', '0px')
    }
  }

  return (
    <button onClick={onToggleSideBar} className="flex justify-center items-center gap-8 xl:mr-48 hover:cursor-pointer">
      <Image alt="grip_solid_horizontal_1.svg" src='/icons/grip_solid_horizontal_1.svg' width={20} height={20} />
      <span className="text-xl whitespace-nowrap w-28 text-left">{label}</span>
    </button>
  )
}