import Head from "next/head";
import pg from "../styles/Page.module.scss";
import gallery from "../styles/Gallery.module.scss";
import Title from "../components/Title";

import Image from "next/image";

export default function Gallery() {
  var imgIndex = 0;

  const images = ["/img/duck-light.png", "/img/duck-dark.png"];

  function changeImage() {
    console.log("suppp");
    console.log(imgIndex);
    if (imgIndex == 0) {
      imgIndex = 1;
    } else {
      imgIndex = 0;
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
          <div className={gallery.lscontainer}>
            <span className={gallery.lsvideo}>
              <video src="/videos/porsche-gt4-rs.mp4" autoPlay muted loop playsInline />
            </span>
          </div>

          <span className={gallery.image}>
            <Image src="/img/duck-light.png" layout="fill" />
          </span>
          <span className={gallery.image}>
            <Image src="/img/duck-dark.png" layout="fill" />
          </span>

          <span className={gallery.image}>
            <Image src="/img/bunny-light.png" layout="fill" />
          </span>
          <span className={gallery.image}>
            <Image src="/img/bunny-dark.png" layout="fill" />
          </span>

          <span className={gallery.image}>
            <Image src="/img/hand-light.png" layout="fill" />
          </span>
          <span className={gallery.image}>
            <Image src="/img/hand-dark.png" layout="fill" />
          </span>

          {/* <img src="/img/duck-light.png"></img>
                    <img src="/img/duck-dark.png"></img>

                    <img src="/img/bunny-light.png"></img>
                    <img src="/img/bunny-dark.png"></img>

                    <img src="/img/hand-light.png"></img>
                    <img src="/img/hand-dark.png"></img> */}
        </div>

        <div className={gallery.lscontainer}>
          <span className={gallery.lsimage}>
            <Image src="/img/dragonrock.png" layout="fill" />
          </span>
          <span className={gallery.lsimage}>
            <Image src="/img/robot-redblue.png" layout="fill" />
          </span>
          {/* <img src="/img/dragonrock.png"></img>
                    <img src="/img/robot-redblue.png"></img> */}
        </div>
      </main>
    </div>
  );
}
