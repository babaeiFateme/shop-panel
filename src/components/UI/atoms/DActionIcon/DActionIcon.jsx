import { ActionIcon } from '@mantine/core'

const DActionIcon = ({ children, className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <ActionIcon className={`AddYourDefaultStylesHere ${className}`} {...rest}>
            {children}
        </ActionIcon>
    )
}

export default DActionIcon
