import { React } from "react";
import "./cert.css";
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
function Certificates() {
  return (
    <div id="cert">
      <div className="container">
        <div className="d-flex justify-content-center" data-aos="fade-up">
          <h1 class="hvr-buzz-out hvr-underline-from-right" id="name-con">
            My Certificates
          </h1>
        </div>
        <div className="cert" data-aos="fade-right" data-aos-duration="2000">
          <Tilt options={defaultOptions}>
            <div className="one hvr-grow-shadow hvr-curl-top-left">
              {" "}
              <a href="https://graduation.udacity.com/confirm/KY5VCYLA">
                <img src="./download-1.jpg" />
              </a>{" "}
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div className="two hvr-grow-shadow hvr-curl-top-right">
              {" "}
              <a
                target="_blank"
                href="https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/d44231b3-c5d1-4f46-87bd-b3bbebc68783.pdf"
              >
                <img src="./d44231b3-c5d1-4f46-87bd-b3bbebc68783-1.jpg" />
              </a>
            </div>
          </Tilt>
          <Tilt options={defaultOptions}>
            <div className="two hvr-grow-shadow hvr-curl-top-right">
              {" "}
              <img src="./cert3.jfif" />
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}
export default Certificates;
