import { PasswordInput } from '@mantine/core'
import { forwardRef } from 'react'
const DPasswordInput = forwardRef(({ className = '', classNames, ...rest }, ref) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <PasswordInput
            className={`${className}`}
            classNames={{
                ...classNames,
                label: 'text-base font-semibold text-blackText ',
                input: 'py-2 min-h-[50px] px-4 text-base h-auto font-medium rounded-md',
            }}
            ref={ref}
            {...rest}
        />
    )
})

export default DPasswordInput
