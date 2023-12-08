'use client'

import Image from 'next/image'
import { Controller, useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'

import { DButton, DPasswordInput, DTextInput } from '@components/UI/atoms/client'
import { DInputField } from '@components/UI/molecules/client'

import { profileHttp } from '@core/services/api'
import { profileValidation } from '@core/utils'
const ProfileTemplate = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(profileValidation),
    })

    const { data: profileInfo, isSuccess } = useQuery({
        queryFn: (token) => profileHttp(token),
        onError: (error) => {
            console.log(error)
        },
    })

    const onSubmit = () => {
        toast.success('edit profile')
    }

    if (isSuccess)
        return (
            <div className='h-auto'>
                <div className='flex flex-col md:flex-row flex-wrap gap-5'>
                    <Image
                        src={profileInfo.data.avatar}
                        alt='profile'
                        width={300}
                        height={300}
                        className='w-full max-w-[300px] h-auto rounded-lg block'
                    />

                    <div className='p-3 grow '>
                        <ul className='font-semibold grig-cols-1 md:grid grid-cols-2'>
                            <li className='flex flex-wrap gap-1 mb-5'>
                                <span className='text-gray-300 text-lg'>Name:</span>
                                <span className='text-xl'>{profileInfo?.data.name}</span>
                            </li>
                            <li className='flex flex-wrap gap-1 mb-5'>
                                <span className='text-gray-300 text-xl'>Role:</span>
                                <span className='text-xl'>{profileInfo?.data.role}</span>
                            </li>
                            <li className='flex flex-wrap gap-1 mb-5'>
                                <span className='text-gray-300 text-lg'>Email:</span>
                                <span className='text-xl'>{profileInfo?.data.email}</span>
                            </li>
                            <li className='flex flex-wrap gap-1 mb-5'>
                                <span className='text-gray-300 text-lg'>Password:</span>
                                <span className='text-xl'>{profileInfo?.data.password}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mt-8'>
                    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <DInputField defaultValue={profileInfo?.data?.name} errors={errors} fieldName={'fname'}>
                            <Controller
                                name={'fname'}
                                control={control}
                                defaultValue={profileInfo?.data.name}
                                render={({ field }) => <DTextInput withAsterisk label={'Name'} {...field} />}
                            />
                        </DInputField>
                        <DInputField defaultValue={profileInfo?.data?.role} errors={errors} fieldName={'role'}>
                            <Controller
                                name={'role'}
                                control={control}
                                defaultValue={profileInfo?.data.role}
                                render={({ field }) => <DTextInput label={'Role'} withAsterisk {...field} />}
                            />
                        </DInputField>
                        <DInputField defaultValue={profileInfo?.data?.email} errors={errors} fieldName={'email'}>
                            <Controller
                                name={'email'}
                                defaultValue={profileInfo?.data?.email}
                                control={control}
                                render={({ field }) => <DTextInput label={'Email'} withAsterisk {...field} />}
                            />
                        </DInputField>
                        <DInputField defaultValue={profileInfo?.data?.password} errors={errors} fieldName={'password'}>
                            <Controller
                                name={'password'}
                                control={control}
                                defaultValue={profileInfo?.data?.password}
                                render={({ field }) => <DPasswordInput label={'Password'} withAsterisk {...field} />}
                            />
                        </DInputField>
                        <DButton type='submit' className='mt-4 max-w-[100px] bg-slate-900 w-full text-white h-[45px]'>
                            Edit
                        </DButton>
                    </form>
                </div>
            </div>
        )
}

export default ProfileTemplate
