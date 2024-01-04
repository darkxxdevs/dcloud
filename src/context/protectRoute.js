import { useContext, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AuthContext } from "./authContext"

const ProtectRoute = (Component) => {
  const wrapper = (props) => {
    const { isLoggedIn } = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
      if (!isLoggedIn) {
        router.push("/auth/login")
      }
    }, [])
  }
  return wrapper
}

export default ProtectRoute
