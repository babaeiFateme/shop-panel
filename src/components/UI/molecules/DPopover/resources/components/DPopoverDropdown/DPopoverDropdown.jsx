import { Popover } from '@mantine/core'

const DPopoverDropdown = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Popover.Dropdown className={`AddYourDefaultStylesHere ${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Popover.Dropdown>
    )
}

export default DPopoverDropdown
