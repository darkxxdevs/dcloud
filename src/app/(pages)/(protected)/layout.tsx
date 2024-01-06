"use client"
import useAuth from "@/context/useAuth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { MutatingDots } from "react-loader-spinner"
import appwriteService from "@/appwrite/appwrite"

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const { authStatus, setAuthStatus } = useAuth()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)
        const response = await appwriteService.getCurrentUser()
        setAuthStatus(!!response)
      } catch (error: any) {
        console.error("Error checking authentication status:", error)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center min-w-[100vw] justify-center min-h-[100vh] bg-[#dbd3d8]">
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

  if (!authStatus) {
    router.push("/auth/login")
    return <></>
  }

  return <>{children}</>
}
