import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProjectNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define project order based on the projects data
  const projectOrder = [
    { id: 'locammend', route: '/locammend', title: 'Locammend' },
    { id: 'project11', route: '/project11', title: 'Bakeoff' },
    { id: 'project2', route: '/project2', title: 'RecipeHub' },
    { id: 'project1', route: '/project1', title: 'Active IQ Database' },
    { id: 'project5', route: '/project5', title: 'Generative Art with p5.js' },
    { id: 'project9', route: '/project9', title: 'Brooklyn Bridge: VR' },
    { id: 'project8', route: '/project8', title: 'infintely recursive tree' },
    { id: 'project6', route: '/project6', title: 'TouchDesigner: Interactive Environment' },
    { id: 'project7', route: '/project7', title: 'LLM Depth Map + Machine Learning' },
    { id: 'project4', route: '/project4', title: '10 Clocks' },
    { id: 'project3', route: '/project3', title: 'Computer Systems Assorted Projects' }
  ];

  // Get current project index
  const currentIndex = projectOrder.findIndex(project => project.route === location.pathname);
  
  // Get previous and next projects
  const previousProject = currentIndex > 0 ? projectOrder[currentIndex - 1] : null;
  const nextProject = currentIndex < projectOrder.length - 1 ? projectOrder[currentIndex + 1] : null;

  const handleBackToProjects = () => {
    navigate('/projects');
  };

  const handlePreviousProject = () => {
    if (previousProject) {
      navigate(previousProject.route);
    }
  };

  const handleNextProject = () => {
    if (nextProject) {
      navigate(nextProject.route);
    }
  };

  const isBakeoff = location.pathname === '/project11';
  const isLocammend = location.pathname === '/locammend';
  const isActiveIQ = location.pathname === '/project1';

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className={`flex flex-row gap-1.5 md:gap-2 backdrop-blur-sm rounded-lg md:rounded-xl p-1.5 md:p-3 shadow-lg border ${
        isBakeoff
          ? 'bg-[#e6f0ff] border-[#93c5fd]'
          : isLocammend
            ? 'bg-[#fff7ed] border-[#fdba74]'
            : isActiveIQ
              ? 'bg-[#ecfeff] border-[#a5f3fc]'
              : 'bg-[#ecfdf5] border-[#86efac]'
      }`}>
        {/* Back to Projects */}
        <button
          onClick={handleBackToProjects}
          className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-md md:rounded-lg transition-colors duration-200 group ${
            isBakeoff ? 'bg-[#3b82f6] hover:bg-[#2563eb] text-white'
            : isLocammend ? 'bg-[#E5791B] hover:bg-[#d46a1a] text-white'
            : isActiveIQ ? 'bg-[#06b6d4] hover:bg-[#0891b2] text-white'
            : 'bg-[#16a34a] hover:bg-[#15803d] text-white'
          }`}
          title="Back to Projects"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9,22 9,12 15,12 15,22"></polyline>
          </svg>
        </button>

        {/* Previous Project */}
        <button
          onClick={handlePreviousProject}
          disabled={!previousProject}
          className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-md md:rounded-lg transition-colors duration-200 group ${
            previousProject 
              ? `${isBakeoff ? 'bg-[#dbeafe] hover:bg-[#bfdbfe] text-[#1e3a8a]' : isLocammend ? 'bg-[#ffedd5] hover:bg-[#fed7aa] text-[#9a3412]' : isActiveIQ ? 'bg-[#cffafe] hover:bg-[#a5f3fc] text-[#155e75]' : 'bg-[#dcfce7] hover:bg-[#bbf7d0] text-[#14532d]'}` 
              : 'bg-gray-50 text-gray-300 cursor-not-allowed'
          }`}
          title={previousProject ? `Previous: ${previousProject.title}` : 'No previous project'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>

        {/* Next Project */}
        <button
          onClick={handleNextProject}
          disabled={!nextProject}
          className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-md md:rounded-lg transition-colors duration-200 group ${
            nextProject 
              ? `${isBakeoff ? 'bg-[#dbeafe] hover:bg-[#bfdbfe] text-[#1e3a8a]' : isLocammend ? 'bg-[#ffedd5] hover:bg-[#fed7aa] text-[#9a3412]' : isActiveIQ ? 'bg-[#cffafe] hover:bg-[#a5f3fc] text-[#155e75]' : 'bg-[#dcfce7] hover:bg-[#bbf7d0] text-[#14532d]'}` 
              : 'bg-gray-50 text-gray-300 cursor-not-allowed'
          }`}
          title={nextProject ? `Next: ${nextProject.title}` : 'No next project'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectNavigation;
