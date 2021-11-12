import Head from 'next/head'
import Image from 'next/image'
import home from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={home.container}>
      <Head>
        <title>Paul Serbanescu</title>
        <meta name="description" content="Homepage" />
      </Head>

      <main className={home.main}>
        <div className={home.titlecontainer}>
          <h1 className={home.title}><span className={home.subtitle}>personal homepage</span>Paul Serbanescu</h1>
          <span className={home.caret}>&#8964;</span>
        </div>

        <div className={home.text}>
          <p>Hello! I'm a junior at Stuyvesant High school in New York City.<br/>
          I am passionate about web development and design, computer programming, and 3D modeling and rendering.</p>
          <p></p>
          <Link href="/portfolio"><button className={home.button}>Portfolio</button></Link>
        </div>
      </main>    

    </div>
  )
}
