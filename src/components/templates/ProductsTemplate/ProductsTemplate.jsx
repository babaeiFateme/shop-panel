'use client'
import { useMemo, useState } from 'react'
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table'
import { useQuery } from 'react-query'
import { productsHttp } from '@core/services/api'
//nested data is ok, see accessorKeys in ColumnDef below

const ProductsTemplate = () => {
    const { data: products, isSuccess } = useQuery({
        queryKey: ['products'],
        queryFn: () => productsHttp(),
        onError: (error) => {
            console.log(error)
        },
    })
    if (isSuccess)
        return (
            <div>
                {products.map((product, index) => (
                    <div key={index}>{product.title}</div>
                ))}
            </div>
        )
}
export default ProductsTemplate
