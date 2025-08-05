import { Inter } from "next/font/google"

import "./subete.css"

const inter = Inter({
  subsets: ["latin"]
})

export default function Root({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={inter.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
