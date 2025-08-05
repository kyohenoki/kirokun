import { Metadata } from "next"

import Maru from "@/app/katachi/maru"

export const metadata: Metadata = {
  title: "何もない",
  description: "ここにはもう何もないみたい"
}

export default function Notfound() {
  return (
    <main className="p-5">
      <div className="flex items-center mb-1">
        <Maru/>
        <h1 className="text-2xl font-medium pl-2">何もない</h1>
      </div>
      <h2 className="text-[1.35rem] text-neutral-600">ここにはもう何もないみたい</h2>
    </main>
  )
}
