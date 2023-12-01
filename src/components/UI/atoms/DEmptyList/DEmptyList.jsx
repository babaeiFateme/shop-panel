import { SvgLooking } from '@public/images'

const DEmptyList = () => {
    return (
        <div className='flex flex-col items-center justify-start gap-y-2 w-full'>
            <div className='w-[250px] h-[250px]'>
                <SvgLooking />
            </div>
            <span className='font-semibold'>موردی برای نمایش وجود ندارد</span>
        </div>
    )
}

export default DEmptyList
