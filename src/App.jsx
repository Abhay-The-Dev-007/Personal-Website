import './App.css'
import Navbar from '../components/navbar';
import SkillGrid from '../components/SkillGrid';
import Softskill from '../components/Softskill';
import ContactSection from '../components/contact';
import Social from '../components/social';
import Projects from '../components/Projects'
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollSmoother from 'gsap/ScrollSmoother';
import ScrollingMonitor from '../components/ScrollingMonitor';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {  // Renamed from SmoothScroll to App
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true
    });

    return () => {
      if (smoother) smoother.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div id='main-content'>
          <Navbar />

          <div className='content'>
            <div className='about' id='about'>
              <h1>Hello There 👋!!</h1>

              <div className="name">
                <p>I'm</p>
                <ScrollingMonitor/>
              </div>

              <p className='about-me'>I'm a passionate and driven Computer Science<br />and Engineering student 🧑‍💻 .
                I enjoy building practical web applications, exploring full-stack development, and solving real-world problems with code. I'm always eager to learn and take on new challenges.⛓️‍💥</p>

              <div className='introduction'>
                <h2>01. About Me</h2>
                
                <h4>Welcome to my personal space on the web! I'm a Computer Science and Engineering student specializing in Data Science at Maharaja Agrasen Institute of Technology (MAIT)🏫. I'm passionate about turning ideas into real-world applications—whether it's building full-stack web projects, diving into data, or exploring new technologies. Take a look around to see what I've been working on!</h4>
              </div>
            </div>
          </div>

          <div className='Skills' id='skills'>
            <h2>02. Skills</h2>
            
            <div className='heading'><h3>Technical Skills</h3><SkillGrid /></div>
            <div className='heading'><h3>Soft Skills</h3><Softskill /></div>
          </div>

          <div className='project' id='projects'>
            <h2>03. Projects 💻</h2>
          
            <div className='pro'><Projects /></div>
            
          </div>

          <div className='contact' id='socials'>
            <h2>Get In Touch</h2>
            <ContactSection />
          </div>

          <div className='Social'>
            <Social />
          </div>

          <div className='foot'>
            <footer className="footer">
              <p> Made by <strong>Abhay Singh</strong> <br />@ {new Date().getFullYear()} All rights reserved. </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
