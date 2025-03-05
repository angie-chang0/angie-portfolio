import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-[rgb(216,218,215)]"
    >
      <RevealOnScroll>
      <span className="absolute right-[-90px] top-0 text-[300px] text-blue-800/20 blur-md select-none">✭</span>
      <span className="absolute left-[-90px] top-1/3 text-[300px] text-blue-800/20 blur-md select-none">✭</span>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl mb-8 bg-gradient-to-r from-blue-700 to-gray-800 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-black hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition">
            <img src="/angie-portfolio/cmufinals.png" alt="Project Preview" className="w-full h-60 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2 text-black"> CMU Finals Planner</h3>
              <p className="text-black mb-4">
                Scalable PDF scraper that takes CMU course finals and allows for easy adding to google calendar using 
                regular expressions, PyPlumber and JS scripting.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "HTML.CSS", "JS", "AWS", "WebApp"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-black text-white py-1 px-3 rounded-full text-sm hover:bg-black/80 hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all"
                  >
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
            <div className="glass p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-black hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all">
            <img src="/angie-portfolio/activeiq.png" alt="Project Preview" className="w-full h-60 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2 text-black">Active IQ Database</h3>
              <p className="text-black mb-4">
                Designed interface of Active IQ database with real-time changes in share ownship during 
                internship at Innisfree.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["UX/UI", "WireFraming", "Figma", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-black text-white py-1 px-3 rounded-full text-sm transition hover:bg-black/80 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                  >
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
            <div className="glass p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-black hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all">
              <img src="/angie-portfolio/gray.png" alt="Project Preview" className="w-full h-60 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2 text-black">Freelance Web Development</h3>
              <p className="text-black mb-4">
                meow..? wip
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React + Vite", "TypeScript", "Tailwind", "NodeJS", "Docker"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-black text-white py-1 px-3 rounded-full text-sm transition hover:bg-black/80 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                  >
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
            <div className="glass p-6 rounded-xl border border-black hover:-translate-y-1 hover:border-black hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all">
            <img src="/angie-portfolio/gray.png" alt="Project Preview" className="w-full h-60 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2 text-black">Computer System Assorted Projects</h3>
              <p className="text-black mb-4">
                meow!!! wip
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["C", "Memory Hierarchy & Virtual Memory", "Cache", "Sockets Linking & Loading Process", "Control & System Calls"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-black text-white py-1 px-3 rounded-full text-sm transition hover:bg-black/80 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                  >
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
        <span className="absolute right-[-30px] bottom-[-100px] text-[300px] text-blue-800/20 blur-md select-none">✽</span>
      </RevealOnScroll>
    </section>
  );
};
