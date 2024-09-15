export const metadata = {
  title: 'Approval Voting System',
  description: 'Create and participate in approval voting pools.',
  openGraph: {
    title: 'Approval Voting System',
    description: 'Create and participate in approval voting pools.',
    url: process.env.NEXT_PUBLIC_URL,
    type: 'website',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/api/images/landing`,
        width: 1200,
        height: 630,
        alt: 'Approval Voting System Landing Page',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Approval Voting System',
    description: 'Create and participate in approval voting pools.',
    images: [`${process.env.NEXT_PUBLIC_URL}/api/images/landing`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${process.env.NEXT_PUBLIC_URL}/api/images/landing`,
    'fc:frame:image:aspect_ratio': '1.91:1', // 1.91:1 | 1:1
    'fc:frame:post_url': process.env.NEXT_PUBLIC_URL,
    // Buttons
  /*  ...Object.assign(
      {},
      ...buttons.map((button, index) => ({
        [`fc:frame:button:${index + 1}`]: button.text,
        [`fc:frame:button:${index + 1}:action`]: button.action,
        [`fc:frame:button:${index + 1}:target`]: button.target,
      })),
    ), */
  },
}

export const twitterUrl = 'https://twitter.com/yourprofile"'