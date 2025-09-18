import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RevealOnScroll } from "../RevealOnScroll";
import ScrollFloat from './ScrollFloat';

// Sample data array with all your projects
const projectsData = [
  {
    id: "locammend",
    title: "Locammend",
    description: "A trusted referral network app connecting individuals with reliable service providers.",
    image: "/angie-portfolio/locaheader.png",
    tags: ["Professional Project", "Product", "UX/UI", "AI", "Database", "Coding"],
    buttonAction: "locammend",
  },
  {
    id: "project11",
    title: "Bakeoff",
    description: "UX Design challenge to improve user metrics of a digital interactive display.",
    image: "/angie-portfolio/line.gif",
    tags: ["CMU", "UX/UI", "Coding"],
    buttonAction: "project11",
  },
  {
    id: "recipeHub",
    title: "RecipeHub",
    description: "A WebApp that uses LLM to extract and save recipe ingredients from web links or images.",
    image: "/angie-portfolio/recipiehub.png",
    tags: ["CMU","Product","AI", "UX/UI", "Database", "Coding"],
    buttonAction: "project2",
  },
  {
    id: "activeIQ",
    title: "Active IQ Database",
    description: "Designed interface for real-time share ownership database with SEC filing integration.",
    image: "/angie-portfolio/nq.png",
    tags: ["Professional Project", "UX/UI", "Coding", "Database"],
    buttonAction: "project1",
  },
  {
    id: "interactiveenv",
    title: "TouchDesigner: Interactive Environment",
    description: "Built a physics simulator for water manipulation using TouchDesigner with computer vision integration.",
    image: "/angie-portfolio/mq3.png",
    tags: ["Personal Project", "Creative", "Computer Vision", "Motion Capture","3D Modelling"],
    link: "project6",
  },
  // {
  //   id: "depthMap",
  //   title: "LLM Depth Map + Machine Learning",
  //   description: "Trained an LLM in COMFYUI to detect image depth and create parallax effects for manipulation.",
  //   image: "/angie-portfolio/hand.png",
  //   tags: ["Personal Project","AI", "Creative"],
  //   link: "project7",
  // },
  // {
  //   id: "myNewProject5",
  //   title: "Generative Art with p5.js",
  //   description: "Created infinite tiled pattern variations inspired by MC Escher's isometric cityscapes.",
  //   image: "/angie-portfolio/iso3.png",
  //   tags: ["CMU","Creative" ,"Coding"],
  //   buttonAction: "project5", // internal link => setShowProject("project5")
  // },
  {
    id: "3d",
    title: "Brooklyn Bridge: VR",
    description: "A VR experience set on the Brooklyn Bridge in the 1920s with modeled bridge, trolleys, and people.",
    image: "/angie-portfolio/br.jpg",
    tags: ["Personal Project", "3D Modelling", "VR/AR", "Creative"],
    buttonAction: "project9", // internal link => setShowProject("project5")
  },
  {
    id: "infrecursive",
    title: "infintely recursive tree",
    description: "Created infinitely growing trees and phyllotactic spirals using recursion and Perlin noise.",
    image: "/angie-portfolio/t2.png",
    tags: ["Personal Project", "Creative", "Coding"],
    buttonAction: "project8", 
  },

  {
    id: "cmufinals",
    title: "CMU Finals Planner",
    description: "PDF scraper that automatically adds CMU course finals to Google Calendar using regex and PyPlumber.",
    image: "/angie-portfolio/cmufinals.png",
    tags: ["Personal Project", "Coding"],
    link: "https://angie-chang0.github.io/cmufinalsplanner/",
  },
  // {
  //   id: "clocks",
  //   title: "10 Clocks",
  //   description: "Rapidly prototyped 10 creative clocks in P5.JS using various algorithms to represent time passing.",
  //   image: "/angie-portfolio/c.png",
  //   tags: ["Personal Project", "Creative","Coding"],
  //   buttonAction: "project4",
  // },
  {
    id: "csProjects",
    title: "Computer Systems Assorted Projects",
    description: "Built cache simulator, memory manager, and Unix shell in C with process management and I/O redirection.",
    image: "/angie-portfolio/malloc.png",
    tags: ["CMU","Coding"],
    buttonAction: "project3",
  },
  {
    id: "recipt",
    title: "what does it cost?",
    description: "A creative code project. Coming soon!",
    image: "/angie-portfolio/gray.png",
    tags: ["AI", "Coding", "Creative"],
    buttonAction: "project2",
  },

  //   id: "freelance",
  //   title: "Freelance Web Developer",
  //   description: "coming soon!",
  //   image: "/angie-portfolio/gray.png",
  //   tags: ["C", "Memory Hierarchy", "Cache", "Sockets", "Control & System Calls"],
  //   buttonAction: "project3",
  // },

];

export const Projects = () => {
  // State to hold the active filter category
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Fallback mechanism to ensure content is visible on mobile
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Show content after 500ms as fallback

    return () => clearTimeout(timer);
  }, []);

  // Define filter categories and their associated projects
  const filterCategories = {
    all: projectsData,
    product: projectsData.filter(project => 
      ['locammend', 'activeIQ', 'recipeHub', 'cmufinals', 'depthMap'].includes(project.id)
    ),
    'ux/ui': projectsData.filter(project => 
      ['locammend', 'activeIQ', 'recipeHub'].includes(project.id)
    ),
    code: projectsData.filter(project => 
      ['csProjects', 'depthMap', 'locammend', 'cmufinals', 'infrecursive', 'clocks'].includes(project.id)
    ),
    'creative code': projectsData.filter(project => 
      ['myNewProject5', '3d', 'infrecursive', 'interactiveenv', 'depthMap', 'clocks', 'recipt', 'project11'].includes(project.id)
    ),
    art: [] // Empty array for "coming soon!"
  };

  // Get filtered projects based on active filter
  const filteredProjects = filterCategories[activeFilter] || [];

  // Determine the navigation action for a project
  const getProjectAction = (project) => {
    // If 'link' starts with http => external URL
    if (project.link && (project.link.startsWith("http://") || project.link.startsWith("https://"))) {
      return () => window.open(project.link, '_blank', 'noopener,noreferrer');
    }
    // If 'link' is defined but not external => internal project route
    if (project.link) {
      return () => navigate(`/${project.link}`);
    }
    // If no link but we have buttonAction => internal project route
    if (project.buttonAction) {
      // Special case for Locammend
      if (project.buttonAction === 'locammend') {
        return () => navigate('/locammend');
      }
      return () => navigate(`/${project.buttonAction}`);
    }
    // Otherwise, no link or buttonAction => no action
    return null;
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col py-20 bg-[rgb(216,218,215)] overflow-x-hidden"
    >
      <RevealOnScroll>
        <div className={`w-full max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 transition-opacity duration-300 ${isVisible ? 'opacity-100' : ''}`}>
          <div className="mb-4">
            <ScrollFloat
              animationDuration={1}
              ease='back.inOut(2)'
              scrollStart='center bottom+=100%'
              scrollEnd='bottom bottom-=40%'
              stagger={0.03}
              textClassName="text-black"
            >
              Featured Projects
            </ScrollFloat>
          </div>

          {/* Filter Tabs */}
          <div className="mb-12 flex flex-wrap gap-3 justify-start">
            {[
              { key: 'all', label: 'all projects' },
              { key: 'product', label: 'Product' },
              { key: 'ux/ui', label: 'UI + UX' },
              { key: 'code', label: 'Code' },
              { key: 'creative code', label: 'Creative' },
              { key: 'art', label: 'Art' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
                  activeFilter === tab.key
                    ? 'bg-gradient-to-r from-blue-200 to-gray-200 text-blue-900 border-1 border-blue-900'
                    : 'bg-[rgb(216,218,215)] border-1 text-black border-black hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

                    {/* Projects Grid */}
          <div className="space-y-6">
            {activeFilter === 'art' ? (
              <RevealOnScroll>
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold text-black font-serif italic">
                    Coming soon!
                  </h3>
                </div>
              </RevealOnScroll>
            ) : (
              (() => {
                const rows = [];
                for (let i = 0; i < filteredProjects.length; i += 2) {
                  const rowProjects = filteredProjects.slice(i, i + 2);
                  rows.push(
                    <RevealOnScroll key={i}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                        {rowProjects.map((project) => {
                          const projectAction = getProjectAction(project);
                          return (
                            <div
                              key={project.id}
                              className={`p-4 sm:p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-black hover:shadow-2xl transition-all duration-300 w-full ${projectAction ? 'cursor-pointer' : ''}`}
                              onClick={projectAction}
                            >
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 sm:h-60 object-cover rounded-lg mb-4"
                              />
                              <h3 className="font-bold text-lg sm:text-xl text-black font-serif italic">
                                {project.title}
                              </h3>
                              <p className="text-black mb-4 text-sm sm:text-base">{project.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, key) => (
                                  <span
                                    key={key}
                                    className="border border-black text-black py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </RevealOnScroll>
                  );
                }
                return rows;
              })()
            )}
          </div>
          {filteredProjects.length === 0 && activeFilter !== 'art' && (
            <p className="text-center text-black mt-8">
              No projects found matching your criteria.
            </p>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
