'use client'

import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'

import { DButton, DTextArea, DTextInput } from '@components/UI/atoms/client'
import { DInputField } from '@components/UI/molecules/client'

import { addTicketHttp } from '@core/services/api'
import { ticketValidation } from '@core/utils'

import { SvgTicket } from '@public/images'

const NewTicketTemplate = () => {
    const route = useRouter()
    const queryClient = new useQueryClient()
    const {
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {},
        resolver: yupResolver(ticketValidation),
    })
    const { mutate } = useMutation({
        mutationFn: (data) => addTicketHttp(data),
        onSuccess: () => {
            queryClient.invalidateQueries('ticket')
            route.push('/dashboard/tickets')
            toast.success('تیکت شما با موفقیت ثبت شد ')
        },
    })
    const onSubmit = async (data) => {
        mutate(data)
    }

    return (
        <div>
            <div className='flex items-start justify-between w-full gap-x-2'>
                <div className='flex flex-col items-start justify-start gap-y-1 mb-7'>
                    <span className='text-lg sm:text-xl lg:text-2xl font-bold ml-auto'>ثبت تیکت جدید</span>
                </div>
            </div>
            <div className='flex items-start gap-x-5'>
                <form className='flex flex-col gap-y-2 w-full' onSubmit={handleSubmit(onSubmit)} method='post'>
                    <DInputField errors={errors} fieldName={'subject'}>
                        <Controller
                            name={'subject'}
                            control={control}
                            render={({ field: { name, onChange, value } }) => (
                                <DTextInput label={'عنوان تیکت'} name={name} onChange={onChange} value={value} />
                            )}
                        />
                    </DInputField>
                    <DInputField errors={errors} fieldName={'content'}>
                        <Controller
                            name={'content'}
                            control={control}
                            render={({ field: { name, onChange, value } }) => (
                                <DTextArea label={'متن تیکت'} name={name} onChange={onChange} value={value} />
                            )}
                        />
                    </DInputField>
                    <DButton
                        type='submit'
                        loading={isSubmitting}
                        radius='md'
                        className='mt-3 bg-secondary text-white h-[45px] w-fit ml-auto'
                    >
                        ارسال
                    </DButton>
                </form>
                <div className='w-[450px] h-[450px] md:block hidden'>
                    <SvgTicket />
                </div>
            </div>
        </div>
    )
}

export default NewTicketTemplate
