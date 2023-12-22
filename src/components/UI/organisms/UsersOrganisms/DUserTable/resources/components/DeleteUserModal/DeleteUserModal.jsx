import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'

import { DButton, DModal } from '@components/UI/atoms/client'

import { deleteUserHttp } from '@core/services/api'

const DeleteUserModal = ({ opened, close, user }) => {
    const queryClient = new useQueryClient()
    const { mutate, isLoading } = useMutation({
        mutationFn: () => deleteUserHttp(user.id),
        onSuccess: (response) => {
            if (response.status == 200) {
                toast.info('delete success , (*__*)')
                queryClient.invalidateQueries('users')
                close()
            }
        },
    })
    return (
        <DModal onClose={close} opened={opened} title='delete user' centered>
            Are you sure delete <span className='text-red-600'>{user.name}</span> ?
            <div className='flex flex-wrap gap-3 items-center mt-4'>
                <DButton loading={isLoading} color='red' type='button' onClick={() => mutate()}>
                    Delete
                </DButton>
                <DButton color='gray' onClick={close}>
                    Cancel
                </DButton>
            </div>
        </DModal>
    )
}

export default DeleteUserModal
