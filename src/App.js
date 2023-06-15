import React from "react";

import Header from "./Componat/Header/Header";
import Contact from "./Componat/Contact/Contact";
import Home from "./Componat/Home/Home";
import Skils from "./Componat/Skils";
import "bootstrap/dist/css/bootstrap.css";

import Certificates from "./Componat/Certificates";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Project from "./Componat/projcts";

AOS.init();
const App = () => {
  return (
    <div className="cotainer">
      <Header />
      <Home />
      <Skils />
      <Certificates />
      <Project />
      <Contact />
      {/* <Routes>
        <Route path="/" expect element={<Home/>}/>
        <Route path="/Myskills" expect element={<Skils/>}/>
        <Route path="/contact" expect element={<Contact/>}/></Routes> */}
    </div>
  );
};
export default App;
