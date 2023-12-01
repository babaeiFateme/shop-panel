const DSinglePaymentStatus = ({ statusId }) => {
    if (statusId === 0) {
        return <span className='bg-orange text-white px-3 py-1 rounded-full text-xs font-medium'>در حال پرداخت</span>
    } else if (statusId === 1) {
        return <span className='bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium'>پرداخت شده</span>
    }
    return <span className='bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium'>پرداخت نشده</span>
}

export default DSinglePaymentStatus
