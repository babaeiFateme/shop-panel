import { Rating } from '@mantine/core'

const DRating = ({ className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return <Rating className={`AddYourDefaultStylesHere ${className}`} classNames={{ ...classNames }} {...rest} />
}

export default DRating
