import { NextResponse } from 'next/server'
import { pools } from '../../../../../constants/pools'

export async function GET() {
  const allCandidates = pools.flatMap(pool => pool.candidates)
  
  const uniqueCandidates = Array.from(new Map(allCandidates.map(c => [c.id, c])).values())

  return NextResponse.json({ candidates: uniqueCandidates }, { status: 200 })
}