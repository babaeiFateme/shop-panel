import { Textarea } from '@mantine/core'

const DTextArea = ({ className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Textarea
            className={` ${className}`}
            autosize
            minRows={3}
            maxRows={7}
            classNames={{
                ...classNames,
                label: 'w-full text-base font-bold text-blackText',
                input: 'py-2 px-4 text-base h-auto font-medium rounded-md',
            }}
            {...rest}
        />
    )
}

export default DTextArea
