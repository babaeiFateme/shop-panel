import { Accordion } from '@mantine/core'

const DAccordionPanel = ({ children, className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Accordion.Panel className={`AddYourDefaultStylesHere ${className}`} {...rest}>
            {children}
        </Accordion.Panel>
    )
}

export default DAccordionPanel
