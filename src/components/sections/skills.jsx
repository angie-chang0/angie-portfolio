import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import ScrollFloat from './ScrollFloat';

export const About = () => {
  const technicalSkills = [
    "Python", "C", "C++", "HTML/CSS", "JS", "Assembly x86", "PostgreSQL", "MySQL", 
    "React", "Node", "TailwindCSS", "React Native", "Swift", "SML", "OCaml", "R", 
    "Flutter", "Firestore database", "MongoDB", "Cloud Computing", "Pandas", 
    "Processing", "p5.js", "WebGL", "GLSL", "Vite", "Jest"
  ];

  const tools = [
    "Cursor", "Microsoft Suite", "Photoshop", "Illustrator", "After Effects", 
    "Indesign", "Git", "Procreate", "Jupyter Notebook", "Canva", "XCode", 
    "Google Suite", "Unreal Engine", "Unity", "Slack", "Toon Boom", "AWS S3"
  ];

  const methods = [
    "Wireframing", "Experience prototyping", "User stories", "Affinity Diagramming", 
    "Storyboarding", "Animating", "Motion design", "User + Stakeholder Journey Mapping", 
    "Think aloud study", "DAU/MAU", "Speed dating", "Agile/Scrum methods"
  ];

  const [cImage, cCatImage] = useState("/angie-portfolio/k2.png"); 

  return (
    <section
      id="#"
      className="flex items-center justify-center py-20 bg-[rgb(216,218,215)] px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <span className="hidden md:block absolute left-[-90px] top-1/3 text-[300px] text-blue-800/20 blur-sm select-none">✭</span>
      <span className="hidden md:block absolute right-[-90px] top-2/3 text-[200px] text-blue-800/15 blur-sm select-none">✭</span>
      <span className="hidden lg:block absolute left-1/4 top-1/4 text-[150px] text-blue-800/10 blur-sm select-none">✭</span>
      <span className="hidden lg:block absolute right-1/4 bottom-1/4 text-[180px] text-blue-800/12 blur-sm select-none">✭</span>
      <span className="hidden md:block absolute right-[-120px] top-[-50px] text-[350px] text-blue-800/18 blur-sm select-none">✭</span>

      
      <div className="max-w-6xl mx-auto w-full px-8 md:px-16 lg:px-24 relative z-10">
        <div className="mb-8">
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(1)'
            scrollStart='center bottom+=60%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
            textClassName="text-black"
          >
            Skills
          </ScrollFloat>
        </div>

        {/* Technical Skills Section */}
        <RevealOnScroll>
          <div className="mt-20 mb-12 flex items-start gap-40">
            <h3 className="text-2xl font-bold text-black flex-shrink-0" 
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Technical
            </h3>
            <div className="flex flex-wrap gap-3 flex-1">
              {technicalSkills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-black/10 text-black py-1 px-3 rounded-full text-md hover:bg-black/20 hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Tools Section */}
        <RevealOnScroll>
          <div className="mt-20 mb-12 flex items-start gap-40">
            <h3 className="text-2xl font-bold text-black flex-shrink-0" 
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Tools
            </h3>
            <div className="flex flex-wrap gap-3 flex-1">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-black/10 text-black py-1 px-3 rounded-full text-md hover:bg-black/20 hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Methods Section */}
        <RevealOnScroll>
          <div className="mt-20 mb-12 flex items-start gap-40">
            <h3 className="text-2xl font-bold text-black flex-shrink-0" 
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Methods
            </h3>
            <div className="flex flex-wrap gap-3 flex-1">
              {methods.map((method, index) => (
                <span
                  key={index}
                  className="bg-black/10 text-black py-1 px-3 rounded-full text-md hover:bg-black/20 hover:shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Cat Image */}
        <RevealOnScroll>
          <div className="flex justify-center mt-8">
            <img 
              src={cImage} 
              alt="AnieCat" 
              className="w-32 h-32 transition-all duration-300"
              onMouseEnter={() => cCatImage("/angie-portfolio/k2b.png")} 
              onMouseLeave={() => cCatImage("/angie-portfolio/k2.png")} 
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
