import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import { metadata } from '../../../../constants/metadata'

export async function GET(request: NextRequest) {
  return new ImageResponse(
    (
      <div
        tw="flex flex-col items-center justify-center w-[1200px] h-[630px] bg-dark text-gray-100 font-sans p-10 box-border"
      >
        <h1 tw="text-5xl font-bold mb-4">About Us</h1>
        <p tw="text-2xl mb-6">
          {metadata.description}
        </p>
        <img
          src={`${process.env.NEXT_PUBLIC_URL}images/logo.png`}
          alt="About Us Logo"
          tw="w-48 h-48 mb-4"
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}