import { create } from "zustand"
import { persist } from "zustand/middleware"

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      isLoggedIn: false,

      login: (token) =>
        set({
          token: token,
          isLoggedIn: true,
        }),

      logout: () =>
        set({
          token: null,
          isLoggedIn: false,
        }),
    }),
    {
      name: "toshconsult-admin",
    }
  )
)

export default useAuthStore