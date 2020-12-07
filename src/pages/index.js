import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';


import gottalotto1 from '../assets/images/gottalotto1.png';
import tournease1 from '../assets/images/tournease1.png';
import barhop1 from '../assets/images/barhop1.png';
import poolquiz1 from '../assets/images/poolquiz1.png';


import macbanner from '../assets/images/macbanner.png';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>Malek</strong>
              <br />
              Software Engineer
            </h2>
            <p>Here are a few of my projects</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            I'm constantly working on new projects and trying new approaches in order to stay up to
            with modern technologies. Here are a few of my more recent projects:
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://malekandgrace-gottalotto.now.sh/" target="_blank" className="image fit">
                  <img src={gottalotto1} alt="GottaLotto Project Screenshot" />
                  <header>
                    <h3>GottaLotto</h3>
                  </header>
                </a>
                <body>
                  <a
                    className="repo-link"
                    href="https://github.com/gracebodur/gottalotto-client"
                    target="_blank"
                  >
                    <span className="icon fa-code" />Client Repo
                  </a><br />
                  <a
                    className="repo-link"
                    href="https://github.com/gracebodur/gottalotto-api"
                    target="_blank"
                  >
                    <span className="icon fa-code" />Server Repo
                  </a>
                </body>
              </article>
              <article className="item">
                <a href="https://tournease-client.malekadair.now.sh/" target="_blank" className="image fit">
                  <img src={tournease1} alt="TournEase Project Screenshot" />
                  <header>
                    <h3>TournEase</h3>
                  </header>
                </a>
                <body>
                  <a
                    className="repo-link"
                    href="https://github.com/malekadair/tournease-client"
                    target="_blank"
                  >
                    <span className="icon fa-code" />Client Repo
                  </a><br />
                  <a
                    className="repo-link"
                    href="https://github.com/malekadair/tournease-server"
                    target="_blank"
                  >
                    <span className="icon fa-code" />Server Repo
                </a>
                </body>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="https://malekadair.github.io/barhop/" target="_blank" className="image fit">
                  <img src={barhop1} alt="BarHop Project Screenshot" />
                  <header>
                    <h3>BarHop</h3>
                  </header>
                </a>
                <body>
                  <a
                    className="repo-link"
                    href="https://github.com/malekadair/barhop"
                    target="_blank"
                  >
                    <span className="icon fa-code" />Project Repo
                  </a><br />
                </body>
              </article>
              <article className="item">
                <a href="https://malekadair.github.io/quiz-app/" target="_blank" className="image fit">
                  <img src={poolquiz1} alt="Pool Quiz Project Screenshot" />
                  <header>
                    <h3>Pool Quiz</h3>
                  </header>
                </a>
                <body>
                  <a
                    className="repo-link"
                    href="https://github.com/malekadair/quiz-app"
                    target="_blank"
                  >
                    <span className="icon fa-code" />Project Repo
                  </a><br />
                </body>
              </article>
            </div>
            {/* <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic6} alt="" />
                </a>
                <header>
                  <h3>Dolor Penatibus</h3>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic7} alt="" />
                </a>
                <header>
                  <h3>Orci Convallis</h3>
                </header>
              </article>
            </div> */}
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          {/* <a href="/#" className="image featured"> */}
          <img className="image featured" src={macbanner} alt="" />
          {/* </a> */}

          <p>
            I feel that I've always had the mind of a developer but have never
            had the opportunity to "develop" my skills enough to be dangerous until
            diving head-first into Thinkful’s bootcamp. I look forward to the
            future of working on a team alongside other great developers. What better
            atmosphere to continue growing and learning from others?
            <br />
            <br />
            When I'm not coding, you'll likely find me playing pool, mountain biking,
            or working on side projects. Each challenging in its own way. These challenges
            are what drive my passion for continuous growth.
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            Feel free to drop me a line.
          </p>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    {/* <PageFooter /> */}
  </Layout>
);

export default IndexPage;
