import { NextResponse } from 'next/server'
import { pools } from '../../../../constants/pools'

export async function GET(
  request: Request,
  { params }: { params: { poolId: string } }
) {
  const { poolId } = params
  const pool = pools.find((p) => p.id === poolId)

  if (!pool) {
    return NextResponse.json({ message: 'Pool not found' }, { status: 404 })
  }

  return NextResponse.json({ pool }, { status: 200 })
}

export async function DELETE(
  request: Request,
  { params }: { params: { poolId: string } }
) {
  const { poolId } = params
  const poolIndex = pools.findIndex((p) => p.id === poolId)

  if (poolIndex === -1) {
    return NextResponse.json({ message: 'Pool not found' }, { status: 404 })
  }

  pools.splice(poolIndex, 1)
  return NextResponse.json(
    { message: 'Pool deleted successfully' },
    { status: 200 }
  )
}
