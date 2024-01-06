"use client"
import React, { createContext, useState } from "react"

export interface AuthContextProps {
  authStatus: boolean
  setAuthStatus: (authStatus: boolean) => void
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authStatus, setAuthStatus] = useState(false)

  const handleSetAuthStatus = (status: boolean) => {
    setAuthStatus(status)
  }

  const contextValue: AuthContextProps = {
    authStatus,
    setAuthStatus: handleSetAuthStatus,
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export default AuthContext
