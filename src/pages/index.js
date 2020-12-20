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
  { id: 'resume', name: 'Resume', icon: 'fa-file' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi, my name is <strong>Malek</strong>
            </h2>
            <p>I've made a few things that you should check out.</p>
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
            I'm always working on new projects and trying new approaches in order to stay up to
            with modern technologies. Here are a few of my more recent projects:
          </p>

          <div className="project-list">
            <div className="project-item">
              <div className="project-header">
                <a href="https://malekandgrace-gottalotto.now.sh/" target="_blank" rel="noreferrer" className="image fit cover">
                  <img src={gottalotto1} alt="GottaLotto Project Screenshot" />
                  <h3 className="project-item-header">GottaLotto</h3>
                </a>
              </div>
              <div className="project-links">
                <a
                  className="repo-link"
                  href="https://github.com/gracebodur/gottalotto-client"
                  target="_blank" rel="noreferrer"
                >
                  <span className="icon fa-laptop" /> Client Repo
                  </a>
                <a
                  className="repo-link"
                  href="https://github.com/gracebodur/gottalotto-api"
                  target="_blank" rel="noreferrer"
                >
                  <span className="icon fa-server" /> Server Repo
                  </a>
              </div>
            </div>

            <div className="project-item">
              <div className="project-header">
                <a href="https://tournease-client.malekadair.now.sh/" target="_blank" rel="noreferrer" className="image fit cover">
                  <img src={tournease1} alt="TournEase Project Screenshot" />
                  <h3 className="project-item-header">TournEase</h3>
                </a>
              </div>
              <div className="project-links">
                <a
                  className="repo-link"
                  href="https://github.com/malekadair/tournease-client"
                  target="_blank" rel="noreferrer"
                >
                  <span className="icon fa-laptop" /> Client Repo
                  </a>
                <a
                  className="repo-link"
                  href="https://github.com/malekadair/tournease-server"
                  target="_blank" rel="noreferrer"
                >
                  <span className="icon fa-server" /> Server Repo
                  </a>
              </div>
            </div>

            <div className="project-item">
              <div className="project-header">
                <a href="https://malekadair.github.io/barhop/" target="_blank" rel="noreferrer" className="image fit cover">
                  <img src={barhop1} alt="BarHop Project Screenshot" />
                  <h3 className="project-item-header">BarHop</h3>
                </a>
              </div>
              <div className="project-links">
                <a
                  className="repo-link"
                  href="https://github.com/malekadair/barhop"
                  target="_blank" rel="noreferrer"
                >
                  <span className="icon fa-code" /> Project Repo
                  </a>
              </div>
            </div>


            <div className="project-item">
              <div className="project-header">
                <a href="https://malekadair.github.io/quiz-app/" target="_blank" rel="noreferrer" className="image fit cover">
                  <img src={poolquiz1} alt="Pool Quiz Project Screenshot" />
                  <h3 className="project-item-header">Pool Quiz</h3>
                </a>
              </div>
              <div className="project-links">
                <a
                  className="repo-link"
                  href="https://github.com/malekadair/quiz-app"
                  target="_blank" rel="noreferrer"
                >
                  <span className="icon fa-code" /> Project Repo
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <img className="image featured" src={macbanner} alt="" />

          <p>
            I feel that I've always had the mind of a developer but never
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

      <section id="resume" className="four">
        <div className="container">
          <header>
            <h2>Resume</h2>
          </header>
          <p>
            <a href="https://cdn.brandfolder.io/MLAUM12T/as/2hbfhspsbt9pm2jxrkkwgbw/Resume.pdf" style={{ fontWeight: "500" }} download target="_blank" rel="noreferrer"  >Click here</a> to view and download my full Resume
          </p>
          <div className="row" >
            <div className="col-6 col-12-mobile" style={{ textAlign: "center" }} >
              <embed
                src="https://cdn.brandfolder.io/MLAUM12T/as/wf3c57jv2njbxprmtmc8mj5w/New_Resume_1-1.pdf#view=Fit&statusbar=0&toolbar=0&navpanes=0&scrollbar=0"
                type="application/pdf"
                style={{
                  width: "315px",
                  height: "405px",
                }} className="item"
              />
              <p>Page 1</p>
            </div>
            <div className="col-6 col-12-mobile" style={{ textAlign: "center" }} >
              <embed
                src="https://cdn.brandfolder.io/MLAUM12T/as/wf3c57jv2njbxprmtmc8mj5w/New_Resume_1-1.pdf?position=2#view=Fit&statusbar=0&toolbar=0&navpanes=0&scrollbar=0"
                type="application/pdf"
                style={{ width: "315px", height: "405px" }}
                className="item"
              />
              <p>Page 2</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
