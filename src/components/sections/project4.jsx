import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Project4 = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Descriptions for each clock
  const clockDescriptions = [
    // "In this clock, numbers fall into the space, and after 60 seconds, they drop away and reset, same with minutes and hours",
    // "This clock correlates with 2 symbols for hours, 2 for minutes, and 2 for seconds. each symbol is drawn at the speed of the time they represent",
    // "Clock 3: This clock project experiments with simple animations and shapes.",
    // "Clock 4: A unique interpretation of clock mechanics using creative code.",
    // "Clock 5: This clock demonstrates interactive elements using p5.js.",
    // "Clock 6: A visual exploration of time through dynamic graphics.",
    // "Clock 7: Experimenting with color gradients and animated elements in a clock.",
    // "Clock 8: A minimalist approach to time visualization using p5.js.",
    // "Clock 9: This clock features custom animations and fluid motion.",
    // "Clock 10: A final creative experiment combining code and art to represent time."
  ];

  return (
    <div className="py-25 min-h-screen flex flex-col items-center bg-[rgb(216,218,215)] text-black p-4">
      {/* Main container for header */}
      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b-4 border-[rgb(129,148,201)]">
          <h1 className="bg-gradient-to-r from-[rgb(122,178,238)] to-[rgb(41,12,109)] bg-clip-text text-transparent leading-tight text-8xl font-bold mb-4 md:mb-0">
            10 CLOCKS
          </h1>
          <div className="text-right md:text-left max-w-xl">
            <p className="text-lg font-semibold">
              Creative code project &bull; Fall 2024
            </p>
            <p className="text-md mt-2">
              As part of my Creative Code curriculum, I was challenged to 
              think about time keeping from differefnt perspectives, and 
              create "clocks" that deviate from the norm. I was challenged
              both conceptually and technically, and the results are below.
            </p>
            <p className="text-md font-semibold mt-2">
              Javascript/p5.js &bull; 3d objects &bull; APIs
            </p>
          </div>
        </div>
      </div>

      {/* Background Section – Full Width */}
      <div className="w-full py-10 border-b-2 border-[rgb(129,148,201)]">
        <h2 className="bg-gradient-to-r from-[rgb(122,178,238)] to-[rgb(41,12,109)] bg-clip-text text-transparent leading-tight text-3xl font-bold mb-4 text-center">
          BACKGROUND
        </h2>
        <div className="flex flex-col items-center gap-8">
          {/* Image on Top */}
          <div className="w-full flex justify-center">
            <img
              src="c1.jpg"
              alt="Mockup"
              className="w-full max-w-2xl shadow-lg rounded-lg"
            />
          </div>
          {/* Text Below */}
          <div className=" text-lg px-4 max-w-6xl">
            <p className="mb-4">
              Attempts to mark time stretch back many thousands of years, with some of the earliest timekeeping technologies being gnomons, sundials, water clocks, and lunar calendars. Even today's standard representation of time, with hours and minutes divided into 60 parts, is a legacy inherited from the ancient Sumerians, who used a sexagesimal counting system.
            </p>
            <p className="mb-4">
              The history of timekeeping is a history driven by economic and militaristic desires for greater precision, accuracy, and synchronization. Every increase in our ability to precisely measure time has had a profound impact on science, agriculture, navigation, communications, and, as always, warcraft.
            </p>
            <p className="mb-4">
              Despite the widespread adoption of technological standards, there are many other ways to understand time. Psychological time contracts and expands with attention; biological cycles affect our moods and behavior; ecological time is observed in species and resource dynamics; geological and astronomical rhythms can span millennia. In the twentieth century, Einstein's theory of relativity further upended our understanding of time, showing that it does not flow in a constant way, but rather in relation to the position from which it is measured—a possibly surprising return to the significance of the observer.
            </p>
            <p className="mb-4">
              In this project, I attempted to widen my understanding and perception of time by rapidly prototyping 10 clocks that stray away from the usual definition of a "clock". I implemented these clocks in P5.JS (Javascript) and pushed myself both conceptually and technically. All visuals are hand coded with P5.JS Native.
            </p>
          </div>
        </div>
      </div>

      {/* Main container for the rest of the content */}
      <div className="max-w-6xl w-full">
        {/* Roles, Methods, Tools, Mentors Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
          <div>
            <h3 className="bg-gradient-to-r from-[rgb(122,178,238)] to-[rgb(237,157,214)] bg-clip-text text-transparent leading-tight font-bold mb-1">
              Roles
            </h3>
            <p>Developer</p>
            <p>Creative Technologist</p>
            <p>Visual Lead</p>
            <p>Researcher</p>
          </div>
          <div>
            <h3 className="bg-gradient-to-r from-[rgb(122,178,238)] to-[rgb(237,157,214)] bg-clip-text text-transparent leading-tight font-bold mb-1">
              Methods
            </h3>
            <p>Creative Code</p>
            <p>Rapid Iteration</p>
            <p>APIs</p>
            <p>Prototyping</p>
            <p>Recursion/Algorithm Design</p>
          </div>
          <div>
            <h3 className="bg-gradient-to-r from-[rgb(122,178,238)] to-[rgb(237,157,214)] bg-clip-text text-transparent leading-tight font-bold mb-1">
              Tools
            </h3>
            <p>Javascript</p>
            <p>P5.JS</p>
          </div>
          <div>
            <h3 className="bg-gradient-to-r from-[rgb(122,178,238)] to-[rgb(237,157,214)] bg-clip-text text-transparent leading-tight font-bold mb-1">
              Mentors
            </h3>
            <p>Golan Levin</p>
            <p>Tega Brain</p>
          </div>
        </div>
    
        <div className="py-5 border-b-2 border-[rgb(129,148,201)]"></div>
    
        {/* Clock Projects */}
        <div className="mt-10 space-y-16">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i}>
              {/* Clock Title */}
              <h3 className="bg-gradient-to-r from-[rgb(96,146,199)] to-[rgb(213,80,175)] bg-clip-text text-transparent leading-tight text-3xl font-bold text-center mb-4">
                Clock {i + 1}
              </h3>
              {/* Full-width Video Preview */}
              <div className="w-full mb-4 flex justify-center">
                <video controls className="w-full" style={{ maxWidth: "1000px" }}>
                  <source src={`clock_${i + 1}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              {/* Description */}
              <div className="p-4">
                <p className="text-m text-gray-700 text-center md:text-left">
                  {clockDescriptions[i]}
                </p>
              </div>
              {/* Divider Bar (except after the last clock) */}
              {i < 9 && (
                <hr className="my-8 border-t-2 border-gray-400" />
              )}
            </div>
          ))}
        </div>
    
        {/* Go Back Button */}
        <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate('/')}
          className="bg-black text-white py-3 px-8 rounded-lg hover:bg-gray-800 transition"
        >
          Go Back
        </button>
        </div>
      </div>
    </div>
  );
};
