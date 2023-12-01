import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { DSignUpForm } from '@components/UI/organisms/LoginOrganisms'

import logo from '@public/images/logo.png'

const RegisterTemplate = () => {
    return (
        <div className='w-full sm:max-w-[575px] rounded-2xl p-6 bg-white'>
            <Image src={logo} alt='pasmand' className='max-w-[50px] block mx-auto mb-2' />
            <div className='text-center font-bold text-xl md:text-2xl mb-2 mt-3 text-blackText'>
                ثبت نام در سامانه مدیریت پسماند
            </div>
            <Link
                href='/signin'
                className={'font-semibold text-base text-center flex justify-center text-blueLink mb-8 '}
            >
                از قبل ثبت نام کرده اید
            </Link>
            <DSignUpForm />
        </div>
    )
}

export default RegisterTemplate
