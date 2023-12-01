import { Pagination } from '@mantine/core'

const DPagination = ({ className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Note that we are not gonna use the Compound pagination format. Just using Regular pagination.
     */
    return <Pagination className={`AddYourDefaultStylesHere ${className}`} classNames={{ ...classNames }} {...rest} />
}

export default DPagination
