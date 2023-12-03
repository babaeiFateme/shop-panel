'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useQuery } from 'react-query'

import { profileHttp } from '@core/services/api'

const ProfileTemplate = () => {
    const [profileInfo, setProfileInfo] = useState({})

    const responseHttp = useQuery({
        queryFn: (token) => profileHttp(token),
        onSuccess: (response) => {
            console.log(response)
            if (response.status == 200) {
                console.log(response.data)
                setProfileInfo(response?.data)
                console.log(profileInfo)
            }
        },
        onError: (error) => {
            console.log(error)
        },
    })
    return (
        <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {profileInfo && (
                    <>
                        <div className='bg-red-500'>
                            <Image src={profileInfo.avatar} alt='profile' width={150} height={150} className='w-full' />
                        </div>
                        <div className='bg-red-500 p-3'>
                            <ul>
                                <li>{profileInfo.name}</li>
                                <li>{profileInfo.role}</li>
                                <li>{profileInfo.email}</li>
                                <li>{profileInfo.password}</li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ProfileTemplate
