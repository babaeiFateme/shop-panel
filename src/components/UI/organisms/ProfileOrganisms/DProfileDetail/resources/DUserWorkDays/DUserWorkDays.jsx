'use client'

import { useEffect, useState } from 'react'

import { DButton } from '@components/UI/atoms/client'

import { DAddWorkDays, DWorkDaysTable } from './resources'

const DUserWorkDays = ({ status, workingCalendars }) => {
    const [isEditing, setIsEditing] = useState(false)

    //toggle editing mode when editing user profile finished
    useEffect(() => {
        //check if it is in editing mode
        if (isEditing && (status === 'success' || status === 'error'))
            //change to show table
            setIsEditing(false)
    }, [status])

    return (
        <div>
            {/* title of get work days */}
            <div className='font-semibold text-base'>
                <span>روز های کاری</span>
                {
                    //user can only change status when state of isEditing be false
                    isEditing === false && (
                        <DButton
                            onClick={() => setIsEditing(true)}
                            variant='transparent'
                            className='text-base text-blueLink px-3'
                        >
                            تغییر روز های کاری
                        </DButton>
                    )
                }
            </div>

            {
                //check if user is watching table or is editing value of each days
                isEditing ? (
                    //user is changing value of each days
                    <DAddWorkDays />
                ) : (
                    //user is watching table of days for time which user is working
                    <DWorkDaysTable workingCalendars={workingCalendars} />
                )
            }
        </div>
    )
}

export default DUserWorkDays
