import { DButton } from '@components/UI/atoms/client'

import { HOUR_LIST } from './resources'

const DHourSelector = ({ setTime, setStage }) => {
    return (
        <div dir='ltr' className='grid grid-cols-3 max-h-36 overflow-y-auto'>
            {HOUR_LIST.map((singleHour, index) => (
                <DButton
                    className='text-blackText hover:bg-[#0000000d] text-base'
                    variant='subtle'
                    onClick={() => {
                        setTime((prevState) => ({
                            ...prevState,
                            hour: singleHour,
                        }))
                        setStage('getFullTime')
                    }}
                    key={index}
                >
                    {singleHour}
                </DButton>
            ))}
        </div>
    )
}

export default DHourSelector
