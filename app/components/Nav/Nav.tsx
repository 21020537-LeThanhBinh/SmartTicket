'use client'

import Link from 'next/link'
import { MainTitle } from './MainTitle'
import { Notification } from './Notification'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export const Nav = () => {
  return (
    <nav className="h-20 w-full flex">
      <div className='hidden md:flex px-12 justify-center items-center flex-shrink-0'>
        <Link href="/" className='text-3xl'>
          <span>Smart</span>
          <span className='text-[#00D7B0]'>Ticket</span>
        </Link>
      </div>

      <div className='flex-1 flex items-center justify-between px-8'>
        <MainTitle />
        <SearchBox />
        <Notification />
        <Profile />
      </div>
    </nav>
  )
}
