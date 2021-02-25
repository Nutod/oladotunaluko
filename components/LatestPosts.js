import Link from 'next/link'
import DateFormatter from './date-formatter'

export default function LatestPosts({ latestPosts }) {
  return (
    <section className="latest-posts">
      <div className="container">
        <h3>Latest Posts</h3>
        <div className="grid">
          {latestPosts.map(post => (
            <div className="grid-item" key={post.slug}>
              <img src={post.coverImage} alt="Blog Image" />
              <div>
                <p>
                  <DateFormatter dateString={post.date} />
                </p>
                <h4>{post.title}</h4>
                <p>{`${post.excerpt.substring(0, 120)}...`}</p>
                <Link prefetch as={`/posts/${post.slug}`} href="/posts/[slug]">
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
