import React from "react";

import "./project.css";
import { Tilt } from "react-tilt";
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
const Project = () => {
  const filter = (e) => {
    const btns = document.querySelectorAll(".filter");
    console.log(btns);
    btns.forEach((e) => {
      e.classList.add("hvr-bounce-to-top");
      e.classList.remove("b-a");
    });
    e.target.classList.remove("hvr-bounce-to-top");
    e.target.classList.add("b-a");
    if (e.target.textContent == "Apps") {
      const All = document.querySelector("#Allcards");
      const Apps = document.querySelector("#Appscards");
      const fwd = document.querySelector("#fwdcards");
      const Api = document.querySelector("#Apicards");

      // All.className.add("hide");
      // Apps.className.remove("hide");
      All.classList.add("hide");
      fwd.classList.add("hide");
      Api.classList.add("hide");
      Apps.classList.remove("hide");
    } else if (e.target.textContent == "fwd") {
      const All = document.querySelector("#Allcards");
      const Apps = document.querySelector("#Appscards");
      const Api = document.querySelector("#Apicards");
      const fwd = document.querySelector("#fwdcards");
      // All.className.add("hide");
      // Apps.className.remove("hide");
      All.classList.add("hide");
      Apps.classList.add("hide");
      Api.classList.add("hide");

      fwd.classList.remove("hide");
    } else if (e.target.textContent == "Api") {
      const All = document.querySelector("#Allcards");
      const Apps = document.querySelector("#Appscards");
      const Api = document.querySelector("#Apicards");
      const fwd = document.querySelector("#fwdcards");
      // All.className.add("hide");
      // Apps.className.remove("hide");
      All.classList.add("hide");
      Apps.classList.add("hide");
      fwd.classList.add("hide");

      Api.classList.remove("hide");
    } else if (e.target.textContent == "All") {
      const All = document.querySelector("#Allcards");
      const Apps = document.querySelector("#Appscards");
      const Api = document.querySelector("#Apicards");

      const fwd = document.querySelector("#fwdcards");
      // All.className.add("hide");
      // Apps.className.remove("hide");
      fwd.classList.add("hide");
      Api.classList.add("hide");
      Apps.classList.add("hide");
      All.classList.remove("hide");
    }
  };
  const on = (e) => {
    if (e.target.getAttribute("id") == "myVideo") {
      e.target.play();
      console.log(e.target.classList.add("myclass"));
    }
  };
  const out = (e) => {
    const video = document.querySelector(".myclass");

    video.pause();
    video.classList.remove("myclass");
  };
  return (
    <section id="project">
      <div className="container">
        <div className="container d-flex flex-column align-items-center ">
          <h1
            data-aos="fade-down"
            className="d-flex justify-content-center hvr-buzz-out hvr-underline-from-right"
            id="name-con"
          >
            My Projects
          </h1>
        </div>
        <div className=" d-flex justify-content-center m-4">
          <button
            type="button"
            id="btn1"
            data-aos="fade-right"
            class="btn btn-primary filter b-a"
            onClick={filter}
          >
            All
          </button>
          <button
            type="button"
            id="btn2"
            data-aos="fade-up"
            class="btn btn-primary hvr-bounce-to-top filter"
            onClick={filter}
          >
            Apps
          </button>
          <button
            type="button"
            id="btn3"
            data-aos="fade-down"
            class="btn btn-primary hvr-bounce-to-top filter"
            onClick={filter}
          >
            Api
          </button>
          <button
            type="button"
            id="btn4"
            data-aos="fade-left"
            class="btn btn-primary hvr-bounce-to-top filter"
            onClick={filter}
          >
            fwd
          </button>
        </div>
        <div
          className="container d-flex flex-wrap  justify-content-center"
          id="Allcards"
        >
          <Tilt>
            <div className="pro1 " data-aos="fade-down">
              <div
                className="card"
                id="modren"
                onMouseOver={on}
                onMouseLeave={out}
              >
                <div className="video">
                  <video id="myVideo" muted loop>
                    <source src="./vidoes/web.mp4" type="video/mp4" />
                  </video>
                </div>{" "}
                <div className="text-center name-pro">TheWebFather </div>
              </div>
            </div>{" "}
          </Tilt>
          <Tilt>
            <div className="pro1 " data-aos="fade-down">
              <div
                className="card"
                id="modren"
                onMouseOver={on}
                onMouseLeave={out}
              >
                <div className="video">
                  <video id="myVideo" muted loop>
                    <source src="./vidoes/Net.mp4" type="video/mp4" />
                  </video>
                </div>{" "}
                <div className="text-center name-pro">Netflex </div>
              </div>
            </div>{" "}
          </Tilt>
          <Tilt>
            <div className="pro1 " data-aos="fade-down">
              <div
                className="card"
                id="modren"
                onMouseOver={on}
                onMouseLeave={out}
              >
                <div className="video">
                  <video id="myVideo" muted loop>
                    <source src="./vidoes/dash.mp4" type="video/mp4" />
                  </video>
                </div>{" "}
                <div className="text-center name-pro">Dashboard </div>
              </div>
            </div>
          </Tilt>
          <div className="pro1 " data-aos="fade-down">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/React App (2).mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">ChampionsLeague </div>
            </div>
          </div>
          <div className="pro1" data-aos="fade-right">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Document (2).mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">ToDoList</div>
            </div>
          </div>{" "}
          <div className="pro1" data-aos="fade-down">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Document (3).mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">B.M.I</div>
            </div>
          </div>{" "}
          <div className="pro1" data-aos="fade-left">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Document (4).mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">World Cup</div>
            </div>
          </div>{" "}
          <div className="pro1" data-aos="fade-right">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Document (5).mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">Pomodoro</div>
            </div>
          </div>{" "}
          <div className="pro1" data-aos="fade-down">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Movie App.mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">Movie App</div>
            </div>
          </div>{" "}
          <div className="pro1 " data-aos="fade-left">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Document (6).mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">Store App</div>
            </div>
          </div>
          <div className="pro1 " data-aos="fade-right">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source
                    src="./vidoes/Manipulating the DOM.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>{" "}
              <div className="text-center name-pro">Landing Page</div>
            </div>
          </div>
          <div className="pro1 " data-aos="fade-down">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Weather Journal.mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">Weather App</div>
            </div>
          </div>
          <div className="pro1 " data-aos="fade-right">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/React App (1).mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">PremierLeague Table</div>
            </div>
          </div>
          <div className="pro1 " data-aos="fade-left">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Countries.mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">Countries</div>
            </div>
          </div>{" "}
          <div className="pro1 " data-aos="fade-left">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Xo.mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">XO Game</div>
            </div>
          </div>
        </div>
        <div
          className="container d-flex flex-wrap  justify-content-center hide"
          id="Appscards"
        >
          <div className="pro1" data-aos="fade-right">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Document (2).mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">ToDoList</div>
            </div>{" "}
          </div>{" "}
          <div className="pro1" data-aos="fade-down">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Document (3).mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">B.M.I</div>
            </div>
          </div>{" "}
          <div className="pro1" data-aos="fade-right">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Document (5).mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">Pomodoro</div>
            </div>
          </div>{" "}
          <div className="pro1" data-aos="fade-down">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Movie App.mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">Movie App</div>
            </div>
          </div>{" "}
          <div className="pro1 " data-aos="fade-right">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source
                    src="./vidoes/Manipulating the DOM.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>{" "}
              <div className="text-center name-pro">Landing Page</div>
            </div>
          </div>
          <div className="pro1 " data-aos="fade-left">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Xo.mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">XO Game</div>
            </div>
          </div>
          <div className="pro1 " data-aos="fade-left">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Countries.mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">Countries</div>
            </div>
          </div>
        </div>

        <div
          className="container d-flex  flex-column  align-items-center hide"
          id="fwdcards"
        >
          <div className="pro1 " data-aos="fade-right">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source
                    src="./vidoes/Manipulating the DOM.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>{" "}
              <div className="text-center name-pro">Landing Page</div>
            </div>
          </div>
          <div className="pro1 " data-aos="fade-down">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Weather Journal.mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">Weather App</div>
            </div>
          </div>
        </div>
        <div
          className="container d-flex flex-wrap  justify-content-center hide"
          id="Apicards"
        >
          <div className="pro1 " data-aos="fade-down">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/React App (2).mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">ChampionsLeague </div>
            </div>
          </div>
          <div className="pro1" data-aos="fade-left">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Document (4).mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">World Cup</div>
            </div>
          </div>{" "}
          <div className="pro1 " data-aos="fade-right">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/React App (1).mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">PremierLeague Table</div>
            </div>
          </div>
          <div className="pro1" data-aos="fade-down">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Movie App.mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">Movie App</div>
            </div>
          </div>{" "}
          <div className="pro1 " data-aos="fade-left">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Document (6).mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">Store App</div>
            </div>
          </div>
          <div className="pro1 " data-aos="fade-down">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Weather Journal.mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">Weather App</div>
            </div>
          </div>
          <div className="pro1 " data-aos="fade-left">
            <div className="card" onMouseOver={on} onMouseLeave={out}>
              <div className="video">
                <video id="myVideo" muted loop>
                  <source src="./vidoes/Countries.mp4" type="video/mp4" />
                </video>
              </div>{" "}
              <div className="text-center name-pro">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project;
