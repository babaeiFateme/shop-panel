import { Accordion } from '@mantine/core'

const DAccordionControl = ({ children, className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Accordion.Control className={`AddYourDefaultStylesHere ${className}`} {...rest}>
            {children}
        </Accordion.Control>
    )
}

export default DAccordionControl
