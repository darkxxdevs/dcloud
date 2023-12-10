"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { MutatingDots } from "react-loader-spinner"

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()

  if (isLoading) {
    return (
      <div className="container flex items-center min-w-[100vw] justify-center min-h-[100vh] bg-[#eff1f3]">
        <MutatingDots
          height="100"
          width="100"
          color="#ffffff"
          secondaryColor="#ffffff"
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    )
  }

  return (
    <div className="container flex items-center min-w-[100vw] justify-center min-h-[100vh] bg-[#eff1f3]">
      <h1 className="font-bold">Home</h1>
    </div>
  )
}
