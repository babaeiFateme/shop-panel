import { Menu } from '@mantine/core'

import { DMenuDivider, DMenuDropdown, DMenuItem, DMenuLabel, DMenuTarget } from './resources'

/**
 * You Cannot access .Notation selector from a client module on the server component. You can only pass the imported name through.
 * Make sure to use this component inside a client component instead of server component.
 */

const DMenu = ({ children, classNames, ...rest }) => {
    /**
     * Combining classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Menu classNames={{ ...classNames }} {...rest}>
            {children}
        </Menu>
    )
}

DMenu.Divider = DMenuDivider

DMenu.Dropdown = DMenuDropdown

DMenu.Item = DMenuItem

DMenu.Label = DMenuLabel

DMenu.Target = DMenuTarget

export default DMenu
