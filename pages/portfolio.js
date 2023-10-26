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

        <h1 className={pg.ghlink}><a target="_blank" rel="noopener noreferrer" href="https://github.com/pserb">View me on GitHub</a></h1>
        <Block title="FTC Robotics">
          <div className={pg.positiontitle}>Vice President, Head of Software Engineering, Driver: Stuy Fission 310</div>
          <br></br>
          Organized code repository and implemented modern techniques to enable more complex robot mechanisms. Led mentor-student relations, sponsors, and community outreach.
          <br></br>
          <br></br>
          <Button label="Robot Code" link="https://github.com/Fission310/power-play" medium="y"></Button>
          &nbsp;
          <Button label="FissionLib" link="https://github.com/Fission310/FissionLib" medium="y"></Button>

          <br></br>
          <br></br>
          
          {/* something to wrap this picture in a box like pple */}
          <div className={pg.statblock}>
            <div className={pg.item}>
              <div className={pg.imgwrapper}>
                <img src="/img/robot.png"></img>
              </div>
            </div>
            <div className={pg.imgdivider}></div>
            <div className={pg.item}>
              <div className={pg.textwrapper}>
                <h2 className={block.sectiontitle}>Power Play Season</h2>
                <br></br>
                <div className={pg.positiontitle}>2022-2023 FTC robotics</div>
                <p><span className={pg.bold}>World class.</span> Our best robot yet, designed with simplicity and reliability in mind.<span className={pg.bold}> Maximum scoring </span>autonomous program with real-time error correcting pathfinding. Robust manual controls with <span className={pg.bold}>automation</span>, making it our easiest robot ever to drive. Running on our custom <span className={pg.bold}>purpose built</span> Java code library, open and free for any team to use.</p>
                {/* vertical thingy like pple here */}
                <div className={pg.statcontainer}>
                  <span className={pg.statword}>Ranked</span>
                  <span className={pg.statnumber}>34</span>
                  <span className={pg.statword}>Worldwide</span>
                </div>
                <div className={pg.statcontainer}>
                  <span className={pg.statword}>Over</span>
                  <span className={pg.statnumbersm}>11000</span>
                  <span className={pg.statword}>Lines of Code</span>
                </div>
              </div>
            </div>
          </div>

          <br></br>
          <br></br>

          <h1 className={pg.quote}>Form follows function.<br></br>Optimized for our needs.</h1>
          <br></br>
          <a href="https://github.com/Fission310/FissionLib" target="_blank" rel="noopener noreferrer"><img className={block.fullwidth} src="/img/macbook.png"></img></a>
        </Block>

        <Block title="Stuy Schedule App">
          <div className={pg.positiontitle}>Creator, Over 3,200 downloads!</div>
          <br></br>
          An iOS app which helps Stuyvesant students get on track by displaying current school announcements, events, and the bell schedule so they&apos;ll always know when class starts. Features the newest iOS features and widgets.
          <br></br>
          <br></br>
          <Button label="App Store" link="https://apps.apple.com/us/app/stuy-schedule/id1625021474?platform=iphone" medium="y"></Button>
          &nbsp;
          <Button label="GitHub" link="https://github.com/pserb/stuy-schedule" medium="y"></Button>
          &nbsp;
          <Button label="App Support" link="/appsupport" medium="y"></Button>

          <div className={pg.statblock}>
            <div className={pg.item}>
              <div className={pg.imgwrapper}>
                  <img src="/img/app-page-portrait.png" style={{padding: "1.5em"}}></img>
              </div>
            </div>
            <div className={pg.imgdivider}></div>
            <div className={pg.item}>
              <div className={pg.textwrapper}>
                <h2 className={block.sectiontitle}>School Utility</h2>
                <br></br>
                <div className={pg.positiontitle}>Built entirely with Swift</div>
                <p>Used by thousands of Stuyvesant High School students daily. A modern and convienent way to stay up-to-date on all things Stuy! <span className={pg.bold}>Web-based API</span> to serve updated information and make quick changes if necessary.</p>
                <div className={pg.statcontainer}>
                  <span className={pg.statword}>Upwards of</span>
                  <span className={pg.statnumber}>3200</span>
                  <span className={pg.statword}>Downloads</span>
                </div>
                <div className={pg.statcontainer}>
                  <span className={pg.statword}></span>
                  <span className={pg.statnumbersm}>1.5M+</span>
                  <span className={pg.statword}>Monthly API Requests</span>
                </div>
              </div>
            </div>
          </div>
        </Block>

        <Block title="CS Dojo">
          <div className={pg.positiontitle}>Senpai (Tutor)</div>
          <br></br>
          Assisted students with homework problems and class lessons from intro level to college level. The CS Dojo is a welcoming and informal environment where CS students can work on problems, recieve help, and discuss topics.
          <br></br>
          <br></br>
          <Button label="About the Dojo" link="https://www.stuyspec.com/article/decoding-the-cs-dojo" large="y"></Button>
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
