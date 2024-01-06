/* eslint-disable @next/next/no-img-element */
'use client'
import { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { ActionIcon, Box, Tooltip } from '@mantine/core'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table'
import { IconEdit, IconTrash } from '@tabler/icons-react'

import { categoriesHttp } from '@core/services/api'

import { EditModal } from './resources'
import DeleteModal from './resources/components/DDeleteModal/DDeleteModal'
const CategoriesTable = () => {
    const [isShow, setIsShow] = useState(false)
    const [isShowEditModal, setIsShowEditModal] = useState(false)
    const [id, setId] = useState(null)
    const [category, setCategories] = useState({})
    const {
        data: categories,
        isSuccess,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['categories'],
        queryFn: () => categoriesHttp(),
        onError: (error) => {
            console.log(error)
        },
    })

    const columns = useMemo(
        () => [
            {
                accessorKey: 'image',
                header: 'Categories',
                Cell: ({ renderedCellValue }) => (
                    <Box>
                        <img
                            alt='product'
                            height={100}
                            width={100}
                            src={renderedCellValue}
                            style={{ borderRadius: '10px', aspectRatio: 'squre' }}
                        />
                    </Box>
                ),
            },
            {
                accessorKey: 'name',
                header: 'Name',
            },
        ],
        []
    )
    const table = useMantineReactTable({
        columns,
        data: Array.isArray(categories) ? categories : [],
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
        setCategories(row.original)
    }
    return (
        <>
            <div>{isSuccess && <MantineReactTable table={table} />}</div>
            <DeleteModal onClose={() => setIsShow(false)} isShow={isShow} id={id}></DeleteModal>
            <EditModal
                category={category}
                onCloseEdit={() => setIsShowEditModal(false)}
                isShow={isShowEditModal}
            ></EditModal>
        </>
    )
}

export default CategoriesTable
