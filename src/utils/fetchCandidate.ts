import { Candidate, Pool } from '../types'

const fetchCandidate = async (candidateId: string): Promise<{ candidate: Candidate; pools: Pool[] }> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/candidates/${candidateId}`)
  if (!res.ok) {
    throw new Error('Failed to fetch candidate')
  }
  return res.json()
}

export default fetchCandidate