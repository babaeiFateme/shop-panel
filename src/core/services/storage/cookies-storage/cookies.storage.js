const setCookieStorageItem = (name, value, options) => {
    const cookieValue = typeof value === 'object' ? JSON.stringify(value) : value

    let cookieString = `${name}=${encodeURIComponent(cookieValue)}; path=/`

    if (options?.expires) {
        const expiresDate = new Date(Date.now() + options.expires).toUTCString()
        cookieString += `; Expires=${expiresDate}`
    }

    if (options?.secure) cookieString += '; Secure'
    if (options?.sameSite) cookieString += `; SameSite=${options.sameSite}`

    document.cookie = cookieString
}

const getCookieStorageItem = (name) => {
    // Split and process cookies to find the desired one by name.
    const cookies = document.cookie.split(';').map((cookie) => cookie.trim().split('='))
    const cookie = cookies.find((cookie) => cookie[0] === name)

    if (cookie) {
        const value = decodeURIComponent(cookie[1])
        try {
            return JSON.parse(value) // Attempt to parse JSON, if applicable.
        } catch (error) {
            return value // Return as-is if parsing fails.
        }
    }

    return null // Return null if the cookie doesn't exist.
}

const removeCookieStorageItem = (name) => {
    // Set the cookie's expiration date to an earlier time to effectively remove it.
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`
}

const clearCookieStorage = () => {
    // Retrieve all cookies as a single string and split them into an array.
    const cookies = document.cookie.split(';')

    // Iterate through each cookie in the array.
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i]
        const eqPos = cookie.indexOf('=')

        // Extract the cookie name (and value if present).
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie

        // Expire the cookie by setting its expiration date to the past.
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
    }
}

export { setCookieStorageItem, getCookieStorageItem, removeCookieStorageItem, clearCookieStorage }
