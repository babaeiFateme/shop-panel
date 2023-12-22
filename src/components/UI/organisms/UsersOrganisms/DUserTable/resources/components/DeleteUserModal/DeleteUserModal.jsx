import React from 'react'

import { DModal } from '@components/UI/atoms/client'

const DeleteUserModal = ({ opened, close, user }) => {
    return (
        <DModal onClose={close} opened={opened} title='delete user' centered>
            fsdfsdfsd
        </DModal>
    )
}

export default DeleteUserModal
