import Head from 'next/head'
import home from '../styles/Home.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
          <div className={home.iconwrapper}>
            <a href='https://github.com/pserb' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={home.icon} icon={faGithub} /></a>
            <a href='https://linkedin.com/in/pserb' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={home.icon} icon={faLinkedin} /></a>
            <a href='mailto: paulserbanescu3@gmail.com' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className={home.icon} icon={faEnvelope} /></a>
          </div>
          <span className={home.caret}>&#8964;</span>
        </div>

        <div className={home.text}>
          <p>Hello! I&apos;m a freshman at Binghamton University in New York.<br/><br/>
          I am passionate about robotics, app development, computer programming, web development and design, and 3D modeling and rendering.</p>
          <p></p>
          <Link href="/portfolio"><button className={home.button}>Portfolio</button></Link>
        </div>
      </main>    

    </div>
  )
}
