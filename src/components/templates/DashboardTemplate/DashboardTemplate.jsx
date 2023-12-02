'use client'
import React from 'react'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
}
const DashboardTemplate = () => {
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
