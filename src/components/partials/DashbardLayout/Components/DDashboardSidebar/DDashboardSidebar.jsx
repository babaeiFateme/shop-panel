'use client'
import { profileHttp } from '@core/services/api'
import { BiSolidDashboard, BiSolidGroup, BiSolidTv, BiSolidUser } from 'react-icons/bi'

const DDashboardSidebar = () => {
    const responseHttp = useQuery({
        queryFn: (token) => profileHttp(token),
        onSuccess: (response) => {
            console.log(response)
            if (response.status == 200) {
                return (response.data) 
            }
        },
        onError: (error) => {
            console.log(error)
        },
    })
    return (
        <div className='bg-primary-950 h-full text-white px-4 py-10 min-w-[250px]'>
            <ul>
                <li className='bg-primary-50 bg-opacity-50 p-3 rounded-lg mb-8'>
                    <div>name</div>
                    <div>lastname</div>
                </li>
                <li className='flex gap-3 items-center mb-6 text-white bg-primary-200 bg-opacity-50 p-3 rounded-lg'>
                    <BiSolidDashboard className='text-2xl' />
                    <span className='text-lg leading-3 mt-1'>Dashboard</span>
                </li>
                <li className='flex gap-3 items-center mb-6  p-3 text-primary-100'>
                    <BiSolidUser className='text-2xl' />
                    <span className='text-lg leading-3 mt-1'>Profile</span>
                </li>
                <li className='flex gap-3 items-center mb-6  p-3 text-primary-100'>
                    <BiSolidTv className='text-2xl' />
                    <span className='text-lg leading-3 mt-1'>Agent</span>
                </li>
                <li className='flex gap-3 items-center mb-6  p-3 text-primary-100'>
                    <BiSolidGroup className='text-2xl' />
                    <span className='text-lg leading-3 mt-1'>Users</span>
                </li>
            </ul>
        </div>
    )
}

export default DDashboardSidebar
