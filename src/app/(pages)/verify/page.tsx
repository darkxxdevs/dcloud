"use client"
import appwriteService from "@/appwrite/appwrite"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

export default function Verify() {
  const router = useRouter()

  useEffect(() => {
    appwriteService
      .updateUserVerification()
      .then(() => {
        router.replace("/auth/login")
      })
      .catch((error) => {
        console.error("Error updating user verification :", error)
      })
  }, [])

  return <></>
}
