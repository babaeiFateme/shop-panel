'use client'

import Link from 'next/link'

import { DProductTable } from '@components/UI/organisms/ProductOrganisms'

const ProductsTemplate = () => {
    return (
        <div className='relative'>
            <Link
                href={'/dashboard/products/create'}
                className='py-2 mb-5 px-6 bg-primary-900 text-primary-50 rounded-md font-medium text-lg absolute right-5 top-[-4.5rem]'
            >
                create product
            </Link>
            <DProductTable />
        </div>
    )
}

export default ProductsTemplate
