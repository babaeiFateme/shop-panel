import React from 'react'
import { useMutation } from 'react-query'
import { toast } from 'react-toastify'

import { DButton, DModal } from '@components/UI/atoms/client'

import { deleteHttp } from '@core/services/api'
const DeleteModal = ({ onClose, isShow, id }) => {
    console.log(id, 'modal')

    const { mutate, data, isLoading } = useMutation({
        mutationFn: (data) => deleteHttp(data),
        onSuccess: (response) => {
            if (response.status == 200) {
                toast.error('You are delete product.')
            }
            
        },
    })
    const x = () => {
        console.log(id, typeof id, 'on modal')
        console.log(333)
        mutate(id)
    }
    return (
        <DModal title='!!! delete product !!!' onClose={onClose} opened={isShow}>
            <div>
                <h3>Are you sure delete this product ?</h3>
                <DButton
                    type='button'
                    onClick={() => x()}
                    // loading={isLoading}
                    radius='md'
                    className='mt-3 bg-red-600 text-white h-[45px] w-fit mr-auto ml-auto sm:mr-0'
                >
                    Delete
                </DButton>
            </div>
        </DModal>
    )
}

export default DeleteModal
