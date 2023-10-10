import { Analytics } from '@vercel/analytics/react'

import '../styles/globals.scss'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Analytics />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
