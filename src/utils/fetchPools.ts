import { Pool } from '../types'

const fetchPools = async (): Promise<Pool[]> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/pools`, { method: 'GET' })
    if (!res.ok) {
      throw new Error('Failed to fetch pools')
    }
    const data = await res.json()
    return data.pools
  } catch (error) {
    console.error(error)
    throw new Error('An error occurred while fetching pools')
  }
}

export default fetchPools