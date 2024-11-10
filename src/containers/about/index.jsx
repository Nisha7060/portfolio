import React, { useState } from 'react';
import "./styles.scss"; // Assuming we use SCSS for styling
import Profileimage from "./ashi.png";
import { ReactTyped }  from 'react-typed'; // Correctly import 'Typed' from 'react-typed'

const About = () => {
  const [typedComplete, setTypedComplete] = useState(false);

  const onComplete = () => {
    setTypedComplete(true);
  };

  return (
    <div className="portfolio">
      <section className="intro">
        <div className="intro__left">
          <p className="intro__role">Software Developer</p>
          <h1>
            {typedComplete ? (
              <span
                dangerouslySetInnerHTML={{
                  __html: 'Hello, I’m <span style="color: white;">Ashish Kumar</span>',
                }}
              />
            ) : (
              <ReactTyped
                strings={["Hello, I’m Ashish Kumar"]}
                typeSpeed={60}
                backSpeed={30}
                loop={false}
                onComplete={onComplete}
              />
            )}
          </h1>

          <p className="intro__description">
            I excel at crafting elegant digital experiences and am proficient in various programming languages and technologies.
          </p>

          {/* Call to Action */}
          <div className="cta">
            {/* <button className="cta__download"><a href='https://www.canva.com/design/DAF7w5gjTv8/j_kx96PtIH-ksqWMzTTa0A/view?utm_content=DAF7w5gjTv8&utm_campaign=designshare&utm_medium=link&utm_source=editor' download>Download CV</a></button> */}
           
            <button className="cta__download">
              <a
                href="https://www.canva.com/design/DAF7w5gjTv8/j_kx96PtIH-ksqWMzTTa0A/view?utm_content=DAF7w5gjTv8&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </button>

            <div className="cta__socials">
              <i className="fa fa-pinterest" aria-hidden="true"></i>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
              <i className="fa fa-github" aria-hidden="true"></i>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="intro__right">
          <div className="image-container">
            <div className='circle-round'></div>
            <div className="circle-border">
              <img
                src={Profileimage}
                alt="Ashish Kumar"
                className="profile-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats__item">
          <h2>1+</h2>
          <p>Years of experience</p>
        </div>
        <div className="stats__item">
          <h2>10</h2>
          <p>Projects completed</p>
        </div>
        <div className="stats__item">
          <h2>8</h2>
          <p>Technologies mastered</p>
        </div>
        <div className="stats__item">
          <h2>200</h2>
          <p>Code commits</p>
        </div>
      </section>
    </div>
  );
};

export default About;