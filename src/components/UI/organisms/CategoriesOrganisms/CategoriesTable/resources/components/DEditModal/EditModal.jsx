import React from 'react'

import { DModal } from '@components/UI/atoms/client'

import { EditFormCategory } from './resources'

const EditModal = ({ onCloseEdit, category, isShow }) => {
    return (
        <DModal onClose={onCloseEdit} opened={isShow} size='xl' className=''>
            <EditFormCategory category={category} onCloseEdit={onCloseEdit} />
        </DModal>
    )
}

export default EditModal
