'use client'

import { FaAngleLeft } from 'react-icons/fa6'
import { useQuery } from 'react-query'

import { DError, DSpinner } from '@components/UI/atoms/client'
import { DLink } from '@components/UI/atoms/server'
import { DChatForm, DSendMessageForm } from '@components/UI/organisms/SingleTicketOrganisms'

import { messageReplyTicketHttp } from '@core/services/api'

const SingleTicketTemplate = ({ id }) => {
    const {
        data: ticketHttpCache,
        isError,
        isLoading,
        isFetching,
    } = useQuery({
        queryKey: [`ticketMessage_${id}`],
        queryFn: () => messageReplyTicketHttp(id),
    })
    if (isError) {
        return <DError />
    }

    if (isLoading || isFetching) {
        return <DSpinner />
    }
    return (
        <div className='flex flex-col items-center gap-y-2 w-full max-h-[calc(100vh-172px)] lg:h-[calc(100%-0px)] overflow-hidden'>
            <div className='flex items-start justify-between w-full gap-x-2'>
                <div className='flex flex-col items-start justify-start gap-y-2 mb-7'>
                    <span className='text-lg sm:text-xl lg:text-2xl font-bold ml-auto'>
                        {ticketHttpCache.data.data.ticket.id} - {ticketHttpCache.data.data.ticket.subject}
                    </span>
                </div>
                <DLink
                    href='/dashboard/tickets'
                    className='flex items-center justify-end gap-x-1 font-semibold text-blueLink'
                >
                    برگشت
                    <FaAngleLeft />
                </DLink>
            </div>
            {/* message component */}
            <DChatForm replyList={ticketHttpCache.data.data.ticket_reply.data} />

            {/* form component */}
            <DSendMessageForm id={id} status={ticketHttpCache.data.data.ticket.status} />
        </div>
    )
}

export default SingleTicketTemplate
