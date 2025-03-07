import { RevealOnScroll } from "../RevealOnScroll";

export const New = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 bg-[rgb(216,218,215)] px-4 sm:px-6"
    >
      <span className="hidden md:block absolute left-[-90px] top-1/3 text-[300px] text-blue-800/20 blur-md select-none">✭</span>
      
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start relative">
          
          {/* Left Section (Image & Text) */}
          <div className="relative w-full sm:w-60 h-auto sm:h-60 md:w-100 md:h-100 mb-12 md:mb-0 md:mr-10 flex flex-col items-center">
            <div className="relative w-full max-w-xs sm:max-w-none h-auto">
              <img src="/angie-portfolio/gray.png" alt="Gray Box" className="absolute top-4 left-4 w-full h-full object-cover rounded-lg opacity-80" />
              <img src="/angie-portfolio/gray.png" alt="Gray Box" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg opacity-90" />
              <img src="/angie-portfolio/angie.png" alt="Angie" className="relative w-full h-full object-cover rounded-lg shadow-lg" />
            </div>

            <div className="text-center md:text-left max-w-lg mt-8">
              <h2 className="text-3xl mb-4 bg-gradient-to-r from-blue-700 to-gray-800 bg-clip-text text-transparent">
                𓆝 𓆟 𓆞 𓆝 𓆟
              </h2>
            </div>

            <div className="text-black text-md space-y-4 text-center md:text-left px-2 sm:px-0">
              <p>
                Additionally, in my free time, I love to draw, animate, and develop games in game jams. 
                I'm an avid cinephile and love to watch movies; the good, the bad, and the terrible! 
                Don't be a stranger, hit me up with movie recommendations :D
              </p>
            </div>
          </div>

          {/* Right Section (Text & Layered Images) */}
          <div className="text-center md:text-left max-w-lg">
            <h2 className="text-3xl mb-4 bg-gradient-to-r from-blue-700 to-gray-800 bg-clip-text text-transparent">
              Hi, friend! 
            </h2>

            <div className="text-black text-md space-y-4">
              <p>
                I am a technologist working at the intersection of code and art, developing my creative and
                technical skills at Carnegie Mellon University. I am pursuing a double major in Computer 
                Science and Art, with an additional focus on Human-Computer Interaction.
              </p>
              <p>
                My experience spans AI, web development, database management, and user experience design. 
                I am particularly passionate about backend development, computer systems, and building scalable 
                products that drive sustainable business impact.
              </p>
              <p>
                Driven by curiosity, empathy, and creativity, I'm looking to join a team committed to making a 
                lasting, positive impact on people's lives and our communities.
              </p>
            </div>

            {/* Layered Images */}
            <div className="relative w-full h-auto mt-8 flex justify-center sm:justify-start">
              <div className="relative flex flex-col sm:flex-row sm:space-x-3">
                <img src="/angie-portfolio/car.png" alt="Layered Image 1" className="w-32 h-32 sm:w-50 sm:h-50 object-cover rounded-lg shadow-lg opacity-90" />
                <img src="/angie-portfolio/11.jpg" alt="Layered Image 2" className="w-32 h-32 sm:w-50 sm:h-50 object-cover rounded-lg shadow-lg opacity-90 sm:-ml-6 mt-2" />
                <img src="/angie-portfolio/5.jpg" alt="Layered Image 3" className="w-32 h-32 sm:w-50 sm:h-50 object-cover rounded-lg shadow-lg opacity-95 sm:-ml-6 mt-4" />
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
