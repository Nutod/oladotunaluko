import Head from 'next/head'
import Hero from '../components/Hero'
import LatestPosts from '../components/LatestPosts'
import Layout from '../components/Layout'
import { getLatestPosts } from '../lib/api'

export default function Index({ latestPosts }) {
  return (
    <>
      <Head>
        <title>Oladotun Aluko &rarr; Home</title>
      </Head>
      <Layout>
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
