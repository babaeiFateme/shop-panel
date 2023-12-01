import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const useUserStore = create(
    persist(
        (set) => ({
            isEmpty: true,
            data: {},
            addUser: (userData) => set({ data: userData, isEmpty: false }),
            removeUser: () => set({ data: {}, isEmpty: true }),
        }),
        {
            name: 'user-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
)

export { useUserStore }
