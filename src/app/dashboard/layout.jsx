'use client'

import { DashboardLayout } from '@components/partials'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getCookie } from 'cookies-next'
const Layout = ({ children }) => {
    const { push } = useRouter()

    useEffect(() => {
        console.log(555555)
        console.log(getCookie('token'), 'token')
        if (getCookie('token')) {
            console.log('wwww')
            push('/dashboard')
        } else {
            console.log(65)
            push('/login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    )
}

export default Layout
