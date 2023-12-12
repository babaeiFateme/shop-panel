import { Poppins } from '@core/utils/fonts/font'

import '@styles/globals.css'

import Providers from './Providers/Providers'

export const metadata = {
    title: 'shop',
    description: 'Shop for test',
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en' className={Poppins.variable}>
            <body dir='ltr'>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}

export default RootLayout
