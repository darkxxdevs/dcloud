"use client"
import appwriteService from "@/appwrite/appwrite"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"
import { useContext } from "react"
import { AuthContext } from "@/context/authContext"

export default function Logout() {
  const router = useRouter()
  const { setLoggedIn } = useContext(AuthContext)

  useEffect(() => {
    appwriteService
      .logout()
      .then(() => {
        setLoggedIn(false)
        router.replace("/auth/login")
      })
      .catch((error) => {
        console.error("Error logging out :", error)
      })
  }, [])

  return <></>
}
