import React from 'react'

import { DModal } from '@components/UI/atoms/client'

import { DEditFormProduct } from './resources'

const DEditModal = ({ onCloseEdit, product, isShow }) => {
    return (
        <DModal onClose={onCloseEdit} opened={isShow} size='xl' className=''>
            <DEditFormProduct product={product} onCloseEdit={onCloseEdit} />
        </DModal>
    )
}

export default DEditModal
