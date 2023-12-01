'use client'

import { FaFileContract } from 'react-icons/fa6'
import { useQuery } from 'react-query'

import { DError, DSpinner } from '@components/UI/atoms/client'
import { DLink } from '@components/UI/atoms/server'

import { getContractsHttp } from '@core/services/api'

const DDashboardContract = () => {
    const {
        data: contracts,
        isSuccess,
        isError,
        isLoading,
    } = useQuery({ queryKey: ['contracts'], queryFn: getContractsHttp })

    if (isError) {
        return <DError />
    }

    if (isLoading) {
        return <DSpinner />
    }

    if (isSuccess) {
        return (
            <div className='w-full bg-white p-6 border-r-[6px] border-secondary group space-y-2'>
                <div
                    className={`flex items-center justify-start gap-x-1 text-orange ${
                        contracts.data.length !== 0 && contracts.data[0].active && 'text-secondary'
                    }`}
                >
                    <FaFileContract className='w-6 h-6 group-hover:rotate-12 group-hover:-translate-y-1 group-hover:scale-105 duration-300' />
                    <h2 className='text-lg md:text-xl lg:text-2xl font-bold'>قرارداد من</h2>
                </div>
                <p className='font-medium text-[13px] sm:text-sm lg:text-base flex flex-wrap'>
                    {contracts.data.length === 0 ? (
                        <>قرارداد فعالی برای شما ثبت نشده است</>
                    ) : contracts.data[0].status === 0 ? (
                        <>قرارداد شما در وضعیت پیش‌نویس قرار دارد و در انتظار تائید پیمانکار است</>
                    ) : contracts.data[0].status === 1 ? (
                        <>
                            قرارداد شما توسط پیمانکار تائید شده و در انتظار تائید شما است.
                            <DLink
                                className='text-blueLink font-semibold'
                                href={`/dashboard/contracts/${contracts.data[0].id}`}
                            >
                                می‌توانید از لینک برای تائید قرارداد اقدام نمائید
                            </DLink>
                        </>
                    ) : contracts.data[0].status === 2 ? (
                        <>
                            قرارداد شما در انتظار پرداخت صورتحساب است.
                            <DLink
                                className='text-blueLink font-semibold'
                                href={`/dashboard/invoices/${contracts.data[0].id}`}
                            >
                                می‌توانید از لینک برای مشاهده صورتحساب‌های قرارداد خود اقدام نمائید
                            </DLink>
                        </>
                    ) : contracts.data[0].status === 3 ? (
                        <>
                            صورتحساب قرارداد شما پرداخت شده و در انتظار بررسی است.
                            <DLink
                                className='text-blueLink font-semibold'
                                href={`/dashboard/contracts/${contracts.data[0].id}`}
                            >
                                می‌توانید از لینک برای مشاهده جزئیات قرارداد خود اقدام نمائید
                            </DLink>
                        </>
                    ) : (
                        <>
                            قرارداد شما منعقد شده است
                            <DLink
                                className='text-blueLink font-semibold'
                                href={`/dashboard/contracts/${contracts.data[0].id}`}
                            >
                                می‌توانید از لینک برای مشاهده جزئیات قرارداد خود اقدام نمائید
                            </DLink>
                        </>
                    )}
                </p>
            </div>
        )
    }
}

export default DDashboardContract
