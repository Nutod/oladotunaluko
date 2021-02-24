import Head from 'next/head'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export default function About() {
  return (
    <>
      <Head>
        <title>Oladotun Aluko &rarr; About</title>
      </Head>
      <Layout>
        <Hero />
        <Hero />
        <Hero />
      </Layout>
    </>
  )
}
