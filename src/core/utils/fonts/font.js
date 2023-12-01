import localFont from 'next/font/local'

export const yekan = localFont({
    src: [
        {
            path: '../../../../public/fonts/YekanBakhFaNum01Hairline.woff',
            weight: '100',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/YekanBakhFaNum02Thin.woff',
            weight: '200',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/YekanBakhFaNum03Light.woff',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/YekanBakhFaNum04Regular.woff',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/YekanBakhFaNum05Medium.woff',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/YekanBakhFaNum06Bold.woff',
            weight: '600',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/YekanBakhFaNum07Heavy.woff',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../../../public/fonts/YekanBakhFaNum08Fat.woff',
            weight: '800',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-yekan',
})
