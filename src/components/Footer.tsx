import { twitterUrl, metadata } from '../constants/metadata'

export default function Footer() {
  return (
    <footer className="bg-white shadow mt-8">
      <div className="container mx-auto p-4 text-center">
        © 2024 {metadata.title}. All rights reserved.
        <div className="mt-2">
          <a
            href={twitterUrl}
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow us on Twitter/X
          </a>
        </div>
      </div>
    </footer>
  )
}
