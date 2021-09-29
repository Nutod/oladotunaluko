import Head from 'next/head'
import {
  MantineProvider,
  NormalizeCSS,
  GlobalStyles,
  useStylesCleanup,
  SsrProvider,
} from '@mantine/core'
import ThemeProvider from 'context/ThemeContext'

import 'styles/main.scss'
import useDarkMode from 'hooks/use-dark-mode'

// TODO: Remove the ThemeProvider

export default function App(props) {
  const { Component, pageProps } = props
  const { theme } = useDarkMode()

  useStylesCleanup()

  return (
    <>
      <SsrProvider>
        <Head>
          <title>Oladotun Aluko</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>

        <MantineProvider
          theme={{
            /* Put your mantine theme override here */
            colorScheme: theme,
            fontFamily: 'Open Sans, sans-serif',
            headings: {
              fontFamily: 'Inter, sans-serif',
              sizes: {
                h1: { fontSize: '3.052rem' },
                h2: { fontSize: '2.441rem' },
                h3: { fontSize: '1.953rem' },
                h4: { fontSize: '1.563rem' },
                h5: { fontSize: '1.25rem' },
                h6: { fontSize: '1rem' },
              },
            },
          }}
        >
          {/* NormalizeCSS and GlobalStyles are optional */}
          <NormalizeCSS />
          <GlobalStyles />
          <ThemeProvider>
            <Component {...pageProps} />
          </ThemeProvider>
        </MantineProvider>
      </SsrProvider>
    </>
  )
}
