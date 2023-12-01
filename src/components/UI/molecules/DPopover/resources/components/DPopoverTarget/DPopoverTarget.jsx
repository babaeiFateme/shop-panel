import { Popover } from '@mantine/core'

const DPopoverTarget = ({ children, ...rest }) => {
    return <Popover.Target {...rest}>{children}</Popover.Target>
}

export default DPopoverTarget
