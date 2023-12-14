'use client'
import React, { useMemo } from 'react'
import { useQuery } from 'react-query'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table'

import { usersHttp } from '@core/services/api'
import Image from 'next/image'
import { Fullscreen } from 'highcharts'

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
                size: 70,
            },
            {
                accessorKey: 'name',
                header: 'Name',
                size: 100,
            },
            {
                accessorKey: 'role',
                header: 'Role',
                size: 100,
            },
            {
                accessorKey: 'password',
                header: 'Password',
                size: 100,
            },
            {
                accessorKey: 'email',
                header: 'Email',
                size: 300,
            },
        ],
        []
    )
    const table = useMantineReactTable({
        columns,
        data: Array.isArray(users) ? users : [],
    })
    return <div>{isSuccess && <MantineReactTable table={table} />}</div>
}

export default DUserTable
