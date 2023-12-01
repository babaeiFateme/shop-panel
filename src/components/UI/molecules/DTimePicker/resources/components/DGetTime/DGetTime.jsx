import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'

import { DButton } from '@components/UI/atoms/client'

const DGetTime = ({ time, setTime, setStage }) => {
    return (
        <div className='flex items-center justify-between py-8'>
            <div className='flex flex-col items-center justify-center gap-y-2'>
                <DButton
                    onClick={() => {
                        setTime((prevState) => ({
                            ...prevState,
                            minutes: prevState.minutes < 60 ? prevState.minutes++ : 0,
                        }))
                    }}
                    className='rounded-full flex items-center justify-center text-gray hover:text-primary hover:bg-[#0000000d] w-10 h-10'
                    variant='subtle'
                >
                    <FaChevronUp className='w-5 h-5' />
                </DButton>
                <DButton
                    onClick={() => setStage('getMinuets')}
                    className='text-2xl text-blackText hover:bg-[#0000000d]'
                    variant='subtle'
                >
                    {time.minutes}
                </DButton>
                <DButton
                    onClick={() => {
                        setTime((prevState) => ({
                            ...prevState,
                            minutes: prevState.minutes >= 0 ? prevState.minutes-- : 59,
                        }))
                    }}
                    className='rounded-full flex items-center justify-center text-gray hover:text-primary hover:bg-[#0000000d] w-10 h-10'
                    variant='subtle'
                >
                    <FaChevronDown className='w-5 h-5' />
                </DButton>
            </div>
            <span className='text-4xl'>:</span>
            <div className='flex flex-col items-center justify-center gap-y-2'>
                <DButton
                    onClick={() => {
                        setTime((prevState) => ({
                            ...prevState,
                            hour: prevState.hour < 24 ? prevState.hour++ : 0,
                        }))
                    }}
                    className='rounded-full flex items-center justify-center text-gray hover:text-primary hover:bg-[#0000000d] w-10 h-10'
                    variant='subtle'
                >
                    <FaChevronUp className='w-5 h-5' />
                </DButton>
                <DButton
                    onClick={() => setStage('getHour')}
                    className='text-2xl text-blackText hover:bg-[#0000000d]'
                    variant='subtle'
                >
                    {time.hour}
                </DButton>
                <DButton
                    onClick={() => {
                        setTime((prevState) => ({
                            ...prevState,
                            hour: prevState.hour >= 0 ? prevState.hour-- : 23,
                        }))
                    }}
                    className='rounded-full flex items-center justify-center text-gray hover:text-primary hover:bg-[#0000000d] w-10 h-10'
                    variant='subtle'
                >
                    <FaChevronDown className='w-5 h-5' />
                </DButton>
            </div>
        </div>
    )
}

export default DGetTime
