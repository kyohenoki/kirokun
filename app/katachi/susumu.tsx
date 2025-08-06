import Link from "next/link"

export function Susumenu() {
  return (
    <div className="pb-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-[1.5rem] font-medium hover:text-[var(--ao)]">記録帳</Link>
          <div className="flex items-center">
            <div className="w-1.5 h-1.5 mx-[0.75rem] bg-neutral-500/40 rounded-full"></div>
            <button className="text-[1.5rem] text-neutral-500 hover:text-[var(--ao)] cursor-pointer">記録を書く</button>
          </div>
        </div>
        <button>
          <div className="w-7 h-7 bg-[var(--mozi)] rounded-full hover:bg-[var(--ao)]/85 cursor-pointer"></div>
        </button>
      </div>
      <div className="border-b-1 border-neutral-500/20 pt-2"></div>
    </div>
  )
}
