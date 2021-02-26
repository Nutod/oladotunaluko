import Link from 'next/link'
import Layout from 'components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <div className="container not-found">
        <h1>Woooops! You moved so fast and got lost...</h1>
        {/* <h1>You moved so fast and got lost...</h1> */}
        <p>
          The page you are trying to view doesn't exist. You might have spelled
          something wrong. Can you double check that URL?
        </p>
        <Link href="/">
          <a>Return Home</a>
        </Link>
      </div>
    </Layout>
  )
}
