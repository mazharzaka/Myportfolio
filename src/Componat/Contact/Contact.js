import React, { Component } from "react";
import ScrollToTop from "react-scroll-to-top";
import "./Contact.css";
import Ava from "../ava";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LazyLoad from "react-lazy-load";
class Contact extends Component {
  state = {
    user: "",
    email: "",
    text: "",
  };
  name = (e) => {
    this.setState({
      user: e.target.value,
    });
    // console.log();
  };
  email = (e) => {
    this.setState({
      email: e.target.value,
    });
    // console.log();
  };
  text = (e) => {
    this.setState({
      text: e.target.value,
    });
    // console.log();
  };

  render() {
    return (
      <section id="contact">
        <ScrollToTop className="hvr-bob" smooth top="20" />
        <div className="container d-flex flex-column align-items-center ">
          <h1
            className="d-flex justify-content-center hvr-buzz-out hvr-underline-from-right"
            id="name-con"
          >
            Contact
          </h1> 
     
          <div
            className="d-flex justify-content-center  "
            id="rss"
            style={{ width: "100%" }}
          >     <LazyLoad >
            <div className="ava">
           
              <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <Ava position-y={-2.5} scale={3} animationName="salute" />
                <OrbitControls />
              </Canvas>
            </div>
            </LazyLoad>
            <div
              className="d-flex  flex-column"
              style={{ marginLeft: "100px", marginTop: "20px" }}
              id="tt"
            >
              <div className="p-2 form-floating ">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputGrid"
                  onChange={this.name}
                  placeholder="name"
                />
                <label for="floatingInputGrid">Name</label>
              </div>
              <div className="p-2 form-floating" style={{ width: "300px" }}>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInputGrid"
                  onChange={this.email}
                  placeholder="name@example.com"
                />
                <label for="floatingInputGrid">Email address</label>
              </div>
              <div className="p-2 mb-3" style={{ width: "300px" }}>
                <label
                  for="floatingInputGrid"
                  className="form-label"
                  id="label"
                >
                  Example textarea
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  onChange={this.text}
                  rows="3"
                ></textarea>
              </div>
              <div
                className="d-flex justify-content-center "
                style={{ width: "300px" }}
              >
                <button
                  type="button"
                  onClick={this.notes}
                  className="mb-5 btn btn-info "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div id="cover">
            {/* <div className="p-5 d-flex flex-column bd-highlight mb-3" id="note">
    <div className="pt-5 bd-highlight row" id="shape"><div className="col-sm-4" >Name:</div>  <span className="col-sm-8">mazhar</span></div>
    <div className="pt-5 bd-highlight row" id="shape"><div className="col-sm-4">Email:</div> <span className="col-sm-8">@mazharmohamed980</span></div>
    <div className="pt-5 bd-highlight row" id="shape"><div className="col-sm-4">Text:</div> <span className="col-sm-8" id="Text">sdsfhhkjijjjjjjh</span></div>
    </div> */}
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
