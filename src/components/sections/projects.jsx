import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = ({ setShowProject }) => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-[rgb(216,218,215)]"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl mb-8 bg-gradient-to-r from-blue-700 to-gray-800 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* CMU Finals Planner */}
            <div className="p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-black hover:shadow-lg transition">
              <img src="/angie-portfolio/cmufinals.png" alt="Project Preview" className="w-full h-60 object-cover rounded-lg mb-4" />
              <h3 className="font-bold text-xl text-black font-serif italic">CMU Finals Planner</h3>
              <p className="text-black mb-4">
                Scalable PDF scraper that takes CMU course finals and smoothly adds final to Google Calendar 
                using regular expressions, PyPlumber, and JS scripting.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Personal Project","Python", "HTML/CSS", "JS", "AWS", "WebApp"].map((tech, key) => (
                  <span key={key} className="bg-black text-white py-1 px-3 rounded-full text-sm hover:bg-black/80 transition">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="https://cmufinalsplanner.github.io/" className="text-black hover:text-black/80 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            {/* Active IQ Database */}
            <div className="glass p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-black hover:shadow-lg transition">
              <img src="/angie-portfolio/activeiq.png" alt="Project Preview" className="w-full h-60 object-cover rounded-lg mb-4" />
              <h3 className="font-bold text-xl text-black font-serif italic">Active IQ Database</h3>
              <p className="text-black mb-4">
                Designed interface of Active IQ database with real-time changes in share ownership, managing traditional proxy solicitation 
                and stockwatch firms, providing critical information based on latest SEC filings. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Internship","UX/UI", "WireFraming", "Figma", "Database Management", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-black text-white py-1 px-3 rounded-full text-sm transition hover:bg-black/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => setShowProject(true)} 
                  className="text-black hover:text-black/80 transition-colors my-4"
                >
                  View Project →
                </button>
              </div>
            </div>
        
            {/* Freelance Web Development */}
            <div className="glass p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-black hover:shadow-lg transition">
              <img src="/angie-portfolio/recipiehub.png" alt="Project Preview" className="w-full h-60 object-cover rounded-lg mb-4" />
              <h3 className="font-bold text-xl text-black font-serif italic">RecipieHub</h3>
              <p className="text-black mb-4">
                A WebApp that allows users to upload a link or picture to a recpie from anywhere on the web, and use 
                our LLM to gather the recipie ingredients and intructions to save all in one place. Keeps track of user
                groceries and reccomends recipies so that food does not go to waste. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["LLM/Machine Learning","User Stories", "Agile/Scrum workflow","React + Vite", "NodeJS", "Docker"].map((tech) => (
                  <span key={tech} className="bg-black text-white py-1 px-3 rounded-full text-sm hover:bg-black/80 transition">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-black hover:text-black/80 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            {/* Computer Systems Projects */}
            <div className="glass p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-black hover:shadow-lg transition">
              <img src="/angie-portfolio/malloc.png" alt="Project Preview" className="w-full h-60 object-cover rounded-lg mb-4" />
              <h3 className="font-bold text-xl text-black font-serif italic">Computer Systems Assorted Projects</h3>
              <p className="text-black mb-4">
              Cache: Built a cache sim C that utilized a LRU policy to simulate the L3 cache. Malloc: Implemented a 
              memory manager that dynamically allocates heap memory through use of segregated lists and unbounded arrays.
              Shell: Implemented a Unix Shell that manages multiple processes, handles signal interruptions, and
              allows for I/O redirection.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "Memory Hierarchy", "Cache", "Sockets", "Control & System Calls"].map((tech, key) => (
                  <span key={key} className="bg-black text-white py-1 px-3 rounded-full text-sm hover:bg-black/80 transition">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-black hover:text-black/80 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
