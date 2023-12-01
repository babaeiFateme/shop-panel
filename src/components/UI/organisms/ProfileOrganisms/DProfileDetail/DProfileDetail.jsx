'use client'

import { createContext } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'

import { DButton, DTextInput } from '@components/UI/atoms/client'
import { DInputField } from '@components/UI/molecules/client'

import { editUserProfile } from '@core/services/api'
import { useUserStore } from '@core/services/state-management'
import { profileDetailSchema } from '@core/utils'

import { DUserMapLocation, DUserWorkDays } from './resources'

//create context to pass value of form to child elements
export const FormContext = createContext(null)

const DProfileDetail = () => {
    const { data, addUser } = useUserStore()

    const { mutate, isLoading, status } = useMutation({
        mutationFn: (data) => editUserProfile(data),
        onSuccess: (data) => {
            addUser(data)
        },
        onSettled: () => {},
    })

    const {
        handleSubmit,
        control,
        formState: { errors },
        watch,
        setValue,
        getValues,
    } = useForm({
        defaultValues: {
            address: data.address ?? '',
            latitude: data.latitude ?? '',
            longitude: data.longitude ?? '',
            name: data.name ?? '',
        },
        resolver: yupResolver(profileDetailSchema),
    })

    const latitudeWatch = watch('latitude')
    const longitudeWatch = watch('longitude')

    const onSubmit = (data) => {
        //temporary array to convert workdays object to an array
        const workingDaysArray = []

        //extract array from this object
        for (const singleDay in data.working_calendar) {
            workingDaysArray.push({
                type: singleDay,
                ...data.working_calendar[singleDay],
            })
        }

        //create data for have structure for sending data
        const newData = {
            address: data.address,
            latitude: data.latitude,
            longitude: data.longitude,
            name: data.name,
        }

        //check if there is working days data
        if (workingDaysArray.length !== 0) {
            //there is working days , set this data to the "newData"
            newData.working_calendar = workingDaysArray
        }

        mutate({
            ...newData,
        })
    }

    const onSetLocationHandler = (newLocation) => {
        setValue('latitude', newLocation[0])
        setValue('longitude', newLocation[1])
    }

    console.log('errors : ', errors)

    return (
        //pass value of control , errors , watch for child elements
        <FormContext.Provider
            value={{
                control,
                errors,
                watch,
                setValue,
                getValues,
            }}
        >
            <p className='text-2xl font-bold mb-2'>اطلاعات پروفایل</p>
            <form className='flex flex-col gap-y-5' onSubmit={handleSubmit(onSubmit)}>
                <div className='w-full grid sm:grid-cols-2 gap-5'>
                    <DInputField errors={errors} fieldName={'name'}>
                        <Controller
                            name={'name'}
                            control={control}
                            defaultValue={data.name}
                            render={({ field: { name, value, onChange } }) => (
                                <DTextInput label={'نام'} name={name} onChange={onChange} value={value} />
                            )}
                        />
                    </DInputField>
                    <DInputField errors={errors} fieldName={'address'}>
                        <Controller
                            name={'address'}
                            control={control}
                            defaultValue={data.address}
                            render={({ field: { name, value, onChange } }) => (
                                <DTextInput label={'آدرس'} name={name} onChange={onChange} value={value} />
                            )}
                        />
                    </DInputField>
                    <DInputField errors={errors} fieldName={'latitude'}>
                        <Controller
                            name={'latitude'}
                            control={control}
                            defaultValue={data.latitude}
                            render={({ field: { name, value, onChange } }) => (
                                <DTextInput label={'عرض جغرافیایی'} name={name} onChange={onChange} value={value} />
                            )}
                        />
                    </DInputField>
                    <DInputField errors={errors} fieldName={'longitude'}>
                        <Controller
                            name={'longitude'}
                            control={control}
                            defaultValue={data.longitude}
                            render={({ field: { name, value, onChange } }) => (
                                <DTextInput label={'طول جغرافیایی'} name={name} onChange={onChange} value={value} />
                            )}
                        />
                    </DInputField>
                </div>

                <DUserMapLocation value={[latitudeWatch, longitudeWatch]} onChange={onSetLocationHandler} />

                <DUserWorkDays status={status} workingCalendars={data.workingCalendars} />

                <DButton
                    type='submit'
                    loading={isLoading}
                    radius='md'
                    className='mt-3 bg-secondary text-white h-[45px] w-fit'
                >
                    به روزرسانی اطلاعات پروفایل
                </DButton>
            </form>
        </FormContext.Provider>
    )
}

export default DProfileDetail
