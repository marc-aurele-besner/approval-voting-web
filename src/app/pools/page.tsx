import fetchPools from '../../utils/fetchPools'
import Link from 'next/link'

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
