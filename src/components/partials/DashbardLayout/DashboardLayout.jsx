'use client'

import { useEffect,useState } from 'react'

import { DDashboardBreadcrumbs,DDashboardHeader, DDashboardSidebar } from './Components'
const DashboardLayout = ({ children }) => {
    const [showSideBar, setShowSideBar] = useState(true)
    useEffect(() => {
        const updateScreenWidth = () => {
            window.innerWidth > 992 ? setShowSideBar(true) : setShowSideBar(false)
        }
        updateScreenWidth()
        window.addEventListener('resize', updateScreenWidth)

        return () => {
            removeEventListener('resize', updateScreenWidth)
        }
    }, [])

    const toggleSide = () => setShowSideBar((current) => !current)

    return (
        <div className='flex  flex-col min-h-screen h-full'>
            <DDashboardHeader className='h-[150px]' toggleSide={toggleSide} />

            <div className='flex grow h-[calc(100%-150px)] gap-x-4'>
                <DDashboardSidebar showSideBar={showSideBar} />
                <main className='h-auto py-10 px-4 w-full overflow-y-auto'>
                    <DDashboardBreadcrumbs/>
                    <div>{children}</div>
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout
