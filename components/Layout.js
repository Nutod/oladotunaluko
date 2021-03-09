import React from 'react'
import Head from 'next/head'
import { useTheme } from '../context/ThemeContext'
import Header from './Header'
import Footer from './Footer'

export default function Layout({
  children,
  description = 'Oladotun Aluko',
  pageTitle = 'Oladotun Aluko',
}) {
  const { theme, mounted } = useTheme()

  React.useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description} />

        <meta
          property="og:site_name"
          content="Oladotun Aluko"
          key="ogsitename"
        />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
