import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { toast } from 'react-toastify'

import { DButton, DModal } from '@components/UI/atoms/client'

import { deleteHttp } from '@core/services/api'
const DDeleteModal = ({ onClose, isShow, id }) => {
    const queryClient = new useQueryClient()

    const { mutate, isLoading } = useMutation({
        mutationFn: (data) => deleteHttp(data),
        onSuccess: (response) => {
            if (response.status == 200) {
                queryClient.invalidateQueries('products')
                toast.info(' delete product.')
                onClose(false)
            }
        },
    })

    return (
        <DModal title='!!! delete product !!!' onClose={onClose} opened={isShow}>
            <div>
                <h3>Are you sure delete this product ?</h3>
                <div className='mt-6'>
                    <DButton
                        type='button'
                        onClick={() => mutate(id)}
                        loading={isLoading}
                        radius='md'
                        className='mt-3 bg-red-600 text-white h-[45px] w-fit mr-5 '
                    >
                        Delete
                    </DButton>
                    <DButton
                        type='button'
                        onClick={onClose}
                        radius='md'
                        className='mt-3 bg-gray-600 text-white h-[45px] w-fit '
                    >
                        cancel
                    </DButton>
                </div>
            </div>
        </DModal>
    )
}

export default DDeleteModal
