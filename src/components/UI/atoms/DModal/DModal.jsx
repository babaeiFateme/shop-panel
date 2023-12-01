import { Modal } from '@mantine/core'

const DModal = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     */
    return (
        <Modal
            dir='rtl'
            closeOnClickOutside={false}
            transitionProps={{ transition: 'slide-down', duration: 300 }}
            className={` ${className}`}
            classNames={{
                ...classNames,
                inner: 'p-3 sm:pt-10 z-[1100]',
                overlay: 'z-[1000]',
                content: 'border rounded-lg shadow-none',
                header: 'border-b flex-row',
                title: '!text-lg sm:!text-xl md:!text-2xl font-bold',
                body: 'p-4',
            }}
            styles={{
                close: {},
            }}
            {...rest}
        >
            {children}
        </Modal>
    )
}

export default DModal
