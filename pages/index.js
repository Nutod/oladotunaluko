import { Container } from '@mantine/core'
import Hero from 'components/Hero'
import LatestPosts from 'components/LatestPosts'
import Layout from 'components/Layout'
import { getLatestPosts } from 'lib/api'

export default function Index({ latestPosts }) {
  return (
    <>
      <Layout
        pageTitle="Oladotun Aluko &rarr; Home"
        description="Software Developer focused on the Frontend things of the web"
      >
        <Container>
          {/* <Hero /> */}
          <LatestPosts latestPosts={latestPosts} />
        </Container>
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
