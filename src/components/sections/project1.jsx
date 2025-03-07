export const Project1 = ({ setShowProject }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[rgb(216,218,215)] text-black p-10">
      <h1 className="text-4xl font-bold mb-6">Active IQ Database Project</h1>
      <p className="text-lg text-center max-w-2xl">
        under construction. This project involved designing an interface for the Active IQ database, allowing real-time 
        changes in share ownership. Developed during my internship at Innisfree.
      </p>
      <button 
        onClick={() => setShowProject(false)} 
        className="mt-6 bg-blue-700 text-white py-2 px-6 rounded-lg hover:bg-blue-800 transition"
      >
        Go Back
      </button>
    </div>
  );
};
