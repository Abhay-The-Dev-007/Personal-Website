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
            img.classList.remove("animate-slide-in");
            setTimeout(() => {
              img.classList.add("animate-slide-in");
            }, index * 100);
          });
        } else {
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
      {/* Languages */}
      <div><img src="/c++.png" alt="C++" />C++</div>
      <div><img src="/python_img.jpg" alt="Python" />Python</div>
      <div><img src="/r.png" alt="R" />R</div>
      <div><img src="/js.svg" alt="JavaScript" />JavaScript</div>
      <div><img src="/sql.png" alt="SQL" />SQL</div>
      
      {/* Frameworks/Libraries */}
      <div><img src="/reactjs.svg" alt="React" />React</div>
      <div><img src="/nodejs.svg" alt="Node.js" />Node.js</div>
      <div><img src="/expressjs.svg" alt="Express" />Express</div>
      <div><img src="/numpy.svg" alt="NumPy" />NumPy</div>
      <div><img src="/pandas.svg" alt="Pandas" />Pandas</div>
      <div><img src="/matplotlib.svg" alt="Matplotlib" />Matplotlib</div>
      <div><img src="/scikit.svg" alt="Scikit-Learn" />Scikit-Learn</div>
      <div><img src="/pytorch.png" alt="PyTorch" />PyTorch</div>
      
      {/* Databases & Tools */}
      <div><img src="/mongodb.svg" alt="MongoDB" />MongoDB</div>
      <div><img src="/mysql.svg" alt="MySQL" />MySQL</div>
      <div><img src="/git.png" alt="Git" />Git</div>
      <div><img src="/github.svg" alt="GitHub" />GitHub</div>
      <div><img src="/vscode.webp" alt="VS Code" />VS Code</div>
    </div>
  );
};

export default SkillGrid;