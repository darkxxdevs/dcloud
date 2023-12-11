"use client"
import appwriteService from "@/appwrite/appwrite"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"
import useAuth from "@/hooks/useAuth"

export default function Logout() {
  const router = useRouter()
  const { setAuthStatus } = useAuth()

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
