import { Slider } from '@mantine/core'

const DSlider = ({ className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return <Slider className={`AddYourDefaultStylesHere ${className}`} classNames={{ ...classNames }} {...rest} />
}

export default DSlider
