'use client'

import Countdown from 'react-countdown'
import { Controller, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { DButton, DTextInput } from '@components/UI/atoms/client'
import { DInputField } from '@components/UI/molecules/client'

import { editVerifyPhoneNumber } from '@core/services/api'
import { useUserStore } from '@core/services/state-management'

const DVerifyOtp = ({ changeUserStage, hash, cell_phone }) => {
    const { addUser, data: userData } = useUserStore()

    const schema = yup.object({
        otp: yup.string().length(4, 'کد فعالسازی باید دقیقا 4 کاراکتر باشد').required('مقدار کد فعالسازی الزامی است'),
    })

    const {
        handleSubmit,
        control,
        formState: { errors },
        setError,
    } = useForm({
        defaultValues: {
            ...schema.getDefault(),
        },
        resolver: yupResolver(schema),
    })

    const { mutate, isLoading } = useMutation({
        mutationFn: (data) => editVerifyPhoneNumber(data),
        onSuccess: (response) => {
            // user add phoneNumber successfully
            changeUserStage('get_phone')

            //add phoneNumber to zustand
            addUser({
                ...userData,
                cell_phone: response.cell_phone,
            })
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
        mutate({ ...data, hash, cell_phone: cell_phone })
    }

    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            changeUserStage('get_phone')
        }
        // Render a countdown
        return (
            <span className='bg-orange block ml-auto my-3 w-fit rounded-lg py-[2px] px-4 text-sm m-w-[45px] text-white'>
                {minutes}:{seconds}
            </span>
        )
    }

    return (
        <>
            <Countdown date={Date.now() + 120000} renderer={renderer} />

            <form onSubmit={handleSubmit(onSubmit)} method='post'>
                <DInputField errors={errors} fieldName={'otp'}>
                    <Controller
                        name={'otp'}
                        control={control}
                        defaultValue=''
                        render={({ field: { name, value, onChange } }) => (
                            <DTextInput
                                label={'کد فعالسازی'}
                                name={name}
                                onChange={onChange}
                                value={value}
                                className='w-fit'
                            />
                        )}
                    />
                </DInputField>
                <div className='flex items-center justify-start gap-x-2'>
                    <DButton
                        type='submit'
                        loading={isLoading}
                        radius='md'
                        className='mt-3 bg-secondary text-white h-[45px] w-fit'
                    >
                        ارسال کد
                    </DButton>
                    <DButton
                        onClick={() => changeUserStage('get_phone')}
                        type='button'
                        variant='outline'
                        radius='md'
                        color='teal'
                        className='mt-3 h-[45px] w-fit'
                    >
                        تلاش مجدد
                    </DButton>
                </div>
            </form>
        </>
    )
}

export default DVerifyOtp
