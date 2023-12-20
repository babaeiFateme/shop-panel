'use client'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { ActionIcon, Box, Tooltip } from '@mantine/core'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table'
import { IconEdit, IconTrash } from '@tabler/icons-react'

import { usersHttp } from '@core/services/api'

const DUserTable = () => {
    const { data: users, isSuccess } = useQuery({
        queryKey: ['users'],
        queryFn: () => usersHttp(),
        onError: (error) => {
            console.log(error)
        },
    })

    const columns = useMemo(
        () => [
            {
                accessorKey: 'avatar',
                header: 'Image',
                Cell: ({ renderedCellValue }) => (
                    <img
                        alt='user'
                        height={60}
                        width={60}
                        src={renderedCellValue}
                        className='w-[60px] h-[60px] aspect-square rounded-full block'
                    />
                ),
                size: 50,
            },
            {
                accessorKey: 'name',
                header: 'Name',
            },
            {
                accessorKey: 'role',
                header: 'Role',
            },
            {
                accessorKey: 'password',
                header: 'Password',
            },
            {
                accessorKey: 'email',
                header: 'Email',
            },
        ],
        []
    )
    const table = useMantineReactTable({
        columns,
        data: Array.isArray(users) ? users : [],
        mantineTableHeadCellProps: {
            align: 'center',
        },
        mantineTableBodyCellProps: {
            align: 'center',
        },
        enableRowActions: true,
        positionActionsColumn: 'last',
        enableRowNumbers: true,
        enableFullScreenToggle: false,
        enableDensityToggle: false,
        renderRowActions: ({ row }) => (
            <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
                <Tooltip label='Edit'>
                    <ActionIcon color='blue'>
                        <IconEdit />
                    </ActionIcon>
                </Tooltip>
                <Tooltip label='Delete'>
                    <ActionIcon color='pink'>
                        <IconTrash />
                    </ActionIcon>
                </Tooltip>
            </Box>
        ),
    })
    return <div>{isSuccess && <MantineReactTable table={table} />}</div>
}

export default DUserTable
