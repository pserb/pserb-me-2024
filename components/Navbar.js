import Link from 'next/link'
import navbar from '../styles/Navbar.module.scss'

export default function Navbar({ }) {
    return <>
        <nav className={navbar.nav}>
            <Link href="/"><h1 className={navbar.title}><span className={navbar.subtitle}>personal homepage</span>Paul Serbanescu</h1></Link>
            <Link href="/"><span className={navbar.titledesc}>&uarr; click to go home</span></Link>

            <Link href="/portfolio"><span className={navbar.link}>portfolio</span></Link>
        </nav>
    </>
}