"use client"
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"

const Home = () => {

  const { data, status } = useSession()
  if (status === "authenticated") {
    return <>
      <button className='py-2 px-6 bg-red-500 rounded-lg' onClick={e => signOut()}>Logout</button>
      <br />
      {/* <h1> <pre>{JSON.stringify(data)} </pre> </h1> */}
      <h1>{data.user?.name}</h1>
      <h1>{data.user?.email}</h1>
      <img
        src={data.user?.image as string}
        alt={data.user?.name as string} />
    </>
  }
  return <>
    <button className='py-4 px-6 bg-green-500 rounded-lg' onClick={e => signIn("google")}>Login With Google</button>
  </>
}

export default Home