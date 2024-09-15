import { Candidate } from '../types'

const fetchCandidates = async (): Promise<Candidate[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/candidates`, {
      method: 'GET',
    })
    if (!res.ok) {
      throw new Error('Failed to fetch candidates')
    }
    const data = await res.json()
    return data.candidates
  } catch (error) {
    console.error(error)
    throw new Error('An error occurred while fetching candidates')
  }
}

export default fetchCandidates