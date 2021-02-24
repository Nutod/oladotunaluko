import Head from 'next/head'
import AllPosts from '../../components/AllPosts'
import Layout from '../../components/Layout'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Oladotun Aluko &rarr; All Posts</title>
      </Head>
      <Layout>
        <AllPosts />
      </Layout>
    </>
  )
}
