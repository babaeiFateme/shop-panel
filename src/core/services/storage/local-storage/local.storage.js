// Set an item in the local storage.
const setLocalStorageItem = (key, value) => {
    const stringifyValue = JSON.stringify(value)
    localStorage.setItem(key, stringifyValue)
}

// Get an item from the local storage. Returns the item if found, otherwise false.
const getLocalStorageItem = (key) => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : false
}

// Remove an item from the local storage. Returns true if removed, otherwise false.
const removeLocalStorageItem = (key) => {
    if (localStorage.getItem(key)) {
        localStorage.removeItem(key)
        return true
    }
    return false
}

// Clear all items from the local storage.
const clearLocalStorage = () => {
    localStorage.clear()
}

export { setLocalStorageItem, getLocalStorageItem, removeLocalStorageItem, clearLocalStorage }
