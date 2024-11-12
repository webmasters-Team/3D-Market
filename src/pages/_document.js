import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            defer
            data-domain='market.pmnd.rs'
            src='https://analytics.iamsaravieira.com/js/plausible.js'
          ></script>
        </body>
      </Html>
    )
  }
}
