// Set an item in the session storage.
const setSessionStorageItem = (key, value) => {
    const stringifyValue = JSON.stringify(value)
    sessionStorage.setItem(key, stringifyValue)
}

// Get an item from the session storage. Returns the item if found, otherwise false.
const getSessionStorageItem = (key) => {
    const value = sessionStorage.getItem(key)
    return value ? JSON.parse(value) : false
}

// Remove an item from the session storage. Returns true if removed, otherwise false.
const removeSessionStorageItem = (key) => {
    if (getSessionStorageItem(key)) {
        sessionStorage.removeItem(key)
        return true
    }
    return false
}

// Clear all items from the session storage.
const clearSessionStorage = () => {
    sessionStorage.clear()
}

export { setSessionStorageItem, getSessionStorageItem, removeSessionStorageItem, clearSessionStorage }
