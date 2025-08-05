import { Metadata } from "next"

import Maru from "@/app/katachi/maru"
import Editor from "@/app/katachi/kaku"

export const metadata: Metadata = {
  title: "記録を書く",
  description: "ここからどんどん書き始める"
}

export default function Page() {
  return (
    <main className="p-5">
      <div className="flex items-center mb-1">
        <Maru/>
        <h1 className="text-2xl font-medium pl-2">記録を書く</h1>
      </div>
      <h2 className="text-[1.35rem] text-neutral-600">ここからどんどん書き始める</h2>
      <Editor/>
    </main>
  )
}
