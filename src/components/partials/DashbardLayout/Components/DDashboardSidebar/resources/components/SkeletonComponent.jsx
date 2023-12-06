import { Skeleton } from '@mantine/core'
const SkeletonComponent = () => {
    return (
        <div className='bg-primary-50 bg-opacity-50 p-3 rounded-lg mb-8 flex items-center gap-3 py-5'>
            <Skeleton height={50} circle mb='xl' className='flex items-center' />
            <div className='flex-shrink-0 grow'>
                <Skeleton height={8} radius='xl' />
                <Skeleton height={8} mt={6} radius='xl' />
                <Skeleton height={8} mt={6} width='70%' radius='xl' />
            </div>
        </div>
    )
}

export default SkeletonComponent
