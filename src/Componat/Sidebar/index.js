import React from "react";
import "./sidebar.css";
import "hover.css/css/hover-min.css";

const Sidebar = () => {
  //   const [Side, setSide] = useState(props.side);

  return (
    <div
      onClick={() => {
        document.querySelector(".sidebar").classList.toggle("active");
      }}
      className="sidebar active">
      <div className="close">
        <div className="x">X</div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="hvr-bob pic" data-aos="fade-right">
          <img class=" circular--square" src="maz.png" />
        </div>
        <div className="d-flex align-items-center  name" data-aos="fade-right">
          Mazhar Mohamed
        </div>
      </div>
      <div class="list">
        <ul class="navbar-nav d-flex align-items-center  me-auto mb-2 mb-lg-0">
          <li class=" nav-item" id="side">
            <a
              class="nav-link  hvr-underline-from-left active"
              aria-current="page"
              href="#color">
              Home
            </a>
          </li>
          <li class="nav-item" id="side">
            <a class="nav-link hvr-underline-from-left" href="#skil">
              Skils
            </a>
          </li>
          <li class="nav-item" id="side">
            <a class="nav-link hvr-underline-from-left " href="#cert">
              Certificates
            </a>
          </li>{" "}
          <li class="nav-item" id="side">
            <a class="nav-link hvr-underline-from-left " href="#project">
              Projects
            </a>
          </li>{" "}
          <li class="nav-item" id="side">
            <a class="nav-link hvr-underline-from-left" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
