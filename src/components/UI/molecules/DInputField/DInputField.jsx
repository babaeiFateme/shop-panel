import React from 'react'
import { ErrorMessage } from '@hookform/error-message'
const DInputField = ({ children, errors, fieldName, className = '' }) => {
    return (
        <div className={className}>
            {children}
            <ErrorMessage
                errors={errors}
                name={fieldName}
                render={({ message }) => <span className='text-red-400 text-sm font-medium'>{message}</span>}
            />
        </div>
    )
}

export default DInputField
