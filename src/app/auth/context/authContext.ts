import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react"
import { account } from "@/app/appwrite/appwrite"

interface authContextProps {
  isLoggedIn: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<authContextProps | undefined>(undefined)


export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const isLoggedIn = await account.get()
        setIsLoggedIn(!!isLoggedIn)
      } catch (error) {
        console.error("Error checking login status:", error)
      }
    }

    checkLoginStatus()
  }, [])

  const logout = async () => {
    try {
      await account.deleteSession("current")
      setIsLoggedIn(false)
    } catch (error) {
      console.error("Error logging out:", error)
    }
  }


  return {
    <>
      {children}
    </>
  }

  
}
