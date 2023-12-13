'use client'
import { useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { deleteHttp, productsHttp } from '@core/services/api'

import { MantineReactTable, useMantineReactTable } from 'mantine-react-table'
import { ActionIcon, Button, Flex, Stack, Text, Title, Tooltip, Box } from '@mantine/core'
import Link from 'next/link'
import { IconEdit, IconTrash } from '@tabler/icons-react'
import { toast } from 'react-toastify'
const ProductsTemplate = () => {
    const {
        data: products,
        isSuccess,
        isLoading,
        isError,
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
                size: 70,
            },
            {
                accessorKey: 'images',
                header: 'Product',
                Cell: ({ renderedCellValue }) => (
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
                size: 40,
                Cell: ({ renderedCellValue }) => `${renderedCellValue}$ `,
            },
            {
                accessorKey: 'description',
                header: 'Description',

                size: 300,
            },
            {
                accessorKey: 'category.name',
                header: 'category name',
            },
        ],
        []
    )
    const { mutate, data } = useMutation({
        mutationFn: (data) => deleteHttp(data),
        onSuccess: (response) => {
            if (response.status == 200) {
                toast.error('You are delete product.')
            }
            console.log(response, 'delte')
        },
    })
    const x = (data) => {
        mutate(data)
    }
    const table = useMantineReactTable({
        columns,
        data: Array.isArray(products) ? products : [],
        // for add column required
        enableRowActions: true,
        // change position of action column
        positionActionsColumn: 'last',
        //disabled density
        enableDensityToggle: false,
        //disabled full screen mode
        enableFullScreenToggle: false,

        renderRowActions: ({ row }) => (
            <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
                <Tooltip label='Edit'>
                    <ActionIcon
                        color='blue'
                        onClick={() => {
                            // table.setEditingRow(row)
                        }}
                    >
                        <IconEdit />
                    </ActionIcon>
                </Tooltip>

                <Tooltip label='delete'>
                    <ActionIcon color='red' onClick={() => mutate(row.original.id)}>
                        <IconTrash />
                    </ActionIcon>
                </Tooltip>
            </Box>
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
