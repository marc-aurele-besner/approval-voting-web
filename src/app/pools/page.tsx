import fetchPools from '../../utils/fetchPools'
import Link from 'next/link'
import { metadata as landingMetadata } from '../../constants/metadata'

export async function generateMetadata() {
  const pools = await fetchPools()
  const poolButtons = pools.slice(0, 3).map((pool, index) => ({
    [`fc:frame:button:${index + 1}`]: pool.name,
    [`fc:frame:button:${index + 1}:action`]: 'link',
    [`fc:frame:button:${index + 1}:target`]: `${process.env.NEXT_PUBLIC_URL}pools/${pool.id}`,
    [`fc:frame:button:${index + 1}:post_url`]: `${process.env.NEXT_PUBLIC_URL}pools/${pool.id}`,
  }))
  const createPoolButton = {
    [`fc:frame:button:${poolButtons.length + 1}`]: 'Create',
    [`fc:frame:button:${poolButtons.length + 1}:action`]: 'link',
    [`fc:frame:button:${poolButtons.length + 1}:target`]: `${process.env.NEXT_PUBLIC_URL}pools/create`,
    [`fc:frame:button:${poolButtons.length + 1}:post_url`]: `${process.env.NEXT_PUBLIC_URL}pools/create`,
  }

  return {
    ...landingMetadata,
    title: 'Pools',
    openGraph: {
      ...landingMetadata.openGraph,
      title: 'Pools',
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/api/images/pools`,
          width: 1200,
          height: 630,
          alt: 'Pools List',
        },
      ],
    },
    twitter: {
      ...landingMetadata.twitter,
      title: 'Pools',
      images: [`${process.env.NEXT_PUBLIC_URL}/api/images/pools`],
    },
    other: {
      ...landingMetadata.other,
      'fc:frame:image': `${process.env.NEXT_PUBLIC_URL}api/images/pools`,
      ...Object.assign({}, ...poolButtons),
      ...createPoolButton,
    },
  }
}

export default async function Pools() {
  const pools = await fetchPools()

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Available Pools</h2>
      {pools.length === 0 ? (
        <p>
          No pools available.{' '}
          <Link href="/pools/create" className="text-blue-500">
            Create one now!
          </Link>
        </p>
      ) : (
        <div className="space-y-4">
          {pools.map((pool) => (
            <Link
              key={pool.id}
              href={`/pools/${pool.id}`}
              className="block p-4 border rounded shadow"
            >
              <img
                src={`/api/images/pools/${pool.id}`}
                alt={`${pool.name} Frame`}
                className="w-full h-auto mb-4"
              />
              <h3 className="text-2xl font-semibold">{pool.name}</h3>
              <p className="mt-2">{pool.description}</p>
            </Link>
          ))}
        </div>
      )}
      
      {pools.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mt-8 mb-4">Pools List Image</h3>
          <img
            src="/api/images/pools"
            alt="Pools List"
            className="w-full h-auto mb-6"
          />
        </>
      )}
    </div>
  )
}
