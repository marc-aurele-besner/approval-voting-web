import { twitterUrl, metadata } from '../../constants/metadata'

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
