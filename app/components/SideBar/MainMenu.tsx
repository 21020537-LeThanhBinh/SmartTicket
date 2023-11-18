'use client'

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

export const MainMenu = () => {
  const router = useRouter()
  const pathname = usePathname()

  const Button = ({ active, onClick, children }: { active?: boolean, onClick: () => void, children: React.ReactNode }) => {
    return (
      <button onClick={onClick} className={`w-48 flex gap-4 justify-start items-center p-3 px-4 rounded-2xl transition ${active ? 'bg-black text-white' : 'hover:bg-neutral-200'}`}>
        {children}
      </button>
    )
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Button active={pathname == "/"} onClick={() => router.push("/")}>
        <Image alt="dashboard" src={pathname == "/" ? "/icons/dashboard.svg" : "/icons/dashboard_invert.svg"} width={18} height={18} />
        <span>Dashboard</span>
      </Button>

      <Button active={pathname.startsWith("/overview")} onClick={() => router.push("/overview")}>
        <Image alt="overview" src="/icons/analytic.svg" width={18} height={20} className={`${pathname.startsWith("/overview") && 'invert'}`} />
        <span>Overview</span>
      </Button>

      <Button active={pathname.startsWith("/timesheets")} onClick={() => router.push("/timesheets")}>
        <Image alt="timesheets" src="/icons/timesheets.svg" width={18} height={18} className={`${pathname == "/timesheets" && 'invert'}`} />
        <span>Timesheets</span>
      </Button>

      <Button active={pathname == "/todo"} onClick={() => router.push("/todo")}>
        <Image alt="todo" src="/icons/todo.svg" width={18} height={18} className={`${pathname == "/todo" && 'invert'}`} />
        <span>Todo</span>
      </Button>

      <Button active={pathname == "/report"} onClick={() => router.push("/report")}>
        <Image alt="report" src="/icons/report.svg" width={18} height={18} className={`${pathname == "/report" && 'invert'}`} />
        <span>Report</span>
      </Button>

      <Button active={pathname == "/settings"} onClick={() => router.push("/settings")}>
        <Image alt="settings" src="/icons/settings.svg" width={18} height={18} className={`${pathname == "/settings" && 'invert'}`} />
        <span>Settings</span>
      </Button>
    </div>
  )
}