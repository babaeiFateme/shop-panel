'use client'
import { useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { deleteHttp, productsHttp } from '@core/services/api'

import { MantineReactTable, useMantineReactTable } from 'mantine-react-table'
import { ActionIcon, Button, Flex, Stack, Text, Title, Tooltip, Box } from '@mantine/core'

import Link from 'next/link'
import { IconEdit, IconTrash } from '@tabler/icons-react'
import { toast } from 'react-toastify'
import { DModal } from '@components/UI/atoms/client'
const ProductsTemplate = () => {
    const [isShow, setIsShow] = useState(false)
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
                size: 80,
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
        mantineTableHeadCellProps: {
            align: 'center', //change head cell props
        },
        mantineTableBodyCellProps: {
            align: 'center',
        },
        // for add column required
        enableRowActions: true,
        // change position of action column
        positionActionsColumn: 'last',
        //disabled density
        enableDensityToggle: false,
        //disabled full screen mode
        enableFullScreenToggle: false,
        //enabled for index table
        enableRowNumbers: true,

        renderRowActions: ({ row }) => (
            <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
                <Tooltip label='Edit'>
                    <ActionIcon color='blue' onClick={() => setIsOpen(!isOpen)}>
                        <IconEdit />
                    </ActionIcon>
                </Tooltip>

                {/* <Tooltip label='delete'>
                    <ActionIcon color='red' onClick={() => mutate(row.original.id)}>
                        <IconTrash />
                    </ActionIcon>
                </Tooltip> */}

                <Tooltip label='delete'>
                    <ActionIcon color='red' onClick={() => onClose(row)}>
                        <IconTrash />
                    </ActionIcon>
                </Tooltip>
            </Box>
        ),
    })
    const onClose = (row) => {
        console.log(row.original.id)
        setIsShow(!isShow)
    }
    // modals.openConfirmModal({
    //     title: 'Are you sure you want to delete this product?',
    //     children: (
    //         <Text>
    //             Are you sure you want to delete {row.original.title} ? This action cannot
    //             be undone.
    //         </Text>
    //     ),
    //     labels: { confirm: 'Delete', cancel: 'Cancel' },
    //     confirmProps: { color: 'red' },
    //     onConfirm: () => mutate(row.original.id),
    // }
    // )
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
