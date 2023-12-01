'use client'

import { useRouter } from 'next/navigation'
import { FaArrowRightFromBracket } from 'react-icons/fa6'
import { deleteCookie } from 'cookies-next'

import { DButton } from '@components/UI/atoms/client'
import { DChangePhoneNumber, DProfileDetail } from '@components/UI/organisms/ProfileOrganisms'

import { useUserStore } from '@core/services/state-management'

const ProfileTemplate = () => {
    const { push } = useRouter()
    const { removeUser } = useUserStore()

    const onLogOutHandler = () => {
        //remove token
        deleteCookie('token')
        deleteCookie('hash')
        deleteCookie('cell_phone')

        //remove user's data from zustand
        removeUser()

        //redirect user to signin page
        push('/signin')
    }

    return (
        <div className='space-y-5'>
            <DProfileDetail />
            <DChangePhoneNumber />
            <DButton
                onClick={onLogOutHandler}
                leftIcon={<FaArrowRightFromBracket />}
                variant='outline'
                color='red'
                className='w-full py-4 h-auto lg:hidden'
            >
                خروج از حساب
            </DButton>
        </div>
    )
}

export default ProfileTemplate
