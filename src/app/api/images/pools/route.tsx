import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import fetchPools from '../../../../utils/fetchPools'

export async function GET(request: NextRequest) {
  const pools = await fetchPools()

  const title = 'Available Pools'
  const count = pools.length

  return new ImageResponse(
    (
      <div
        tw="flex flex-col items-center justify-center w-[1200px] h-[630px] bg-gray-800 text-gray-100 font-sans p-[50px]"
      >
        <h1 tw="text-[60px] font-bold mb-5">
          {title}
        </h1>
        <p tw="text-[30px] mb-5">
          Total Pools: <strong>{count}</strong>
        </p>
        <ul tw="text-[30px] list-none p-0 mr-5">
          {pools.map((pool) => (
            <li key={pool.id} tw="mb-4 mr-5 text-lg font-medium text-gray-200 hover:text-blue-400 transition-colors duration-200">
              {pool.name}
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