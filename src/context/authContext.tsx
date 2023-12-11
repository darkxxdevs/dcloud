"use client"
import { createContext, useState, FC, ReactNode } from "react"

interface AuthContextProps {
  authStatus: boolean
  setAuthStatus: (status: boolean) => void
}

const authContext = createContext<AuthContextProps>({
  authStatus: false,
  setAuthStatus: () => {},
})

export const AuthContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authStatus, setAuthStatus] = useState<boolean>(false)

  const updateAuthStatus = (status: boolean) => {
    setAuthStatus(status)
  }

  const contextValue: AuthContextProps = {
    authStatus,
    setAuthStatus: updateAuthStatus,
  }

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  )
}

export default authContext
