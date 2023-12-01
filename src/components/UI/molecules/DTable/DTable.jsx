import { useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { IconArrowRight } from '@tabler/icons-react'
import { IconArrowLeft } from '@tabler/icons-react'

import { DPagination } from '../client'

const DTable = ({ headerList, children, total }) => {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { push } = useRouter()

    const createQueryString = useCallback(
        (name, value) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    return (
        <div className='grid w-full'>
            <div className='overflow-x-auto'>
                <table className='w-full whitespace-nowrap'>
                    <thead>
                        <tr className='font-bold border-b border-[#DEE2E6]'>
                            {headerList.map((singleHeader, index) => (
                                <th className={`p-2 ${index === 0 ? 'text-right' : 'text-center'} `} key={index}>
                                    {singleHeader}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>{children}</tbody>
                </table>
            </div>
            {
                //check if total be more than 1 to show pagination
                total > 1 && (
                    //there is more than one page : show pagination of table
                    <div className='mt-10'>
                        <DPagination
                            value={parseInt(searchParams.get('page'))}
                            total={total}
                            nextIcon={IconArrowLeft}
                            previousIcon={IconArrowRight}
                            onChange={(params) => {
                                push(pathName + '?' + createQueryString('page', params))
                            }}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default DTable
