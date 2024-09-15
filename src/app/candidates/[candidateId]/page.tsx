import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Pool } from '../../../types'
import fetchCandidates from '../../../utils/fetchCandidates'
import fetchPools from '../../../utils/fetchPools'

interface CandidateDetailProps {
  params: { candidateId: string }
}

export default async function CandidateDetail({ params }: CandidateDetailProps) {
  const { candidateId } = params
  const candidates = await fetchCandidates()
  const pools = await fetchPools()
  const candidate = candidates.find(c => c.id === candidateId)

  if (!candidate) {
    notFound()
  }
  
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{candidate.name}</h2>
      <p className="mb-6">{candidate.affiliation}</p>
      <img
        src={`/api/images/candidates/${candidate.id}`}
        alt={`${candidate.name} Image`}
        className="w-48 h-48 rounded-full mb-6"
      />
      
      <h3 className="text-2xl font-semibold mb-2">Current Pools</h3>
      <ul className="space-y-2">
        {pools.map((pool: Pool) => (
          <li key={pool.id} className="p-2 border rounded">
            <Link href={`/pools/${pool.id}`} className="text-blue-500">
              {pool.name}
            </Link>
            <p>{pool.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}