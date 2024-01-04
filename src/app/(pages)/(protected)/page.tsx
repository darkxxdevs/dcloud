"use client"
import React from "react"
import ProtectRoute from "@/context/protectRoute"

function Home() {
  return (
    <div className="container flex items-center min-w-[100vw] justify-center min-h-[100vh] bg-[#dbd3d8]">
      <h1 className="font-bold">Home</h1>
      <button className="ml-4">logout</button>
    </div>
  )
}

export default ProtectRoute(Home)
