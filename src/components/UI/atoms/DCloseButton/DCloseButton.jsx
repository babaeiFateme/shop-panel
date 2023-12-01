import { CloseButton } from '@mantine/core'

const DCloseButton = ({ className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return <CloseButton className={`AddYourDefaultStylesHere ${className}`} {...rest} />
}

export default DCloseButton
