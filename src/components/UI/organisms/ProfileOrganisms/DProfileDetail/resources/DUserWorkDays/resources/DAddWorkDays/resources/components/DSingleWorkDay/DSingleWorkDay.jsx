import { memo, useContext, useEffect } from 'react'
import { Controller } from 'react-hook-form'

import { DCheckbox } from '@components/UI/atoms/client'
import { DInputField, DTimePicker } from '@components/UI/molecules/client'
import { FormContext } from '@components/UI/organisms/ProfileOrganisms/DProfileDetail/DProfileDetail'

const DSingleWorkDay = memo(({ fieldName, label }) => {
    const { errors, control, watch, setValue, getValues } = useContext(FormContext)

    //fieldName is name of the week
    const CurrentDayWatch = watch(fieldName)

    //handle onChange of currentDayWatch to add or remove field of "working_calendar"
    useEffect(() => {
        //check status of checkbox
        if (CurrentDayWatch) {
            //user is adding value of this day , add default value to each parts
            setValue(`working_calendar[${fieldName}]`, {
                start_time_am: '',
                end_time_am: '',
                start_time_pm: '',
                end_time_pm: '',
            })
        } else {
            //user is removing this field , remove this field from "working_calendar"
            const workingCalendar = getValues('working_calendar')

            //check if there is working calendar
            if (workingCalendar) {
                //remove field of this day completely form working_calendar
                delete workingCalendar[fieldName]

                //set this new value (with out this day) to "working_calendar"
                setValue('working_calendar', workingCalendar)
            }
        }
    }, [CurrentDayWatch])

    return (
        <div>
            {/* check box to set if user work on this day or not */}
            <DInputField errors={errors} fieldName={fieldName}>
                <Controller
                    defaultValue={false}
                    name={fieldName}
                    control={control}
                    render={({ field }) => <DCheckbox label={label} field={{ ...field }} />}
                />
            </DInputField>

            {
                //check if user check this day to edit this day or not
                CurrentDayWatch && (
                    // user is editing this day (each day contain two parts)
                    <div className='w-full grid md:grid-cols-2 gap-2 mb-5'>
                        {/* part morning for select day */}
                        <div className='space-y-2'>
                            <p className='font-bold text-base text-blueLink border-b pb-1'>شیفت صبح</p>
                            <div className='grid sm:grid-cols-2 gap-2'>
                                {/* start time of morning */}
                                <DInputField
                                    errors={errors}
                                    fieldName={`working_calendar[${fieldName}][start_time_am]`}
                                >
                                    <span className='font-semibold'>از ساعت</span>
                                    <Controller
                                        name={`working_calendar[${fieldName}][start_time_am]`}
                                        control={control}
                                        render={({ field: { name, value, onChange } }) => (
                                            <DTimePicker
                                                value={value}
                                                onChange={onChange}
                                                name={name}
                                                fieldName={fieldName}
                                            />
                                        )}
                                    />
                                </DInputField>

                                {/* end time of morning */}
                                <DInputField errors={errors} fieldName={`working_calendar[${fieldName}][end_time_am]`}>
                                    <span className='font-semibold'>تا ساعت</span>
                                    <Controller
                                        name={`working_calendar[${fieldName}][end_time_am]`}
                                        control={control}
                                        render={({ field: { name, value, onChange } }) => (
                                            <DTimePicker
                                                value={value}
                                                onChange={onChange}
                                                name={name}
                                                fieldName={fieldName}
                                            />
                                        )}
                                    />
                                </DInputField>
                            </div>
                        </div>

                        {/* part evening for select day */}
                        <div className='space-y-2'>
                            <p className='font-bold text-base text-blueLink border-b pb-1'>شیفت عصر</p>
                            <div className='grid sm:grid-cols-2 gap-2'>
                                {/* start time of evening */}
                                <DInputField
                                    errors={errors}
                                    fieldName={`working_calendar[${fieldName}][start_time_pm]`}
                                >
                                    <span className='font-semibold'>از ساعت</span>
                                    <Controller
                                        name={`working_calendar[${fieldName}][start_time_pm]`}
                                        control={control}
                                        render={({ field: { name, value, onChange } }) => (
                                            <DTimePicker
                                                value={value}
                                                onChange={onChange}
                                                name={name}
                                                fieldName={fieldName}
                                            />
                                        )}
                                    />
                                </DInputField>

                                {/* end time of evening */}
                                <DInputField errors={errors} fieldName={`working_calendar[${fieldName}][end_time_pm]`}>
                                    <span className='font-semibold'>تا ساعت</span>
                                    <Controller
                                        name={`working_calendar[${fieldName}][end_time_pm]`}
                                        control={control}
                                        render={({ field: { name, value, onChange } }) => (
                                            <DTimePicker
                                                value={value}
                                                onChange={onChange}
                                                name={name}
                                                fieldName={fieldName}
                                            />
                                        )}
                                    />
                                </DInputField>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
})

DSingleWorkDay.displayName = 'DSingleWorkDay'

export default DSingleWorkDay
