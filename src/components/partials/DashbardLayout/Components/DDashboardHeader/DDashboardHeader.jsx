/* eslint-disable simple-import-sort/imports */
'use client'
import { IoMdNotifications } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'

import { dashboardLogo } from '@public/images'
import { Fade as Hamburger } from 'hamburger-react'
import Image from 'next/image'

const DDashboardHeader = ({ toggleSide }) => {
    return (
        <div className='bg-primary-50 flex justify-between items-center min-h-[60px] p-6'>
            <div className='flex gap-5 items-center'>
                <div className='flex items-center gap-2'>
                    <Image src={dashboardLogo} width={50} height={50} alt={'logo'} />
                    <div className='flex flex-col gap-1 font-semibold text-sm'>
                        <span className='text-gray-500 text-lg'>lara shop</span>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <CiSearch className='text-primary-950 text-2xl' />
                <IoMdNotifications className='text-primary-950 text-2xl' />
                <Hamburger size={20} onToggle={toggleSide} />
            </div>
        </div>
    )
}

export default DDashboardHeader
