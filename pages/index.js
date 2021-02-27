import Hero from 'components/Hero'
import LatestPosts from 'components/LatestPosts'
import Layout from 'components/Layout'
import { getLatestPosts } from 'lib/api'

// TODO: We can definitely do better with the description

export default function Index({ latestPosts }) {
  return (
    <>
      <Layout
        pageTitle="Oladotun Aluko &rarr; Home"
        description="Frontend Developer"
      >
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
