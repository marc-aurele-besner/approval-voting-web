import Link from 'next/link'
import fetchCandidates from '../../utils/fetchCandidates'
import { Candidate } from '../../types'

export default async function Candidates() {
  const candidates: Candidate[] = await fetchCandidates()

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">All Candidates</h2>
      {candidates.length === 0 ? (
        <p>No candidates available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {candidates.map(candidate => (
            <div key={candidate.id} className="p-4 border rounded">
              <img
                src={`/api/images/candidates/${candidate.id}`}
                alt={`${candidate.name} Image`}
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{candidate.name}</h3>
              <p className="text-gray-600">{candidate.affiliation}</p>
              <Link href={`/candidates/${candidate.id}`} className="text-blue-500 mt-2 inline-block">
                View Profile
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}