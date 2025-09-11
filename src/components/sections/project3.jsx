import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Project3 = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Immediate scroll
    scrollToTop();
    
    // Delayed scroll to ensure it works after all content loads
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToTop();
      });
    });
    
    // Additional safety scroll after a short delay
    setTimeout(scrollToTop, 100);
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(216,218,215)] text-black p-10 py-80">
      <h1 className="text-3xl font-bold">Computer System Projects</h1>
      <p className="mt-4">under construction. Projects related to computer systems and architecture.</p>
      
      {/* Footer Section */}
      <div className="flex justify-center mt-10">
      </div>
    </div>
  );
};
