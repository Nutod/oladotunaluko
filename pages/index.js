import Head from 'next/head'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Oladotun Aluko &rarr; Home</title>
      </Head>
      <Layout>
        <Hero />
      </Layout>
    </>
  )
}
