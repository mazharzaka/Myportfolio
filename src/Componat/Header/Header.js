import React, { useState, useEffect } from "react";
import "./Header.css";
import Sidebar from "../Sidebar";
const Header = () => {
  // const [Side, setSide] = useState(false);
  useEffect(() => {
    const sidebar = document.querySelector(".sidebar");
    console.log(sidebar.className);
  });

  return (
    <>
      <nav className="navbar  row fixed-top navbar-light" id="nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Mazhar<span>Mohamed</span>
          </a>

          <div className="d-flex justify-content-end" id="com">
            <a className="nav-link active " aria-current="page" href="#color">
              Home
            </a>
            <a className="nav-link active " aria-current="page" href="#skil">
              My Skills
            </a>
            <a className="nav-link active " aria-current="page" href="#cert">
              Certificates
            </a>
            <a className="nav-link active " aria-current="page" href="#project">
              Projects
            </a>
            <a className="nav-link active " aria-current="page" href="#contact">
              Contact
            </a>
          </div>
          <div className="side d-flex justify-content-end" id="side">
            <a
              className="nav-link active "
              aria-current="page"
              onClick={() =>
                document.querySelector(".sidebar").classList.toggle("active")
              }
            >
              <i class="fa-solid fa-bars"></i>
            </a>
          </div>
        </div>
      </nav>

      <Sidebar />
    </>
  );
};

export default Header;
