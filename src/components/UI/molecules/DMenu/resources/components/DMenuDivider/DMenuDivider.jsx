import { Menu } from '@mantine/core'

const DMenuDivider = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Menu.Divider className={`AddYourDefaultStylesHere ${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Menu.Divider>
    )
}

export default DMenuDivider
