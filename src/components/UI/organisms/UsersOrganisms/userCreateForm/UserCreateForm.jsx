'use client'

import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'

import { DButton, DPasswordInput, DTextInput } from '@components/UI/atoms/client'
import { DInputField } from '@components/UI/molecules/client'

import { createUserHttp } from '@core/services/api'
import { userCreateValidation } from '@core/utils'

import logo from '@public/images/create.png'
import Image from 'next/image'
const UserCreateForm = () => {
    const route = useRouter()

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
        resolver: yupResolver(userCreateValidation),
    })

    const { mutate, isLoading } = useMutation({
        mutationFn: (data) => createUserHttp(data),
        onSuccess: (response) => {
            console.log(response, 'response')
            if (response.status == 201) {
                route.push('/dashboard/users')
                toast.success(`done! you create user ${response.data.name} .`)
            }
        },
        onError: (error) => {
            console.log(error)
            // toast.error(error.message)
        },
    })
    const onSubmit = (data) => {
        mutate(data)
        data.avatar = 'https://placeimg.com/640/480/any'
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='w-full max-w-[700px]  p-6 gap-6 bg-white'>
                    <div>
                        <Image src={logo} alt='lara' className='max-w-[260px] md:max-w-[400px] block mx-auto mb-2' />
                    </div>
                    <div>
                        <DInputField errors={errors} fieldName={'name'}>
                            <Controller
                                name={'name'}
                                control={control}
                                render={({ field }) => <DTextInput label={'Name'} withAsterisk {...field} />}
                            />
                        </DInputField>
                        <DInputField errors={errors} fieldName={'email'}>
                            <Controller
                                name={'email'}
                                control={control}
                                render={({ field }) => <DTextInput label={'Email'} withAsterisk {...field} />}
                            />
                        </DInputField>
                        <DInputField errors={errors} fieldName={'role'}>
                            <Controller
                                name={'role'}
                                control={control}
                                render={({ field }) => <DTextInput label={'Role'} withAsterisk {...field} />}
                            />
                        </DInputField>
                        <DInputField errors={errors} fieldName={'password'}>
                            <Controller
                                name={'password'}
                                control={control}
                                render={({ field }) => <DPasswordInput label={'Password'} withAsterisk {...field} />}
                            />
                        </DInputField>
                        <DButton
                            type='submit'
                            loading={isLoading}
                            className='mt-4 bg-slate-900 w-full text-white h-[45px] max-w-[150px]'
                        >
                            create
                        </DButton>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserCreateForm
