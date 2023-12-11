"use client"
import React, { useContext, useEffect } from "react"
import AuthContext from "@/context/authContext"
import { useRouter } from "next/navigation"

export default function Home() {
  const { authStatus } = useContext(AuthContext)
  const router = useRouter()

  if (!authStatus) {
    return <></>
  }

  return (
    <div className="container flex items-center min-w-[100vw] justify-center min-h-[100vh] bg-[#eff1f3]">
      <h1 className="font-bold">Home</h1>
    </div>
  )
}
