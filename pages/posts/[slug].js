import Head from 'next/head'
import DateFormatter from 'components/date-formatter'
import Layout from 'components/Layout'
import PostBody from 'components/PostBody'
import { getAllPosts, getPostBySlug } from 'lib/api'
import markdownToHtml from 'lib/markdownToHtml'

export default function Post({ post }) {
  return (
    <Layout
      description={post.meta.description}
      pageTitle={`${post.meta.title} | Oladotun Aluko`}
    >
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
        />
      </Head>
      <section>
        <div className="container post">
          <h2>{post.meta.title}</h2>
          <div className="post-meta">
            <DateFormatter dateString={post.date} />
            <span>•</span>
            <p>{post.readTime} min read</p>
          </div>
          <figure>
            <img src={post.meta.coverImage} alt={post.meta.imageCaption} />
            <figcaption>{post.meta.imageCaption}</figcaption>
          </figure>
          <PostBody content={post.content} />
          {/* <div className="post-share">
            <h3>Share post</h3>
            <p>Copy Post Link</p>
          </div> */}
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
