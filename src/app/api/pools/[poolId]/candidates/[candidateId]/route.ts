import { NextResponse } from 'next/server'
import { pools } from '../../../../../../constants/pools'
import { Candidate } from '../../../../../../types'

export async function GET(
  request: Request,
  { params }: { params: { candidateId: string } }
) {
  const { candidateId } = params
  const candidatePools = pools.filter((pool) =>
    pool.candidates.some((c) => c.id === candidateId)
  )

  const candidate: Candidate | undefined = pools
    .flatMap(pool => pool.candidates)
    .find(c => c.id === candidateId)

  if (!candidate) {
    return NextResponse.json({ message: 'Candidate not found' }, { status: 404 })
  }

  return NextResponse.json({ candidate, pools: candidatePools }, { status: 200 })
}