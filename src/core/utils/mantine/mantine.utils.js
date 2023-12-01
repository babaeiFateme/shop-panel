import rtlPlugin from 'stylis-plugin-rtl'

const ltrCacheObject = {
    key: 'mantine-rtl',
    stylisPlugins: [rtlPlugin],
}

const rtlCacheObject = {
    key: 'mantine-ltr',
}

export { ltrCacheObject, rtlCacheObject }
