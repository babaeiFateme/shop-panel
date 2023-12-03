import React from 'react'
import { Skeleton } from '@mantine/core'
const SkeletonComponent = () => {
    return (
        <div className='bg-primary-50 bg-opacity-50 p-3 rounded-lg mb-8'>
            <Skeleton height={50} circle mb='xl' />
            <Skeleton height={8} radius='xl' />
            <Skeleton height={8} mt={6} radius='xl' />
            <Skeleton height={8} mt={6} width='70%' radius='xl' />
        </div>
    )
}

export default SkeletonComponent
