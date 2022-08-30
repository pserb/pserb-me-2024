import Head from 'next/head'
// todo change to support module
import pg from '../styles/Page.module.scss'
import ap from '../styles/AppSupport.module.scss'
import home from '../styles/Home.module.scss'

export default function support() {
   return (
        <div className={pg.container}>
            <Head>
                <title>App Support | Paul Serbanescu</title>
            </Head>

            <main className={pg.main}>
                <div className={pg.titlecontainer}>
                    <h1 className={pg.title}><span className={pg.subtitle}>stuy schedule</span>App Support</h1>
                </div>
                <div className={ap.text}>
                    <h1>Stuy Schedule App Support</h1> 
                    <p>Feel free to contact me at pserbanescu30@stuy.edu or +1 917-530-0527</p>
                </div>
            </main>
        </div>
   )
}