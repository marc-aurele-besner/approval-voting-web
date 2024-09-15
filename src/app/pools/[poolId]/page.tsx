import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Pool } from '../../../types'
import { metadata as landingMetadata } from '../../../constants/metadata'

export async function generateMetadata({ params }: { params: { poolId: string } }) {
  const { poolId } = params
  const pool = await fetchPool(poolId)

  if (!pool) {
    return {
      ...landingMetadata,
      title: 'Pool Not Found',
      openGraph: {
        ...landingMetadata.openGraph,
        title: 'Pool Not Found',
        images: []
      },
      twitter: {
        ...landingMetadata.twitter,
        title: 'Pool Not Found',
        images: [],
      },
      other: {
        ...landingMetadata.other,
        'fc:frame:image': `${process.env.NEXT_PUBLIC_URL}api/images/about`,
        'fc:frame:button:1': 'Create a Pool',
        'fc:frame:button:1:action': 'link',
        'fc:frame:button:1:target': `${process.env.NEXT_PUBLIC_URL}pools/create`,
        'fc:frame:button:1:post_url': process.env.NEXT_PUBLIC_URL + 'pools/create',
    
        'fc:frame:button:2': 'View Pool Details',
        'fc:frame:button:2:action': 'link',
        'fc:frame:button:2:target': `${process.env.NEXT_PUBLIC_URL}pools/${poolId}`,
        'fc:frame:button:2:post_url': process.env.NEXT_PUBLIC_URL + `pools/${poolId}`,
      },
    }
  }

  return {
    ...landingMetadata,
    title: pool.name,
    openGraph: {
      ...landingMetadata.openGraph,
      title: pool.name,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/api/images/pools/${pool.id}`,
          width: 1200,
          height: 630,
          alt: `${pool.name} Image`,
        },
      ],
    },
    twitter: {
      ...landingMetadata.twitter,
      title: pool.name,
      images: [`${process.env.NEXT_PUBLIC_URL}/api/images/pools/${pool.id}`],
    },
    other: {
        ...landingMetadata.other,
        'fc:frame:image': `${process.env.NEXT_PUBLIC_URL}/api/images/pools/${pool.id}`,
        'fc:frame:button:1': 'Create a Pool',
        'fc:frame:button:1:action': 'link',
        'fc:frame:button:1:target': `${process.env.NEXT_PUBLIC_URL}pools/create`,
        'fc:frame:button:1:post_url': process.env.NEXT_PUBLIC_URL + 'pools/create',
    
        'fc:frame:button:2': 'View Pool Details',
        'fc:frame:button:2:action': 'link',
        'fc:frame:button:2:target': `${process.env.NEXT_PUBLIC_URL}pools/${poolId}`,
        'fc:frame:button:2:post_url': process.env.NEXT_PUBLIC_URL + `pools/${poolId}`,
    },
  }
}

const fetchPool = async (poolId: string): Promise<Pool | null> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/pools/${poolId}`, {
      cache: 'no-store',
    })
    if (!res.ok) {
      throw new Error('Failed to fetch pool')
    }
    const data = await res.json()
    return data.pool || null
  } catch (error) {
    console.error(error)
    return null
  }
}

export default async function PoolDetail({
  params,
}: {
  params: { poolId: string }
}) {
  const pool = await fetchPool(params.poolId)
  
  if (!pool) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{pool.name}</h2>
      <p className="mb-6">{pool.description}</p>

      <h3 className="text-2xl font-semibold mb-2">Candidates</h3>
      <ul className="space-y-2">
        {pool.candidates.map((candidate, index) => (
          <li
            key={index}
            className="p-2 border rounded flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{candidate.name}</p>
              <Link href={`/candidates/${candidate.id}`} className="text-blue-500">
                View Profile
              </Link>
              <p className="text-sm text-gray-600">{candidate.affiliation}</p>
            </div>
            <a
              href={candidate.linktree}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Links
            </a>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-4">Pool Image</h3>
      <img
        src={`/api/images/pools/${pool.id}`}
        alt={`${pool.name} Image`}
        className="w-full h-auto mb-6"
      />

      <Link
        href="/pools"
        className="mt-6 inline-block px-4 py-2 bg-gray-500 text-white rounded"
      >
        Back to Pools
      </Link>
    </div>
  )
}
