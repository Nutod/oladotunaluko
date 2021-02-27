import AboutContent from 'components/About'
import Layout from 'components/Layout'

export default function About() {
  return (
    <>
      <Layout pageTitle="Oladotun Aluko &rarr; About">
        <section className="about">
          <div className="container">
            <AboutContent />
          </div>
        </section>
      </Layout>
    </>
  )
}
