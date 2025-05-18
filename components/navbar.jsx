import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';

import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);

// inside your component
const handleScroll = (e, target) => {
  e.preventDefault();
  gsap.to(window, {
    duration: 1,
    scrollTo: target,
    ease: "power2.inOut",
  });

  // close mobile menu if open
  setIsMobileMenuOpen(false);
};


const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrollingUp = currentScrollPos < prevScrollPos;

    // Show if scrolling up or near top
    setVisible(currentScrollPos < 10 || isScrollingUp);

    setPrevScrollPos(currentScrollPos);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${visible ? '' : 'hide'}`}>
      <div className="logo">
        <a href="/">
          <img src="/abhay.png" alt="Logo" />
        </a>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>

      <div className={`NavMenu ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
        <a className="NavLink" href="#about" onClick={(e) => handleScroll(e, "#about")}>About</a>
        <a className="NavLink" href="#skills" onClick={(e) => handleScroll(e, "#skills")}>Skills</a>
        <a className="NavLink" href="#projects" onClick={(e) => handleScroll(e, "#projects")}>Projects</a>
        <a className="NavLink" href="#socials" onClick={(e) => handleScroll(e, "#socials")}>Connect</a>
        <a className="NavBtnLink mobile-only" href="/Abhay Singh's Resume.pdf" target='_blank'>Resume</a>
      </div>

      <div className="NavBtn desktop-only">
  <a className="NavBtnLink" href="/Abhay Singh's Resume.pdf" target='_blank'>Resume</a> {/* desktop only */}
</div>
    </nav>
  );
};

export default Navbar;
