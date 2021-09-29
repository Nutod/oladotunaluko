import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SsrProvider, SheetsRegistry, ServerStyles } from '@mantine/core'

export default class _Document extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry()
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line react/display-name
        enhanceApp: App => props =>
          (
            <SsrProvider registry={registry}>
              <App {...props} />
            </SsrProvider>
          ),
      })

    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <ServerStyles registry={registry} />
        </>
      ),
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link href="/fonts/Gilroy-Bold.ttf" as="font" /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Open+Sans&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />

          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
