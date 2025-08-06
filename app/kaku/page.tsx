import { Metadata } from "next"

import { Susumenu } from "@/app/katachi/susumu"
import Tameshigaki from "@/app/katachi/tameshigaki"

// import Maru from "@/app/katachi/maru"
// import Editor from "@/app/katachi/kaku"

export const metadata: Metadata = {
  title: "記録を書く",
  description: "この一行から書き始まる"
}

export default function Page() {
  return (
    <main className="px-5 py-4 w-full flex flex-col justify-center items-center">
      <div className="max-w-2xl w-full">
        <Susumenu/>
        <Tameshigaki/>
      </div>
    </main>
  )
}

/*

    <main className="p-5">
      <Susumenu/>
      <h2 className="text-[1.2rem] text-neutral-600">この一行から書き始まる</h2>
      <div className="pt-1 pb-2">
        <Editor/>
      </div>
    </main>
*/