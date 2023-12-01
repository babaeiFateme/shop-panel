import { Chip } from '@mantine/core'

const DChip = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Chip className={`AddYourDefaultStylesHere ${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Chip>
    )
}

export default DChip
