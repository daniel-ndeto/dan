import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
      <section className="about container section" id="about">
        <h2 className="section__title">About Me </h2>

        <div className="about__container grid">
          <img src={Image} alt="" className="about__img" />

          <div className="about__data grid">
            <div className="about__info">
              <p className="about__description">
                Hello! I'm Ndeto, and I'm based in Garissa, Kenya. I studied at
                Garissa university, where I completed my Bachelor's degree in
                Education Arts(Business & History) program. I joined PLP Academy where i completed my certificated in Full Stack Development. 
                <br />
                <br />
                I have a passion for coding and love to work on projects that challenge me.
                <br />
                <br />
                Fastforward to today, and I can honestly say it's been a
                beautiful journey and I hope to grow even further as Software
                Engineer. My current focus these days is on expanding my
                portfolio by building more projects that I can add on here, as
                well as being a great team player at my current role.
                <br />
                <br />
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className="about__list">
                <li>JavaScript (ES6+)</li>
                <li>PHP</li>
                <li>React</li>
                <li>Node.js</li>
                <li>MySQL</li>
                <li>NodeJS</li>
                <li>MongoDB</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>NestJs</li>
              </ul>
              <button className="btn" onClick={downloadResume}>
                Download CV
              </button>
            </div>

            <div className="about__skills grid">
            <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Teaching</h3>
                                <span className="skills__number">97%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage Teaching">
                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Software Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>
                      
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> 
          </div>
        </div>

        <AboutBox />
      </section>
    );
}

export default About