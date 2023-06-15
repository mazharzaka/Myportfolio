import React from "react";
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
  return (
    <div id="color">
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
                {" "}
                I obtained a certificate from the Egyptian Ministry of
                Communications in partnership with the global platform{" "}
                <span id="udacity">Udacity</span> in the field of
                front-web-devolpment. Then I decided to learn react. This will
                be the first pilot project for me.
              </p>
              {/* I am a  <span id='name'>20</span>-year-old student at the Faculty of Commerce, 
                Cairo University. I am very passionate about programming, and I obtained a certificate from the Egyptian Ministry of Communications in
             partnership with the global platform <span id='udacity'>Udacity</span>  in the field of front-web-devolpment. Then I decided to learn react. This will be the first pilot project for me. */}
            </p>

            <a
              className="btn btn-primary hvr-grow-shadow hvr-bounce-to-left"
              href="./my-cv (3).pdf"
              download
              role="button"
              id="butt"
              data-aos="fade-left">
              My Cv
            </a>
          </div>
          <div className="d-flex align-items-start" id="img">
            <svg
              viewBox="0 0 200 200"
              data-aos="fade-left"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FF0066"
                d="M62.5,-27.8C76.2,-12.4,79.1,17.5,66.9,41C54.7,64.5,27.4,81.6,1.5,80.7C-24.3,79.8,-48.6,61,-58.7,38.7C-68.7,16.4,-64.5,-9.2,-52.4,-23.7C-40.2,-38.3,-20.1,-41.7,2.1,-42.9C24.4,-44.1,48.8,-43.2,62.5,-27.8Z"
                transform="translate(100 100)"
              />
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
    </div>
  );
}

export default Home;
