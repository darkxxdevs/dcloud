"use client"
import appwriteService from "@/appwrite/appwrite"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"
import useAuth from "@/context/useAuth"

export default function Logout() {
  const router = useRouter()
  const { authStatus, setAuthStatus } = useAuth()

  useEffect(() => {
    appwriteService
      .logout()
      .then(() => {
        setAuthStatus(false)
        router.replace("/auth/login")
      })
      .catch((error) => {
        console.error("Error logging out :", error)
      })
  }, [])

  return <></>
}
