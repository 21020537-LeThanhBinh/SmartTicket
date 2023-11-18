import { SideBar } from '../components/SideBar/SideBar'

export default function SidebarLayout(props: React.PropsWithChildren) {
  return (
    <div className='h-full flex'>
      <SideBar />
      <main className='transition-all flex-1'>{props.children}</main>
    </div>
  )
}
