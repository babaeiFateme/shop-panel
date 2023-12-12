'use client'
import { useMemo } from 'react'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table'
import { useQuery } from 'react-query'
import { productsHttp } from '@core/services/api'
import Image from 'next/image'
import { Menu } from '@mantine/core';
import { Box } from '@mantine/core';
import Link from 'next/link';
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
                enableEditing: false,
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
        // for add column required
        enableRowActions: true,
        renderRowActionMenuItems: ({ row }) => (
            <>
              <Menu.Item onClick={() => console.info('edit')}>
                edit
              </Menu.Item>
              <Menu.Item onClick={() => console.info('delete')}>Delete</Menu.Item>
            </>
          ),
    })

    return (
        <div className='relative'>
            <Link href={'/dashboard/products/create'} className='py-2 mb-5 px-6 bg-primary-900 text-primary-50 rounded-md font-medium text-lg absolute right-5 top-[-4.5rem]'>
                create product
            </Link>
            <div>{isSuccess && <MantineReactTable table={table} />}</div>
        </div>
    )
}

export default ProductsTemplate








