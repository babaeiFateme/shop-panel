import { Popover } from '@mantine/core'

import { DPopoverDropdown, DPopoverTarget } from './resources'

/**
 * You Cannot access .Notation selector from a client module on the server component. You can only pass the imported name through.
 * Make sure to use this component inside a client component instead of server component.
 */

const DPopover = ({ children, classNames, ...rest }) => {
    /**
     * Combining classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Popover classNames={{ ...classNames }} {...rest}>
            {children}
        </Popover>
    )
}

DPopover.Target = DPopoverTarget

DPopover.Dropdown = DPopoverDropdown

export default DPopover
