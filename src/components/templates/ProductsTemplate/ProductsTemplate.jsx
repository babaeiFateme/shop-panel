'use client'
import { useMemo } from 'react'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table'
import { useQuery } from 'react-query'
import { productsHttp } from '@core/services/api'
import Image from 'next/image'
import { Box, Button, Flex, Menu, Text, Title } from '@mantine/core'
const ProductsTemplate = () => {
    const {
        data: products,
        isSuccess,
        isLoading,
        isFetched,
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
            // {
            //     accessorKey: 'category.image',
            //     header: 'Category Image',
            //     Cell: ({ row }) => (
            //         <Box>
            //             <img alt='Category Image' height={30} width={50} src={row.original.image} />
            //         </Box>
            //     ),
            // },
            {
                accessorKey: 'images',
                header: 'category image',
                Cell: ({ renderedCellValue, row }) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                        }}
                    >
                        <img alt='avatar' height={30} src={renderedCellValue[0]} style={{ borderRadius: '50%' }} />
                        {/* row.original.image */}
                    </Box>
                ),
            },
        ],
        []
    )

    const table = useMantineReactTable({
        columns,
        data: Array.isArray(products) ? products : [],
    })

    return <div>{isSuccess && <MantineReactTable table={table} />}</div>
}

export default ProductsTemplate
