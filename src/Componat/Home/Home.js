import React, { useState } from "react";
import "./Home.css";
import Typed from "typed.js";
function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "I am a  <span id=name >20</span>-year-old.",
        "I am very passionate about programming..",
        " I am front-end developer",
      ],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  const videoplay = () => {
    const show = document.querySelector(".contain-video");
    const video = document.querySelector("#video-av");
    show.classList.toggle("active");
    console.log(video.ended);
    show.className == "contain-video active" ? video.play() : video.pause();
  };

  return (
    <div id="color">
      <section class="snow">
        <div class="snowflake">
          <i class="fa-regular fa-snowflake"></i>
        </div>
        <div class="snowflake1">
          <i class="fa-regular fa-snowflake"></i>
        </div>
        <div class="snowflake2">
          <i class="fa-regular fa-star"></i>
        </div>
        <div class="snowflake3">
          <i class="fa-regular fa-star"></i>
        </div>
        <div class="snowflake4">
          <i class="fa-regular fa-star"></i>
        </div>
        <div class="snowflake5">
          <i class="fa-regular fa-star"></i>
        </div>
        <div class="snowflake6">
          <i class="fa-regular fa-star"></i>
        </div>
        <div class="snowflake7">
          <i class="fa-regular fa-star"></i>
        </div>
        <div class="snowflake8">
          <i class="fa-regular fa-star"></i>
        </div>
        <div class="snowflake9">
          <i class="fa-regular fa-snowflake"></i>
        </div>
        <div class="snowflake10">
          <i class="fa-solid fa-snowflake"></i>
        </div>
        <div class="snowflake11">
          <i class="fa-solid fa-snowflake"></i>
        </div>
        <div class="snowflake12">
          <i class="fa-regular fa-snowflake"></i>
        </div>
        <div class="snowflake13">
          <i class="fa-regular fa-snowflake"></i>
        </div>
        <div class="snowflake14">
          <i class="fa-regular fa-snowflake"></i>
        </div>
      </section>
      <div id="sec" className='"d-flex flex-row p-5 mt-5   container'>
        <div id="res" class="d-flex mt-5 flex-row  ">
          <div className="text">
            <h1 id="header" data-aos="fade-right">
              This is My Portifollo<span>App</span>
            </h1>
            <p id="par" data-aos="fade-up">
              <p className="namw">
                {" "}
                My Name is <span id="name">Mazhar Mohamed</span>.
              </p>
              <span ref={el} />
              <p className="tex">
                Enthusiastic front-end developer with a solid foundation in
                HTML, CSS, JavaScript, and modern frameworks. Recently graduated
                with a focus on web development, supported by hands-on project
                experience and certifications from{" "}
                <span id="udacity">Udacity</span>. Passionate about creating
                responsive, user-friendly web applications and eager to
                contribute to a dynamic team. Seeking a challenging role to
                further develop my skills and innovate in front-end development.
              </p>
              {/* I am a  <span id='name'>20</span>-year-old student at the Faculty of Commerce, 
                Cairo University. I am very passionate about programming, and I obtained a certificate from the Egyptian Ministry of Communications in
             partnership with the global platform <span id='udacity'>Udacity</span>  in the field of front-web-devolpment. Then I decided to learn react. This will be the first pilot project for me. */}
            </p>
            <div className="mb">
              <a
                className="button"
                href="./my-cv (3).pdf"
                download
                role="button"
                id="butt"
                data-aos="fade-left"
                style={{ "--color": "#00BCD4" }}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                My Cv
              </a>
            </div>
            {/* <a
              className="btn btn-primary hvr-grow-shadow hvr-bounce-to-left"
              href="./my-cv (3).pdf"
              download
              role="button"
              id="butt"
              data-aos="fade-left"
            >
              My Cv
            </a> */}
          </div>
          <div className="d-flex align-items-start" id="img">
            <svg
              viewBox="0 0 200 200"
              data-aos="fade-left"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#2A2A2A" transform="translate(100 100)">
                <animate
                  attributeName="d"
                  dur="8000ms"
                  repeatCount="indefinite"
                  values="M55.5,-57.2C68,-43,71.5,-21.5,68.6,-2.8C65.8,15.8,56.6,31.6,44.1,46.3C31.6,60.9,15.8,74.4,-2.5,76.9C-20.8,79.4,-41.7,71,-55.7,56.3C-69.8,41.7,-77,20.8,-71.6,5.4C-66.3,-10.1,-48.2,-20.1,-34.2,-34.3C-20.1,-48.5,-10.1,-66.9,5.7,-72.6C21.5,-78.3,43,-71.4,55.5,-57.2Z;M50.3,-54C61.5,-39.1,64.5,-19.5,66.1,1.6C67.7,22.8,68,45.5,56.8,58.1C45.5,70.6,22.8,72.9,5.1,67.8C-12.5,62.7,-25.1,50.1,-36.2,37.6C-47.3,25.1,-56.9,12.5,-57.1,-0.2C-57.3,-12.9,-48,-25.8,-36.9,-40.8C-25.8,-55.7,-12.9,-72.6,3.3,-76C19.5,-79.3,39.1,-69,50.3,-54Z;M58.2,-59.1C72.8,-43.5,80.5,-21.7,80,-0.4C79.6,20.9,71.1,41.8,56.5,58.3C41.8,74.8,20.9,87,-0.9,87.9C-22.7,88.7,-45.3,78.3,-60.6,61.8C-76,45.3,-84,22.7,-83.4,0.6C-82.8,-21.4,-73.5,-42.9,-58.2,-58.5C-42.9,-74.2,-21.4,-84,0.1,-84.1C21.7,-84.3,43.5,-74.7,58.2,-59.1Z;M53.7,-53.6C66.9,-40.4,73.4,-20.2,73.2,-0.2C73,19.8,66.3,39.7,53,54C39.7,68.3,19.8,77.2,-1.7,78.9C-23.3,80.6,-46.6,75.2,-62.8,60.9C-79,46.6,-88.2,23.3,-85.6,2.7C-82.9,-17.9,-68.4,-35.9,-52.1,-49.2C-35.9,-62.5,-17.9,-71.1,1.1,-72.2C20.2,-73.3,40.4,-66.9,53.7,-53.6Z;M41.1,-44.5C52.6,-29.5,61.1,-14.7,62.6,1.5C64.1,17.8,58.8,35.6,47.2,47.6C35.6,59.5,17.8,65.6,-2.4,68C-22.6,70.4,-45.3,69.2,-61.1,57.2C-76.8,45.3,-85.8,22.6,-82.2,3.6C-78.5,-15.4,-62.4,-30.8,-46.6,-45.8C-30.8,-60.7,-15.4,-75.3,-0.3,-74.9C14.7,-74.6,29.5,-59.4,41.1,-44.5Z; "
                ></animate>
              </path>
            </svg>
            <div id="maz" data-aos="fade-up" data-aos-duration="2000">
              <img src="./20220913142257_IMG_9687__1_-removebg-preview.png" />
            </div>
          </div>
        </div>
        <div className="icons" data-aos="fade-down">
          <a href="https://www.linkedin.com/in/mazhar-mohamed-568938244/">
            <i class="fa-brands fa-linkedin-in "></i>
          </a>
          <a href="https://github.com/mazharzaka">
            <i class="fa-brands fa-github "></i>
          </a>
          <a href="#">
            <i class="fa-regular fa-envelope "></i>
          </a>
        </div>
      </div>
      <div className="video" data-aos="fade-up">
        {/*  */}
        <div className="contain-video">
          <video id="video-av">
            <source
              src="Green Screen - Untitled video 720p 720p.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <span id="text-av">CLICK ME</span>
        <img
          className="hvr-bounce-in avtar-pic"
          src="pltn-style-74-year-old-man-with-a-scruffy-face-day-old-facial-hair-wearing-a-golf-shirt-with-a-p-280863813-removebg-preview.png"
          onClick={videoplay}
        />
      </div>
    </div>
  );
}

export default Home;
