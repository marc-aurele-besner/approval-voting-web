import { NextResponse } from 'next/server'
import { Pool } from '../../../types'
import { pools } from '../../../constants/pools'

export async function GET() {
  return NextResponse.json({ pools }, { status: 200 })
}

export async function POST(request: Request) {
  try {
    const { poolName, description, candidates } = await request.json()

    const newPool: Pool = {
      id: (pools.length + 1).toString(),
      name: poolName,
      description,
      candidates,
    }

    pools.push(newPool)

    return NextResponse.json({ success: true, pool: newPool }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to create pool.' },
      { status: 500 }
    )
  }
}