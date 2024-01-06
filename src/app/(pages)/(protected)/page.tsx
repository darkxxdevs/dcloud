"use client"
import React from "react"
import { useRouter } from "next/navigation"

function Home() {
  const router = useRouter()

  const handleLogout = () => {
    router.push("/logout")
  }
  return (
    <div className="container flex items-center min-w-[100vw] justify-center min-h-[100vh] bg-[#dbd3d8]">
      <h1 className="font-bold">Home</h1>
      <button className="ml-4" onClick={handleLogout}>
        logout
      </button>
    </div>
  )
}

export default Home
