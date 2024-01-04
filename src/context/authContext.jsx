"use client"
import { createContext, useEffect } from "react"
import appwriteService from "@/appwrite/appwrite"
import { useState } from "react"

const AuthContext = createContext({
  isLoggedIn: false,
  setLoggedIn: (state) => {},
})

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await appwriteService.account.getAccount()
        setIsLoggedIn(response.status === 200)
      } catch (error) {
        console.error(`Error fetching user data for context: ${error}`)
      }
    })()
  }, [])

  const setLoggedIn = (state) => {
    setIsLoggedIn(state)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider, AuthContext }
