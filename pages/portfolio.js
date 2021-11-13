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
        <div className={pf.content}>
          <div className={pf.section}>
            <h2 className={pf.sectiontitle}>Blender</h2>
            <p className={pf.sectioncontent}><a className={pf.link} href="https://www.blender.org/" target="_blank">Blender</a> is a free and powerful 3D modeling and rendering program, and it allows for incredible ray-traced renders. Here are a couple of my favorites, using 3D models I found online.</p>
            <button className={pf.buttonsm}>Gallery</button>
          </div>
          {/* <span className={pf.dot}>&bull;</span> */}
          <div className={pf.content}>
            <div className={pf.section}>
              <h2 className={pf.sectiontitle}>NetLogo</h2>
              <p className={pf.sectioncontent}><a className={pf.link} href="https://ccl.northwestern.edu/netlogo/">NetLogo</a> is a multi-agent programmable modeling environment. I&apos;ve made a couple projects during my time in Stuyvesant&apos;s IntoCS course, including an animation that won me first place in a class competition and a sandbox pixel game.</p>
              <button className={pf.buttonmd}>View Projects</button>
            </div>
          </div>
          {/* <span className={pf.dot}>&bull;</span> */}
          <div className={pf.content}>
            <div className={pf.section}>
              <h2 className={pf.sectiontitle}>Python</h2>
              <p className={pf.sectioncontent}>A collection of a couple small python scripts I&apos;ve made, including one which prints out the Fibonacci sequence, one that lets you test out the <a className={pf.link} href="https://en.wikipedia.org/wiki/Collatz_conjecture" target="_blank">Collatz Conjecture</a>, and one that lets you play rock paper scissors with a computer.</p>
              <button className={pf.buttonlist}>Fibonacci Squence</button>
              <button className={pf.buttonlist}>Collatz Conjecture</button>
              <button className={pf.buttonlist}>Rock Paper Scissors</button>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
