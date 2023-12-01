import { Select } from '@mantine/core'

import { DSpinner } from '../client'

const DSelect = ({ className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Select

            className={`AddYourDefaultStylesHere ${className}`}
            classNames={{
                input: 'py-2 px-4 text-base h-auto font-medium rounded-md',
                label: 'text-base font-semibold text-blackText',
                ...classNames,
            }}
            {...rest}
            nothingFound={<DSpinner />}
        />
    )
}

export default DSelect
