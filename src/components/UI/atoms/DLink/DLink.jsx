import Link from 'next/link'

const DLink = ({ children, prefetch = false, className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Link prefetch={prefetch} className={`AddYourDefaultStylesHere ${className}`} {...rest}>
            {children}
        </Link>
    )
}

export default DLink
