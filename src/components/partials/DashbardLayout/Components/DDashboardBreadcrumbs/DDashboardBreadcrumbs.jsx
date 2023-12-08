import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const DDashboardBreadcrumbs = () => {
    let path = usePathname()
    path = path.split('/')
    console.log(path, 'side')

    return (
        <div className='mb-6 font-semibold'>
            {path.map((item, index) =>
                index !== 0 && index !== path.length - 1 ? (
                    <Link key={item} href={`/${item}`}>
                        {item} /
                    </Link>
                ) : (
                    <span className='text-blue-600' key={item}>
                        {' ' + item}
                    </span>
                )
            )}
        </div>
    )
}

export default DDashboardBreadcrumbs
