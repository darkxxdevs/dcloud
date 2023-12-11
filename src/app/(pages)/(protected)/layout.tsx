"use client"
import { useEffect } from "react"
import useAuth from "@/hooks/useAuth"
import { useRouter } from "next/navigation"

import React from "react"

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const { authStatus } = useAuth()

  useEffect(() => {
    if (!authStatus) {
      router.replace("/auth/login")
    }
  }, [authStatus, router])

  return children
}

export default ProtectedLayout
