import React from 'react';
import "./style.css";
const Services = () => (
  <div id="services" className="service-swipe">
    <div className="diffSection" id="services_section">
      <center>
        <p style={{ fontSize: '50px', padding: '100px 0 40px', color: '#fff' }}>Services</p>
      </center>
    </div>
    <a href="subjects/computer_courses.html">
      <div className="s-card">
        <img src="images/icon/computer-courses.png" alt="Computer Courses" />
        <p>Free Online Computer Courses</p>
      </div>
    </a>
    {/* Repeat for each service */}
  </div>
);

export default Services;
