import Head from 'next/head'
import Layout from '../../components/Layout'
import PostBody from '../../components/PostBody'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post }) {
  console.log(post)
  //   {JSON.stringify(post, null, 2)}
  return (
    <Layout>
      <Head>
        <title>{post.meta.title}</title>
        <link
          rel="stylesheet"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
        />
      </Head>
      <section>
        <div className="container post">
          <h2>{post.meta.title}</h2>
          <figure>
            <img src={post.meta.coverImage} alt="Nature" />
            <figcaption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </figcaption>
          </figure>
          <PostBody content={post.content} />
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
  ])

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
