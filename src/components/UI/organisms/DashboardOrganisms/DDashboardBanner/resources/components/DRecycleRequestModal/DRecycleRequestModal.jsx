import { Controller, useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { DButton, DModal, DTextInput } from '@components/UI/atoms/client'
import { DInputField } from '@components/UI/molecules/client'

import { addNewRequestHttp } from '@core/services/api'

const DRecycleRequestModal = ({ onClose, isShow }) => {
    const schema = yup.object({
        description: yup.string().required('مقدار توضیحات الزامی است'),
    })

    const {
        handleSubmit,
        control,
        formState: { errors },
        setError,
    } = useForm({
        defaultValues: {
            ...schema.getDefault(),
        },
        resolver: yupResolver(schema),
    })

    const { mutate, isLoading } = useMutation({
        mutationFn: (data) => addNewRequestHttp(data),
        onError: (error) => {
            const parseError = JSON.parse(error.message)

            //set error from backend for that certain field
            for (const singleError in parseError.error) {
                setError(singleError, { message: parseError.error[singleError] })
            }
        },
        onSuccess: () => {
            //close modal after add request successfully
            onClose()
        },
    })

    const onSubmit = (data) => {
        mutate(data)
    }

    return (
        <DModal title='ثبت درخواست جدید' onClose={onClose} opened={isShow}>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)} method='post'>
                <DInputField errors={errors} fieldName={'description'}>
                    <Controller
                        name={'description'}
                        control={control}
                        defaultValue=''
                        render={({ field: { name, value, onChange } }) => (
                            <DTextInput label={'توضیحات'} name={name} onChange={onChange} value={value} />
                        )}
                    />
                </DInputField>
                <DButton
                    type='submit'
                    loading={isLoading}
                    radius='md'
                    className='mt-3 bg-secondary text-white h-[45px] w-fit mr-auto ml-auto sm:mr-0'
                >
                    ثبت درخواست{' '}
                </DButton>
            </form>
        </DModal>
    )
}

export default DRecycleRequestModal
