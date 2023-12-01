const DSingleContractsStatus = ({ statusId }) => {
    if (statusId === 0) {
        return <span className='bg-orange text-white px-3 py-1 rounded-full text-xs font-medium'>پیش نویس</span>
    } else if (statusId === 1) {
        return <span className='bg-blueLink text-white px-3 py-1 rounded-full text-xs font-medium'>تایید پیمانکار</span>
    } else if (statusId === 2) {
        return <span className='bg-blueLink text-white px-3 py-1 rounded-full text-xs font-medium'>تایید مشتری</span>
    } else if (statusId === 3) {
        return <span className='bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium'>پرداخت شده</span>
    } else if (statusId === 4) {
        return <span className='bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium'>منعقد شده</span>
    } else if (statusId === 5) {
        return <span className='bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium'>لغو شده</span>
    }
    return <span className='bg-faded-black text-white px-3 py-1 rounded-full text-xs font-medium'>پایان یافته</span>
}

export default DSingleContractsStatus
