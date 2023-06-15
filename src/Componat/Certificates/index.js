import {React} from "react";
import "./cert.css";
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
          <div className="one hvr-grow-shadow hvr-curl-top-left">
            {" "}
            <a href="https://graduation.udacity.com/confirm/KY5VCYLA">
              <img src="./download-1.jpg" />
            </a>{" "}
          </div>
          <div className="two hvr-grow-shadow hvr-curl-top-right">
            {" "}
            <a href="https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/d44231b3-c5d1-4f46-87bd-b3bbebc68783.pdf">
              <img src="./d44231b3-c5d1-4f46-87bd-b3bbebc68783-1.jpg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Certificates;
