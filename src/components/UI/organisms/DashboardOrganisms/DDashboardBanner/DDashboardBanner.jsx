'use client'

import { useState } from 'react'

import { DButton } from '@components/UI/atoms/client'

import { SvgRecycle } from '@public/images'

import { DRecycleRequestModal } from './resources'

const DDashboardBanner = () => {
    const [isShowRecycleRequestModal, setIsShowRecycleRequestModal] = useState(false)

    return (
        <>
            <div className='banner-zig-zag-background bg-secondary flex flex-col-reverse sm:flex-row items-center justify-between p-4 rounded-lg'>
                <div className='flex flex-col items-center sm:items-start justify-center'>
                    <h1 className='mb-2 text-[26px] sm:text-3xl lg:text-4xl font-bold text-white'>
                        یک کلیک تا شهری سبز !
                    </h1>
                    <p className='mb-4 text-white text-sm lg:text-base text-center font-medium'>
                        با ثبت درخواست جمع آوری پسماند خود، به راحتی در راستای پاکیزگی خانه و شهر خود تلاش کنید.
                    </p>
                    <DButton
                        onClick={() => setIsShowRecycleRequestModal(true)}
                        className='bg-white text-black py-3.5 h-auto'
                    >
                        درخواست جمع آوری پسماند
                    </DButton>
                </div>
                <div className='w-[150px] sm:w-[225px] h-[150px] sm:h-[225px] shrink-0'>
                    <SvgRecycle />
                </div>
            </div>
            <DRecycleRequestModal
                isShow={isShowRecycleRequestModal}
                onClose={() => setIsShowRecycleRequestModal(false)}
            />
        </>
    )
}

export default DDashboardBanner
