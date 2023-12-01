import { Tabs } from '@mantine/core'

const DTabsTab = ({ children, className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Tabs.Tab className={`AddYourDefaultStylesHere ${className}`} {...rest}>
            {children}
        </Tabs.Tab>
    )
}

export default DTabsTab
