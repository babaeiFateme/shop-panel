import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'

import { DModal } from '@components/UI/atoms/client'

import { editUserHttp } from '@core/services/api'
import { userEditValidation } from '@core/utils'

const EditUserModal = ({ closeEdit, openedEdit, user }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userEditValidation),
    })
    const { mutate, isLoading } = useMutation({
        mutationFn: () => editUserHttp(),
    })
    const onSubmit = (data) => {
        mutate(data)
    }
    return (
        <DModal onClose={closeEdit} opened={openedEdit} title='edit user'>
            <form onSubmit={handleSubmit(onSubmit)}></form>
            {user.name}
        </DModal>
    )
}

export default EditUserModal
