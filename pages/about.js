import Head from 'next/head'
import AboutContent from '../components/About'
import Layout from '../components/Layout'

export default function About() {
  return (
    <>
      <Head>
        <title>Oladotun Aluko &rarr; About</title>
      </Head>
      <Layout>
        <section className="about">
          <div className="container">
            <AboutContent />
          </div>
        </section>
      </Layout>
    </>
  )
}
