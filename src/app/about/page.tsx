import { twitterUrl, metadata as landingMetadata } from '../../constants/metadata'

export const metadata = {
  ...landingMetadata,
  title: 'About Us',
  openGraph: {
    ...landingMetadata.openGraph,
    title: 'About Us',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}api/images/about`,
        width: 1200,
        height: 630,
        alt: 'About Us Image',
      },
    ],
  },
  twitter: {
    ...landingMetadata.twitter,
    title: 'About Us',
    images: [`${process.env.NEXT_PUBLIC_URL}api/images/about`],
  },
  other: {
    ...landingMetadata.other,
    'fc:frame:image': `${process.env.NEXT_PUBLIC_URL}api/images/about`,
    'fc:frame:button:1': 'Create a Pool',
    'fc:frame:button:1:action': 'link',
    'fc:frame:button:1:target': `${process.env.NEXT_PUBLIC_URL}pools/create`,
    'fc:frame:button:1:post_url': process.env.NEXT_PUBLIC_URL + 'pools/create',

    'fc:frame:button:2': 'View Pools',
    'fc:frame:button:2:action': 'link',
    'fc:frame:button:2:target': `${process.env.NEXT_PUBLIC_URL}pools`,
    'fc:frame:button:2:post_url': process.env.NEXT_PUBLIC_URL + 'pools',
  },
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to the {metadata.title}! Our mission is to provide a fair
        and transparent platform for community decision-making.
      </p>
      <p className="mb-4">
        Connect with us on{' '}
        <a
          href={twitterUrl}
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter/X
        </a>
        .
      </p>
    </div>
  )
}
