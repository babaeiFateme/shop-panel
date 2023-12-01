'use client'

import { useQuery } from 'react-query'
import moment from 'moment-jalaali'

import { DEmptyList, DError, DSpinner } from '@components/UI/atoms/client'
import { DLink } from '@components/UI/atoms/server'
import { DSingleRequestStatus, DTable } from '@components/UI/molecules/client'

import { getRequestHttp } from '@core/services/api'

import { TABLE_HEADER } from './resources'

const DDashboardRecentRequest = () => {
    const {
        data: requests,
        isError,
        isLoading,
    } = useQuery({
        queryKey: ['requests'],
        queryFn: getRequestHttp,
    })

    if (isError) {
        return <DError />
    }

    if (isLoading) {
        return <DSpinner />
    }

    console.log('this is requests : ', requests)

    return (
        <div className='flex flex-col items-start justify-center w-full'>
            <h2 className='font-bold text-lg md:text-xl lg:text-2xl'>درخواست‌های اخیر</h2>
            {requests.data.length === 0 ? (
                <DEmptyList />
            ) : (
                <>
                    <DTable headerList={TABLE_HEADER}>
                        {requests.data.slice(0, 5).map((singleRequest, index) => (
                            <tr
                                key={index}
                                className={`text-sm text-center ${index % 2 === 0 ? 'bg-[#0000000d]' : ''} `}
                            >
                                <td className='px-2 py-3 text-right'>{singleRequest.id}</td>
                                <td className='px-2 py-3'>{singleRequest?.contract?.total_weight}</td>
                                <td className='px-2 py-3'>
                                    {moment(singleRequest?.created_at).format('jYYYY/jMM/jDD')}
                                </td>
                                <td className='px-2 py-3'>
                                    <div className='flex flex-col items-center justify-start'>
                                        {singleRequest.visits?.length === 0
                                            ? '-'
                                            : singleRequest.visits.map((singleVisit, index) => (
                                                  <span key={index}>
                                                      {singleVisit?.visit.visited_at
                                                          ? moment(singleVisit?.visit.visited_at).format(
                                                                'jYYYY/jMM/jDD'
                                                            )
                                                          : '-'}
                                                  </span>
                                              ))}
                                    </div>
                                </td>
                                <td className='px-2 py-3'>
                                    <DSingleRequestStatus statusId={singleRequest.status} />
                                </td>
                                <td className='px-2 py-3 font-semibold text-blueLink'>
                                    <DLink href={`/dashboard/requests/${singleRequest.id}`}>مشاهده</DLink>
                                </td>
                            </tr>
                        ))}
                    </DTable>

                    <DLink className='font-semibold text-blueLink mx-auto mt-5' href={`/dashboard/requests`}>
                        مشاهده همه
                    </DLink>
                </>
            )}
        </div>
    )
}

export default DDashboardRecentRequest
