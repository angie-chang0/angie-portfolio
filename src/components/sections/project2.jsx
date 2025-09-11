import React, { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { RevealOnScroll } from '../RevealOnScroll';

// Reusable dropdown for roles
function RoleDropdown({ color, icon, title, children, defaultOpen }) {
  const [open, setOpen] = React.useState(!!defaultOpen);
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

export const Project2 = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();

  // Enhanced scroll to top when component mounts
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

  // Parallax effect for header image
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollY = window.scrollY;
        headerRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black flex flex-col items-center font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Flat Header - full-bleed, edge-to-edge, positioned at very top */}
      <div className="w-screen relative h-[300px] md:h-[400px] bg-[#f6f6f6] border-b border-[#e0e0e0] flex items-end justify-center" style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}>
        <img
          ref={headerRef}
          src="/angie-portfolio/recipiehub.png"
          alt="RecipeHub Header"
          className="w-full h-full object-cover object-top"
          style={{ maxHeight: '400px', minHeight: '220px', imageRendering: 'auto' }}
        />
      </div>

      {/* Main Content - centered, wide, not full-bleed */}
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 mt-10 md:mt-16 mb-[18px]">
        {/* Title and Subtitle */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-2 w-full">
          <div>
            <h1 className="text-5xl font-normal text-[#181c20] mb-6" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em' }}>RecipeHub</h1>
            <div className="text-[#b0b3b8] font-medium text-lg mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Web Application | Full-Stack Developer & UX Designer</div>
          </div>
          <div className="text-[#b0b3b8] text-lg font-medium whitespace-nowrap mt-16 md:mt-0" style={{ fontFamily: 'Inter, sans-serif' }}>January 2024 - March 2024</div>
        </div>

        {/* Description */}
        <div className="mt-6 text-[1.08rem] text-[#222] leading-relaxed w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
          <p>
            RecipeHub is a comprehensive web platform designed to revolutionize how people discover, share, and organize recipes. As the UX/UI designer and co-developer, I created a full-stack application that combines intuitive user experience with powerful recipe management features within a team of 4. This project was a part of a 3-month semester final.  
          </p>
          <p className="mt-4">
            The platform features user authentication, recipe creation and sharing, advanced search and filtering capabilities, 
            and a responsive design that works seamlessly across all devices. Built with react leveraging 3rd party AI APIs, RecipeHub makes it easy to store and keep track of recipies with OCR scraping capabilities.
          </p>
        </div>

        {/* Roles, Team, Tools, Methods Section - responsive grid, left-aligned */}
        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 rounded-4xl p-6 bg-transparent w-full text-center items-center justify-center">
          {/* Roles */}
          <div className="text-center">
            <div className="text-[#16a34a] font-bold text-xl mb-2 mt-6 text-left" style={{ fontFamily: 'Courier New, monospace' }}>Roles</div>
            <ul className="list-none text-[#222] mb-4 pl-0 text-left" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
              <li className="mb-3">UX/UI Designer</li>
              <li className="mb-3">Developer</li>
              <li className="mb-3">Product Researcher</li>
            </ul>
          </div>
          {/* Team */}
          <div className="text-center">
            <div className="text-[#16a34a] font-bold text-xl mb-2 text-left" style={{ fontFamily: 'Courier New, monospace' }}>Team</div>
            <ul className="list-none text-[#222] mb-4 pl-0 text-left" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
              <li className="mb-3">Alan, Raymond, and Andrew (last names withold for privacy)</li>
            </ul>
          </div>
          {/* Tools */}
          <div className="text-center">
            <div className="text-[#16a34a] font-bold text-xl mb-2 text-left mt-2" style={{ fontFamily: 'Courier New, monospace' }}>Tools</div>
            <ul className="list-none text-[#222] pl-0 text-left mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
              <li className="mb-3">React, Node.js, Express, MongoDB</li>
              <li className="mb-3">Figma, HTML, CSS, JavaScript</li>
              <li className="mb-3">Git, GitHub, Vercel</li>
            </ul>
          </div>
          {/* Methods */}
          <div className="text-center">
            <div className="text-[#16a34a] font-bold text-xl mb-2 text-left mt-2" style={{ fontFamily: 'Courier New, monospace' }}>Methods</div>
            <ul className="list-none text-[#222] pl-0 text-left mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
              <li className="mb-3">User Research, Wireframing, Prototyping</li>
              <li className="mb-3">Agile Development, Testing, Deployment</li>
            </ul>
          </div>
        </div>

        {/* Role Dropdowns Section - left-aligned */}
        {/* <RevealOnScroll>
          <div className="text-center text-lg md:text-xl mb-6 mt-2" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
            Details about my exact responsibilities within each role
          </div>
          <div className="mt-10 flex flex-col gap-4 w-full text-left">
            <RoleDropdown
              color="#DFF4FD"
              icon={<span />}
              title="Full-Stack Developer"
              defaultOpen={true}
            >
              <ul className="list-disc pl-6">
                <li className="mb-3">Developed a complete MERN stack application with user authentication, recipe CRUD operations, and advanced search functionality.</li>
                <li className="mb-3">Implemented responsive design principles ensuring optimal user experience across desktop, tablet, and mobile devices.</li>
                <li className="mb-3">Integrated MongoDB database with proper data modeling and RESTful API endpoints for seamless data management.</li>
                <li className="mb-3">Deployed the application to production using Heroku with proper environment configuration and database setup.</li>
              </ul>
            </RoleDropdown>
            <RoleDropdown
              color="#E4FDE5"
              icon={<span />}
              title="UX/UI Designer"
            >
              <ul className="list-disc pl-6">
                <li className="mb-3">Conducted user research to understand recipe sharing behaviors and pain points in existing platforms.</li>
                <li className="mb-3">Created wireframes and high-fidelity prototypes in Figma focusing on intuitive navigation and clean visual hierarchy.</li>
                <li className="mb-3">Designed a user-friendly interface that simplifies recipe creation, search, and sharing processes.</li>
                <li className="mb-3">Implemented accessibility best practices ensuring the platform is usable by people with diverse abilities.</li>
              </ul>
            </RoleDropdown>
            <RoleDropdown
              color="#FFE5EE"
              icon={<span />}
              title="Project Manager"
            >
              <ul className="list-disc pl-6">
                <li className="mb-3">Planned and executed the complete project lifecycle from concept to deployment within a 3-month timeline.</li>
                <li className="mb-3">Managed feature prioritization and scope to ensure delivery of core functionality while maintaining quality.</li>
                <li className="mb-3">Conducted thorough testing and quality assurance to ensure a bug-free user experience.</li>
                <li className="mb-3">Created comprehensive documentation for future maintenance and potential feature additions.</li>
              </ul>
            </RoleDropdown>
          </div>
        </RevealOnScroll> */}

        {/* Team Final Presentation Section */}
        <RevealOnScroll>
          <div className="mt-20 text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-6 text-[#181c20]" style={{ fontFamily: 'ui-monospace, SFMono-Regular`,Menlo, Monsco, Coanola-, Couerer New, monospacef', letterSpacing: '-0.03em' }}>
              Team Final Presentation
            </h2>
            <div className="w-full max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/15Q4io8xEto"
                  title="RecipeHub Team Final Presentation"
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="mt-4 text-[#b0b3b8] text-lg mb-40" style={{ fontFamily: 'Inter, sans-serif' }}>
                Watch our final presentation showcasing RecipeHub's features and development process
              </p>
            </div>
          </div>
        </RevealOnScroll>
        
        {/* Footer Section */}
        <div className="w-full bg-[#f6f6f6] border-t border-[#e0e0e0] mt-20">
          <div className="w-full max-w-7xl mx-auto px-5 md:px-12 py-12">
            <div className="flex flex-col items-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
