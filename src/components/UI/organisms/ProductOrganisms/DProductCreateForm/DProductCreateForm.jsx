'use client'

import { Controller, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'

import { yupResolver } from '@hookform/resolvers/yup'


import { DButton, DTextArea, DTextInput } from '@components/UI/atoms/client'
import { DInputField } from '@components/UI/molecules/client'

import { createProductHttp } from '@core/services/api'
import { profileValidation } from '@core/utils'

const DProductCreateForm = () => {
    

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(profileValidation),
    })

    const { mutate, isLoading } = useMutation({
        mutationFn: (data) => createProductHttp(data),
        onSuccess: (response) => {
            console.log(response)
        },
        onError: (error) => {
            console.log(error)
        },
    })
    const onSubmit = (data) => {
        mutate(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='block md:grid md:grid-cols-2 md:gap-3'>
                    <DInputField className='col-span-2' errors={errors} fieldName={'title'}>
                        <Controller
                            name={'title'}
                            control={control}
                            render={({ field }) => <DTextInput label={'Title'} withAsterisk {...field} />}
                        />
                    </DInputField>
                    <DInputField errors={errors} fieldName={'price'}>
                        <Controller
                            name={'price'}
                            control={control}
                            render={({ field }) => <DTextInput label={'Price'} withAsterisk {...field} />}
                        />
                    </DInputField>
                    <DInputField errors={errors} fieldName={'GategoryId'}>
                        <Controller
                            name={'CategoryId'}
                            control={control}
                            render={({ field }) => <DTextInput label={'Category'} withAsterisk {...field} />}
                        />
                    </DInputField>
                    <DInputField className='col-span-2' errors={errors} fieldName={'description'}>
                        <Controller
                            name={'description'}
                            control={control}
                            render={({ field }) => <DTextArea label={'Description'} withAsterisk {...field} />}
                        />
                    </DInputField>
                </div>
                    <DButton
                    type="submit"
                    loading={isLoading}
                    className="mt-4 bg-slate-900 w-full text-white h-[45px] max-w-[150px]"
                >
                    create
                </DButton>
            </form>
        </div>
    )
}

export default DProductCreateForm
