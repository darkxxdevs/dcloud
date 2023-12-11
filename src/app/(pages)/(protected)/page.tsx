"use client"
import React, { useContext } from "react"
import AuthContext from "@/context/authContext"
import { useRouter } from "next/navigation"

export default function Home() {
  const { authStatus } = useContext(AuthContext)
  const router = useRouter()

  const logout = () => {
    router.push("/logout")
  }

  if (!authStatus) {
    return <></>
  }

  return (
    <div className="container flex items-center min-w-[100vw] justify-center min-h-[100vh] bg-[#dbd3d8]">
      <h1 className="font-bold">Home</h1>
      <button className="ml-4" onClick={logout}>
        logout
      </button>
    </div>
  )
}
