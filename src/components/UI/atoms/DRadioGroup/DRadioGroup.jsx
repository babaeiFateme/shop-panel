import { Radio } from '@mantine/core'

const DRadioGroup = ({ children, className = '', classNames, field, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Radio.Group
            className={`flex flex-col gap-y-1 ${className}`}
            classNames={{ label: 'text-base font-semibold', ...classNames }}
            {...field}
            {...rest}
        >
            {children}
        </Radio.Group>
    )
}

export default DRadioGroup
