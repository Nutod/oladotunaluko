import Link from 'next/link'
import DateFormatter from './date-formatter'

export default function AllPosts({ allPosts }) {
  return (
    <section className="all-posts">
      <div className="container">
        <h3>All Posts</h3>
        <div className="grid">
          {allPosts.map(post => (
            <div className="grid-item" key={post.slug}>
              <img src={post.coverImage} alt="Blog Image" />
              <div>
                <p>
                  <DateFormatter dateString={post.date} />
                </p>
                <h4>{post.title}</h4>
                <p>{`${post.excerpt.substring(0, 120)}...`}</p>
                <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                  <a>
                    Keep Reading <span>&rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
