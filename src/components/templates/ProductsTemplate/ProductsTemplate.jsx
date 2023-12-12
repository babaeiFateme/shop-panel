'use client'
import { useMemo } from 'react'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table'
import { useQuery } from 'react-query'
import { productsHttp } from '@core/services/api'
import Image from 'next/image'
import { Box } from '@mantine/core'
import Link from 'next/link'
const ProductsTemplate = () => {
    const {
        data: products,
        isSuccess,
        isLoading,
    } = useQuery({
        queryKey: ['products'],
        queryFn: () => productsHttp(),
        onError: (error) => {
            console.log(error)
        },
    })

    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'Id',
            },
            {
                accessorKey: 'images',
                header: 'Product',
                Cell: ({ renderedCellValue, row }) => (
                    <Box>
                        <img
                            alt='product'
                            height={100}
                            width={100}
                            src={renderedCellValue[0]}
                            style={{ borderRadius: '10px' }}
                        />
                    </Box>
                ),
            },
            {
                accessorKey: 'title',
                header: 'Title',
            },
            {
                accessorKey: 'price',
                header: 'Price',
            },
            {
                accessorKey: 'description',
                header: 'Description',
            },
            {
                accessorKey: 'category.name',
                header: 'category name',
            },
        ],
        []
    )

    const table = useMantineReactTable({
        columns,
        data: Array.isArray(products) ? products : [],
    })

    return (
        <>
            <Link href={'/dashboard/products/create'} className='py-4 px-2 bg-primary-600 text-primary-100 font-medium text-lg'>
                create product
            </Link>
            <div>{isSuccess && <MantineReactTable table={table} />}</div>
        </>
    )
}

export default ProductsTemplate
