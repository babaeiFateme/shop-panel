'use client'
import { useMemo, useState } from 'react'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table'
import { useMutation, useQuery } from 'react-query'
import { deleteHttp, productsHttp } from '@core/services/api'
import Image from 'next/image'
import { ActionIcon } from '@mantine/core'
import { Box } from '@mantine/core'
import Link from 'next/link'
import { IconEdit, IconTrash } from '@tabler/icons-react'
import { toast } from 'react-toastify'
const ProductsTemplate = () => {
    const [productId, setProductId] = useState('')
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
    const { mutate, data } = useMutation({
        queryKey: ['delete-Product'],
        mutationFn: (data) => deleteHttp(data),
        onSuccess: (response) => {
            if (response.status == 200) {
                toast.error('You are delete product.')
            }
            console.log(response, 'delte')
        },
    })
    const x = (data) => {
        console.log(data)
        setProductId(data)
        mutate(data)
    }
    const table = useMantineReactTable({
        columns,
        data: Array.isArray(products) ? products : [],
        // for add column required
        enableRowActions: true,
        renderRowActionMenuItems: ({ row }) => (
            <>
                {/* <Menu.Item onClick={() => console.log(row.original.id)}>edit</Menu.Item> */}
                {/* <Menu.Item onClick={() => x(row.original.id)}>edit</Menu.Item>
                <Menu.Item onClick={() => console.info(row.original.id)}>Delete</Menu.Item> */}
                <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
                    <ActionIcon
                        color='orange'
                        onClick={() => {
                            table.setEditingRow(row)
                        }}
                    >
                        <IconEdit />
                    </ActionIcon>
                    <ActionIcon color='red' onClick={() => x(row.original.id)}>
                        <IconTrash />
                    </ActionIcon>
                </Box>
            </>
        ),
    })

    return (
        <div className='relative'>
            <Link
                href={'/dashboard/products/create'}
                className='py-2 mb-5 px-6 bg-primary-900 text-primary-50 rounded-md font-medium text-lg absolute right-5 top-[-4.5rem]'
            >
                create product
            </Link>
            <div>{isSuccess && <MantineReactTable table={table} />}</div>
        </div>
    )
}

export default ProductsTemplate
