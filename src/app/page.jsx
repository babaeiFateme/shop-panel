'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getCookie } from 'cookies-next'
const RootPage = () => {
    const { push } = useRouter()

    useEffect(() => {
        if (getCookie('token')) {
            push('/dashboard')
        } else {
            push('/login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <></>
}

export default RootPage
