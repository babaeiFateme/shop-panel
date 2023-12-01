import { DTable } from '@components/UI/molecules/client'

import { convertEngPersianDays } from '@core/utils'

import { TABLE_HEADER } from './resources'

const DWorkDaysTable = ({ workingCalendars }) => {
    return (
        <DTable headerList={TABLE_HEADER}>
            {workingCalendars?.map((singleData, index) => (
                <tr key={index} className={`text-sm text-center ${index % 2 === 0 ? 'bg-[#0000000d]' : ''} `}>
                    <td className='px-2 py-3 text-right'>{convertEngPersianDays(singleData.type)}</td>
                    <td className='px-2 py-3'>
                        {singleData.start_time_am && singleData.end_time_am ? (
                            <>
                                از
                                {singleData.start_time_am}تا
                                {singleData.end_time_am}
                            </>
                        ) : (
                            '-'
                        )}
                    </td>
                    <td className='px-2 py-3'>
                        {singleData.start_time_pm && singleData.end_time_pm ? (
                            <>
                                از
                                {singleData.start_time_pm}تا
                                {singleData.end_time_pm}
                            </>
                        ) : (
                            '-'
                        )}
                    </td>
                </tr>
            ))}
        </DTable>
    )
}

export default DWorkDaysTable
