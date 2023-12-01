import { Autocomplete } from '@mantine/core'

const DAutoComplete = ({ className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return <Autocomplete className={`AddYourDefaultStylesHere ${className}`} classNames={{ ...classNames }} {...rest} />
}

export default DAutoComplete
