import { Collapse } from '@mantine/core'

const DCollapse = ({ children, className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Collapse className={`AddYourDefaultStylesHere ${className}`} {...rest}>
            {children}
        </Collapse>
    )
}

export default DCollapse
