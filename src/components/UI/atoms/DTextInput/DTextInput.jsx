import { TextInput } from '@mantine/core'

const DTextInput = ({ className = '', classNames, field, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <TextInput
            className={` ${className}`}
            classNames={{
                ...classNames,
                label: 'text-base font-semibold text-blackText ',
                input: 'py-2 px-4 text-base h-auto font-medium rounded-md',
            }}
            {...field}
            {...rest}
        />
    )
}

export default DTextInput
