import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import { pools } from '../../../../../../../constants/pools'
import { Candidate } from '../../../../../../../types'

export async function GET(
  request: NextRequest,
  { params }: { params: { candidateId: string } }
) {
  const { candidateId } = params
  const candidate: Candidate | undefined = pools
    .flatMap(pool => pool.candidates)
    .find(c => c.id === candidateId)

  if (!candidate) {
    return new Response('Candidate not found', { status: 404 })
  }

  return new ImageResponse(
    (
      <div
        tw="flex flex-col items-center justify-center w-[1200px] h-[630px] bg-dark text-gray-100 font-sans p-[50px] box-border"
      >
        <h1 tw="text-[50px] font-bold mb-[20px]">
          {candidate.name}
        </h1>
        <p tw="text-[30px] mb-[40px]">
          {candidate.affiliation}
        </p>
        <div
          tw="w-[200px] h-[200px] rounded-full bg-gray-300 flex items-center justify-center text-[60px] text-gray-600"
        >
          {candidate.name.charAt(0)}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}