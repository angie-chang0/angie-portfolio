import { useEffect, useRef, useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { useNavigate } from 'react-router-dom';
import ImageModal from '../ImageModal';

// Reusable dropdown for roles
function RoleDropdown({ color, icon, title, children, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className={`rounded-4xl border border-black px-6 py-4 w-full mb-4 transition-all duration-300 ${open ? 'bg-[#f8fafd]' : 'bg-white'}`}
      style={{ boxShadow: open ? '0 2px 12px 0 rgba(0,0,0,0.04)' : 'none' }}>
      <button
        className="flex items-center w-full text-left focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center border border-black`} style={{ background: color }}>
          {icon}
        </span>
        <span className="text-base md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
          <span className="font-bold" style={{ fontFamily: 'Courier New, monospace' }}>{title}</span>
        </span>
        <span className="ml-auto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transform transition-transform duration-200 ${open ? 'rotate-180' : ''}`}><polyline points="6 9 12 15 18 9" /></svg>
        </span>
      </button>
      {open && (
        <div className="mt-4 text-[1.05rem] text-[#222]" style={{ fontFamily: 'Inter, sans-serif' }}>
          {children}
        </div>
      )}
    </div>
  );
}

export const Project11 = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalAlt, setModalAlt] = useState('');
  
  const openModal = (imageSrc, altText) => {
    setModalImage(imageSrc);
    setModalAlt(altText);
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setModalOpen(false);
  };

  // Scroll to top when component mounts
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Immediate scroll
    scrollToTop();
    
    // Delayed scroll to ensure it works after all content loads
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToTop();
      });
    });
    
    // Additional safety scroll after a short delay
    setTimeout(scrollToTop, 100);
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black flex flex-col items-center font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Flat Header - full-bleed, edge-to-edge, positioned at very top */}
      <div className="w-screen relative h-[400px] md:h-[400px] bg-[#f6f6f6] border-b border-[#e0e0e0] flex items-top justify-center" style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
        <img
          ref={headerRef}
          src="/angie-portfolio/dia_copy.gif"
          alt="Project 11 Header"
          className="w-full h-full object-cover object-top cursor-pointer hover:opacity-90 transition-opacity"
          style={{ maxHeight: '400px', minHeight: '220px', imageRendering: 'auto' }}
          onClick={() => openModal("/angie-portfolio/dia.gif", "Project 11 Header")}
        />
      </div>
      {/* Navigation Buttons */}

      {/* Main Content - centered, wide, not full-bleed */}
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 mt-10 md:mt-16 mb-[18px]">
        {/* Title and Subtitle */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-2 w-full">
          <div>
            <h1 className="text-5xl font-normal text-[#181c20] mb-6" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em' }}>Bakeoffs</h1>
            <div className="text-[#b0b3b8] font-medium text-lg mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Coursework | Human Centered Design</div>
          </div>
          <div className="text-[#b0b3b8] text-lg font-medium whitespace-nowrap mt-16 md:mt-0" style={{ fontFamily: 'Inter, sans-serif' }}>May 2024 - August 2024</div>
        </div>

        {/* Description */}
        <div className="mt-6 text-[1.08rem] text-[#222] leading-relaxed w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
          <p className="mb-4">
            Over the semester, our class ran competitive <strong>"bake-offs"</strong>: fast-paced design sprints where we researched a problem, sketched interaction models, and validated them with real users. During these sprints, I planned and led user interviews and usability tests, built prototypes ranging from low-fidelity sketches to interactive mockups, and iterated based on evidence.
          </p>
          <p>
            We measured things like task completion time and how quickly users understood the goal, but just as importantly, I learned how to get creative and collaborate with teammates from all kinds of backgrounds. Along the way, I deepened my understanding of core UX principles like user-centered design, usability heuristics, and evidence-driven iteration.
          </p>
        </div>
        
        {/* Roles, Team, Tools, Methods Section - responsive grid, left-aligned */}
        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6  rounded-4xl p-6 bg-transparent w-full text-center items-center justify-center">
          {/* Roles */}
          <div className="text-center">
            <div className="text-[#2563eb] font-bold text-xl mb-2 mt-6 text-left" style={{ fontFamily: 'Courier New, monospace' }}>Roles</div>
            <ul className="list-none text-[#222] mb-4 pl-0 text-left" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
              <li className="mb-3">UX Designer</li>
              <li className="mb-3">UX Researcher</li>
              <li className="mb-3">Developer</li>
            </ul>
          </div>
          {/* Team */}
          <div className="text-center">
            <div className="text-[#2563eb] font-bold text-xl mb-2 text-left" style={{ fontFamily: 'Courier New, monospace' }}>Team</div>
            <ul className="list-none text-[#222] mb-4 pl-0 text-left 
            " style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
              <li className="mb-3">Nikki Wang</li>
              <li className="mb-3">Kashish Sindhwani</li>
            </ul>
          </div>
          {/* Tools */}
          <div className="text-center">
            <div className="text-[#2563eb] font-bold text-xl mb-2 text-left mt-2" style={{ fontFamily: 'Courier New, monospace' }}>Tools</div>
            <ul className="list-none text-[#222] pl-0 text-left mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
              <li className="mb-3">Figma, Processing, Excel, Javascript</li>
              <li className="mb-3">Miro, Notion, Jira, Adobe XD, OBS</li>
            </ul>
          </div>
          {/* Methods */}
          <div className="text-center">
            <div className="text-[#2563eb] font-bold text-xl mb-2 text-left mt-2" style={{ fontFamily: 'Courier New, monospace' }}>Methods</div>
            <ul className="list-none text-[#222] pl-0 text-left mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
              <li className="mb-3">User Experience, User Research, Low- to High-Fidelity</li>
              <li className="mb-3">Prototyping, Information Architecture, A/B Testing &</li>
              <li className="mb-3">Comparative Evaluation</li>
            </ul>
          </div>
        </div>

        {/* Bakeoff 1 Section */}
        <RevealOnScroll>
          <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-12 flex flex-col items-center bg-[#d6f0fa]" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
            {/* Phase Number */}
            <div className="text-[#2563eb] text-lg md:text-xl font-bold mb-2 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Bakeoff 1
            </div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-normal mb-8 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Clarify the Goal
            </h2>
            
            <div className="flex flex-col items-center gap-8 w-full max-w-6xl">
              {/* Interactive Display */}
              <div className="w-full">
                <img
                  src="/angie-portfolio/Group6.png"
                  alt="Interactive Display - Blue square matching red target square"
                  className="w-full rounded-lg cursor-pointer transition-opacity"
                  onClick={() => openModal("/angie-portfolio/Group6.png", "Interactive Display - Blue square matching red target square")}
                />
              </div>
              
              {/* Goal Descriptions */}
              <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl mt-12">
                {/* User Goal */}
                <div className="flex-1 rounded-2xl bg-[#e6f0ff] border border-[#93c5fd] p-8 max-w-xl mx-auto">
                  <div className="font-bold mb-2 text-lg flex items-center gap-2" style={{ fontFamily: 'Courier New, monospace' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    User goal
                  </div>
                  <div className="text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                    The task is to match a blue cursor square to a red destination square as quickly and accurately as possible. The red square appears at random positions, sizes, and rotations on the screen. To align them, the blue square must be translated (X/Y), rotated, and scaled to match the red square's orientation and size.
                  </div>
                </div>
                
                {/* Our Goal */}
                <div className="flex-1 rounded-2xl bg-[#e6f0ff] border border-[#93c5fd] p-8 max-w-xl mx-auto">
                  <div className="font-bold mb-2 text-lg flex items-center gap-2" style={{ fontFamily: 'Courier New, monospace' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                    Our goal
                  </div>
                  <div className="text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Given this scaffold code, devise a new way to move the square to get the user to complete 10 squares in as little time as possible.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>

         {/* Why it matters Section */}
         <RevealOnScroll>
           <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-12 flex flex-col items-center bg-[#f6f6f6]" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
             <h2 className="text-3xl md:text-4xl font-normal mb-8 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
               Why it matters
            </h2>
             
             <div className="w-full max-w-6xl">
               <p className="text-[1.08rem] text-[#222] leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                 This project was more than just a design challenge—it was an opportunity to rethink how people interact with unintuitive systems and transform frustration into a smoother, even enjoyable, experience. By approaching the task through a human-centered lens, I learned to balance usability with engagement, creating a more intuitive and gamified flow that encouraged exploration rather than resistance.
               </p>
               
               {/* Placeholder Image */}
               <div className="w-full mb-6">
                 <img
                   src="/angie-portfolio/talk.png"
                   alt="Why it matters visualization"
                   className="w-full rounded-lg cursor-pointer transition-opacity"
                   onClick={() => openModal("/angie-portfolio/talk.png", "Why it matters visualization")}
                 />
               </div>
               
               <p className="text-[1.08rem] text-[#222] leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                 Beyond design, it reinforced the importance of rigorous research practices. I developed methods to reduce bias, focus on observable behaviors, and extract meaningful insights from data. This experience deepened my ability to derive metrics that go beyond surface impressions and truly capture what makes an interaction successful.
               </p>
               
               <p className="text-[1.08rem] text-[#222] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                 Ultimately, this project highlighted how <strong>iteration, empathy, and data-driven decision making</strong> can turn a confusing experience into one that feels natural, motivating, and rewarding for users.
               </p>
             </div>
           </section>
         </RevealOnScroll>

         {/* Brainstorming Section */}
         <RevealOnScroll>
           <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-12 flex flex-col items-center bg-[#f6f6f6]" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
             <h2 className="text-3xl md:text-4xl font-normal mb-8 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
               Brainstorming
             </h2>
             
             {/* Centered Quote */}
             <div className="flex justify-center mb-12">
               <div className="flex items-center rounded-lg p-6">
                 <div className="w-1 bg-blue-400 mr-4 h-16"></div>
                 <p className="text-xl font-normal italic" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
                   "Get every thought out in the open so we could build on them and iterate..."
                 </p>
               </div>
             </div>
             
             <div className="w-full max-w-6xl">
               {/* Row: Text left, image right */}
               <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full items-start mb-10">
                 <div className="md:w-2/3 w-full flex items-center">
                   <p className="text-base md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                     After hashing out everything on a white board we came up with many many ideas! some wacky, some...interesting, but the goal was to get every thought out in the open so we could build on them and iterate quickly. From this extensive list, we ultimately narrowed it down to the <strong>3 strongest concepts to refine and develop further.</strong>
                </p>
              </div>
                 <div className="md:w-1/3 w-full">
                <img
                  src="/angie-portfolio/hehe.png"
                     alt="Brainstorming whiteboard session"
                     className="w-full rounded-lg cursor-pointer transition-opacity"
                     onClick={() => openModal("/angie-portfolio/hehe.png", "Brainstorming whiteboard session")}
                   />
                 </div>
               </div>
               
               {/* Full width dropdown below */}
               <div className="w-full">
                 <RoleDropdown
                   color="#d6f0fa"
                   icon={<span>★</span>}
                   title="View idea list here!"
                   defaultOpen={false}
                 >
                   <div className="text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                     <ol className="list-decimal pl-6 space-y-2">
                       <li>For general movements: On mouse move → Have rectangle centered on mouse to move around with cursor</li>
                       <li>Use one finger (no multitouch) for mouse drag (double click and hold)</li>
                       <li>Angle your rotation to the next random rotation</li>
                       <li>When parameters are correct: participant can perform the gesture of moving the mouse over a certain specified region to submit</li>
                       <li>Have the square be in constant rotation so user does not have to manually rotate → perform a certain gesture or click in a certain area to stop rotation to match with outline</li>
                       <li>Numerically order the outlines that must be matched so user has an idea of the sequence</li>
                       <li>Can anything be in constant motion or certain things must remain stationary?</li>
                       <li>Use the sides and points of the red square outlines as reference areas to move the logo square in a certain direction (EX: label the sides of the red outline as "left", "right" and using the points on the angles as CW and CCW). When the cursor hovers over designated areas of the red outline, the logo will move in the specified direction.</li>
                       <li>click and drag box to move, click outside box to rotate</li>
                       <li>click and hold to increase size</li>
                       <li>click outside box (1 click) to teleport box</li>
                       <li>click and drag a line from the center of the square (a line appears) and a whenever the user drags the line to the box teleports to that location</li>
                       <li>add overlaying grid to help visually?</li>
                       <li>the box turns a different color when it is accurate enough to count as a hit</li>
                       <li>draw a roughly 90 degree angle somewhere on the screen, the box teleports to that approximate orientation and location (The line drawn disappears as soon as the box is teleported/finger is lifted).</li>
                       <li>click enter key to "submit" ctrl z to undo a move</li>
                       <li>If the logo square touches any of the corners of the target square then the logo square automatically adjusts itself to the entire square, so the goal for the participant is to just make one corner of the target square touch.</li>
                       <li>To ensure users can track adjustments accurately, providing visual aids like semi-transparent guides or indicators that highlight current rotation, size, and position relative to the target square. Like what is the direction on a 180 degree scale that they should tilt towards</li>
                       <li>Dragging on the keypad like the way you switch between multiple tabs on mac, the two fingers dragging in the 4 different directions and the basic zooming in and zooming out reaction on the keypad.</li>
                     </ol>
                   </div>
                 </RoleDropdown>
               </div>
             </div>
           </section>
         </RevealOnScroll>

         {/* Prototypes and testing Section */}
         <RevealOnScroll>
           <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-12 flex flex-col items-center bg-[#f6f6f6]" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
             <h2 className="text-3xl md:text-4xl font-normal mb-8 text-left" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
               Prototypes and testing
             </h2>
             
             <div className="w-full max-w-6xl">
              <p className="text-base md:text-lg mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                The next step was to try or hand at some of these ideas and code them out! We used processing for its quick extensive library for building interactive elements quickly. We gave ourselves 4 days to code everything out and do some preliminary testing with ourselves to develop a baseline. Now lets get into the prototypes!
              </p>
              
              {/* Prototype 1: 90 degree Line */}
              <RevealOnScroll>
                <div className="mb-12">
                  <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
                    <div className="md:w-1/2 w-full">
                       <img
                         src="/angie-portfolio/dia.gif"
                         alt="90 degree Line prototype"
                         className="w-full cursor-pointer hover:opacity-90 transition-opacity"
                         onClick={() => openModal("/angie-portfolio/dia.gif", "90 degree Line prototype")}
                       />
                    </div>
                    <div className="md:w-1/2 w-full">
                      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>90 degree Line</h3>
                      <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <li>Draw 90 degree line to reference where the square should teleport too.</li>
                        <li>Starting point for drawing a line to teleport a square.</li>
                        <li>Prototype was buggy and inaccurate, but fast and intuitive, which inspired future iterations.</li>
                      </ul>
                     </div>
                   </div>
                 </div>
              </RevealOnScroll>

              {/* Prototype 2: cursor + continuous rotation */}
              <RevealOnScroll>
                <div className="mb-12">
                  <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
                    <div className="md:w-1/2 w-full">
                       <img
                         src="/angie-portfolio/cont.gif"
                         alt="cursor + continuous rotation prototype"
                         className="w-full cursor-pointer hover:opacity-90 transition-opacity"
                         onClick={() => openModal("/angie-portfolio/cont.gif", "cursor + continuous rotation prototype")}
                       />
                    </div>
                    <div className="md:w-1/2 w-full">
                      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>cursor + continuous rotation</h3>
                      <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <li>The idea was to have the logo square be centered at the cursor for general movements</li>
                        <li>Have logo square be in continuous rotation so user does not have to manually rotate</li>
                        <li>Use RIGHT and LEFT sides of trackpad to INC and DEC for resize feature</li>
                        <li>Idea quickly scrapped due to trackpad boundaries of right vs left being not clear leading to unwanted resizing</li>
                      </ul>
                     </div>
                   </div>
                 </div>
              </RevealOnScroll>

              {/* Prototype 3: Center Line */}
              <RevealOnScroll>
                <div className="mb-12">
                  <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
                    <div className="md:w-1/2 w-full">
                       <img
                         src="/angie-portfolio/line.gif"
                         alt="Center Line prototype"
                         className="w-full cursor-pointer hover:opacity-90 transition-opacity"
                         onClick={() => openModal("/angie-portfolio/line.gif", "Center Line prototype")}
                       />
                    </div>
                    <div className="md:w-1/2 w-full">
                      <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Center Line</h3>
                      <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <li>Based of our initial brainstorming, we thought drawing a line through the centre of the target square would help position the logo square faster and more appropriately.</li>
                        <li>The idea was based off on the idea that user only had to draw one line so this would be faster.</li>
                      </ul>
                     </div>
                   </div>
                   <div className="mt-8">
                     <RoleDropdown
                       color="#d6f0fa"
                       icon={<span />}
                       title="Testing results"
                       defaultOpen={false}
                     >
                       <div className="text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                         <img
                           src="/angie-portfolio/results1.png"
                           alt="Center Line Testing Results"
                           className="w-full cursor-pointer hover:opacity-90 transition-opacity mb-4"
                           onClick={() => openModal("/angie-portfolio/results1.png", "Center Line Testing Results")}
                         />
                       </div>
                     </RoleDropdown>
                   </div>
                 </div>
              </RevealOnScroll>
            </div>
          </section>
         </RevealOnScroll>

         {/* Overall Results Section */}
         <RevealOnScroll>
           <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 pt-6 pb-12 flex flex-col items-center bg-[#f6f6f6]" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
             <div className="w-full max-w-6xl">
               <div className="bg-white border border-gray-300 rounded-lg p-8 shadow-sm">
                 <h2 className="text-2xl font-bold text-center mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Overall Results</h2>
                 
                 <ul className="list-disc pl-6 space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                   <li><strong>Data storage</strong>: Data stored in a spreadsheet, using numbers instead of person names for anonymity</li>
                   <li><strong>Protocol</strong>: We tried implementing the think aloud protocol</li>
                   <li><strong>Prototypes Tested</strong>:
                     <ul className="list-disc pl-6 mt-2 space-y-2">
                       <li><strong>Center line</strong>:
                         <ul className="list-disc pl-6 mt-1 space-y-1">
                           <li>Relatively fast but prone to errors with time penalties</li>
                           <li>Every participant had a minimum of 8 errors which meant massive penalties)</li>
                           <li>The average time including penalties was 9.4685 including penalties.</li>
                         </ul>
                       </li>
                       <li><strong>90 degree angle</strong>:
                         <ul className="list-disc pl-6 mt-1 space-y-1">
                           <li>Slower compared center line given two lines must be drawn</li>
                           <li>General faster than scaffold code although it had a buggy implementation</li>
                         </ul>
                       </li>
                       <li><strong>Cursor + rotation</strong>:
                         <ul className="list-disc pl-6 mt-1 space-y-1">
                           <li>Scrapped due to unclear boundaries of trackpad left and right which increases difficulty for user</li>
                           <li>Lower speed compared to other prototypes</li>
                         </ul>
                       </li>
                     </ul>
                   </li>
                 </ul>
               </div>
             </div>
           </section>
         </RevealOnScroll>

         {/* Round 2 Banner - Full Width */}
         <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 flex items-center justify-center" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw', background: 'linear-gradient(to right, #ffb3ba, #bae1ff)'}}>
           <div className="flex items-center gap-4">
             <span className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
               Round 2! ding ding ding
             </span>
             <span className="text-3xl md:text-4xl">🔔</span>
           </div>
         </div>

         {/* Round 2 Introduction */}
         <RevealOnScroll>
           <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-12 flex flex-col items-center bg-[#f6f6f6]" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
             <div className="w-full max-w-6xl">
               <p className="text-base md:text-lg mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                 After gathering data and results from the first round, the next step was to iterate on the most successful ideas and synthesize insights to create stronger concepts in the second round. This process helped refine what truly resonated with users and eliminate what didn't. By building on evidence rather than assumptions, we were able to move closer to a solution that was both intuitive and impactful.
               </p>
             </div>
           </section>
         </RevealOnScroll>

         {/* Dragging Diagonal line Section */}
         <RevealOnScroll>
           <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-12 flex flex-col items-center bg-[#f6f6f6]" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
             <div className="w-full max-w-6xl">
               <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
                 <div className="md:w-1/2 w-full">
                   <img
                     src="/angie-portfolio/dia2.gif"
                     alt="Dragging Diagonal line prototype"
                     className="w-full cursor-pointer hover:opacity-90 transition-opacity"
                     onClick={() => openModal("/angie-portfolio/dia2.gif", "Dragging Diagonal line prototype")}
                   />
                 </div>
                 <div className="md:w-1/2 w-full">
                   <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Dragging Diagonal line</h3>
                   <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                     <li>Iterated on idea of center line implementation for different types of lines</li>
                     <li>Drag to draw diagonal line to decide size, location and orientation of square</li>
                     <li>Click anywhere to submit</li>
                     <li>Fast but inaccurate if user overshoots</li>
                   </ul>
                 </div>
               </div>
             </div>
           </section>
         </RevealOnScroll>

         {/* Two Dot implementation Section */}
         <RevealOnScroll>
           <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-12 flex flex-col items-center bg-[#f6f6f6]" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
             <div className="w-full max-w-6xl">
               <div className="flex flex-col md:flex-row gap-8 items-start mb-6">
                 <div className="md:w-1/2 w-full">
                   <img
                     src="/angie-portfolio/points.gif"
                     alt="Two Dot implementation prototype"
                     className="w-full cursor-pointer hover:opacity-90 transition-opacity"
                     onClick={() => openModal("/angie-portfolio/points.gif", "Two Dot implementation prototype")}
                   />
                 </div>
                 <div className="md:w-1/2 w-full">
                   <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Two Dot implementation</h3>
                   <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                     <li>New idea:</li>
                     <li>Instead of drawing lines, can create dots that indicate the start and end of the line to reduce time</li>
                     <li>Accurate, but slower than diagonal line implementation</li>
                   </ul>
                 </div>
               </div>
               <div className="mt-8">
                 <RoleDropdown
                   color="#d6f0fa"
                   icon={<span />}
                   title="Testing results"
                   defaultOpen={false}
                 >
                   <div className="text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                     <img
                       src="/angie-portfolio/results2.png"
                       alt="Two Dot Implementation Testing Results"
                       className="w-full cursor-pointer hover:opacity-90 transition-opacity mb-4"
                       onClick={() => openModal("/angie-portfolio/results2.png", "Two Dot Implementation Testing Results")}
                     />
                   </div>
                 </RoleDropdown>
               </div>
             </div>
           </section>
         </RevealOnScroll>

         {/* Round 2 Results Section */}
         <RevealOnScroll>
           <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-12 flex flex-col items-center bg-[#f6f6f6]" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
             <div className="w-full max-w-6xl">
               <div className="bg-blue-100 border border-blue-300 rounded-lg p-8 shadow-sm">
                 <h2 className="text-2xl font-bold text-center mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Overall Results</h2>
                 
                 <ul className="list-disc pl-6 space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                   <li><strong>Data storage</strong>: Data stored in a spreadsheet, using numbers instead of person names for anonymity</li>
                   <li><strong>Protocol</strong>: We tried implementing the think aloud protocol</li>
                   <li><strong>Prototypes Tested</strong>:
                     <ul className="list-disc pl-6 mt-2 space-y-2">
                       <li><strong>Diagonal line</strong>:
                         <ul className="list-disc pl-6 mt-1 space-y-1">
                           <li>Relatively fast but not as accurate depending on where user dragged the line</li>
                         </ul>
                       </li>
                       <li><strong>Two dot implementation</strong>:
                         <ul className="list-disc pl-6 mt-1 space-y-1">
                           <li>Generally more accurate than the diagonal line implementation but slower in terms of speed</li>
                         </ul>
                       </li>
                     </ul>
                   </li>
                 </ul>
              </div>
            </div>
          </section>
        </RevealOnScroll>

         {/* Final Design Section */}
         <RevealOnScroll>
           <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-12 flex flex-col items-center bg-[#f6f6f6]" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
             <div className="w-full max-w-6xl">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
                 Final Design
               </h2>
               
               {/* Quote Block */}
               <div className="flex justify-center mb-8">
                 <blockquote className="relative pl-6 pr-8 py-4 max-w-4xl mx-auto">
                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-400"></div>
                   <p className="text-lg md:text-xl leading-relaxed text-left" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
                     "...built on user testing data and synthesized insights<br />
                      from every stage of the process."
                   </p>
                 </blockquote>
               </div>
               
               <div className="mb-8">
                 <p className="text-base md:text-lg mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                   Clear visual feedback was introduced, where a diagonal line turns green when it counts as a hit and red otherwise. Once the square is accurately positioned within the target outline, it also turns green, reinforcing success. The interaction flow involves dragging to draw a diagonal line; if the square falls within the 'close enough' threshold, it turns green. Releasing the drag generates the logo square, which displays green if it's a hit and red if it's not, with a simple click anywhere to submit.
                 </p>
                 
                 <div className="w-full mb-8">
                   <img
                     src="/angie-portfolio/dia2.gif"
                     alt="Final Design Interactive Prototype"
                     className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                     onClick={() => openModal("/angie-portfolio/dia2.gif", "Final Design Interactive Prototype")}
                   />
                 </div>
               </div>

               <div className="grid md:grid-cols-2 gap-6">
                 {/* Improvements Box */}
                 <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
                   <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Improvements</h3>
                   <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                     <li>Averaged around 3 seconds, a big improvement from 10 seconds</li>
                     <li>Easy to understand and use</li>
                     <li>Clear visual feedback increased user confidence</li>
                     <li>Interaction felt more engaging and less frustrating</li>
                     <li>Users needed fewer attempts to reach the target successfully</li>
                   </ul>
                 </div>

                 {/* Tradeoffs Box */}
                 <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
                   <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>Tradeoffs</h3>
                   <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                     <li>Limited testing let us test many ideas, but less concrete user feedback</li>
                     <li>Prioritizing core functionality meant less cross-device compatibility</li>
                     <li>Focusing on simplicity reduced opportunities for helpful visual aids</li>
                     <li>Fast iteration left little room for accessibility considerations</li>
                     <li>Streamlined design limited onboarding support for new users</li>
                     <li>Short timelines emphasized quick wins over long-term engagement insights</li>
                   </ul>
                 </div>
               </div>
             </div>
           </section>
         </RevealOnScroll>
       </div>
        
        {/* Footer Section */}
        <div className="w-full bg-[#f6f6f6] border-t border-[#e0e0e0] mt-20">
          <div className="w-full max-w-7xl mx-auto px-5 md:px-12 py-12">
            <div className="flex flex-col items-center">
            </div>
          </div>
        </div>
      
      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        imageSrc={modalImage}
        altText={modalAlt}
        onClose={closeModal}
      />
    </div>
  );
};

