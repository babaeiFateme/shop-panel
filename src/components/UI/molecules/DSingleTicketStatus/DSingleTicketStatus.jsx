const DSingleTicketStatus = ({ statusId }) => {
    if (statusId === 0) {
        return <span className='bg-warning text-white px-3 py-1 rounded-full text-xs font-medium'>در حال بررسی</span>
    } else if (statusId === 1) {
        return <span className='bg-blackText text-white px-3 py-1 rounded-full text-xs font-medium'>بسته شده</span>
    } else if (statusId === 2) {
        return (
            <span className='bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium'> در حال پیگیری</span>
        )
    }
}

export default DSingleTicketStatus
