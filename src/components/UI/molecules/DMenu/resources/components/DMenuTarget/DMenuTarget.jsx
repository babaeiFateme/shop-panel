import { Menu } from '@mantine/core'

const DMenuTarget = ({ children, ...rest }) => {
    return <Menu.Target {...rest}>{children}</Menu.Target>
}

export default DMenuTarget
