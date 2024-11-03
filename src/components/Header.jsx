import React, { useEffect } from 'react';
import "./style.css";
const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 0) {
        nav.classList.add('black');
      } else {
        nav.classList.remove('black');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header">
      <nav>
        <div className="logo"><img src="images/logo.png" alt="logo" /></div>
        <ul>
          <li><a className="active" href="#home">Home</a></li>
          <li><a href="#portfolio_section">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="successstory.html">Success stories</a></li>
          <li><a href="#contactus_section">Contact</a></li>
        </ul>
        <div>
          <a className="get-started" href="#chatBot_section">ChatBot</a>
          <a className="get-started" href="login.html">Get Started</a>
        </div>
        <img src="images/menu.png" className="menu" alt="menu" />
      </nav>
      <div className="head-container">
        <div className="quote">
          <p>The beautiful thing about learning is that nobody can take it away from you</p>
          <h5>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits...</h5>
        </div>
        <div className="svg-image">
          <img src="images/svg1.jpg" alt="svg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
