import { useContext } from "react"
import authContext from "@/context/authContext"

export default function useAuth() {
  const ctx = useContext(authContext)
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return ctx
}
