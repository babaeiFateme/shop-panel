'use client'
import { Controller, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'

import { DButton, DTextInput } from '@components/UI/atoms/client'
import { DInputField } from '@components/UI/molecules/client'

import { editCategoryHttp } from '@core/services/api'
import { categoryEditValidation } from '@core/utils'

const EditFormCategory = ({ category, onCloseEdit }) => {
    console.log(category, 'category edit')
    const queryClient = new useQueryClient()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(categoryEditValidation),
    })
    const { mutate, isLodaing } = useMutation({
        mutationFn: (data) => editCategoryHttp({ data, id: category.id }),
        onSuccess: () => {
            queryClient.invalidateQueries('categories')
            toast.success('done!')
            onCloseEdit(false)
        },
    })
    const onSubmit = async (data) => {
        mutate(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='block md:grid md:grid-cols-2 md:gap-4'>
                <div className='col-span-2'>
                    <img
                        src={category?.image}
                        className='max-w-[150px] aspect-square rounded-md'
                        width={150}
                        height={150}
                    />
                </div>
                <DInputField defaultValue={category?.name} errors={errors} fieldName={'name'} className='col-span-2'>
                    <Controller
                        name={'name'}
                        control={control}
                        defaultValue={category?.name}
                        render={({ field }) => <DTextInput label='Name' {...field} withAsterisk />}
                    />
                </DInputField>

                <DButton
                    isLodaing={isLodaing}
                    type='submit'
                    className='bg-primary-900 text-primary-50 font-semibold text-base min-h-[50px] max-w-[150px] my-4'
                >
                    Edit
                </DButton>
            </form>
        </div>
    )
}

export default EditFormCategory
