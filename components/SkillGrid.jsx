import React, { useEffect, useRef } from "react";
import "../styles/SkillGrid.css";

const SkillGrid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const images = gridRef.current.querySelectorAll("img");
          images.forEach((img, index) => {
            img.classList.remove("animate-slide-in"); // reset if needed
            setTimeout(() => {
              img.classList.add("animate-slide-in");
            }, index * 100);
          });
        } else {
          // Optional: reset when out of view
          const images = gridRef.current.querySelectorAll("img");
          images.forEach((img) => img.classList.remove("animate-slide-in"));
        }
      },
      { threshold: 0.3 }
    );
  
    if (gridRef.current) {
      observer.observe(gridRef.current);
    }
  
    return () => observer.disconnect();
  }, []);
  

  return (
    <div className="skill-grid" ref={gridRef}>
      <div><img src="/c++.png" alt="C++" />C++</div>
      <div><img src="/" alt="Python" />Python</div>
      <div><img src="/c.png" alt="C"/>C</div>
      <div><img src="/java.svg" alt="Java"/>Java</div>
      <div><img src="/js.svg" alt="JavaScript" />JavaScript</div>
      <div><img src="/" alt="SQL" />SQL</div>
      <div><img src="/html.svg" alt="HTML5" />HTML</div>
      <div><img src="/css.svg" alt="CSS" />CSS</div>
      <div><img src="/reactjs.svg" alt="React" />ReactJs</div>
      <div><img src="/nodejs.svg" alt="Node.js" />NodeJs</div>
      <div><img src="/expressjs.svg" alt="Express" />ExpressJs</div>
      <div><img src="/mongodb.svg" alt="MongoDB" />MongoDB</div>
    </div>
  );
};

export default SkillGrid;
