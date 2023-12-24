import { Controller, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'

import { DButton, DModal, DPasswordInput, DTextInput } from '@components/UI/atoms/client'
import { DInputField } from '@components/UI/molecules/client'

import { editUserHttp } from '@core/services/api'
import { userEditValidation } from '@core/utils'

const EditUserModal = ({ closeEdit, openedEdit, user }) => {
    const queryClient = new useQueryClient()
    console.log(user)
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userEditValidation),
    })
    const id = user.id
    const { mutate, isLoading } = useMutation({
        mutationFn: (data) => editUserHttp({ data, id }),
        onSuccess: (response) => {
            console.log(response)
            if (response.status == 200) {
                queryClient.invalidateQueries('users')
                toast.success('update user success')
                closeEdit(false)
            }
        },
    })
    const onSubmit = async (data) => {
        console.log(90)
        mutate(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <DInputField defaultValue={user?.name} errors={errors} fieldName={'name'}>
                <Controller
                    name={'name'}
                    control={control}
                    defaultValue={user?.name}
                    render={({ field }) => <DTextInput label='FirstName' {...field} withAsterisk />}
                />
            </DInputField>

            <DInputField defaultValue={user?.role} errors={errors} fieldName={'role'}>
                <Controller
                    name={'role'}
                    control={control}
                    defaultValue={user?.role}
                    render={({ field }) => <DTextInput label='Role' {...field} withAsterisk />}
                />
            </DInputField>

            <DInputField defaultValue={user?.email} errors={errors} fieldName={'email'}>
                <Controller
                    name={'email'}
                    control={control}
                    defaultValue={user?.email}
                    render={({ field }) => <DTextInput label='Email' {...field} withAsterisk />}
                />
            </DInputField>
            <DInputField defaultValue={user?.password} errors={errors} fieldName={'password'}>
                <Controller
                    name={'password'}
                    control={control}
                    defaultValue={user?.password}
                    render={({ field }) => <DPasswordInput label='Password' {...field} withAsterisk />}
                />
            </DInputField>
            <div className='flex gap-3'>
                <DButton
                    loading={isLoading}
                    type='submit'
                    className='bg-primary-900 text-primary-50 font-semibold text-base min-h-[50px] max-w-[150px] my-4'
                >
                    Edit
                </DButton>
                <DButton
                    onClick={() => closeEdit(false)}
                    className='bg-gray-400 text-primary-50 font-semibold text-base min-h-[50px] max-w-[150px] my-4'
                >
                    Cancel
                </DButton>
            </div>
        </form>
    )
}

export default EditUserModal
