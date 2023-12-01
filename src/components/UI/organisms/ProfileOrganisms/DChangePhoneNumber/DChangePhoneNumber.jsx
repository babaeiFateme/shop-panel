import { useState } from 'react'

import { useUserStore } from '@core/services/state-management'

import { DGetPhoneNumber, DVerifyOtp } from './resources'

const DChangePhoneNumber = () => {
    const { data } = useUserStore()

    const [stage, setStage] = useState({
        stageName: 'get_phone',
        hash: '',
        cell_phone: '',
    })

    const onChangeUserStageHandler = (newStage, hash, cell_phone) => {
        //  'this is cell_phone (onChangeUserStageHandler)

        setStage({
            stageName: newStage,
            hash: hash ?? '',
            cell_phone: cell_phone ?? '',
        })
    }

    return (
        <div className='py-3 border-y'>
            <div className='flex flex-col items-start justify-start w-full gap-y-2'>
                <span className='text-2xl font-bold'>تغییر شماره همراه</span>
                <span className='text-sm font-semibold'>شماره همراه فعلی : {data.cell_phone}</span>
            </div>
            {stage.stageName === 'get_phone' ? (
                <DGetPhoneNumber changeUserStage={onChangeUserStageHandler} />
            ) : (
                <DVerifyOtp
                    hash={stage.hash}
                    cell_phone={stage.cell_phone}
                    changeUserStage={onChangeUserStageHandler}
                />
            )}
        </div>
    )
}

export default DChangePhoneNumber
