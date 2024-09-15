import React from 'react';
import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import { pools } from '../../../../../constants/pools'

export async function GET(request: NextRequest,
  { params }: { params: { poolId: string } }
) {
  const { poolId } = params
  const pool = pools.find((p) => p.id === poolId)

  if (!pool) {
    return new Response('Pool not found', { status: 404 })
  }

  const { name, description, candidates } = pool

  return new ImageResponse(
    (
      <div
        tw="flex flex-col items-start justify-center w-[1200px] h-[630px] bg-gray-900 text-gray-100 font-sans p-[50px] box-border"
      >
        <h1
          tw="text-[50px] font-bold mb-5 border-b-2 border-gray-100 pb-2 w-full"
        >
          {name}
        </h1>
        <p tw="text-[30px] leading-[1.5] mb-7">
          {description}
        </p>
        <h2
          tw="text-[40px] font-bold mb-5 w-full"
        >
          Candidates
        </h2>
        <ul tw="list-none p-0 w-full">
          {candidates.map((candidate, index) => (
            <li
              key={index}
              tw="flex flex-col mb-4 mr-2"
            >
              <span tw="text-[28px] font-semibold">
                {candidate.name}
              </span>
              <span tw="text-[24px] text-gray-400">
                {candidate.affiliation}
              </span>
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