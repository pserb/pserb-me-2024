import Head from "next/head"
import pg from "../styles/Page.module.scss"
import gallery from "../styles/Gallery.module.scss"
import Title from '../components/Title'

export default function Gallery() {

    var imgIndex = 0

    const images = [
        "/img/duck-light.png",
        "/img/duck-dark.png",
    ]

    function changeImage() {
        console.log("suppp")
        console.log(imgIndex)
        if (imgIndex == 0) {
            imgIndex = 1
        } else {
            imgIndex = 0
        }
    }

    return (
        <div className={pg.container}>
            <Head>
                <title>Gallery | Paul Serbanescu</title>
                <meta name="description" content="Gallery"></meta>
            </Head>

            <main className={pg.main}>
                <Title title="Gallery" subtitle="blender"></Title>

                <div className={gallery.flexcontainer}>
                    <img src="/img/duck-light.png"></img>
                    <img src="/img/duck-dark.png"></img>

                    <img src="/img/bunny-light.png"></img>
                    <img src="/img/bunny-dark.png"></img>

                    <img src="/img/hand-light.png"></img>
                    <img src="/img/hand-dark.png"></img>
                </div>
                
                <div className={gallery.lscontainer}>
                    <img src="/img/dragonrock.png"></img>
                    <img src="/img/robot-redblue.png"></img>
                </div>

            </main>
        </div>
    )
}