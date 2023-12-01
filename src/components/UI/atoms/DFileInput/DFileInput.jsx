import { FaUpload } from 'react-icons/fa6'
import { FileInput } from '@mantine/core'

const DFileInput = ({ className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <FileInput
            accept='image/png, image/jpg, image/jpeg,application/pdf'
            placeholder='آپلود فایل'
            className={` ${className}`}
            rightSection={<FaUpload />}
            classNames={{
                label: 'font-semibold text-base',
                placeholder: 'text-black font-medium text-base',
                rightSection: 'text-gray-300',
                input: 'py-2 px-4 border-dashed',
                ...classNames,
            }}
            description='فایل با فرمت‌های pdf، png، jpeg و jpg قابل قبول است'
            {...rest}
        />
    )
}

export default DFileInput
