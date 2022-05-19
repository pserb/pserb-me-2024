import Head from 'next/head'
import Image from 'next/image'
import pf from '../styles/Portfolio.module.scss'
import block from '../styles/Block.module.scss';
import Link from 'next/link'
import Block from '../components/Block'

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

        {/* <Block title="Testing" buttonList={[1, 2, 3]}>
        is a free and powerful 3D modeling and rendering program, and it allows for incredible ray-traced renders. Here are a couple of my favorites, using 3D models I found online.is a free and powerful 3D modeling and rendering program, and it allows for incredible ray-traced renders. Here are a couple of my favorites, using 3D models I found online.
        </Block> */}

        <Block title="Stuy Schedule App">
          An app I made for Stuyvesant High School&apos;s bell schedule
          <Link href="/appsupport">App Support</Link>
        </Block>

        <Block title="Blender" smallButton="Gallery">
          <a className={block.link} href="https://www.blender.org/" target="_blank" rel="noreferrer">Blender</a> is a free and powerful 3D modeling and rendering program, and it allows for incredible ray-traced renders. Here are a couple of my favorites, using 3D models I found online.          
        </Block>

        <Block title="NetLogo" mediumButton="View Projects">
          <a className={block.link} href="https://ccl.northwestern.edu/netlogo/" target="_blank" rel="noreferrer">NetLogo</a> is a multi-agent programmable modeling environment. I&apos;ve made a couple projects during my time in Stuyvesant&apos;s IntoCS course, including an animation that won me first place in a class competition and a sandbox pixel game.
        </Block>

        <Block title="Python" buttonList={["Fibonacci Squence","Collatz Conjecture","Rock Paper Scissors"]}>
        A collection of a couple small python scripts I&apos;ve made, including one which prints out the Fibonacci sequence, one that lets you test out the <a className={pf.link} href="https://en.wikipedia.org/wiki/Collatz_conjecture" target="_blank" rel="noreferrer">Collatz Conjecture</a>, and one that lets you play rock paper scissors with a computer.
        </Block>
 
      </main>

    </div>
  )
}
