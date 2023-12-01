import React, { useEffect, useRef, useState } from 'react'
import { FaRegCalendar, FaRegClock } from 'react-icons/fa6'

import { DButton } from '@components/UI/atoms/client'

import { DGetTime, DHourSelector, DMinutesSelector } from './resources'

const DTimePicker = ({ value, onChange }) => {
    const wrapperRef = useRef(null)

    /**
     * 1. getFullTime
     * 2. getHour
     * 3. getMinuets
     */
    const [stage, setStage] = useState('getFullTime')
    const [isShowSelectTime, setIsShowSelectTime] = useState(false)

    const [time, setTime] = useState({
        hour: '',
        minutes: '',
    })

    useEffect(() => {
        const date = new Date()

        setTime({
            hour: date.getHours(),
            minutes: date.getMinutes(),
        })
    }, [])

    //useEffect to handle when user click outSide of component
    useEffect(() => {
        // Function to handle clicks outside of the component
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsShowSelectTime(false)
            }
        }

        // Attach the event listener when the component mounts
        document.addEventListener('mousedown', handleClickOutside)

        // Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div ref={wrapperRef} className='w-full relative'>
            <DButton
                onClick={() => setIsShowSelectTime((prevState) => !prevState)}
                rightIcon={<FaRegCalendar />}
                classNames={{ inner: 'w-full justify-between' }}
                className='relative w-full bg-white text-gray flex items-center justify-between px-2 border border-[#ddd] hover:border-[#aaaeb7] duration-200 rounded text-base font-medium'
            >
                <span className='text-black'>{value}</span>
            </DButton>

            <div
                className={`absolute ${
                    isShowSelectTime ? 'top-10' : '-top-full pointer-events-none invisible'
                } duration-200 z-10 w-full bg-white p-3 rounded-sm border border-[#ddd] min-w-[258px] `}
            >
                {stage === 'getFullTime' ? (
                    <DGetTime setTime={setTime} time={time} setStage={setStage} />
                ) : stage === 'getHour' ? (
                    <DHourSelector setTime={setTime} setStage={setStage} />
                ) : (
                    <DMinutesSelector setTime={setTime} setStage={setStage} />
                )}

                {stage !== 'getFullTime' && (
                    <DButton
                        onClick={() => setStage('getFullTime')}
                        className='text-blackText hover:bg-[#0000000d] text-base w-full mb-2'
                        variant='subtle'
                    >
                        <FaRegClock />
                    </DButton>
                )}

                {/* footer of datePicker */}
                <div className='flex items-center justify-between w-full'>
                    <div>
                        <DButton
                            onClick={() => {
                                setIsShowSelectTime(false)
                                onChange(`${time.hour}:${time.minutes}`)
                            }}
                            variant='transparent'
                            className='text-secondary font-semibold text-base'
                        >
                            انتخاب
                        </DButton>
                        <DButton disabled>بستن</DButton>
                    </div>
                    <span className='text-sm'>
                        {time.hour}:{time.minutes}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default DTimePicker
