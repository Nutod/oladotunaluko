import React from 'react'

import Head from 'next/head'
import ThemeProvider from '../context/ThemeContext'
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          href="/fonts/Gilroy-Bold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
