import React from 'react';
import "./style.css";
const Projects = () => (
  <section id="projects">
    <center>
      <p style={{ fontSize: '50px', paddingTop: '100px', paddingBottom: '60px', color: 'black' }}>Latest Projects</p>
    </center>
    <div className="container">
      <div className="card-container">
        <a href="/" className="hero-image-container">
          <img className="hero-image" src="/images/app-develbbbbbbbbb.jpg" alt="Web Project" />
        </a>
        <main className="main-content">
          <p>Web Project: Building websites or web apps for online information or services.</p>
          <div className="flex-row">
            <div className="coin-base">
              <img src="https://i.postimg.cc/T1F1K0bW/Ethereum.png" alt="Ethereum" className="small-image" />
              <h2>0.041 ETH</h2>
            </div>
            <div className="time-left">
              <img src="https://i.postimg.cc/prpyV4mH/clock-selection-no-bg.png" alt="clock" className="small-image" />
              <p>3 days left</p>
            </div>
          </div>
        </main>
        <div className="card-attribute">
          <img src="/images/woman-with-freckles-her-face_1197721-99165.jpg" alt="avatar" className="small-avatar" />
          <p> <span><a href="#">ones Noa</a></span></p>
        </div>
      </div>
      {/* Repeat for each project */}
    </div>
  </section>
);

export default Projects;
