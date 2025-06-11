import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Project2 = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#e2e1df] text-black p-10 py-80">
      <button
        onClick={() => {
          navigate('/angie-portfolio/');
          setTimeout(() => {
            const section = document.getElementById('projrevamp');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            } else {
              window.scrollTo(0, 0);
            }
          }, 100);
        }}
        className="text-blue-400"
      >Back</button>
      <h1 className="text-3xl font-bold">RecipeHub</h1>
      <p className="mt-4">under construction. A platform for sharing and discovering new recipes.</p>
    </div>
  );
};
