import { DButton } from '@components/UI/atoms/client'

import { MINUETS_LIST } from './resources'

const DMinutesSelector = ({ setTime, setStage }) => {
    return (
        <div dir='ltr' className='grid grid-cols-3 max-h-36 overflow-y-auto'>
            {MINUETS_LIST.map((singleMinuets, index) => (
                <DButton
                    className='text-blackText hover:bg-[#0000000d] text-base'
                    variant='subtle'
                    onClick={() => {
                        setTime((prevState) => ({
                            ...prevState,
                            minutes: singleMinuets,
                        }))
                        setStage('getFullTime')
                    }}
                    key={index}
                >
                    {singleMinuets}
                </DButton>
            ))}
        </div>
    )
}

export default DMinutesSelector
