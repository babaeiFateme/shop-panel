'use client'

import { Controller, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { DButton, DTextInput } from '@components/UI/atoms/client'
import { DInputField } from '@components/UI/molecules/client'

import { editPhoneNumberProfile } from '@core/services/api'
import { phoneNumberValidation } from '@core/utils'
const DGetPhoneNumber = ({ changeUserStage }) => {
    const schema = yup.object({
        cell_phone: phoneNumberValidation.required('مقدار شماره همراه الزامی است'),
    })

    const {
        handleSubmit,
        control,
        formState: { errors },
        setError,
        getValues,
    } = useForm({
        defaultValues: {
            ...schema.getDefault(),
        },
        resolver: yupResolver(schema),
    })

    const { mutate, isLoading } = useMutation({
        mutationFn: (data) => editPhoneNumberProfile(data),
        onSuccess: (data) => {
            changeUserStage('otp', data.hash, getValues('cell_phone'))
        },
        onError: (error) => {
            const parsedError = JSON.parse(error.message)
            //set error from backend for that certain field
            for (const singleError in parsedError.error) {
                if (singleError === 'message') {
                    toast.error(parsedError.error.message[0])
                }
                setError(singleError, { message: parsedError.error[singleError][0] })
            }
        },
    })

    const onSubmit = (data) => {
        mutate(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} method='post'>
            <DInputField errors={errors} fieldName={'cell_phone'}>
                <Controller
                    name={'cell_phone'}
                    control={control}
                    defaultValue=''
                    render={({ field: { name, value, onChange } }) => (
                        <DTextInput
                            label={'شماره همراه'}
                            name={name}
                            onChange={onChange}
                            value={value}
                            className='w-fit'
                        />
                    )}
                />
            </DInputField>
            <DButton
                type='submit'
                loading={isLoading}
                radius='md'
                className='mt-3 bg-secondary text-white h-[45px] w-fit'
            >
                به روزرسانی شماره همراه
            </DButton>
        </form>
    )
}

export default DGetPhoneNumber
