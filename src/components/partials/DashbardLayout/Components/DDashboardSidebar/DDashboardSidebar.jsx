'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiIdCard, BiSolidBasket, BiSolidDashboard, BiSolidGroup } from 'react-icons/bi'
import { useQuery } from 'react-query'

import { profileHttp } from '@core/services/api'

import { SkeletonComponent } from './resources'

const DDashboardSidebar = ({ showSideBar }) => {
    const [user, setUser] = useState({})
    const responseHttp = useQuery({
        queryFn: (token) => profileHttp(token),
        onSuccess: (response) => {
            setUser(response.data)
        },
        onError: (error) => {
            console.log(error)
        },
    })
    return (
        <div className={` bg-primary-950 h-full text-white px-4 py-10 w-[300px] ${showSideBar ? '' : 'hidden'}`}>
            <ul>
                {responseHttp.status != 'loading' ? (
                    <li className='bg-primary-50 bg-opacity-50 p-3 rounded-lg mb-8 flex gap-3 items-center'>
                        <div>
                            <Image alt='user' src={user.avatar} width={60} height={60} className='rounded-full mb-1' />
                        </div>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.role}</div>
                        </div>
                    </li>
                ) : (
                    <SkeletonComponent />
                )}

                <li className='mb-6 text-white bg-primary-200 bg-opacity-50 p-3 rounded-lg'>
                    <Link href='/dashboard' className='flex gap-3 align-items-center'>
                        <BiSolidDashboard className='text-2xl' />
                        <span className='text-lg leading-3 mt-1'>Dashboard</span>
                    </Link>
                </li>
                <li className=' mb-6 p-3 text-primary-100'>
                    <Link className='flex gap-3 items-center' href='/dashboard/profile'>
                        <BiIdCard className='text-2xl' />
                        <span className='text-lg leading-3 mt-1'>Profile</span>
                    </Link>
                </li>
                <li className='mb-6 p-3 text-primary-100'>
                    <Link href='/dashboard/products' className='flex gap-3 items-center'>
                        <BiSolidBasket className='text-2xl' />
                        <span className='text-lg leading-3 mt-1'>Products</span>
                    </Link>
                </li>
                <li className='mb-6  p-3 text-primary-100'>
                    <Link href='/dashboard/users' className='flex gap-3 items-center'>
                        <BiSolidGroup className='text-2xl' />
                        <span className='text-lg leading-3 mt-1'>Users</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default DDashboardSidebar
