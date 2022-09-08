import { Head, Html, Main, NextScript } from "next/document"

import { getCssText } from "stitches.config"

function _Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <link
          href="https://fonts.cdnfonts.com/css/maison-neue"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default _Document
