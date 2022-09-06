import type { AppProps } from "next/app"

import { Layout } from "components/Layout"
import globalStyles from "styles/global"

function _App({ Component, pageProps }: AppProps): JSX.Element {
  globalStyles()

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default _App
