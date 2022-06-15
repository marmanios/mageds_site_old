import "./App.css"
import React, { useState, useEffect } from "react";
import AboutMe from "./Components/AboutMe/AboutMe";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import ParticleBackground from "./Components/Particles/ParticleBackground";

//import Skills from "./Components/Skills/Skills"
// {currentPage === "Skills" && <Skills></Skills>}

function App() {
  const [currentPage, changePage] = useState("Home");
  useEffect(() => { document.body.style.backgroundColor = '#1A1A1D' }, [])

  const changeDisplay = (newState) => {
    changePage(newState);
  };

  return (
    <div className="App">
      <div className="things"><Navbar changeDisplay={changeDisplay}></Navbar>
        {currentPage === "Home" && <AboutMe className="aboutme"></AboutMe>}
        {currentPage === "Projects" && <Projects></Projects>}
        <Footer></Footer>
      </div>

      <ParticleBackground className="particles"></ParticleBackground>

    </div>
  );
};

export default App;
