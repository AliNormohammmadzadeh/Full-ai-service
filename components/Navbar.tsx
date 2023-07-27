import React from 'react'
import { UserButton } from '@clerk/nextjs';
import { MobileSidebar } from './mobile-sidebar';
import DarkButton from './dark-button'

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
        <MobileSidebar />
        <div className='flex w-full justify-end space-x-4 mr-2'>
          <div className='mt-1'>
            <UserButton afterSignOutUrl='/'/>
          </div>
            <DarkButton/>
        </div>
    </div>
  )
}

export default Navbar