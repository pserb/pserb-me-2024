import Head from 'next/head'
import Image from 'next/image'
import pg from '../styles/Page.module.scss'
import block from '../styles/Block.module.scss';
import Link from 'next/link'
import Block from '../components/Block'
import Button from "../components/Button"
import Title from '../components/Title'

export default function Home() {
  return (
    <div className={pg.container}>
      <Head>
        <title>Portfolio | Paul Serbanescu</title>
        <meta name="description" content="Portfolio" />
      </Head>

      <main className={pg.main}>
        <Title title="Portfolio" subtitle="paul serbanescu"></Title>

        <Block title="FTC Robotics">
          <div className={pg.positiontitle}>Vice President, Head of Software Engineering: Stuy Fission 310</div>
          <br></br>
          Organized code repository and implemented modern techniques to enable more complex robot mechanisms. Led mentor-student relations, sponsors, and community outreach.
          <br></br>
          <br></br>
          <Button label="Robot Code" link="https://github.com/Fission310/freight-frenzy" medium="y"></Button>
          &nbsp;
          <Button label="FissionLib" link="https://github.com/Fission310/FissionLib" medium="y"></Button>
        </Block>

        <Block title="Stuy Schedule App">
          <div className={pg.positiontitle}>Creator, Over 1,700 downloads!</div>
          <br></br>
          An iOS app which helps Stuyvesant students get on track by displaying current school announcements, events, and the bell schedule so they&apos;ll always know when class starts. Features the newest iOS features and widgets.
          <br></br>
          <br></br>
          <Button label="App Store" link="https://apps.apple.com/us/app/stuy-schedule/id1625021474?platform=iphone" medium="y"></Button>
          &nbsp;
          <Button label="App Support" link="/appsupport" medium="y"></Button>
        </Block>

        <Block title="CS Dojo">
          <div className={pg.positiontitle}>Senpai (Tutor)</div>
          <br></br>
          Assisted students with homework problems and class lessons from intro level to AP level. The CS Dojo is a welcoming and informal environment where CS students can work on problems, recieve help, and discuss topics.
          <br></br>
          <br></br>
          <Button label="About the Dojo" link="https://www.stuyspec.com/features/decoding-the-cs-dojo" large="y"></Button>
        </Block>

        <Block title="Web Development">
          <div className={pg.positiontitle}>UI/UX using React and Next.js</div>
          <br></br>
          Developed numerous websites for student government, clubs, and personal use. Used modern techniques and simplistic design to create easy-to-use, mobile-compatible, and functional sites. Of course, including this site.
          <br></br> 
          <br></br> 
          <Button label="Stuy Model UN" link="https://www.stuymun.org/" medium="y"></Button>
          &nbsp;
          <Button label="Fission 310" link="https://fission310.com/" medium="y"></Button>
          &nbsp;
          <Button label="Sophomore Caucus" link="https://pserb.github.io/sophsu-web/index.html" large="y"></Button>
        </Block>

        <Block title="Student Government">
          <div className={pg.positiontitle}>IT Director, Campaign Manager</div>
          <br></br>
          Built and managed campaign websites, formed relationships with students, teachers, and administration, and led caucus members in IT projects.
        </Block>

        <Block title="Blender" smallButton="Gallery" smallButtonLink="/portfolio">
          <div className={pg.positiontitle}>Hobby</div>
          <br></br>
          <a className={block.link} href="https://www.blender.org/" target="_blank" rel="noopener noreferrer">Blender</a> is a free and powerful 3D modeling and rendering program. It is a great platform to be creative and artistic. Here are some of my favorite pieces:
          <br></br>
          <br></br>
          <Button label="Gallery" link="/gallery/" medium="y"></Button>
        </Block>
 
      </main>

    </div>
  )
}
