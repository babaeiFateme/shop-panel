'use client'
import React from 'react'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import { useMutation, useQuery } from 'react-query'
import { usersHttp } from '@core/services/api'
if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}
const DashboardTemplate = () => {
    const users = useQuery({
        queryFn: () => usersHttp(),
        queryKey: ['usersCount'],
    })
    console.log(users.data?.length)
    const options = {
        credits: {
            enabled: false,
        },
        plotOptions: {},
        title: {
            text: 'user agent',
        },
        xAxis: {
            categories: ['ios', 'android', 'pc'],
        },
        yAxis: {
            title: '',
        },
        series: [
            {
                data: [15, 30, 13],
            },
        ],
    }
    return (
        <div className='w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 mb-9'>
                <div className='min-h-[150px]rounded-sm bg-primary-300 text-white flex justify-center items-center font-semibold'>
                    <div className='text-center'>
                        <div className='text-lg'>Users</div>
                        <div className='text-3xl'>{users.data?.length}</div>
                    </div>
                </div>
                <div className='min-h-[150px] rounded-sm bg-primary-900 text-white flex justify-center items-center font-semibold'>
                    <div className='text-center'>
                        <div className='text-lg'>Products</div>
                        <div className='text-3xl'>395</div>
                    </div>
                </div>
                <div className='min-h-[150px] rounded-sm bg-primary-600 text-white flex justify-center items-center font-semibold'>
                    <div className='text-center'>
                        <div className='text-lg'>Categories</div>
                        <div className='text-3xl'>400</div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='rounded-xl bg-white overflow-hidden p-3'>
                    <HighchartsReact className='rounded-md' highcharts={Highcharts} options={options} />

                    <div className='mt-5 grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='bg-primary-200 flex flex-col items-center justify-center py-6'>
                            <div>Products</div>
                            <div>105</div>
                        </div>
                        <div className='bg-primary-200 flex flex-col items-center justify-center py-6'>
                            <div>salary </div>
                            <div>105$</div>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-2'>jhfgjgdfhgf</div>
            </div>
        </div>
    )
}

export default DashboardTemplate
