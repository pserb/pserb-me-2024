import Head from 'next/head'
import Image from 'next/image'
import pf from '../styles/Portfolio.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={pf.container}>
      <Head>
        <title>Portfolio | Paul Serbanescu</title>
        <meta name="description" content="Homepage" />
      </Head>

      <main className={pf.main}>
        <div className={pf.titlecontainer}>
          <h1 className={pf.title}><span className={pf.subtitle}>paul serbanescu</span>Portfolio</h1>
        </div>
      </main>

    </div>
  )
}
