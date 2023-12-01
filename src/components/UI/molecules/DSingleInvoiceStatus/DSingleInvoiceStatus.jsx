const DSingleInvoiceStatus = ({ statusId }) => {
    if (statusId === 0) {
        return <span className='bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium'>پرداخت نشده</span>
    } else if (statusId === 1) {
        return <span className='bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium'>پرداخت شده</span>
    } else if (statusId === 2) {
        return <span className='bg-orange text-white px-3 py-1 rounded-full text-xs font-medium'>در انتظار تائید</span>
    }
    return <span className='bg-faded-black text-white px-3 py-1 rounded-full text-xs font-medium'>لغو شده</span>
}

export default DSingleInvoiceStatus
