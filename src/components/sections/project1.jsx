import { useEffect, useRef, useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import { useNavigate } from 'react-router-dom';
import ImageModal from '../ImageModal';

export const Project1 = () => {
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
      <div className="w-screen relative h-[300px] md:h-[300px] bg-[#f6f6f6] border-b border-[#e0e0e0] flex items-top justify-center" style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
        <img
          ref={headerRef}
          src="/angie-portfolio/nq.png"
          alt="ActiveIQ Header"
          className="w-full h-full object-cover object-top cursor-pointer hover:opacity-90 transition-opacity"
          style={{ maxHeight: '400px', minHeight: '220px', imageRendering: 'auto' }}
          onClick={() => openModal("/angie-portfolio/nq.png", "ActiveIQ Header")}
        />
      </div>
      {/* Navigation Buttons */}

      {/* Main Content - centered, wide, not full-bleed */}
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 mt-10 md:mt-16 mb-[18px]">
        {/* Title and Subtitle */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-2 w-full">
          <div>
            <h1 className="text-5xl font-normal text-[#181c20] mb-6" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em' }}>ActiveIQ</h1>
            <div className="text-[#b0b3b8] font-medium text-lg mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>InnisFree M&A Internship Project | User Interface Design, User Experience, Frontend Development</div>
          </div>
          <div className="text-[#b0b3b8] text-lg font-medium whitespace-nowrap mt-16 md:mt-0" style={{ fontFamily: 'Inter, sans-serif' }}>Summer 2024</div>
        </div>

        {/* Description */}
        <div className="mt-6 text-[1.08rem] text-[#222] leading-relaxed w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
          <p>
            As part of my internship at InnisFree M&A, I was responsible for designing the interface of Active IQ, 
            an internal database that tracks real-time changes in share ownership, integrates traditional proxy solicitation 
            and stockwatch services, and provides critical insights based on the latest SEC filings.
          </p>
        </div>
        
        {/* Roles, Team, Tools, Methods Section - responsive grid, left-aligned */}
        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6  rounded-4xl p-6 bg-transparent w-full text-center items-center justify-center">
          {/* Roles */}
          <div className="text-center">
            <div className="text-[#2563eb] font-bold text-xl mb-2 mt-6 text-left" style={{ fontFamily: 'Courier New, monospace' }}>Roles</div>
            <ul className="list-none text-[#222] mb-4 pl-0 text-left" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
              <li className="mb-3">UX Designer</li>
              <li className="mb-3">Technical Lead</li>
              <li className="mb-3">Visual Lead</li>
              <li className="mb-3">Researcher</li>
            </ul>
          </div>
          {/* Team */}
          <div className="text-center">
            <div className="text-[#2563eb] font-bold text-xl mb-2 text-left" style={{ fontFamily: 'Courier New, monospace' }}>Mentors</div>
            <ul className="list-none text-[#222] mb-4 pl-0 text-left 
            " style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
              <li className="mb-3">Cody Panella</li>
              <li className="mb-3">Meredith Cole</li>
            </ul>
          </div>
          {/* Tools */}
          <div className="text-center">
            <div className="text-[#2563eb] font-bold text-xl mb-2 text-left mt-2" style={{ fontFamily: 'Courier New, monospace' }}>Tools</div>
            <ul className="list-none text-[#222] pl-0 text-left mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
              <li className="mb-3">Figma, React</li>
            </ul>
          </div>
          {/* Methods */}
          <div className="text-center">
            <div className="text-[#2563eb] font-bold text-xl mb-2 text-left mt-2" style={{ fontFamily: 'Courier New, monospace' }}>Methods</div>
            <ul className="list-none text-[#222] pl-0 text-left mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
            <li className="mb-3">Generative Research, Contextual Inquiry</li>
            <li className="mb-3">Wireframing, Prototyping, Front-end Development</li>
            </ul>
          </div>
        </div>

        {/* Background Section */}
        <RevealOnScroll>
          <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-12 flex flex-col items-center bg-[#e6f0ff]" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
            {/* Phase Number */}
            <div className="text-[#2563eb] text-lg md:text-xl font-bold mb-2 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Background
            </div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-normal mb-8 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Project Context
            </h2>
            
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 w-full max-w-6xl">
              <div className="max-w-2xl text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p className="mb-4">
                  InnisFree previously relied on an outsourced database for financial analysis and client advisory services. 
                  However, a shift to a new data provider necessitated the development of an internal system capable of 
                  delivering more accurate, timely, and comprehensive insights. This need paved the way for the creation 
                  of ActiveIQ; a centralized, one-stop solution.
                </p>
                <p className="mb-4">
                  ActiveIQ was designed to track complex changes in share ownership and the underlying factors driving 
                  these shifts. More importantly, it was envisioned as a unified repository to consolidate the company's data. 
                  With legacy information previously scattered across multiple databases, the goal was to centralize all 
                  historical and future proprietary data on ActiveIQ.
                </p>
                <p className="mb-4">
                  The new platform was intended to empower the investor relations team with up-to-date data via a lightweight 
                  infrastructure, while simultaneously providing all other teams with an organized and easily accessible archive 
                  of past information. My role in this project was to design and develop the user interface for ActiveIQ. 
                  I focused on creating a clean, modern, and intuitive interface that not only enhanced usability but also 
                  preserved elements familiar to the investor relations team, thereby minimizing the transition period.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-end">
                <img
                  src="/angie-portfolio/aq1.png"
                  alt="Dashboard Mockup"
                  className="w-full max-w-lg shadow-lg rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/angie-portfolio/aq1.png", "Dashboard Mockup")}
                />
              </div>
            </div>
          </section>
        </RevealOnScroll>
        

        
        {/* Research Section */}
        <RevealOnScroll>
          <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-12 flex flex-col items-center bg-[#f6f6f6] mt-6" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
            {/* Phase Number */}
            <div className="text-[#2563eb] text-lg md:text-xl font-bold mb-2 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Research
            </div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-normal mb-8 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Understanding User Needs
            </h2>

            {/* First Paragraph - Full Width */}
            <div className="mb-10 w-full max-w-6xl">
              <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                To develop an intuitive and useful interface, I tasked myself with understanding the daily 
                responsibilities of an IR analyst, and gaining familiarity with the financial world. Under 
                the guidance of my mentor and Program Director, Cody Panella, I learned the fundamental 
                processes and key resources that IR analysts use, gained insights into how 13F filings to 
                the SEC are leveraged to forecast market trends and safeguard client stock, and was provided 
                a crash course on the stock market, proxy wars, and how our company helps protect and serve clients.
              </p>
            </div>

            {/* Second Row: Two Columns */}
            <div className="flex flex-col md:flex-row mb-10 gap-8 w-full max-w-6xl">
              {/* Left Column: Paragraphs 2 and 3 */}
              <div className="w-full md:w-1/2 text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p className="mb-4">
                  Through my research, I identified two key use cases for ActiveIQ: (1) providing fast, 
                  accessible information to IR analysts and (2) seamlessly transferring all existing data 
                  from legacy databases to the new platform. To ensure a smooth transition, I designed an 
                  intuitive user experience that maintained familiarity while improving efficiency.
                </p>
                <p className="mb-4">
                  I carefully selected a clean, modern color palette aligned with InnisFree M&A's branding 
                  to create visual consistency. Additionally, I optimized navigation by replacing the outdated 
                  tree format with a card-based layout, allowing for quick selection and streamlined access 
                  to critical data. My focus was on enhancing clarity and readability, ensuring that IR analysts 
                  could interact with data in a format they were already accustomed to while benefiting from 
                  a more structured and user-friendly interface.
                </p>
              </div>
              {/* Right Column: Image */}
              <div className="w-full md:w-1/2 flex justify-end">
                <img
                  src="/angie-portfolio/aq2.png"
                  alt="Dashboard Mockup 1"
                  className="w-full shadow-lg rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => openModal("/angie-portfolio/aq2.png", "Dashboard Mockup 1")}
                />
              </div>
            </div>

            {/* Fourth Paragraph - Full Width */}
            <div className="mb-10 w-full max-w-6xl">
              <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                Given the project's priorities, I concentrated on designing institution profiles, the homepage, 
                and security/fund pages—key areas that analysts relied on most. I structured these pages to mirror 
                the essential layout of the previous database while refining the interface for improved usability. 
                For the homepage, I took a user-centered approach, considering the essential interactions and 
                dashboard elements needed to enhance workflow efficiency.
              </p>
            </div>
          </section>
        </RevealOnScroll>

        {/* Final Designs Section */}
        <RevealOnScroll>
          <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-12 flex flex-col items-center bg-[#e6f0ff] mt-6" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
            {/* Phase Number */}
            <div className="text-[#2563eb] text-lg md:text-xl font-bold mb-2 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Final Designs
            </div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-normal mb-8 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Iterative Design Process
            </h2>
            
            {/* Description */}
            <div className="mb-10 w-full max-w-6xl">
              <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                I created the following designs in Figma after several rounds of iteration. Taking feedback from my mentor, 
                I shifted information around based on the importance of the information. I also added an override feature 
                that allowed anyone to edit the information pulled from the database. This was requested, as the pulled 
                information could differ from the companies' own definitions. In addition, a person could fix any errors.
              </p>
            </div>
            
            {/* Figma Embed */}
            <div className="w-full max-w-6xl">
              <iframe 
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} 
                width="100%" 
                height="600" 
                src="https://embed.figma.com/design/7DZ0DR1L6VVjGqDMAlsKPs/ActiveIQ?embed-host=share" 
                allowFullScreen
                title="ActiveIQ Figma Design"
                className="rounded-lg"
              ></iframe>
            </div>
          </section>
        </RevealOnScroll>

        {/* Development Section */}
        <RevealOnScroll>
          <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-12 flex flex-col items-center bg-[#f6f6f6] mt-6" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
            {/* Phase Number */}
            <div className="text-[#2563eb] text-lg md:text-xl font-bold mb-2 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Development
            </div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-normal mb-8 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              From Prototype to Production
            </h2>
            
            <div className="w-full max-w-6xl">
              <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                During the development phase, I iterated from a lo-fi prototype using paper and sharpies and various 
                subjects to gauge the intuition people had for the interface. Through that feedback I cycled through 
                3 iterations before sticking with a particular layout. Then, all future iterations were wireframed 
                in Figma for feedback from mentors, the development team, and usability testing. I again used Figma 
                to create simple interactions, such as moving between pages, interacting with widgets, and scrolling 
                through lists. Finally, I created a basic mockup in React which I hosted on GitHub Pages.
              </p>
            </div>
          </section>
        </RevealOnScroll>

        {/* Reflection Section */}
        <RevealOnScroll>
          <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-12 flex flex-col items-center bg-[#e6f0ff] mt-6" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
            {/* Phase Number */}
            <div className="text-[#2563eb] text-lg md:text-xl font-bold mb-2 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Reflection
            </div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-normal mb-8 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Professional Growth
            </h2>
            
            <div className="w-full max-w-6xl">
              <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                Reflecting on the project, this was my first exposure to UX/UI development in a professional setting. 
                My past experiences were based on school projects or freelance work from building websites for customers. 
                I learned how to apply my skills in industry, and present my work to my mentor, development team, and 
                the actual users of my design. In addition, I gained a thorough understanding of the financial landscape. 
                Overall, I am happy with what I was able to accomplish in a short timeframe, along with the additional 
                software projects I made. I'm glad I was able to make my mark at this company, and know that their 
                proprietary database design can be at least slightly credited to me :)
              </p>
            </div>
          </section>
        </RevealOnScroll>
        
        {/* Footer Section */}
        <div className="w-full bg-[#f6f6f6] border-t border-[#e0e0e0] mt-20">
          <div className="w-full max-w-7xl mx-auto px-5 md:px-12 py-12">
            <div className="flex flex-col items-center">
            </div>
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
