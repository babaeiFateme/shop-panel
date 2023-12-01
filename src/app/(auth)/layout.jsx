import React from 'react'

const layout = ({ children }) => {
    return (
        <div className='mx-auto bg-gray-50 min-h-[100vh] flex justify-center items-center p-[16px] w-full'>
            {children}
        </div>
    )
}

export default layout
