import { MultiSelect } from '@mantine/core'

const DMultiSelect = ({ className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return <MultiSelect className={`AddYourDefaultStylesHere ${className}`} classNames={{ ...classNames }} {...rest} />
}

export default DMultiSelect
