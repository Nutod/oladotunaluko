import Link from 'next/link'
import Layout from 'components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <div className="container not-found">
        <h1>451 – Unavailable For Legal Reasons</h1>
        <p>
          Why show a generic 404 when I can make it sound mysterious? It seems
          you've found something that used to exist, or you spelled something
          wrong. I'm guessing you spelled something wrong. Can you double check
          that URL?
        </p>
        <Link href="/">
          <a>Return Home</a>
        </Link>
      </div>
    </Layout>
  )
}
