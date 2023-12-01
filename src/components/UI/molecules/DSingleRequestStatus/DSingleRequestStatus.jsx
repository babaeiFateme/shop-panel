const DSingleRequestStatus = ({ statusId }) => {
    if (statusId === 0) {
        return <span className='bg-orange text-white px-3 py-1 rounded-full text-xs font-medium'>جهت حضور</span>
    } else if (statusId === 1) {
        return <span className='bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium'>انجام شده</span>
    } else if (statusId === 2) {
        return <span className='bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium'>عدم حضور</span>
    }
    return <span className='bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium'>لغو شده</span>
}

export default DSingleRequestStatus
