import { Stepper } from '@mantine/core'

const DStepperStep = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Stepper.Step className={`AddYourDefaultStylesHere ${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Stepper.Step>
    )
}

export default DStepperStep
