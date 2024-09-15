import Link from 'next/link'
import { metadata } from '../constants/metadata'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto p-4 flex justify-between">
        <Link href="/" className="text-xl font-bold">
          {metadata.title}
        </Link>
        <nav className="space-x-4">
          <Link href="/pools">Pools</Link>
          <Link href="/candidates">Candidates</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  )
}
