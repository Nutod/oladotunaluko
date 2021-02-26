import Hero from 'components/Hero'
import LatestPosts from 'components/LatestPosts'
import Layout from 'components/Layout'
import { getLatestPosts } from 'lib/api'

export default function Index({ latestPosts }) {
  return (
    <>
      <Layout pageTitle="Oladotun Aluko &rarr; Home">
        <Hero />
        <LatestPosts latestPosts={latestPosts} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const latestPosts = getLatestPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { latestPosts },
  }
}
