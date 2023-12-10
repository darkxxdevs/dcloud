"use client"
import React, { ChangeEvent, useState, useEffect } from "react"
import { Eye, EyeOff } from "lucide-react"
import appwriteService from "@/appwrite/appwrite"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { MutatingDots } from "react-loader-spinner"
import useAuth from "@/hooks/useAuth"

interface User {
  name: string
  email: string
  password: string
}

export default function SignUp() {
  const router = useRouter()
  const { authStatus } = useAuth()

  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {})

  const togglePasswordVisibility = () => {
    setIsVisible(!isVisible)
  }

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof User
  ) => {
    setUser((prevUser) => ({
      ...prevUser,
      [field]: e.target.value,
    }))
  }

  const register = async () => {
    try {
      setIsLoading(true)
      await appwriteService.createUserAccount({
        username: user.name,
        email: user.email,
        password: user.password,
      })
      router.push("/auth/login")
    } catch (error: any) {
      console.log("Error registering user:", error)
    }
  }

  if (authStatus) {
    router.replace("/home")
    return <></>
  }

  return (
    <div className="container max-w-[1920px] w-[100vw] h-[100vh] flex items-center bg-[#DBD3D8] justify-center">
      {isLoading ? (
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
      ) : (
        <div className="card border-2 border-black bg-white w-1/3 p-3 h-2/3 min-w-[350px] md:min-w-fit max-h-[600px] min-h-[600px] md:min-h-[480px]  md:max-w-[400px]  rounded-2xl">
          <div className="title w-full text-center">
            <h1 className="text-3xl uppercase font-bold">Sign Up</h1>
          </div>
          <div className="card-body h-[55%] mt-5 min-h-[65%]">
            <div className="form-control mb-4 w-full">
              <label className="label">
                <span className="label-text text-black font-bold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered  border-black border-2 p-3 rounded-xl w-full"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="form-control mb-4 w-full">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered border-2 border-black p-3 rounded-xl w-full"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <div className="pass-1 border-2 border-black rounded-2xl flex w-full ">
                <input
                  type={isVisible ? "text" : "password"}
                  placeholder="Password"
                  className="input  border-black  outline-0 p-3 w-11/12 rounded-xl "
                  onChange={(e) =>
                    setUser({
                      ...user,
                      password: e.target.value,
                    })
                  }
                />
                <div className="pass-icon flex items-center outline-0 justify-center w-1/12 ">
                  <button
                    className="h-full outline-0 w-full"
                    onClick={() => togglePasswordVisibility()}
                  >
                    {isVisible ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>
            </div>

            <div className="submit-btn w-full flex items-center justify-center pl-3 md:pl-2">
              <button
                onClick={register}
                className="btn btn-primary mt-5  bg-black text-white p-3 rounded-2xl w-full  font-bold"
              >
                Sign Up
              </button>
            </div>
            <div className="option-mark w-full font-bold text-grey text-center">
              or
            </div>
          </div>
          <div className="link w-full text-center">
            <Link href="/auth/login">Login instead!</Link>
          </div>
        </div>
      )}
    </div>
  )
}
