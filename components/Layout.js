import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return <>
        <Head>
            <link rel='icon' href="/img/logo.png"></link>
        </Head>

        <Navbar />
        {children}
    </>
}
