import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "記録帳",
  description: "もっと自分の記録を書き残そう"
}

export default function Page() {
  return (
    <main className="p-5">
      <h1 className="text-2xl mb-1 font-medium">記録帳</h1>
      <h2 className="text-[1.35rem] text-neutral-600">もっと自分の記録を書き残そう</h2>
      <Susumu link="/kaku" text="記録を書く"/>
      <Susumu link="/furikaeru" text="記録を振り返る"/>
    </main>
  )
}

function Susumu({text, link}: {text: string, link: string}) {
  return (
    <div className="block">
      <Link href={link} className="text-[1.35rem] font-medium hover:text-blue-600">{text}</Link>
    </div>
  )
}
