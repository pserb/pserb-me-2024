import { Analytics } from '@vercel/analytics/react'

import '../styles/globals.scss'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  )
}

export default MyApp
