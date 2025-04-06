import React from "react";

export const Project2 = ({ setShowProject }) => {
  return (
    <div className="min-h-screen bg-[rgb(216,218,215)] text-black p-10 py-80">
      <button onClick={() => setShowProject(null)} className="text-blue-400">Back</button>
      <h1 className="text-3xl font-bold">RecipeHub</h1>
      <p className="mt-4">under construction. A platform for sharing and discovering new recipes.</p>
    </div>
  );
};
