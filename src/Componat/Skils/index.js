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
    console.log(technologies[0].icon);

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

  return (
    <div id="skil">
      <div className="container">
        <div className="d-flex justify-content-center">
          <h1 class="hvr-buzz-out hvr-underline-from-right" id="name-con">
            My Skills
          </h1>
        </div>

        <div className="d-flex flex-row flex-wrap justify-content-center">
          {technologies.map((technology) => (
            <LazyLoad>
              <div style={{ width: "190px" }} key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            </LazyLoad>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skils;
