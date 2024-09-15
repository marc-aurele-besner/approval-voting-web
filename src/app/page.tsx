import Link from 'next/link'
import { metadata } from '../constants/metadata'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
      <p className="mb-6">{metadata.description}</p>
      <div className="space-x-4">
        <Link
          href="/pools/create"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Create a New Pool
        </Link>
        <Link
          href="/pools"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          View Pools
        </Link>
      </div>
    </div>
  )
}
