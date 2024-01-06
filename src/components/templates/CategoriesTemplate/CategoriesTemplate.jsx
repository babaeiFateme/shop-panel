'use client'

import Link from 'next/link'

import { DProductTable } from '@components/UI/organisms/ProductOrganisms'
import { CategoriesTable } from '@components/UI/organisms/CategoriesOrganisms'

const CategoriesTemplate = () => {
    return (
        <div className='relative'>
            <Link
                href={'/dashboard/categories/create'}
                className='py-2 mb-5 px-6 bg-primary-900 text-primary-50 rounded-md font-medium text-lg absolute right-5 top-[-4.5rem]'
            >
                create product
            </Link>
            <CategoriesTable />
        </div>
    )
}

export default CategoriesTemplate
