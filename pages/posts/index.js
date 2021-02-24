import Head from 'next/head'
import LatestPosts from '../../components/LatestPosts'
import Layout from '../../components/Layout'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Oladotun Aluko &rarr; All Posts</title>
      </Head>
      <Layout>
        <LatestPosts />
      </Layout>
    </>
  )
}
