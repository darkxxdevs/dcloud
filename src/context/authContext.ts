import { createContext, useState } from "react"

export const AuthContext = createContext<{
  authStatus: boolean
  setAuthStatus: (status: boolean) => void
}>({
  authStatus: false,
  setAuthStatus: () => {},
})

const AuthProvider = AuthContext.Provider

export default AuthContext
