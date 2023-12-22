'use client'
import React, { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { ActionIcon, Box, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table'
import { IconEdit, IconTrash } from '@tabler/icons-react'

import { usersHttp } from '@core/services/api'

import { DeleteUserModal } from './resources'
import EditUserModal from './resources/components/EditUserModal/EditUserModal'

const DUserTable = () => {
    const [opened, { open, close }] = useDisclosure(false)
    const [user, setUser] = useState({})
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
                    <ActionIcon
                        color='pink'
                        onClick={() => {
                            open()
                            setUser(row.original)
                        }}
                    >
                        <IconTrash />
                    </ActionIcon>
                </Tooltip>
            </Box>
        ),
    })
    return (
        <>
            {isSuccess && <MantineReactTable table={table} />}
            <DeleteUserModal close={close} opened={opened} user={user} />
            <EditUserModal close={close} opened={opened} user={user} />
        </>
    )
}

export default DUserTable
