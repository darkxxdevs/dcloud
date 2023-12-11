"use client"

import React from "react"
import useAuth from "@/hooks/useAuth"
import { useRouter } from "next/navigation"

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const authStatus = useAuth()

  if (!authStatus) {
    router.push("/auth/login")
    return <></>
  }

  return children
}

export default ProtectedLayout
