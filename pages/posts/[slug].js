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
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-coy.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-funky.css"
          as="script"
        />
      </Head>
      <section>
        <div className="container post">
          <img src="https://placeimg.com/640/480/nature" alt="Nature" />
          <h2>Level 2 Heading</h2>
          <p>
            Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo,
            vehicula in, suscipit nec, molestie sed, tellus.
          </p>
          <h3>Level 3 Heading</h3>
          <p>
            Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo,
            vehicula in, suscipit nec, molestie sed, tellus.
          </p>
          <h4>Level 4 Heading</h4>
          <p>
            Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo,
            vehicula in, suscipit nec, molestie sed, tellus.
          </p>
          <h5>Level 5 Heading</h5>
          <p>
            Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo,
            vehicula in, suscipit nec, molestie sed, tellus.
          </p>
          <h6>Level 6 Heading</h6>
          <p>
            Sed scelerisque sagittis lorem. Phasellus sodales. Nulla urna justo,
            vehicula in, suscipit nec, molestie sed, tellus.
          </p>
          <button>Get more Information</button>
          <blockquote>
            <p>
              Paragraph inside Blockquote: Nam libero leo, elementum in, dapibus
              a, suscipit vitae, purus. Duis arcu. Integer dignissim fermentum
              enim. Morbi convallis felis vel nibh. Sed scelerisque sagittis
              lorem.
            </p>
          </blockquote>
          <address>Address: Example address 224, Sweden</address>
          <pre>
            <strong>Preformated:</strong>Testing one row and another
          </pre>
          <code>Code content here</code>
          <p>
            I am <a href="?abc123">the a tag</a> example
            <br />I am <abbr title="test">the abbr tag</abbr> example
            <br />I am <acronym>the acronym tag</acronym> example
            <br />I am <b>the b tag</b> example
            <br />I am <big>the big tag</big> example
            <br />I am <cite>the cite tag</cite> example
            <br />I am <del>the del tag</del> example
            <br />I am <dfn>the dfn tag</dfn> example
            <br />I am <em>the em tag</em> example
            <br />I am <i>the i tag</i> example
            <br />I am <ins>the ins tag</ins> example
            <br />I am <kbd>the kbd tag</kbd> example
            <br />I am <q>the q tag</q> example
            <br />I am <samp>the samp tag</samp> example
            <br />I am <small>the small tag</small> example
            <br />I am <span>the span tag</span> example
            <br />I am <strong>the strong tag</strong> example
            <br />I am <sub>the sub tag</sub> example
            <br />I am <sup>the sup tag</sup> example
            <br />I am <tt>the tt tag</tt> example
            <br />I am <var>the var tag</var> example
            <br />I am the <span className="small">small class</span> example
            <br />I am the <span className="large">large class</span> example
            <br />I am the <span className="quiet">quiet class</span> example
            <br />I am the <span className="highlight">
              highlight class
            </span>{' '}
            example
            <br />
          </p>
          <hr />
          <ul>
            <li>Unordered list 01</li>

            <li>Unordered list 02</li>

            <li>
              Unordered list 03
              <ul>
                <li>Unordered list inside list level 2</li>

                <li>
                  Unordered list inside list level 2
                  <ul>
                    <li>Unordered list inside list level 3</li>

                    <li>Unordered list inside list level 3</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <ol>
            <li>Ordered list 01</li>

            <li>Ordered list 02</li>

            <li>
              Ordered list 03
              <ol>
                <li>Ordered list inside list level 2</li>

                <li>
                  Ordered list inside list level 2
                  <ol>
                    <li>Ordered list inside list level 3</li>

                    <li>Ordered list inside list level 3</li>
                  </ol>
                </li>
              </ol>
            </li>
          </ol>
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
