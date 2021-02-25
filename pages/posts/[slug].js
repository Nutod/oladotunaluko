import Head from 'next/head'
import Image from 'next/image'
import DateFormatter from '../../components/date-formatter'
import Layout from '../../components/Layout'
import PostBody from '../../components/PostBody'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post }) {
  console.log(post)

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
            <Image
              src={post.meta.coverImage}
              layout="responsive"
              width="100%"
              height="60vh"
              alt="Nature"
            />
            <figcaption>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </figcaption>
          </figure>
          <div className="post-meta">
            <DateFormatter dateString={post.date} />
            <p>{post.readTime} min read</p>
          </div>
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
    'readTime',
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
