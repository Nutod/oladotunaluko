import Head from 'next/head'
import AllPosts from '../../components/AllPosts'
import Layout from '../../components/Layout'
import { getAllPosts } from '../../lib/api'

export default function Posts({ allPosts }) {
  return (
    <>
      <Head>
        <title>Oladotun Aluko &rarr; All Posts</title>
      </Head>
      <Layout>
        <AllPosts allPosts={allPosts} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
