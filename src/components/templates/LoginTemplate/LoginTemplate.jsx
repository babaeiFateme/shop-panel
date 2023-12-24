'use client'

import Image from 'next/image'
import Link from 'next/link'

import { DLoginForm } from '@components/UI/organisms/LoginOrganisms'

import logo from '@public/images/Authentication-rafiki.png'

const LoginTemplate = () => {
    return (
        <div className='w-full max-w-[700px] grid-cols-1 lg:grid lg:grid-cols-2 lg:max-w-[1200px] p-6 gap-6 bg-white'>
            <Image src={logo} alt='pasmand' className='max-w-[260px] md:max-w-[400px] block mx-auto mb-2' />
            <div>
                <div className='text-center font-bold text-xl md:text-2xl mb-2 mt-3 text-blackText'>
                    fateme's shop panel
                </div>
                <Link
                    href='/register'
                    className={'font-semibold text-base text-center flex justify-center text-blueLink mb-8 '}
                >
                    Register ?
                </Link>

                <DLoginForm />
            </div>
        </div>
    )
}

export default LoginTemplate
