import React from 'react'
import { useEffect, useRef } from "react";
import '../styles/Softskill.css'

const Softskill = () => {
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
      <div className="soft-grid" ref={gridRef}>
        <div><img src="/teamwork.png" alt="Teamwork" />Teamwork</div>
        <div><img src="/time.png" alt="Time Management"/>Time Management</div>
        <div><img src="/learning.png" alt="Continuous Learning"/>Continuous Learning</div>
        <div><img src="/problem.png" alt="Problem Solving" />Problem Solving</div>
      </div>
      )
}

export default Softskill
