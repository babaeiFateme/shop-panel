'use client'
import React from 'react'

import { useQuery } from 'react-query'
import { productsHttp } from '@core/services/api'

const ProductsTemplate = () => {
    const { data: products, isSuccess } = useQuery({
        queryKey: ['products'],
        queryFn: () => productsHttp(),
        onError: (error) => {
            console.log(error)
        },
    })
    console.log(products, 'home')

    return <div>fsdfsdf</div>
}

export default ProductsTemplate
