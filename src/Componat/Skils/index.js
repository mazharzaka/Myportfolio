import React from "react";
import { useState, useEffect } from "react";
import "hover.css/css/hover-min.css";
import "./skils.css";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import BallCanvas from "../../canvas";
// import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import LazyLoad from "react-lazy-load";
AOS.init();
function Skils() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    console.log(technologies[0].icon)
    
    window.addEventListener("scroll", () => {
      const bar = document.querySelectorAll(".progress-bar");
      if (window.scrollY > 300) {
        setScrollTop(bar.forEach((e) => e.classList.add("active")));
      } else {
        setScrollTop(false);
        bar.forEach((e) => e.classList.remove("active"));
      }
    });
    let sc = document.querySelector(".scroller");
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    console.log(document.documentElement.scrollHeight);
    console.log(document.documentElement.clientHeight);
    console.log(height);

    window.addEventListener("scroll", () => {
      const scrollTop = document.documentElement.scrollTop;
      sc.style.width = `${(scrollTop / height) * 100}%`;
    });
  }, []);

  const page = (e) => {
    const num = document.querySelectorAll(".num");
    num.forEach((e) => e.classList.remove("active"));
    e.target.classList.add("active");
    const contain = document.querySelectorAll(".bars");
    const bar = document.querySelectorAll(".bar.b");
    console.log(bar);
    console.log(e.target.innerHTML == "2");
    if (e.target.innerHTML == "1") {
      console.log(contain);
      contain[0].classList.remove("active");
      contain[2].classList.add("active");
      contain[1].classList.add("active");
      bar[0].classList.add("active");
      bar[2].classList.remove("active");
      bar[1].classList.remove("active");
    } else if (e.target.innerHTML == "2") {
      console.log(contain);
      contain[1].classList.remove("active");
      contain[0].classList.add("active");
      contain[2].classList.add("active");
      bar[1].classList.add("active");
      bar[0].classList.remove("active");
      bar[2].classList.remove("active");
    } else if (e.target.innerHTML == "3") {
      console.log(contain);
      contain[2].classList.remove("active");
      contain[0].classList.add("active");
      contain[1].classList.add("active");
      bar[2].classList.add("active");
      bar[0].classList.remove("active");
      bar[1].classList.remove("active");
    }
  };
  const videoplay = () => {
    const show = document.querySelector(".contain-video-skils");
    const video = document.querySelector("#video-skils");
    show.classList.toggle("active");
    console.log(video.ended);
    show.className == "contain-video-skils active"
      ? video.play()
      : video.pause();
  };
  return (
    <div id="skil">
      <div className="container">
        <div className="d-flex justify-content-center" data-aos="fade-up">
          <h1 class="hvr-buzz-out hvr-underline-from-right" id="name-con">
            My Skills
          </h1>
        </div>
        {/* <div className="d-flex justify-content-center">
          <div className="skils" data-aos="fade-right">
            <div className="bars">
              <div className="bar">
                <div className="skil-name" data-aos="fade-left">
                  Html5
                </div>
                <div class="progress active">
                  <div
                    class="progress-bar"
                    id="pargess1"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
              <div className="bar">
                <div className="skil-name" data-aos="fade-left">
                  Css
                </div>
                <div class="progress">
                  {" "}
                  <div
                    class="progress-bar"
                    id="pargess2"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
              <div className="bar">
                <div className="skil-name" data-aos="fade-left">
                  Js
                </div>
                <div class="progress">
                  {" "}
                  <div
                    class="progress-bar  bg-warning"
                    id="pargess3"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
            </div>

            <div className="bars active">
              <div className="bar">
                <div className="skil-name" data-aos="fade-left">
                  Git
                </div>
                <div class="progress">
                  {" "}
                  <div
                    class="progress-bar  bg-danger"
                    id="pargess5"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
              <div className="bar">
                <div className="skil-name" data-aos="fade-left">
                  Bootstrap
                </div>
                <div class="progress">
                  {" "}
                  <div
                    class="progress-bar  bg-danger"
                    id="pargess6"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
              <div className="bar">
                <div className="skil-name" data-aos="fade-left">
                  Sass
                </div>
                <div class="progress">
                  {" "}
                  <div
                    class="progress-bar  bg-danger"
                    id="pargess7"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div className="bars active">
              <div className="bar">
                <div className="skil-name" data-aos="fade-left">
                  Api
                </div>
                <div class="progress">
                  {" "}
                  <div
                    class="progress-bar  bg-danger"
                    id="pargess4"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>{" "}
              </div>
              <div className="bar">
                <div className="skil-name" data-aos="fade-left">
                  Responsive
                </div>
                <div class="progress">
                  {" "}
                  <div
                    class="progress-bar  bg-warning"
                    id="pargess3"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
              <div className="bar">
                <div className="skil-name" data-aos="fade-left">
                  React
                </div>
                <div class="progress">
                  {" "}
                  <div
                    class="progress-bar  bg-danger"
                    id="pargess8"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
              </div>
            </div>

            <div className="bar b active" data-aos="fade-up">
              <div className="icon hvr-float-shadow hvr-bounce-in" id="ht">
                <i class="fa-brands fa-html5"></i>
              </div>
              <div className="icon hvr-float-shadow hvr-bounce-in" id="cs">
                <i class="fa-brands fa-css3-alt"></i>
              </div>
              <div className="icon hvr-float-shadow hvr-bounce-in" id="js">
                <i class="fa-brands fa-js"></i>
              </div>
            </div>
            <div className="bar b" data-aos="fade-up">
              <div className="icon hvr-float-shadow hvr-bounce-in" id="git">
                <i class="fa-brands fa-git-alt"></i>
              </div>
              <div className="icon hvr-float-shadow hvr-bsounce-in" id="bo">
                <i class="fa-brands fa-bootstrap"></i>
              </div>
              <div className="icon hvr-float-shadow hvr-bounce-in" id="sa">
                <i class="fa-brands fa-sass"></i>
              </div>
            </div>
            <div className="bar b" data-aos="fade-up">
              <div className="icon hvr-float-shadow hvr-bounce-in" id="api">
                <i class="fa-solid fa-gears"></i>
              </div>
              <div className="icon hvr-float-shadow hvr-bounce-in" id="res">
                <i class="fa-solid fa-tablet"></i>
              </div>
              <div className="icon hvr-float-shadow hvr-bounce-in" id="re">
                <i class="fa-brands fa-react"></i>
              </div>
            </div>
            <div className="bar a" data-aos="fade-down">
              <div onClick={page} className="num active">
                1
              </div>
              <div onClick={page} className="num">
                2
              </div>
              <div onClick={page} className="num">
                3
              </div>
            </div>
            <div className="video" data-aos="fade-up">
              {/* 
              <div className="contain-video-skils">
                <video id="video-skils">
                  <source src="Untitled video (3) 720p.mp4" type="video/mp4" />
                </video>
              </div>
              <span id="text-av">CLICK ME</span>
              <img
                className="hvr-bounce-in avtar-en"
                src="pltn-style-child-albert-einstein3dlibrary-bookpotrait-realistic8k-cute-big-circular-reflective-289428107-removebg-preview.png"
                onClick={videoplay}
              />
            </div>
          </div>{" "}
        </div> */}
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {technologies.map((technology) => (
                <LazyLoad >
            <div style={{ width: "190px" }} key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div></LazyLoad>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skils;
