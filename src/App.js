import logo from './logo.svg';
import './App.css';
import ProfilePage from './components/profile/ProfilePage';
import ProjectDetail from './components/project/ProjectDetail';
import BasicAddition from './components/course/CourseDetail';
import Header from './components/Header';
import PopularSubjects from './components/PopularSubjects';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Services from './components/Services';
import Reviews from './components/Reviews';
import ContactUs from './components/ContactUs';
import Feedback from './components/Feedback';
import Footer from './components/Footer'; 
function App() {
  return (
    <div>
       <div>
      <Header />
      <PopularSubjects />
      <About />
      <Portfolio />
      <Projects />
      <Services />
      <Reviews />
      <ContactUs />
      <Feedback />
      <Footer />
    </div>
    </div>
  );
}


export default App;
