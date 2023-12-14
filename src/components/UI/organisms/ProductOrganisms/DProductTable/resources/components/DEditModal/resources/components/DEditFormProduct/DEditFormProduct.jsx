'use client'
import { Controller, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { error } from 'highcharts'
import { yupResolver } from '@hookform/resolvers/yup'

import { DInputField } from '@components/UI/molecules/client'

import { editProductHttp } from '@core/services/api'
import { productEditValidation } from '@core/utils'
import { DButton, DTextArea, DTextInput } from '@components/UI/atoms/client'

const DEditFormProduct = ({ product }) => {
    // console.log(product, 'kjsfksjfskfjsk')
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(productEditValidation),
    })

    const { mutate, isLodaing } = useMutation({
        mutationFn: ({ data }) => editProductHttp({ data }),
        onSuccess: (response) => {
            console.log(response)
        },
    })
    const onSubmit = (data) => {
        // mutate(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='block md:grid md:grid-cols-2 md:gap-4'>
                <div className='col-span-2'>
                    <img
                        src={product?.images[0]}
                        className='max-w-[150px] aspect-square rounded-md'
                        width={150}
                        height={150}
                    />
                </div>
                <DInputField errors={errors} fieldName={'title'} className='col-span-2'>
                    <Controller
                        name={'title'}
                        control={control}
                        defaultValue={product?.title}
                        render={({ field }) => <DTextInput label='Title' {...field} withAsterisk />}
                    />
                </DInputField>

                <DInputField errors={errors} fieldName={'price'}>
                    <Controller
                        name={'price'}
                        control={control}
                        defaultValue={product?.price}
                        render={({ field }) => <DTextInput label='Price' {...field} withAsterisk />}
                    />
                </DInputField>
                <DInputField errors={errors} fieldName={'category'}>
                    <Controller
                        name={'category'}
                        control={control}
                        defaultValue={product?.category?.name}
                        render={({ field }) => <DTextInput label='Category' {...field} withAsterisk />}
                    />
                </DInputField>

                <DInputField errors={errors} fieldName={'description'} className='col-span-2'>
                    <Controller
                        name={'description'}
                        control={control}
                        defaultValue={product?.description}
                        render={({ field }) => <DTextArea label='Description' {...field} withAsterisk />}
                    />
                </DInputField>
                <DButton
                    type='submit'
                    className='bg-primary-900 text-primary-50 font-semibold text-base min-h-[50px] max-w-[150px] my-4'
                >
                    Edit
                </DButton>
            </form>
        </div>
    )
}

export default DEditFormProduct