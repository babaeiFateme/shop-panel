import { Menu } from '@mantine/core'

const DMenuLabel = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Menu.Label className={`AddYourDefaultStylesHere ${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Menu.Label>
    )
}

export default DMenuLabel
