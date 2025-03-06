import React from "react";

export const Project2 = ({ setShowProject }) => {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <button onClick={() => setShowProject(null)} className="text-blue-400">Back</button>
      <h1 className="text-3xl font-bold">RecipeHub</h1>
      <p className="mt-4">A platform for sharing and discovering new recipes.</p>
    </div>
  );
};
