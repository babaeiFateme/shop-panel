import { Controller, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'

import { DButton, DModal, DPasswordInput, DTextInput } from '@components/UI/atoms/client'
import { DInputField } from '@components/UI/molecules/client'

import { editUserHttp } from '@core/services/api'
import { userEditValidation } from '@core/utils'

const EditUserModal = ({ closeEdit, openedEdit, user }) => {
    console.log(user)
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userEditValidation),
    })
    const { mutate, isLoading } = useMutation({
        mutationFn: (data) => editUserHttp(data, user.id),
    })
    const onSubmit = async (data) => {
        mutate(data)
    }
    return (
        // <DModal fullScreen onClose={closeEdit} opened={openedEdit} title='edit user'>
        <form onSubmit={handleSubmit(onSubmit)} className='block md:grid md:grid-cols-2 md:gap-4'>
            <DInputField defaultValue={user?.name} errors={errors} fieldName={'fname'} className='col-span-2'>
                <Controller
                    name={'fname'}
                    control={control}
                    defaultValue={user?.name}
                    render={({ field }) => <DTextInput label='Title' {...field} withAsterisk />}
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

            <DInputField defaultValue={user?.email} errors={errors} fieldName={'email'} className='col-span-2'>
                <Controller
                    name={'email'}
                    control={control}
                    defaultValue={user?.email}
                    render={({ field }) => <DTextInput label='Description' {...field} withAsterisk />}
                />
            </DInputField>
            <DButton
                type='submit'
                className='bg-primary-900 text-primary-50 font-semibold text-base min-h-[50px] max-w-[150px] my-4'
            >
                Edit
            </DButton>
        </form>
        // </DModal>
    )
}

export default EditUserModal
