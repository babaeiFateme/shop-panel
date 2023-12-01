import { Radio } from '@mantine/core'

const DRadio = ({ className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Radio
            className={`font-medium ${className}`}
            classNames={{ body: 'items-base', label: 'text-base ', radio: 'scale-75', ...classNames }}
            {...rest}
        />
    )
}

export default DRadio
