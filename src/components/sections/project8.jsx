// Project5.js
import React, { useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import p5 from "p5";

export const Project8 = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-25 min-h-screen flex flex-col items-center bg-[#e2e1df] text-black p-4">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b-4 border-[rgb(129,148,201)]">
          <h1 className="bg-gradient-to-r from-[rgb(8,65,126)] to-[rgb(104,5,161)] bg-clip-text text-transparent leading-tight text-8xl font-bold mb-4 md:mb-0">
            INF.RECUR
          </h1>
          <div className="text-right md:text-left max-w-xl">
            <p className="text-lg font-semibold">Creative code project • Spring 2025</p>
            <p className="text-md mt-2">
            using priniples of recursion and perlin noise, I created 2 projects that generate infinitely. I created a tree that continues to grow forever, and a phyllotactic spiral that shrinks and contracts. 
            </p>
            <p className="text-md font-semibold mt-2">Javascript/P5.JS • Binary Bitmap • Generative Art</p>
          </div>
        </div>
        <h2 className="pt-8 bg-gradient-to-r  from-[rgb(8,65,126)] to-[rgb(104,5,161)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4 text-center">
        INFINITE RECURSIVE TREE
        </h2>

        {/* //image here */}
        <div className="max-w-6xl w-full mb-7">
            <img
              src="/angie-portfolio/tree.gif"
              alt="Placeholder"
              className="w-full h-auto shadow-lg rounded-lg"
            />
        </div>

      {/* Section Title */}
      
        {/* Text Section */}
        <div className="mb-6">
            <p className="text-md mb-4">
           This tree was created using p5.js with native javascript libraries. It grows infinitely, with the main branch texture generated using perlin noise. the branches are created using recursion, 
           and the area of growth is determined using a random function. the branches also have perlin noise effected growth patterns. Rythm is introduced using a sway function to imitate a real tree more
            closely. I chose to use a binary bitmap as it created a nice aesthetic. I learned a lot about using random functions to create organic growth patterns. The thought of creating nature with code is interesting :)
            </p>
        </div>
        
        {/* Div Border Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b-4 border-[rgb(129,148,201)]">
            <p className="text-md"></p>
        </div>
        
        {/* //another imager here */}
         <h2 className="pt-8 bg-gradient-to-r  from-[rgb(8,65,126)] to-[rgb(104,5,161)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4 text-center">
        PYHLLOTACTIC SPIRAL
        </h2>

        {/* //image here */}
        <div className="w-full mb-4 flex justify-center">
                <video controls className="w-full" style={{ maxWidth: "1000px" }}>
                  <source src="/angie-portfolio/p.mp4" />
                  Your browser does not support the video tag.
                </video>
        </div>

      {/* Section Title */}
      
        {/* Text Section */}
        <div className="mb-6">
            <p className="text-md mb-4">
            In a phyllotactic spiral, subsequent elements (such as leaves) are rotated from their previous elements by the Golden Angle. This angle, which is approximately 137.507764°,
             is obtained from 360°/ϕ², where ϕ (phi) is the Golden Ratio (approximately 1.618034, or precisely [1+√5]/2). This methematical phenomenon is observed in nature, such as in the arrangement of leaves on a stem or the pattern of seeds in a sunflower.
            (The Golden Angle is analogous to the Golden Rectangle, whose sides a and b obey the proportional relationship a/b = (a+b)/a.). Using this formula, I created the base of y phyllotactic spiral.
            It was very fun and satsfying to see it grow (I made the endpoints grow with a timed function). I hope to continue exploring natural objects with code. 
            </p>
        </div>
        
        {/* Div Border Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b-4 border-[rgb(129,148,201)]">
            <p className="text-md"></p>
        </div>

        {/* Go Back Button */}
        <div className="flex justify-center mt-10">
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
          className="bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition"
        >
          Go Back
        </button>
        </div>
      </div>
    </div>
  );
};
