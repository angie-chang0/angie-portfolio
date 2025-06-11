import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Project10 = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-25 min-h-screen flex flex-col items-center justify-start bg-[#e2e1df] text-black p-10">
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b-4 border-[#FF795C]">
          <h1 className="bg-gradient-to-r from-[#FF795C] to-[#C5EDF1] bg-clip-text text-transparent leading-tight text-8xl font-bold mb-4 md:mb-0">LOCAMMEND</h1>
          <div className="md:text-left max-w-xl ml-16">
            <p className="text-lg font-semibold">Founding Team &bull; 2025</p>
            <p className="text-md mt-2">
              Mobile App that connects users through trusted recommendations. I served as the founding Product Manager for this app.
            </p>
            <p className="text-md font-semibold mt-2">Product Innovation &bull; Startup &bull; React Native</p>
          </div>
        </div>
        {/* Background Section */}
        <div className="py-10 border-b-2 border-[#FF795C]">
        <h2 className="bg-gradient-to-r from-[#FF795C] to-[#C5EDF1] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4">BACKGROUND (PAGE IS UNDER CONSTRUCTION)</h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-2xl text-lg">
              <p className="mb-4">
                Loccamend was born out of the need for a more authentic way to discover new places, products, and experiences—through the recommendations of people you trust. As the founding Product Manager, I worked closely with the development teams to build a seamless mobile experience from the ground up.
              </p>
              <p className="mb-4">
                The app leverages social connections to provide curated suggestions, making it easy for users to share and receive recommendations within their trusted circles. My focus was on building a robust, scalable, and user-friendly platform using React Native and Firebase.
              </p>
            </div>
            <div className="w-full md:w-2/5 flex md:justify-start justify-center mt-4 md:mt-0">
              <img
                src="/angie-portfolio/loc_icon.gif"
                alt="Loccamend App Screenshot"
                className="w-4/5 max-w-lg shadow-lg rounded-lg"
              />
            </div>
          </div>
        </div>
        {/* Roles, Methods, Tools, Collaborators, Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
          <div>
            <h3 className="bg-gradient-to-r from-[#FF795C] to-[#C5EDF1] bg-clip-text text-transparent leading-tight font-bold mb-1">Roles</h3>
            <p>Founding Product Manager</p>
            <p>UX/UI Designer</p>
            <p>Frontend Developer</p>
          </div>
          <div>
            <h3 className="bg-gradient-to-r from-[#FF795C] to-[#C5EDF1] bg-clip-text text-transparent leading-tight font-bold mb-1">Methods</h3>
            <p>User Interviews</p>
            <p>Wireframing</p>
            <p>Prototyping</p>
            <p>Agile Development</p>
          </div>
          <div>
            <h3 className="bg-gradient-to-r from-[#FF795C] to-[#C5EDF1] bg-clip-text text-transparent leading-tight font-bold mb-1">Tools</h3>
            <p>React Native</p>
            <p>Firebase</p>
            <p>Figma</p>
          </div>
          <div>
            <h3 className="bg-gradient-to-r from-[#FF795C] to-[#C5EDF1] bg-clip-text text-transparent leading-tight font-bold mb-1">Collaborators</h3>
            <p>Catherine Li</p>
            <p>Keira Leal</p>
          </div>
        </div>
        <div className="py-10 border-b-2 border-[#FF795C]"></div>
        {/* Big image after Methods */}
        <div className="flex justify-center my-8">
          <img
            src="/angie-portfolio/testloc.png"
            alt="Loccamend App Large Preview"
            className="w-full max-w-8xl"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="flex justify-center my-8">
          <img
            src="/angie-portfolio/ll2.png"
            alt="Loccamend App Large Preview"
            className="w-full max-w-12xl"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="py-5 border-b-2 border-[#FF795C]"></div>
        {/* k Button */}
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