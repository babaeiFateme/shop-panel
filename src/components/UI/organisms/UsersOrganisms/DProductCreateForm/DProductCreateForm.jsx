'use client'

import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { FileInput } from '@mantine/core'
import { yupResolver } from '@hookform/resolvers/yup'

import { DButton, DTextArea, DTextInput } from '@components/UI/atoms/client'
import { DInputField } from '@components/UI/molecules/client'

import { createProductHttp } from '@core/services/api'
import { productCreateValidation } from '@core/utils'

const DProductCreateForm = () => {
    const route = useRouter()

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            title: "",
            description: "",
            price: "",
            categoryId: "",
        },
        resolver: yupResolver(productCreateValidation),
    })

    const { mutate, isLoading } = useMutation({
        mutationFn: (data) => createProductHttp(data),
        onSuccess: (response) => {
            console.log(response,'response')
            if(response.status ==201){
                route.push("/dashboard/products")
                toast.success("done! Youre product create .")
            }
        },
        onError: (error) => {
            console.log(error)
            // toast.error(error.message)
        },
    })
    const onSubmit = (data) => {
        mutate(data)
        data.images=["https://placeimg.com/640/480/any","https://placeimg.com/640/480/any"]
       
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
                    <DInputField errors={errors} fieldName={'categoryId'}>
                        <Controller
                            name={'categoryId'}
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
