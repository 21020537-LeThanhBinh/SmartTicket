import { MainMenu } from "./MainMenu"
import { WorkSpace } from "./WorkSpace"

export const SideBar = () => {
  return (
    <div id="sidebar" className="transition-all h-full w-0 md:w-[260px] pt-12 md:flex flex-col gap-6 bg-white">
      <MainMenu />
      <WorkSpace />
    </div>
  )
}