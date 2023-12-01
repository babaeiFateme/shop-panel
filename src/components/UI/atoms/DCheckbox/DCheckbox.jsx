import { Checkbox } from '@mantine/core'

const DCheckbox = ({ className = '', classNames, icon, label, field, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Checkbox
            label={
                <div className='flex items-start justify-start gap-1 w-full'>
                    {icon}
                    <span className='text-base font-medium mb-1 text-blackText'>{label}</span>
                </div>
            }
            className={`AddYourDefaultStylesHere ${className}`}
            classNames={{ ...classNames }}
            {...rest}
            {...field}
        />
    )
}

export default DCheckbox
