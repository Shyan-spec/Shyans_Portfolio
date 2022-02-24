
import './App.scss';
import React, {Component} from 'react';

import Particles from 'react-tsparticles';
import Friend from './Components/Friend/Friend.js';
import Welcome from './Components/Welcome/Welcome.js';
import Footer from './Components/Footer/Footer.js';
import Contact from './Components/Contact/Contact.js'
import About from './Components/About/About.js';
import Projects from './Components/Projects/Projects';
import 'animate.css';

class App extends Component {

  render(){

    const particlesInit = (main) => {
      console.log(main);
    
      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };
    
    const particlesLoaded = (container) => {
      console.log(container);
    };

  return (
    
    
    <div className="App">

    
<Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#ffffff",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#0202ca",
          },
          links: {
            color: "#0202ca",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />

    
      
    
      <section id="top">
      
    
        <div id="top-container">
        
          <Welcome/>
          
          
        </div>
        
      
      </section>
      
      

      <div id = "background">
      
      
      <section id="about">
        
          <About/>
       
      </section>
      
      <section id="projects">
        <div className="container">
        
          <Projects/>
        </div>
      </section>
      
      </div>

      <section id="contact">
        <div className="container">
          <Contact/>
        </div>
      </section>

      <section id="footer">
        <div className="container">
          <footer>
            <Footer/>
          </footer>
        </div>
      </section>
      

    </div>
    
    
    
   
    
    
  );
}
}


export default App;
