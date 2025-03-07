import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

export const About = () => {
  const frontendSkills = [
    "Python",
    "C/C++",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NodeJS",
    "TailwindCSS",
    "Vite",
    "SML",
    "OCaml",
    "Assembly x86",
    "HTML/CSS",
    "Pandas",
    "Bootstrap",
    "Processing",
    "NoSQL",
    "Android SDK",
    "P5.js",
    "GLSL"
  ];

  const backendSkills = [
    "Git",
    "Excel",
    "AWS",
    "Docker",
    "Firebase",
    "Figma",
    "Canva",
    "Toon Boom",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Unity",
    "TouchDesigner",
    "Procreate",
    "Google Suite",
    "Unreal Engine",
    "Slack"
  ];
  const [cImage, cCatImage] = useState("/angie-portfolio/k2.png"); 

  return (
    <section
      id="#"
      className="flex items-center justify-center py-20 bg-[rgb(216,218,215)] px-4 sm:px-6"
    >
      <RevealOnScroll>
        {/* Background Decorative Element */}
        <span className="hidden md:block absolute left-[-90px] top-1/3 text-[300px] text-blue-800/20 blur-md select-none">✭</span>

        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl mb-8 bg-gradient-to-r from-blue-700 to-gray-800 bg-clip-text text-transparent text-center">
            Skills
          </h2>

          <div className="rounded-xl p-6 sm:p-8 py-10 border-black border hover:-translate-y-1 transition-all">
            <p className="text-black mb-6 text-center sm:text-left">
              Ordered based on relevance and proficiency
            </p>

            {/* Mobile Friendly Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-black text-center sm:text-left">
                  Technical
                </h3>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-black/10 text-black py-1 px-3 rounded-full text-sm hover:bg-black/20 
                                    hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-black text-center sm:text-left">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-black/10 text-black py-1 px-3 rounded-full text-sm hover:bg-black/20 
                                    hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive Image Section */}
        <div className="relative sm:absolute bottom-[-80px] sm:right-[-250px] flex justify-center sm:justify-end mt-6 sm:mt-0">
          <img 
            src={cImage} 
            alt="AnieCat" 
            className="w-32 h-32 sm:w-45 sm:h-42 transition-all duration-300"
            onMouseEnter={() => cCatImage("/angie-portfolio/k2b.png")} 
            onMouseLeave={() => cCatImage("/angie-portfolio/k2.png")} 
          />
        </div>

      </RevealOnScroll>
    </section>
  );
};
