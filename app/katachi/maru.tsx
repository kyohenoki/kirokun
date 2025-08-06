"use client"

import { useRouter } from "next/navigation"

export default function Maru() {
  const router = useRouter()
  return (
    <button
      className="w-6 h-6 ml-0.5 bg-black rounded-full hover:bg-blue-600 cursor-pointer"
      onClick={() => router.push("/")}
    ></button>
  )
}
