/* eslint-disable @next/next/no-img-element */
'use client'
import { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { ActionIcon, Box, Tooltip } from '@mantine/core'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table'
import { IconEdit, IconTrash } from '@tabler/icons-react'

import { productsHttp } from '@core/services/api'

import { DEditModal } from './resources'
import DeleteModal from './resources/components/DDeleteModal/DDeleteModal'
const DProductTable = () => {
    const [isShow, setIsShow] = useState(false)
    const [isShowEditModal, setIsShowEditModal] = useState(false)
    const [id, setId] = useState(null)
    const [product, setProduct] = useState({})
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
                    <ActionIcon color='blue' onClick={() => onCloseEdit(row)}>
                        <IconEdit />
                    </ActionIcon>
                </Tooltip>

                <Tooltip label='delete'>
                    <ActionIcon color='red' onClick={() => onClose(row)}>
                        <IconTrash />
                    </ActionIcon>
                </Tooltip>
            </Box>
        ),
    })
    const onClose = (row) => {
        setId(row.original.id)
        setIsShow(!isShow)
    }
    const onCloseEdit = (row) => {
        setIsShowEditModal(!isShowEditModal)
        setProduct(row.original)
    }
    return (
        <>
            <div>{isSuccess && <MantineReactTable table={table} />}</div>
            <DeleteModal onClose={() => setIsShow(false)} isShow={isShow} id={id}></DeleteModal>
            <DEditModal
                product={product}
                onCloseEdit={() => setIsShowEditModal(false)}
                isShow={isShowEditModal}
            ></DEditModal>
        </>
    )
}

export default DProductTable
