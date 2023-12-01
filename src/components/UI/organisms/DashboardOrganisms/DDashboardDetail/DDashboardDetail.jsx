'use client'

import { FaClipboard, FaFileInvoice, FaMoneyBillTransfer, FaReceipt } from 'react-icons/fa6'
import { useQuery } from 'react-query'

import { DLink } from '@components/UI/atoms/server'

import { getHomePageDataHttp } from '@core/services/api'
import { URL_LIST } from '@core/utils'

const DDashboardDetail = () => {
    const { data: dashboardDetails } = useQuery({
        queryKey: ['home'],
        queryFn: getHomePageDataHttp,
    })

    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 w-full gap-4'>
            <DLink
                href={URL_LIST.REQUESTS}
                className='text-[13px] sm:text-sm lg:text-base text-blueLink flex flex-col items-center justify-between rounded-lg p-4 bg-white shadow-[0_0px_10px_-3px_rgba(223,223,223,1)]'
            >
                <FaClipboard className='w-5 h-5 mb-2' />
                <span className='font-semibold'>تعداد کل درخواست ها</span>
                <span className='text-black'>{dashboardDetails?.request_count}</span>
            </DLink>
            <DLink
                href={URL_LIST.INVOICES}
                className='text-[13px] sm:text-sm lg:text-base text-pink flex flex-col items-center justify-between rounded-lg p-4 bg-white shadow-[0_0px_10px_-3px_rgba(223,223,223,1)]'
            >
                <FaFileInvoice className='w-5 h-5 mb-2' />
                <span className='font-semibold'>کل صورت حساب ها</span>
                <span className='text-black'>{dashboardDetails?.invoices_total}</span>
            </DLink>
            <DLink
                href={URL_LIST.PAYMENTS}
                className='text-[13px] sm:text-sm lg:text-base text-secondary flex flex-col items-center justify-between rounded-lg p-4 bg-white shadow-[0_0px_10px_-3px_rgba(223,223,223,1)]'
            >
                <FaReceipt className='w-5 h-5 mb-2' />
                <span className='font-semibold'>کل پرداخت ها</span>
                <span className='text-black'>{dashboardDetails?.payments_total}</span>
            </DLink>
            <DLink
                href={URL_LIST.INVOICES}
                className='text-[13px] sm:text-sm lg:text-base text-orange flex flex-col items-center justify-between rounded-lg p-4 bg-white shadow-[0_0px_10px_-3px_rgba(223,223,223,1)]'
            >
                <FaMoneyBillTransfer className='w-6 h-6 mb-2' />
                <span className='font-semibold'>فاکتور جهت پرداخت</span>
                <span className='text-black'>{dashboardDetails?.Invoice_for_payment}</span>
            </DLink>
        </div>
    )
}

export default DDashboardDetail
