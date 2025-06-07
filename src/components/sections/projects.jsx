import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RevealOnScroll } from "../RevealOnScroll";

// Sample data array with all your projects
const projectsData = [
  {
    id: "myNewProject5",
    title: "Generative Art with p5.js",
    description:
        "Considering elements such as symmetry, rhythm, and pattern, I wrote code in P5.JS that could generate infinite variations of a tiled pattern; inspired by the work of MC Escher, I based my pattern off of an isometric cityscape. ",
    image: "/angie-portfolio/iso3.png",
    tags: ["Personal Project", "Generative Art", "Creative Coding", "P5.js", "JavaScript"],
    buttonAction: "project5", // internal link => setShowProject("project5")
  },
  {
    id: "3d",
    title: "Brooklyn Bridge: VR",
    description:
        "  This is a project I made for a competition. I used the Brooklyn Bridge as my main subject and created a VR experience that takes place on the bridge in the 1920s. I had to model the bridge, the trolleys, and the people. I also had to create a train station and a train. The video shows the experience in action.",
    image: "/angie-portfolio/br.jpg",
    tags: ["Personal Project", "3D Modelling", "VR/AR", "Unreal Engine", "Blueprints", "Oculus Go"],
    buttonAction: "project9", // internal link => setShowProject("project5")
  },
  {
    id: "infrecursive",
    title: "infintely recursive tree",
    description:
        "Using priniples of recursion and perlin noise, I created 2 projects that generate infinitely. I created a tree that continues to grow forever, and a phyllotactic spiral that shrinks and contracts. ",
    image: "/angie-portfolio/t2.png",
    tags: ["Personal Project", "Generative Art", "Creative Coding", "P5.js", "JavaScript"],
    buttonAction: "project8", 
  },
  {
    id: "interactiveenv",
    title: "TouchDesigner: Interactive Environment",
    description: "Using TouchDesigner, I created a physics simluator that allows a user to manipulate a water like substance. through the scope of this project, I created many smaller prototypes using compuer vision and motion capture. Take a peek! :)",
    image: "/angie-portfolio/mq3.png",
    tags: ["Personal Project","TouchDesigner", "Creative Coding", "Computer Vision", "Motion Capture", "Physics Simulation", "3D Modelling"],
    link: "project6",
  },
  {
    id: "depthMap",
    title: "LLM Depth Map + Machine Learning",
    description: "Contained in this project is mini projects that culminates in a final trained LLM created within COMFYUI that uses machine learning to detect the depth within a given image. Using this, I programmed a parallax effect within images for manipulation. ",
    image: "/angie-portfolio/hand.png",
    tags: ["Personal Project","LLM/Machine Learning", "JS","Python", "ComfyUI", "Javascript", "public installation", "react"],
    link: "project7",
  },
  {
    id: "cmufinals",
    title: "CMU Finals Planner",
    description:
      "Scalable PDF scraper that takes CMU course finals and smoothly adds final to Google Calendar using regular expressions, PyPlumber, and JS scripting.",
    image: "/angie-portfolio/cmufinals.png",
    tags: ["Personal Project", "Python", "HTML/CSS", "JS", "AWS", "WebApp"],
    link: "https://angie-chang0.github.io/cmufinalsplanner/",
  },
  {
    id: "clocks",
    title: "10 Clocks",
    description: "Clocks! Clocks! In this creative project, I rapidly prototyped 10 clocks and redefined from traditional time-keeping. I implemented these clocks in P5.JS, and implemented several different algorithms to represent time passing.",
    image: "/angie-portfolio/c.png",
    tags: ["Personal Project", "Creative Coding", "P5.js", "JavaScript"],
    buttonAction: "project4",
  },
  {
    id: "activeIQ",
    title: "Active IQ Database",
    description:
      "Designed interface of Active IQ database with real-time changes in share ownership, managing traditional proxy solicitation and stockwatch firms, providing critical information based on latest SEC filings.",
    image: "/angie-portfolio/nq.png",
    tags: ["Internship", "UX/UI", "WireFraming", "Figma", "Database Management", "MySQL"],
    buttonAction: "project1",
  },
  {
    id: "recipeHub",
    title: "RecipeHub",
    description:
      "A WebApp that allows users to upload a link or picture to a recipe from anywhere on the web, and use our LLM to gather the recipe ingredients and instructions to save all in one place. Keeps track of user groceries and recommends recipes so that food does not go to waste.",
    image: "/angie-portfolio/recipiehub.png",
    tags: ["LLM/Machine Learning", "User Stories", "Agile/Scrum workflow", "React + Vite", "NodeJS", "PostgreSQL", "Docker"],
    buttonAction: "project2",
  },
  {
    id: "csProjects",
    title: "Computer Systems Assorted Projects",
    description:
      "Cache: Built a cache sim in C that utilized an LRU policy to simulate the L3 cache. Malloc: Implemented a memory manager that dynamically allocates heap memory through the use of segregated lists and unbounded arrays. Shell: Implemented a Unix Shell that manages multiple processes, handles signal interruptions, and allows for I/O redirection.",
    image: "/angie-portfolio/malloc.png",
    tags: ["C", "Memory Hierarchy", "Cache", "Sockets", "Control & System Calls"],
    buttonAction: "project3",
  },
  {
    id: "recipt",
    title: "what does it cost?",
    description: "A creative code project. Coming soon!",
    image: "/angie-portfolio/gray.png",
    tags: ["LLM/Machine Learning", "JS", "P5.js", "Javascript", "public installation", "react"],
    buttonAction: "project2",
  },
  {
    id: "freelance",
    title: "Freelance Web Developer",
    description: "coming soon!",
    image: "/angie-portfolio/gray.png",
    tags: ["C", "Memory Hierarchy", "Cache", "Sockets", "Control & System Calls"],
    buttonAction: "project3",
  },
];

export const Projects = () => {
  // State to hold multiple selected tags
  const [activeTags, setActiveTags] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Fallback mechanism to ensure content is visible on mobile
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Show content after 500ms as fallback

    return () => clearTimeout(timer);
  }, []);

  // Create a list of all unique tags for the dropdown
  const allTags = Array.from(new Set(projectsData.flatMap((project) => project.tags)));

  // Filter projects based on whether they include any of the selected tags
  const filteredProjects = projectsData.filter((project) => {
    if (activeTags.length === 0) return true;
    return project.tags.some((tag) =>
      activeTags.some((activeTag) => tag.toLowerCase() === activeTag.toLowerCase())
    );
  });

  // Add a tag when selected from the dropdown (if it's not already selected)
  const handleTagSelect = (e) => {
    const selectedTag = e.target.value;
    if (selectedTag && !activeTags.includes(selectedTag)) {
      setActiveTags([...activeTags, selectedTag]);
    }
    // Reset dropdown to default
    e.target.value = "";
  };

  // Remove a tag from the selected list when the "x" is clicked
  const removeTag = (tagToRemove) => {
    setActiveTags(activeTags.filter((tag) => tag !== tagToRemove));
  };

  // Determine how to render the "View Project" link or button
  const renderViewProject = (project) => {
    // If 'link' starts with http => external URL
    if (project.link && (project.link.startsWith("http://") || project.link.startsWith("https://"))) {
      return (
        <a
          href={project.link}
          className="text-black hover:text-black/80 transition-colors my-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
      );
    }
    // If 'link' is defined but not external => internal project route
    if (project.link) {
      return (
        <button
          onClick={() => navigate(`/${project.link}`)}
          className="text-black hover:text-black/80 transition-colors my-4"
        >
          View Project →
        </button>
      );
    }
    // If no link but we have buttonAction => internal project route
    if (project.buttonAction) {
      return (
        <button
          onClick={() => navigate(`/${project.buttonAction}`)}
          className="text-black hover:text-black/80 transition-colors my-4"
        >
          View Project →
        </button>
      );
    }
    // Otherwise, no link or buttonAction => no action
    return null;
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 bg-[rgb(216,218,215)] overflow-x-hidden"
    >
      <RevealOnScroll>
        <div className={`w-full max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 transition-opacity duration-300 ${isVisible ? 'opacity-100' : ''}`}>
          <h2 className="text-3xl mb-8 bg-gradient-to-r from-blue-700 to-gray-800 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* Tag Filtering Controls */}
          <div className="mb-6 flex flex-col md:flex-row items-center justify-center gap-4 px-2">
            {/* Display selected tags */}
            <div className="flex flex-wrap gap-2 justify-center">
              {activeTags.map((tag, index) => (
                <div key={index} className="flex items-center bg-black text-white py-1 px-3 rounded-full text-sm">
                  {tag}
                  <button onClick={() => removeTag(tag)} className="ml-1 text-white">
                    x
                  </button>
                </div>
              ))}
            </div>
            {/* Dropdown for tag selection */}
            <select
              onChange={handleTagSelect}
              className="px-4 py-2 border border-black rounded text-black w-full max-w-xs"
            >
              <option value="">select tag(s)</option>
              {allTags.map((tag, index) => (
                <option key={index} value={tag} disabled={activeTags.includes(tag)}>
                  {tag}
                </option>
              ))}
            </select>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-4 sm:p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-black hover:shadow-lg transition w-full"
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="bg-black text-white py-1 px-2 sm:px-3 rounded-full text-xs sm:text-sm hover:bg-black/80 transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  {renderViewProject(project)}
                </div>
              </div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <p className="text-center text-black mt-8">
              No projects found matching your criteria.
            </p>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
