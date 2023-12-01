import { Tabs } from '@mantine/core'

import { DTabsList, DTabsPanel, DTabsTab } from './resources'

/**
 * You Cannot access .Notation selector from a client module on the server component. You can only pass the imported name through.
 * Make sure to use this component inside a client component instead of server component.
 */

const DTabs = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Tabs
            className={` ${className}`}
            classNames={{ tabsList: 'justify-center', tabLabel: 'text-base font-semibold', ...classNames }}
            {...rest}
        >
            {children}
        </Tabs>
    )
}

DTabs.Panel = DTabsPanel

DTabs.List = DTabsList

DTabs.Tab = DTabsTab

export default DTabs
