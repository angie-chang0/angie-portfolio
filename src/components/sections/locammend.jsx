import { useEffect, useRef, useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import ClickableGallery from '../ClickableGallery';
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

export const Locammend = () => {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const [dropdownValue, setDropdownValue] = useState('contacts');
  
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
  
  // Scrollable images state - 4 separate sections
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);
  const [scrollPosition3, setScrollPosition3] = useState(0);
  const [scrollPosition4, setScrollPosition4] = useState(0);
  const [autoScrollSpeed] = useState(2); // pixels per frame
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const animationRef = useRef(null);
  // Refs for measuring image widths
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  const imgRef4 = useRef(null);
  const [imgWidth1, setImgWidth1] = useState(0);
  const [imgWidth2, setImgWidth2] = useState(0);
  const [imgWidth3, setImgWidth3] = useState(0);
  const [imgWidth4, setImgWidth4] = useState(0);

  useEffect(() => {
    // Measure image widths after mount
    if (imgRef1.current) setImgWidth1(imgRef1.current.offsetWidth);
    if (imgRef2.current) setImgWidth2(imgRef2.current.offsetWidth);
    if (imgRef3.current) setImgWidth3(imgRef3.current.offsetWidth);
    if (imgRef4.current) setImgWidth4(imgRef4.current.offsetWidth);
  }, []);

  useEffect(() => {
    // Ensure scroll happens after all painting/layout is complete
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

  // Auto-scroll animation for all 4 sections (pure auto-scroll, no drag)
  useEffect(() => {
    const animate = () => {
      if (isAutoScrolling) {
        setScrollPosition1(prev => {
          const newPosition = prev - autoScrollSpeed;
          if (Math.abs(newPosition) >= imgWidth1) return 0;
          return newPosition;
        });
        setScrollPosition2(prev => {
          const newPosition = prev - autoScrollSpeed;
          if (Math.abs(newPosition) >= imgWidth2) return 0;
          return newPosition;
        });
        setScrollPosition3(prev => {
          const newPosition = prev - autoScrollSpeed;
          if (Math.abs(newPosition) >= imgWidth3) return 0;
          return newPosition;
        });
        setScrollPosition4(prev => {
          const newPosition = prev - autoScrollSpeed;
          if (Math.abs(newPosition) >= imgWidth4) return 0;
          return newPosition;
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isAutoScrolling, autoScrollSpeed, imgWidth1, imgWidth2, imgWidth3, imgWidth4]);

  // Parallax effect for header image (keep subtle, but not overlapping)
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
          src="/angie-portfolio/locaheader.png"
          alt="Locammend Header"
          className="w-full h-full object-cover object-top cursor-pointer hover:opacity-90 transition-opacity"
          style={{ maxHeight: '400px', minHeight: '220px', imageRendering: 'auto' }}
          onClick={() => openModal("/angie-portfolio/locaheader.png", "Locammend Header")}
        />
      </div>


      {/* Main Content - centered, wide, not full-bleed */}
      <div className="w-full max-w-7xl mx-auto px-5 md:px-12 mt-10 md:mt-16 mb-[18px]">
        {/* Title and Subtitle */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-2 w-full">
          <div>
            <h1 className="text-5xl font-normal text-[#181c20] mb-6" style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em' }}>Locammend</h1>
            <div className="text-[#b0b3b8] font-medium text-lg mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Startup | Founding Engineer, Designer, and Product Developer</div>
          </div>
          <div className="text-[#b0b3b8] text-lg font-medium whitespace-nowrap mt-16 md:mt-0" style={{ fontFamily: 'Inter, sans-serif' }}>May 2025 - Present</div>
        </div>
        {/* Removed divider bar */}

        {/* Description */}
        <div className="mt-6 text-[1.08rem] text-[#222] leading-relaxed w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
          <p>
            At Locammend, a trust-powered mobile app that recommends services through users’ local social circles, I played a critical role as a Founding Product Developer, Designer, and Engineer. I was instrumental in shaping the company from early-stage concept through MVP development and into our Go-To-Market phase.
          </p>
          <p className="mt-4 ">
            In our small 7 person team, I wore multiple hats. I was in charge of product vision and leading our teams, but I was also hands on in our UX/UI, developer, marketing, and launch roles. I hold this startup project close to my heart, and I am so glad I was able to have such a large contribtion to this project. At this point, we have finished the MVP design, and developing a go-to-market plan. Currently, we are securing funds and looking to join accelerator programs!
          </p>
        </div>

        {/* Roles, Team, Tools, Methods Section - responsive grid, left-aligned */}
        <div className="mt-15 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6  rounded-4xl p-6 bg-transparent w-full text-center items-center justify-center">
          {/* Roles */}
          <div className="text-center">
            <div className="text-[#E5791B] font-bold text-xl mb-2 mt-6 text-left" style={{ fontFamily: 'Courier New, monospace' }}>Roles</div>
            <ul className="list-none text-[#222] mb-4 pl-0 text-left" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
              <li className="mb-3">Product Developer/Innovator/Manager</li>
              <li className="mb-3">UX/UI Designer</li>
              <li className="mb-3">Front-end engineer</li>
            </ul>
          </div>
          {/* Team */}
          <div className="text-center">
            <div className="text-[#E5791B] font-bold text-xl mb-2 text-left" style={{ fontFamily: 'Courier New, monospace' }}>Team</div>
            <ul className="list-none text-[#222] mb-4 pl-0 text-left 
            " style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
              <li className="mb-3">Catherine (Mengru) Li, Keira Leal, Blair Han, Yuan Shenjian</li>

            </ul>
          </div>
          {/* Tools */}
          <div className="text-center">
            <div className="text-[#E5791B] font-bold text-xl mb-2 text-left mt-2" style={{ fontFamily: 'Courier New, monospace' }}>Tools</div>
            <ul className="list-none text-[#222] pl-0 text-left mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
              <li className="mb-3">Figma, Cursor, Firebase, React Native, Expo</li>
              <li className="mb-3">Test Flight, AWS, OpenAI API, SwaggerUI</li>
              <li className="mb-3">Slack, Microsoft Office, Python, JS, Swift</li>
            </ul>
          </div>
          {/* Methods */}
          <div className="text-center">
            <div className="text-[#E5791B] font-bold text-xl mb-2 text-left mt-2" style={{ fontFamily: 'Courier New, monospace' }}>Methods</div>
            <ul className="list-none text-[#222] pl-0 text-left mb-6" style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem' }}>
            <li className="mb-3"> Product Development, User Research, Development</li>
            <li className="mb-3">  Contextual Inquiry, Wireframing, Prototyping</li>
            </ul>
          </div>
        </div>

        {/* Role Dropdowns Section - left-aligned */}
        <RevealOnScroll>
        <div className="text-center text-lg md:text-xl mb-6 mt-6" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Details about my exact responsibilities within each role
            </div>
          <div className="mt-10 flex flex-col gap-4 w-full text-left">
            <RoleDropdown
              color="#DFF4FD"
              icon={<span />}
              title="Product Dev/Innovator/Manager"
              defaultOpen={true}
            >
              <ul className="list-disc pl-6">
                <li className="mb-3">Spearheaded cross-functional team alignment by leading weekly planning sessions to define sprint goals and assign feature development using t-shirt sizing for workload estimation. Spread out tasks so team worked in parallel, to optimize time and performance.</li>
                <li className="mb-3">Facilitated daily stand-ups to ensure progress visibility, unblock engineering team, and maintain tight coordination between development and design. Leveraged computer science and design skill to contribute to hands on prototyping</li>
                <li className="mb-3">Managed and continuously refined the product roadmap to align feature prioritization with MVP delivery and user value.</li>
              </ul>
            </RoleDropdown>
            <RoleDropdown
              color="#E4FDE5"
              icon={<span />}
              title="UX/UI Designer"
            >
              <ul className="list-disc pl-6">
                <li className="mb-3">Designed 35+ high-fidelity wireframes and user flows in Figma, translating the complete product vision into a streamlined MVP focused on clarity, intuitive navigation, and quick development cycles.</li>
                <li className="mb-3">Led usability testing with individual users and small business participants to assess startup demand and identify UX friction points.</li>
                <li className="mb-3">Conducted qualitative user research via surveys and interviews, synthesizing findings into actionable design improvements.</li>
                <li className="mb-3">Iterated through 3 MVP versions based on testing feedback, achieving a user-centered, minimal, and testable design that laid the foundation for scalable enhancements post-launch</li>
              </ul>
            </RoleDropdown>
            <RoleDropdown
              color="#FFE5EE"
              icon={<span />}
              title="Developer"
            >
              <ul className="list-disc pl-6">
                <li className="mb-3">Set up and maintained the team’s GitHub repository, including making PR conventions and code quality guidelines for scalable, modular development and continuous integration.</li>
                <li className="mb-3">Actively contributed to frontend development using React Native, building reusable components closely aligned with Figma specs (over 30000 lines of code!).</li>
                <li className="mb-3">Guided backend integration efforts, collaborating across teams to ensure API usage (used Swagger UI to document enpoints, schema, and endpoint usage for frontend dev) and performance alignment.</li>
                <li className="mb-3">Conducted code reviews during daily engineering syncs, enforcing best practices and catching regressions early.</li>
                <li className="mb-3">Led deployment to TestFlight using Expo’s EAS CLI, creating a stable production build for beta users, investors, and accelerator demos.</li>
              </ul>
            </RoleDropdown>
          </div>
        </RevealOnScroll>
        {/* RevealOnScroll: Endstate Design Section */}
        {/* Insert header.png above Phase 1 */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex justify-center items-center mt-10" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
          <img 
            src="/angie-portfolio/header.png" 
            alt="Header" 
            className="w-full object-cover cursor-pointer hover:opacity-90 transition-opacity" 
            style={{ maxHeight: '400px' }} 
            onClick={() => openModal("/angie-portfolio/header.png", "Header")}
          />
        </div>
        <RevealOnScroll>
          <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-12 flex flex-col items-center bg-[#e8ccb0]" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
            {/* Phase Number */}
            <div className="text-[#E5791B] text-lg md:text-xl font-bold mb-2 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Phase 1
            </div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-normal mb-2 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Examine Current Endstate Design
            </h2>
            {/* Subheading */}
            <p className="text-lg md:text-xl text-center mb-8 mt-4 max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              The current design was a full end-to-end flow, including business side and consumer side profiles, fully fleshed features, and complicated UI.
            </p>
            {/* Phones Image and Labels */}
            <div className="w-full flex flex-col items-center mb-8">
              <img 
                src="/angie-portfolio/phones.png" 
                alt="Locammend Endstate Phones" 
                className="w-full max-w-7xl mx-auto cursor-pointer hover:opacity-90 transition-opacity" 
                style={{maxWidth: '1200px'}} 
                onClick={() => openModal("/angie-portfolio/phones.png", "Locammend Endstate Phones")}
              />
              <div className="grid grid-cols-5 gap-0 w-full max-w-[1270px] mt-2">
                <span className="text-base md:text-lg font-medium text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>Home</span>
                <span className="text-base md:text-lg font-medium text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>Find</span>
                <span className="text-base md:text-lg font-medium text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>Upload</span>
                <span className="text-base md:text-lg font-medium text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>Profile</span>
                <span className="text-base md:text-lg font-medium text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>Messaging</span>
              </div>
            </div>
            {/* Problem & Goal Boxes - tan, longer, no background */}
            <div className="flex flex-col md:flex-row gap-4 w-full max-w-7xl mt-12">
              <div className="flex-1 rounded-2xl bg-[#f6e6d6] border border-[#d1c2b0] p-8 max-w-xl mx-auto">
                <div className="font-bold mb-2 text-lg" style={{ fontFamily: 'Courier New, monospace' }}>Problem</div>
                <div className="text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                  The initial design was too complex to implement within our two-month timeline, which was critical for meeting the deadline of an upcoming investor accelerator program. To stay on track, we needed to deliver a functional Minimum Viable Product (MVP) within that timeframe.
                </div>
              </div>
              <div className="flex-1 rounded-2xl bg-[#f6e6d6] border border-[#d1c2b0] p-8 max-w-xl mx-auto">
                <div className="font-bold mb-2 text-lg" style={{ fontFamily: 'Courier New, monospace' }}>Goal</div>
                <div className="text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Simplify current flow into the simplest version to implement an MVP and enough for users to get excited! This would include redesigning current UX interactions, simplifying UI, and leaving exactly enough so it didn’t feel sparse, and rather left users wanting more!
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>
        {/* Exploratory Research Section */}
        <RevealOnScroll>
          <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-19 pt-19 pb-8 flex flex-col items-center bg-[#f6f6f6] mt-6" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-normal mb-4 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Exploratory Research
            </h2>
            {/* Image */}
            <div className="w-full max-w-7xl mb-6">
              <img
                src="/angie-portfolio/users.png"
                alt="Exploratory research users"
                className="w-full rounded-lg"
              />
            </div>
            {/* Paragraph */}
            <div className="w-full max-w-5xl">
              <p className="text-base md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                The idea for our app originated from our founder’s personal struggles when moving to a new city and facing the challenge of finding trusted, high-quality service providers. From doctors to mechanics to realtors, the process was often fragmented, unreliable, and overly dependent on anonymous online reviews. This experience sparked the realization that many others face the same problem; the lack of a simple, trustworthy way to access recommendations from people they actually know. Driven by this insight, we set out to create a solution that not only addressed this gap but also empowered communities to share and organize their most valuable referrals.
              </p>
            </div>
          </section>
        </RevealOnScroll>

        {/* Exploratory Research: Need vs Engagement Split */}
        <RevealOnScroll>
          <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-19 py-10 flex flex-col items-center bg-[#f6f6f6]" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Left: Graph */}
              <div>
                <img
                  src="/angie-portfolio/graph.png"
                  alt="Need vs Engagement Framework"
                  className="w-full rounded-lg"
                />
              </div>
              {/* Right: Paragraph */}
              <div>
                <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  To understand the challenges and interests of potential consumers, our first step was to identify the types of end-users most likely to adopt our app and genuinely benefit from it. We mapped these groups on a need vs. engagement framework, which helped us cluster target users and clarify which features would be most critical for the MVP. Our focus centered on users with high need and medium-to-high engagement, particularly young professionals moving to new cities who require a trusted network to connect them with essential service providers, as well as movers of all kinds who are entering unfamiliar environments. We also highlighted potential power users who could become highly active referrers. This approach gave us a clear direction for where to begin collecting research and which data sources would provide the most actionable insights.
                </p>
              </div>
            </div>
          </section>
        </RevealOnScroll>

        {/* RevealOnScroll: Identify Users Section */}
        <RevealOnScroll>
          <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-19 py-19 flex flex-col items-center bg-[#f6f6f6] mt-6" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
            {/* Phase Number */}
            <div className="text-[#E5791B] text-lg md:text-xl font-bold mb-2 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Phase 2
            </div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-normal mb-2 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Identify Users
            </h2>
            {/* Survey Design Subheading */}
            <div className="w-full">
              <div className="text-[#f7b84b] text-xl font-semibold mb-6 mt-6" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>Survey Design</div>
              <p className="text-base md:text-lg mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                I needed to better understand the market to assess which features in our implementation would be most critical, and which could be implemented in the end-state design. I decided a survey would be a good way to start gathering data, and we would gather responses from those in our target demographic (young adults aged 18-35) The survey addressed two parts: How users currently kept track of their service contacts and how users find new contacts. I wanted to see if there was a demand for this add, from what demographic, and how we could better design our app to focus of what users were already doing. I distribute this survey by placing a QR code in high foot traffic areas (such as universities and coffee shops) and gathered anonymous data. Below, I included some sample questions to better understand the goal of this survey.
              </p>
              {/* Survey Questions Grid - q1 left, q2/q3 stacked right */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-full">
                {/* Left: q1.png (tall) */}
                <img 
                  src="/angie-portfolio/q1.png" 
                  alt="Survey Question 1" 
                  className="rounded-xl border border-[#f7b84b] bg-white w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity" 
                  onClick={() => openModal("/angie-portfolio/q1.png", "Survey Question 1")}
                />
                {/* Right: q2/q3 stacked */}
                <div className="flex flex-col gap-6 h-full">
                  <img 
                    src="/angie-portfolio/q2.png" 
                    alt="Survey Question 2" 
                    className="rounded-xl border border-[#f7b84b] bg-white w-full object-contain cursor-pointer hover:opacity-90 transition-opacity" 
                    onClick={() => openModal("/angie-portfolio/q2.png", "Survey Question 2")}
                  />
                  <img 
                    src="/angie-portfolio/q3.png" 
                    alt="Survey Question 3" 
                    className="rounded-xl border border-[#f7b84b] bg-white w-full object-contain cursor-pointer hover:opacity-90 transition-opacity" 
                    onClick={() => openModal("/angie-portfolio/q3.png", "Survey Question 3")}
                  />
                </div>
              </div>
              {/* Insights Subheading */}
              <div className="text-[#f7b84b] text-xl font-semibold mb-6 mt-16" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>Gather qualitative and quantitative insights</div>
              {/* Row: Text left, dropdown right (stack on mobile) */}
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full items-start mb-10">
                <div className="md:w-2/3 w-full flex items-center">
                  <p className="text-base md:text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                    I gathered a few hundred responses, and highlighted the following results below. A few people on my team also conducted in person user surveys, which included a peek into how everyday people kept their contacts. Read more about that to the right.
                  </p>
                </div>
                <div className="md:w-1/3 w-full">
                  <RoleDropdown
                    color="#d6f0fa"
                    icon={<span />}
                    title="How do people manage contacts?"
                    defaultOpen={false}
                  >
                    <div className="text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                      From our user interviews, we found that approximately 75% of participants kept track of their service contacts in some form. While some maintained organized spreadsheets—one user, in particular, had an extensive sheet dedicated to doctors and medical services—others relied on less structured methods such as phone notes, personal documents, or even private chat messages. Despite these varied approaches, it was clear that most individuals had developed their own systems for contact organization.<br/><br/>
                      However, a common pain point emerged: sharing these contacts with others, especially in a structured and accessible format, proved difficult.<br/><br/>
                      For transparency, these findings were gathered by multiple team members during the research phase.<br/>
                    </div>
                  </RoleDropdown>
                </div>
              </div>
              {/* Bar Charts Grid - always below */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <img 
                  src="/angie-portfolio/slide1.png" 
                  alt="Bar Chart 1" 
                  className="rounded-xl border border-[#e0e0e0] bg-white w-full cursor-pointer hover:opacity-90 transition-opacity" 
                  onClick={() => openModal("/angie-portfolio/slide1.png", "Bar Chart 1")}
                />
                <img 
                  src="/angie-portfolio/slide2.png" 
                  alt="Bar Chart 2" 
                  className="rounded-xl border border-[#e0e0e0] bg-white w-full cursor-pointer hover:opacity-90 transition-opacity" 
                  onClick={() => openModal("/angie-portfolio/slide2.png", "Bar Chart 2")}
                />
                <img 
                  src="/angie-portfolio/slide3.png" 
                  alt="Bar Chart 3" 
                  className="rounded-xl border border-[#e0e0e0] bg-white w-full cursor-pointer hover:opacity-90 transition-opacity" 
                  onClick={() => openModal("/angie-portfolio/slide3.png", "Bar Chart 3")}
                />
                <img 
                  src="/angie-portfolio/slide4.png" 
                  alt="Bar Chart 4" 
                  className="rounded-xl border border-[#e0e0e0] bg-white w-full cursor-pointer hover:opacity-90 transition-opacity" 
                  onClick={() => openModal("/angie-portfolio/slide4.png", "Bar Chart 4")}
                />
              </div>
            </div>
          </section>
        </RevealOnScroll>
        {/* RevealOnScroll: Brainstorm and Ideate Section */}
        <RevealOnScroll>
          <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-10 flex flex-col items-center bg-[#f6f6f6] mt-1" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
            {/* Phase Number */}
            <div className="text-[#E5791B] text-lg md:text-xl font-bold mb-2 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Phase 3
            </div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-normal mb-9 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace', marginTop: 0 }}>
              Brainstorm and Ideate
            </h2>
            {/* Intro Paragraph */}
            <p className="text-base md:text-xl text-left mt-10 max-w-7xl w-full" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Based on our user research, we concluded with the following goals 
            </p>
            <p className="text-base md:text-xl text-left mb-8 max-w-7xl w-full" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
            that we would emphasize throughout the MVP Design.
            </p>
            {/* Goals Row - number top left, text block right, left-aligned */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-7xl mb-12">
              {/* Goal 1 */}
              <div className="flex flex-row items-start px-2">
                <span className="font-bold text-4xl mr-2" style={{ color: '#E5791B', minWidth: '1.7rem', textAlign: 'left' }}>1</span>
                <div className="flex-1 text-left">
                  <span className="font-bold text-base md:text-lg block mb-1">Simple and Intuitive</span>
                  <span className="text-sm md:text-base block">It should be easy to understand the functions of each feature.</span>
                </div>
              </div>
              {/* Goal 2 */}
              <div className="flex flex-row items-start px-2">
              <span className="font-bold text-4xl mr-2" style={{ color: '#E5791B', minWidth: '1.7rem', textAlign: 'left' }}>2</span>
                <div className="flex-1 text-left">
                  <span className="font-bold text-base md:text-lg block mb-1">Focus on Consumers</span>
                  <span className="text-sm md:text-base block">Implement Business and Service side profiles later.</span>
                </div>
              </div>
              {/* Goal 3 */}
              <div className="flex flex-row items-start px-2">
              <span className="font-bold text-4xl mr-2" style={{ color: '#E5791B', minWidth: '1.7rem', textAlign: 'left' }}>3</span>
                <div className="flex-1 text-left">
                  <span className="font-bold text-base md:text-lg block mb-1">Encourage Sharing</span>
                  <span className="text-sm md:text-base block">Attract more users to build bigger social circles through user sharing.</span>
                </div>
              </div>
              {/* Goal 4 */}
              <div className="flex flex-row items-start px-2">
              <span className="font-bold text-4xl mr-2" style={{ color: '#E5791B', minWidth: '1.7rem', textAlign: 'left' }}>4</span>
                <div className="flex-1 text-left">
                  <span className="font-bold text-base md:text-lg block mb-1">Take Advantage of AI</span>
                  <span className="text-sm md:text-base block">Utilize AI to scrape for contacts from any medium.</span>
                </div>
              </div>
            </div>
            {/* Whiteboard and Feature Cards Row */}
            <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 mb-12 items-stretch">
              {/* Whiteboard Image */}
              <div className="flex-1 flex flex-col items-left justify-left mb-10 rounded-lg h-full">
                <img 
                  src="/angie-portfolio/whiteboard.jpg" 
                  alt="Whiteboard" 
                  className="w-full max-w-3xl h-full object-contain mb-4 cursor-pointer hover:opacity-90 transition-opacity" 
                  onClick={() => openModal("/angie-portfolio/whiteboard.jpg", "Whiteboard")}
                />
                <p className="text-sm text-[#5e5f61] text-center max-w-3xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Initial brainstorming session where we mapped out user flows, feature priorities, etc.
                </p>
              </div>
              {/* Feature Cards - bordered */}
              <div className="flex-1 flex flex-col gap-6 justify-center h-full">
                                     {/* Find and Share Card */}
                   <div className="flex-1 flex flex-col justify-center rounded-xl" style={{background: 'none', boxShadow: 'none'}}>
                   <div className="font-bold text-[#E5791B] text-base text-center md:text-lg" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>Focus: Two Flagship Features</div>
                 </div>
                                  {/* Find and Share Card */}
                  <div className="p-5 mb-2 flex-1 flex flex-col justify-center border border-black rounded-xl" style={{background: 'none', boxShadow: 'none'}}>
                   <div className="font-bold mb-2 text-base text-center md:text-lg" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>Find and Share</div>
                  <div className="text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                     A virtual assistant designed to function as a semantic search tool. Its primary goal was to help users quickly and accurately find service providers such as hairdressers, lawyers, or doctors based on minimal input.The focus was on delivering fast, precise results while requiring only a short text query from the user.
                  </div>
                </div>
                                  {/* Create Contact Card */}
                  <div className="p-5 flex-1 flex flex-col justify-center border border-black rounded-xl" style={{background: 'none', boxShadow: 'none'}}>
                   <div className="font-bold mb-2 text-base text-center md:text-lg" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>Create Contact</div>
                  <div className="text-sm md:text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
                    This feature lets users to upload files or images containing contact information (such as business cards or handwritten notes) which are then automatically interpreted and converted into our standardized contact cards. The goal is to encourage users to digitize their contacts without the need to manually type each one. Voice-to-text functionality was also a goal. 
                  </div>
                </div>
              </div>
            </div>
            {/* Caption under whiteboard row */}
            <p className="text-base md:text-xl text-left mt-6 max-w-6xl w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
              Taking our ideas, I created the following low fidelity mockup for each wireframe and how the screens would be navigated through, and started planning out how we could compartmentalize and reuse different screens.
            </p>
            {/* Sketch Image Section */}
            <div className="w-full flex flex-col items-left">
              <div className="w-full rounded-2xl border-[#d1d1d1] p-4 md:p-8 flex items-center justify-center mb-4">
                <img 
                  src="/angie-portfolio/sketch.jpg" 
                  alt="Wireframe Sketch" 
                  className="w-full max-w-7xl rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
                  onClick={() => openModal("/angie-portfolio/sketch.jpg", "Wireframe Sketch")}
                />
              </div>
            </div>
          </section>
        </RevealOnScroll>
        {/* RevealOnScroll: Product Roadmap Section */}
        <RevealOnScroll>
                      {/* Phase Number */}
                      <div className="text-[#E5791B] text-lg md:text-xl font-bold mb-2 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
                        Phase 4
                      </div>
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-normal mb-2 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
              Product Roadmap
            </h2>
            
            {/* Scope Subheading */}
            <div className="text-[#f7b84b] text-xl font-semibold mb-4 mt-6 text-left" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>Scope</div>
            <p className="text-base md:text-lg max-w-6xl text-left" style={{ fontFamily: 'Inter, sans-serif' }}>
              To keep teams (and myself!) on track, I created several Epics, defined the large goals for this project, and clearly defined <span className='font-bold'>why</span> our project exists. This document is what we refered to when we were outlining the priority of tasks, and how we structed our goal based weekly code/design reviews.
            </p>
          <section className=" w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-0 md:px-12 py-16 flex flex-col items-start bg-[#f6f6f6] mt-0" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
            {/* Epics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto">
              {/* Epic 1 */}
              <div className="rounded-4xl border border-black px-9 py-6 flex flex-col items-center h-full" style={{background: 'none'}}>
                <div className="font-bold text-xl mb-2 text-[#E5791B] text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>Epic #1<br/>SMS Sign-up and Share</div>
                <ul className="text-sm md:text-base mb-4 list-disc list-inside text-left w-full flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li>Allow users to register using their phone number.</li>
                  <li>Send OTP (One-Time Password) for verification.</li>
                  <li>Store phone number in user database with timestamp.</li>
                  <li>When sharing contacts, share via SMS</li>
                  <li>SMS message shows a preview of the contacts</li>
                  <li>Preview of contacts in message leads to download and signup</li>
                  <li>System synchronously sends message to service provider that they have been recommended</li>
                </ul>
                {/* Table */}
                <table className="w-full text-xs mb-4 border border-[#e0e0e0] rounded-lg overflow-hidden bg-white flex-1" style={{ background: 'none' }}>
                  <thead className="bg-[#f7b84b]">
                    <tr>
                      <th className="p-2 font-bold">Feature</th>
                      <th className="p-2 font-bold">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-2">SMS Register</td><td className="p-2">high</td></tr>
                    <tr><td className="p-2">OTP code sent</td><td className="p-2">high</td></tr>
                    <tr><td className="p-2">SMS login</td><td className="p-2">high</td></tr>
                    <tr><td className="p-2">Phone number stored</td><td className="p-2">high</td></tr>
                    <tr><td className="p-2">Share recommendation via SMS</td><td className="p-2">high</td></tr>
                    <tr><td className="p-2">Recommendation with preview is sent</td><td className="p-2">high</td></tr>
                    <tr><td className="p-2">Message to notify service provider after sharing</td><td className="p-2">medium</td></tr>
                  </tbody>
                </table>
                <div className="w-full mt-auto">
                  <RoleDropdown
                    color="#FFF7E6"
                    icon={<span />}
                    title="Use Cases"
                    defaultOpen={false}
                  >
                    <ul className="list-disc pl-6">
                      <li>Most users on the consumer side share or receive recommendations through friends via
messaging, often within group chats—whether online platforms or private chat groups
on their phones. At the same time, many service providers, especially small private
businesses, run their operations through their phones—handling customer messages,
receiving calls, and more. To accommodate this behavior, we choose SMS login as the
easiest and most accessible sign-up option. SMS login also enables the platform to
identify whether other people in a user’s contact list are already on the app, making it
easier for users to connect.</li>
                      
                    </ul>
                  </RoleDropdown>
                </div>
              </div>
              {/* Epic 2 */}
              <div className="rounded-4xl border border-black px-9 py-6 flex flex-col items-center h-full" style={{background: 'none'}}>
                <div className="font-bold text-xl mb-2 text-[#E5791B] text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>Epic #2<br/>Smart Contact Capture and Sharing from Mobile Uploads</div>
                <ul className="text-sm md:text-base mb-4 list-disc list-inside text-left w-full flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li>User uploads a file or image</li>
                  <li>System extracts contact info (Name, Phone, Email, Company, Address, Notes)</li>
                  <li>System auto-fills standard format</li>
                  <li>User adds audio note</li>
                  <li>Audio transcribed and attached</li>
                  <li>User shares contact card</li>
                  <li>Recommendation receiver and service provider are notified via SMS</li>
                  <li>System tracks sharing activity</li>
                </ul>
                {/* Table */}
                <table className="w-full text-xs mb-4 border-0 rounded-lg overflow-hidden bg-white flex-1" style={{ background: 'none' }}>
                  <thead className="bg-[#f7b84b]">
                    <tr>
                      <th className="p-2 font-bold">Feature</th>
                      <th className="p-2 font-bold">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-2">User uploads a file or image</td><td className="p-2">high</td></tr>
                    <tr><td className="p-2">System extracts contact info (Name, Phone, Email, Company, Address, Notes)</td><td className="p-2">high</td></tr>
                    <tr><td className="p-2">System auto-fills standard format</td><td className="p-2">high</td></tr>
                    <tr><td className="p-2">User edits info</td><td className="p-2">high</td></tr>
                    <tr><td className="p-2">Speech-to-text audio notes attached transcribed</td><td className="p-2">High</td></tr>
                    <tr><td className="p-2">Contacts saved and shared via SMS</td><td className="p-2">High</td></tr>
                  </tbody>
                </table>
                <div className="w-full mt-auto">
                  <RoleDropdown
                    color="#FFF7E6"
                    icon={<span />}
                    title="Use Cases"
                    defaultOpen={false}
                  >
                    <ul className="list-disc pl-6">
                      <li>During interviews, we found that users store service provider contacts in various ways.
Several common scenarios emerged:
1. Digital Lists (Docs/Sheets):
Some users create their own lists of service providers using tools like Google Docs,
Word, or Excel. These lists often include the provider’s name, contact information, and
notes on previous interactions. However, maintaining these documents is time-
consuming and difficult to keep organized. Sharing is also inconvenient—it requires
manually opening the file, resending it multiple times, and even then, recipients may
overlook or lose the information.
→ With our feature, users can upload these existing documents, and we automatically
organize the data for them.

2. Handwritten Notes or Business Cards:
Some users jot down contacts on paper or keep business cards at home. These are
easily misplaced or lost.
→ Instead, users can simply take a photo and upload it—our system extracts and saves
the contact details automatically.

3. Capturing Info On-the-Go:
In many cases, users come across service providers while on the move—for example,
seeing an ad while driving or walking—and want to save the contact for later use.
→ With our feature, they can quickly snap a photo, upload it, and the contact is saved
securely.
Additionally, our audio notes feature allows users to record short voice memos
explaining how or</li>
                    </ul>
                  </RoleDropdown>
                </div>
              </div>
              {/* Epic 3 */}
              <div className="rounded-4xl border border-black px-9 py-6 flex flex-col items-center h-full" style={{background: 'none'}}>
                <div className="font-bold text-xl mb-2 text-[#E5791B] text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>Epic #3<br/>Natural Language AI for Finding and Recommending Service Provider</div>
                <ul className="text-sm md:text-base mb-4 list-disc list-inside text-left w-full flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li>User enters a vague query; types or speaks a natural-language request</li>
                  <li>System creates a recommendation preview</li>
                  <li>User shares the recommendation via SMS</li>
                  <li>System tracks sharing activity</li>
                </ul>
                {/* Table */}
                <table className="w-full text-xs mb-4 border-0 rounded-lg overflow-hidden bg-white flex-1" style={{ background: 'none' }}>
                  <thead className="bg-[#f7b84b]">
                    <tr>
                      <th className="p-2 font-bold">Feature</th>
                      <th className="p-2 font-bold">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-2">User Enters a Vague Query: types or speaks a natural-language request</td><td className="p-2">high</td></tr>
                    <tr><td className="p-2">System performs search on the web using semantic and fuzzy matching.</td><td className="p-2">high</td></tr>
                    <tr><td className="p-2">System retrieves a ranked list of relevant service providers.</td><td className="p-2">High</td></tr>
                    <tr><td className="p-2">User reviews list of providers and sees results with names, contact info.</td><td className="p-2">High</td></tr>
                    <tr><td className="p-2">User selects one provider to share via SMS</td><td className="p-2">High</td></tr>
                    <tr><td className="p-2">Recommendation receiver is notified vis SMS</td><td className="p-2">High</td></tr>
                    <tr><td className="p-2">Service provider is notified vis SMS</td><td className="p-2">High</td></tr>
                    <tr><td className="p-2">User talks to add context for recommendation</td><td className="p-2">High</td></tr>
                    <tr><td className="p-2">Speech-to-text converts and add into recommendation card</td><td className="p-2">High</td></tr>
                    <tr><td className="p-2">System creates a recommendation preview.</td><td className="p-2">High</td></tr>
                    <tr><td className="p-2">Recommendation can be saved and shared</td><td className="p-2">High</td></tr>
                  </tbody>
                </table>
                <div className="w-full mt-auto">
                  <RoleDropdown
                    color="#FFF7E6"
                    icon={<span />}
                    title="Use Cases"
                    defaultOpen={false}
                  >
                    <ul className="list-disc pl-6">
                      <li>From our observations, in many situations where people recommend a service, the
most common behavior is to search on Google or Google Maps, then share the result
directly or send a screenshot to friends.
However, there are several issues with this approach:
Often, people can’t remember the exact name of the service provider, making it difficult
to find through search. The reason for the recommendation is rarely recorded. And,
shared info often gets buried in message threads, making it hard to revisit or organize
later.
→ With our feature, users can use vague or partial input to semantically search for likely
service providers—even if they don’t remember all the details. In under 10 seconds,
they can add a quick note about why they’re recommending it and share it with friends.
Another common scenario is when someone is on the go, sees a service or ad they’re
interested in, and wants to capture it quickly.
→ Our AI helps them identify, save, and store the contact instantly for future use.</li>
                    </ul>
                  </RoleDropdown>
                </div>
              </div>
              {/* Epic 4 */}
              <div className="rounded-4xl border border-black px-9 py-6 flex flex-col items-center h-full" style={{background: 'none'}}>
                <div className="font-bold text-xl mb-2 text-[#E5791B] text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>Epic #4<br/>Contact Management and User Connectivity</div>
                <ul className="text-sm md:text-base mb-4 list-disc list-inside text-left w-full flex-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <li>Each user profile includes a dedicated section for contact management</li>
                  <li>Every contact is tagged with: Mine (Created by Me) or Collected (Received from Others)</li>
                  <li>Each contact entry includes past sharing activity</li>
                  <li>If a contact corresponds to another registered user, the profile allows users to initiate a connection request</li>
                  <li>Optional timestamps and notes may be included for audit or collaboration purposes</li>
                </ul>
                {/* Table */}
                <table className="w-full text-xs mb-4 border-0 rounded-lg overflow-hidden bg-white flex-1" style={{ background: 'none' }}>
                  <thead className="bg-[#f7b84b]">
                    <tr>
                      <th className="p-2 font-bold">Feature</th>
                      <th className="p-2 font-bold">Priority</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-2">System creates profile</td><td className="p-2">high</td></tr>
                    <tr><td className="p-2">User change profile settings</td><td className="p-2">high</td></tr>
                    <tr><td className="p-2">Contact is saved under user profile</td><td className="p-2">High</td></tr>
                    <tr><td className="p-2">Contact categorized with: Mine (Created by Me) or Collected (Received from Others).</td><td className="p-2">High</td></tr>
                    <tr><td className="p-2">Each contact entry includes past sharing activity (who shared it with, who it’s received from)</td><td className="p-2">High</td></tr>
                    <tr><td className="p-2">Contact shows whom it was re-shared with (i.e. Your recommendation is re-shared by other friends)</td><td className="p-2">Low</td></tr>
                    <tr><td className="p-2">Connection request</td><td className="p-2">Medium</td></tr>
                  </tbody>
                </table>
                <div className="w-full mt-auto">
                  <RoleDropdown
                    color="#FFF7E6"
                    icon={<span />}
                    title="Use Cases"
                    defaultOpen={false}
                  >
                    <ul className="list-disc pl-6">
                      <li>In many cases, contacts and recommendations are not properly saved or structured.
And sometimes users often forget what was shared, with whom, and whether a contact
is private or shareable, which leads to repeated requests and redundant sharing.
This feature, while appearing as a user profile, functions as a contact management
system that tracks shared contacts and their recipients.
When users connect as friends, the platform can build connection degree and manage
contact visibility in the future.</li>
                    
                    </ul>
                  </RoleDropdown>
                </div>
              </div>
            </div>
          </section>
        </RevealOnScroll>
        {/* Phase 5 Header */}
        <div className="w-full flex flex-col items-center mt-20 mb-10">
          <div className="text-[#E5791B] text-lg md:text-xl font-bold mb-2 text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
            Phase 5
          </div>
          <h2 className="text-3xl mb-6 md:text-4xl font-normal text-center" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
            Final Designs
          </h2>
          <p className="text-base md:text-xl text-left mt-10 max-w-7xl w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
              Each Image carosel displays a flow of screens that the user would navigate through, for each feature. Drag to scroll through the images. To see the image in better quality, please click on the image. 
            </p>
        </div>
        <ClickableGallery
          title="Sign-up and Login"
          images={[
            '/angie-portfolio/sp1.png',
            '/angie-portfolio/sp2.png',
            '/angie-portfolio/sp3.png',
            '/angie-portfolio/sp4.png',
            '/angie-portfolio/sp5.png',
            '/angie-portfolio/sp6.png',
            '/angie-portfolio/sp7.png',
            '/angie-portfolio/sp8.png',
            '/angie-portfolio/sp9.png',
            '/angie-portfolio/sp10.png',
            '/angie-portfolio/sp11.png',
            '/angie-portfolio/sp12.png',
            '/angie-portfolio/sp13.png',
            '/angie-portfolio/sp14.png',
            '/angie-portfolio/sp15.png',
            '/angie-portfolio/sp16.png',
            '/angie-portfolio/sp17.png',
            '/angie-portfolio/sp18.png',
            '/angie-portfolio/sp19.png',
            '/angie-portfolio/sp20.png',
            '/angie-portfolio/sp21.png',
            '/angie-portfolio/sp22.png'
          ]}
          autoScrollSpeed={1}
          imageScale={0.6}
        />
        
        <ClickableGallery
          title="Find and Share"
          images={[
            '/angie-portfolio/sa1.png',
            '/angie-portfolio/sa2.png',
            '/angie-portfolio/sa3.png',
            '/angie-portfolio/sa4.png',
            '/angie-portfolio/sa5.png',
            '/angie-portfolio/sa6.png',
            '/angie-portfolio/sa7.png',
            '/angie-portfolio/sa8.png',
            '/angie-portfolio/sa9.png',
            '/angie-portfolio/sa10.png',
            '/angie-portfolio/sa11.png',
            '/angie-portfolio/sa12.png',
            '/angie-portfolio/sa13.png',
            '/angie-portfolio/sa14.png',
            '/angie-portfolio/sa15.png',
            '/angie-portfolio/sa16.png',
            '/angie-portfolio/sa17.png',
            '/angie-portfolio/sa18.png',
            '/angie-portfolio/sa19.png',
            '/angie-portfolio/sa20.png',
            '/angie-portfolio/sa21.png'
          ]}
          autoScrollSpeed={1.5}
          imageScale={0.6}
        />
        
        <ClickableGallery
          title="Create Contact"
          images={[
            '/angie-portfolio/sr1.png',
            '/angie-portfolio/sr2.png',
            '/angie-portfolio/sr3.png',
            '/angie-portfolio/sr4.png',
            '/angie-portfolio/sr5.png',
            '/angie-portfolio/sr6.png',
            '/angie-portfolio/sr7.png',
            '/angie-portfolio/sr8.png',
            '/angie-portfolio/sr9.png',
            '/angie-portfolio/sr10.png',
            '/angie-portfolio/sr11.png',
            '/angie-portfolio/sr12.png',
            '/angie-portfolio/sr13.png',
            '/angie-portfolio/sr14.png',
            '/angie-portfolio/sr15.png',
            '/angie-portfolio/sr16.png',
            '/angie-portfolio/sr17.png',
            '/angie-portfolio/sr18.png',
            '/angie-portfolio/sr19.png'
          ]}
          autoScrollSpeed={2}
          imageScale={0.6}
        />
        
        <ClickableGallery
          title="Consumer Profile"
          images={[
            '/angie-portfolio/sw1.png',
            '/angie-portfolio/sw2.png',
            '/angie-portfolio/sw3.png',
            '/angie-portfolio/sw4.png',
            '/angie-portfolio/sw5.png',
            '/angie-portfolio/sw6.png',
            '/angie-portfolio/sw7.png',
            '/angie-portfolio/sw8.png',
            '/angie-portfolio/sw9.png',
            '/angie-portfolio/sw10.png',
            '/angie-portfolio/sw11.png',
            '/angie-portfolio/sw12.png',
            '/angie-portfolio/sw13.png'
          ]}
          autoScrollSpeed={1.2}
          imageScale={0.6}
        />
        
        {/* Figma Embed Section */}
        <div className="w-full max-w-6xl mx-auto mt-16 mb-8">
          <p className="text-lg text-center mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Feel free to look around the Figma file to see how I break down a full user flow, and how I lay out wireframes for development :)
          </p>
          <iframe 
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} 
            width="100%" 
            height="600" 
            src="https://embed.figma.com/design/ciwF9W0i1hoSaT3OSuIjUc/Locammend_Prototype--Copy-?node-id=2514-24287&embed-host=share" 
            allowFullScreen
            title="Locammend Figma Prototype"
            className="rounded-lg"
          ></iframe>
        </div>
        
        {/* Insert sec3.png above Footer - full-bleed */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex justify-center items-center mt-10" style={{left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw'}}>
          <img 
            src="/angie-portfolio/sect3.png" 
            alt="Section 3" 
            className="w-full object-cover cursor-pointer hover:opacity-90 transition-opacity" 
            style={{ maxHeight: '400px' }} 
            onClick={() => openModal("/angie-portfolio/sect3.png", "Section 3")}
          />
        </div>
        
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