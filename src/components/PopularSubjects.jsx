import React from 'react';
import "./style.css";

const PopularSubjects = () => (
  <div className="title">
    <span>Popular Subjects on LearnEd</span>
    <br /><br />
    <div className="course">
      <center>
        <div className="cbox">
          <div className="det"><a href="subjects/jee.html"><img src="images/courses/book.png" alt="JEE" />JEE Preparation</a></div>
          <div className="det"><a href="subjects/gate.html"><img src="images/courses/d1.png" alt="GATE" />GATE Preparation</a></div>
          <div className="det"><a href="subjects/jee.html#sample_papers"><img src="images/courses/paper.png" alt="Sample Papers" />Sample Papers</a></div>
          <div className="det"><a href="subjects/quiz.html"><img src="images/courses/d1.png" alt="Daily Quiz" />Daily Quiz</a></div>
        </div>
      </center>
      <div className="cbox">
        <div className="det"><a href="subjects/computer_courses.html"><img src="images/courses/computer.png" alt="Computer Courses" />Computer Courses</a></div>
        <div className="det"><a href="subjects/computer_courses.html#data"><img src="images/courses/data.png" alt="Data Structures" />Data Structures</a></div>
        <div className="det"><a href="subjects/computer_courses.html#algo"><img src="images/courses/algo.png" alt="Algorithm" />Algorithm</a></div>
        <div className="det det-last"><a href="subjects/computer_courses.html#projects"><img src="images/courses/projects.png" alt="Projects" />Projects</a></div>
      </div>
    </div>
  </div>
);

export default PopularSubjects;
