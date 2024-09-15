import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import { pools } from '../../../../../../constants/pools'
import { Candidate } from '../../../../../../types'

export async function GET(request: NextRequest) {
  const candidates: Candidate[] = pools
    .flatMap(pool => pool.candidates)

  return new ImageResponse(
    (
      <div
        tw="flex flex-col items-center justify-center w-[1200px] h-[630px] bg-dark text-gray-100 font-sans p-[50px]"
      >
        <h1 tw="text-[50px] font-bold mb-[20px]">
          Candidates
        </h1>
        <ul tw="text-[30px] list-none p-0 flex flex-col items-start">
          {candidates.map(candidate => (
            <li key={candidate.id} tw="mb-4">
              {candidate.name} - {candidate.affiliation}
            </li>
          ))}
        </ul>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}