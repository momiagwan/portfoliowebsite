import Image from "next/image";
import About from "./components/About";
import Contact from "./components/Contacts";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Skills from "./components/skills";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/projects";

import React from "react";
import Certification from "./components/Certifications";


const Main: React.FC = () => {
  return (
    <div>
      
      <Navbar />

    

      <section
        id="about"
      
      >
       <About/>
      </section>
      <section> <Hero/></section>
      <section
        id="skills"
      
      >
        <Skills/>
      </section>


<section id="projects"> <Projects/></section>
   <section id="Education">  <Education/>
     </section>
     <section id="Certification"><Certification/></section>
      <section
        id="contact">
      <Contact/>
      </section>
     
      <Footer/>
   
    </div>
  );
};

export default Main;

