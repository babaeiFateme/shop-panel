import { LoadingOverlay } from '@mantine/core'

const DLoadingOverlay = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <LoadingOverlay className={`AddYourDefaultStylesHere ${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </LoadingOverlay>
    )
}

export default DLoadingOverlay
