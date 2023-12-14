import React from 'react'
import Link from 'next/link'

import { DUserTable } from '@components/UI/organisms/UsersOrganisms'
const UsersTemplate = () => {
    return (
        <div className='relative'>
            <Link
                href={'/dashboard/products/create'}
                className='py-2 mb-5 px-6 bg-primary-900 text-primary-50 rounded-md font-medium text-lg absolute right-5 top-[-4.5rem]'
            >
                create users
            </Link>
            <DUserTable />
        </div>
    )
}

export default UsersTemplate
