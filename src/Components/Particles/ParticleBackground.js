import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./particle-config";
import {loadFull} from "tsparticles";

const particlesInit = async (main) => {
     await loadFull(main);
};

const particlesLoaded = (container) => {
     console.log(container);
};

const ParticleBackground = () => {
     return (
          <Particles
               id="tsparticles"
               init={particlesInit}
               loaded={particlesLoaded}
               options={ParticleConfig}
          />
     );

};
export default ParticleBackground;