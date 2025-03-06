import React from "react";

export const Project3 = ({ setShowProject }) => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <button onClick={() => setShowProject(null)} className="text-blue-400">Back</button>
      <h1 className="text-3xl font-bold">Computer System Projects</h1>
      <p className="mt-4">Projects related to computer systems and architecture.</p>
    </div>
  );
};
