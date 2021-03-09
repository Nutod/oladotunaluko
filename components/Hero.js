import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <h5>Hi! My name is Oladotun</h5>
          <p className="hero-text">
            I'm a Software Developer focused on the front-end things of the web.
            This is my site where I write about things I'm interested in. If
            you'd like to know more about me, look{' '}
            <Link href="/about">
              <a>here</a>
            </Link>
            .
          </p>
          <p className="hero-text">
            While you're here, do check out some of my latest posts and you
            could check{' '}
            <Link href="/posts">
              <a>here</a>
            </Link>{' '}
            as well for other posts. Hope you find something useful.
          </p>
        </div>
      </div>
    </section>
  )
}
