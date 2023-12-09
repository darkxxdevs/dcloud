"use client"
import React, { ChangeEvent, useState } from "react"
import { account, ID } from "../../appwrite"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface User {
  email: string
  password: string
}

export default function Login() {
  const router = useRouter()
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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

  const login = async (email: string, password: string) => {
    const session = await account.createEmailSession(email, password)
    if (session) {
      router.push("/")
    }
  }

  return (
    <div className="container mx-auto w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="card border-2 border-black bg-white w-1/3 p-3 h-2/3 min-w-[350px] md:min-w-fit max-h-[600px] min-h-[600px] md:min-h-[480px]  md:max-w-[400px]  rounded-2xl">
        <div className="title w-full text-center">
          <h1 className="text-3xl uppercase font-bold">LogIn</h1>
        </div>
        <form
          className="card-body h-[55%] mt-5 min-h-[65%]"
          onSubmit={handleSubmit}
        >
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
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered border-black border-2 p-3 mb-2 rounded-xl w-full"
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
            />
          </div>

          <div className="submit-btn w-full ">
            <button
              onClick={() => login(user.email, user.password)}
              className="btn btn-primary mt-5  bg-black text-white p-3 rounded-2xl w-full font-bold"
            >
              login
            </button>

            <div className="option-mark w-full mt-1 font-bold text-grey text-center">
              or
            </div>
          </div>
        </form>
        <div className="link flex items-center justify-center font-bold">
          <Link href={"/auth/signup"}>Signup instead!</Link>
        </div>
      </div>
    </div>
  )
}
