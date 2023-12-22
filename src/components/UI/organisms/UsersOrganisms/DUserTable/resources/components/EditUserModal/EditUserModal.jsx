import { DModal } from '@components/UI/atoms/client'

const EditUserModal = ({ close, opened, user }) => {
    return (
        <DModal onClose={close} opened={opened} title='edit user'>
            {user.name}
        </DModal>
    )
}

export default EditUserModal
