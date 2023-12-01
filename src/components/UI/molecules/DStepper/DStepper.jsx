import { Stepper } from '@mantine/core'

import { DStepperCompleted, DStepperStep } from './resources'

/**
 * You Cannot access .Notation selector from a client module on the server component. You can only pass the imported name through.
 * Make sure to use this component inside a client component instead of server component.
 */

const DStepper = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Stepper className={`AddYourDefaultStylesHere ${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Stepper>
    )
}

DStepper.Step = DStepperStep

DStepper.Completed = DStepperCompleted

export default DStepper
