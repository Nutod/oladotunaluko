import AllPosts from '../../components/AllPosts'
import Layout from '../../components/Layout'
import { getAllPosts } from '../../lib/api'

export default function Posts({ allPosts }) {
  return (
    <>
      <Layout pageTitle="Oladotun Aluko &rarr; All Posts">
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
    'readTime',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
