'use client'

// eslint-disable-next-line simple-import-sort/imports
import { DDashboardSidebar, DDashboardHeader } from './Components'
const DashboardLayout = ({ children }) => {
    return (
        <div className='flex  flex-col min-h-screen h-full'>
            <DDashboardHeader className='h-[150px]' />
            <div className='flex grow h-[calc(100%-150px)] gap-x-4'>
                <DDashboardSidebar />
                <main className='h-auto py-10 px-4 w-full'>{children}</main>
            </div>
        </div>
    )
}

export default DashboardLayout
