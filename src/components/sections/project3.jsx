import React from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Project3 = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[rgb(216,218,215)] text-black p-10 py-80">
      {/* Navigation Buttons */}
      <div className="flex w-full justify-between items-center mb-8">
        <button onClick={() => navigate('/project2')} className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 font-semibold">Back</button>
        <button onClick={() => navigate('/project4')} className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 font-semibold">Next</button>
      </div>
      <h1 className="text-3xl font-bold">Computer System Projects</h1>
      <p className="mt-4">under construction. Projects related to computer systems and architecture.</p>
    </div>
  );
};
