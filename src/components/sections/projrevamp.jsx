import React, { useRef, useEffect, useState } from "react";
import { GradientBackground } from "../ReactiveBackground";
import { useNavigate } from "react-router-dom";

export const ProjRevamp = () => {
  // Example placeholder projects
  const projects = [
    {
      id: "loccamend",
      title: "Loccamend App",
      description: "Mobile App that connects users through trusted recommendations. I served as the founding engineer for this app, reach XXX users.",
      image: "/angie-portfolio/loc_icon.gif",
      tags: ["React", "Product Innovation", "Startup", "2025"],
      buttonAction: "project10",
    },
    {
      id: "activeIQ",
      title: "Active IQ Database",
      description:
        "Designed interface of Active IQ database with real-time changes in share ownership, managing traditional proxy solicitation and stockwatch firms, providing critical information based on latest SEC filings.",
      image: "/angie-portfolio/nq.png",
      tags: ["Internship", "Product Innovation", "UX/UI", "Financial Products", "2024"],
      buttonAction: "project1",
    },
    {
      id: "myNewProject5",
      title: "Generative Art with p5.js",
      description:
          "Considering elements such as symmetry, rhythm, and pattern, I wrote code in P5.JS that could generate infinite variations of a tiled pattern; inspired by the work of MC Escher, I based my pattern off of an isometric cityscape. ",
      image: "/angie-portfolio/iso3.png",
      tags: ["Personal Project", "Creative Coding", "P5.js", "JS", "2024"],
      buttonAction: "project5",
    },
    {
      id: "3d",
      title: "Brooklyn Bridge: VR",
      description:
          "  This is a project I made for a competition. I used the Brooklyn Bridge as my main subject and created a VR experience that takes place on the bridge in the 1920s. I had to model the bridge, the trolleys, and the people. I also had to create a train station and a train. The video shows the experience in action.",
      image: "/angie-portfolio/br.jpg",
      tags: ["Personal Project","VR/AR", "Unreal Engine", "Blueprints", "Oculus Go", "2025"],
      buttonAction: "project9",
    },
    {
      id: "infrecursive",
      title: "infintely recursive tree",
      description:
          "Using priniples of recursion and perlin noise, I created 2 projects that generate infinitely. I created a tree that continues to grow forever, and a phyllotactic spiral that shrinks and contracts. ",
      image: "/angie-portfolio/t2.png",
      tags: ["Personal Project", "Generative Art", "Creative Coding", "P5.js", "JS", "2025"],
      buttonAction: "project8",
    },
    {
      id: "interactiveenv",
      title: "TouchDesigner: Interactive Environment",
      description: "Using TouchDesigner, I created a physics simluator that allows a user to manipulate a water like substance. through the scope of this project, I created many smaller prototypes using compuer vision and motion capture. Take a peek! :)",
      image: "/angie-portfolio/mq3.png",
      tags: ["Personal Project","TouchDesigner", "Creative Coding", "Computer Vision", "Motion Capture", "3D Modelling", "2025"],
      link: "project6",
    },
    {
      id: "depthMap",
      title: "LLM Depth Map + Machine Learning",
      description: "Contained in this project is mini projects that culminates in a final trained LLM created within COMFYUI that uses machine learning to detect the depth within a given image. Using this, I programmed a parallax effect within images for manipulation. ",
      image: "/angie-portfolio/hand.png",
      tags: ["Personal Project","AI", "JS","Python", "2025"],
      link: "project7",
    },
    {
      id: "cmufinals",
      title: "CMU Finals Planner",
      description:
        "Scalable PDF scraper that takes CMU course finals and smoothly adds final to Google Calendar using regular expressions, PyPlumber, and JS scripting.",
      image: "/angie-portfolio/cmufinals.png",
      tags: ["Personal Project", "Product Innovation", "Python", "HTML/CSS","2024", "GTM Strategy"],
      link: "https://angie-chang0.github.io/cmufinalsplanner/",
    },
    {
      id: "clocks",
      title: "10 Clocks",
      description: "Clocks! Clocks! In this creative project, I rapidly prototyped 10 clocks and redefined from traditional time-keeping. I implemented these clocks in P5.JS, and implemented several different algorithms to represent time passing.",
      image: "/angie-portfolio/c.png",
      tags: ["Personal Project", "Creative Coding", "P5.js", "JS", "2024"],
      buttonAction: "project4",
    },
    {
      id: "recipeHub",
      title: "RecipeHub",
      description:
        "A WebApp that allows users to upload a link or picture to a recipe from anywhere on the web, and use our LLM to gather the recipe ingredients and instructions to save all in one place. Keeps track of user groceries and recommends recipes so that food does not go to waste.",
      image: "/angie-portfolio/recipiehub.png",
      tags: [ "CMU", "AI", "Product Innovation", "User Stories", "Agile/Scrum workflow", "React", "2025"],
      buttonAction: "project2",
    },
    {
      id: "csProjects",
      title: "Computer Systems Assorted Projects",
      description:
        "Cache: Built a cache sim in C that utilized an LRU policy to simulate the L3 cache. Malloc: Implemented a memory manager that dynamically allocates heap memory through the use of segregated lists and unbounded arrays. Shell: Implemented a Unix Shell that manages multiple processes, handles signal interruptions, and allows for I/O redirection.",
      image: "/angie-portfolio/malloc.png",
      tags: ["CMU", "C", "Memory Hierarchy", "Cache", "Sockets", "Control & System Calls", "2024"],
      buttonAction: "project3",
    },
    {
      id: "recipt",
      title: "what does it cost?",
      description: "A creative code project. Coming soon!",
      image: "/angie-portfolio/gray.png",
      tags: ["CMU","AI", "JS", "P5.js","React", "2025"],
      buttonAction: "project2",
    },
    {
      id: "freelance",
      title: "Freelance Web Developer",
      description: "coming soon!",
      image: "/angie-portfolio/gray.png",
      tags: ["2025"],
      buttonAction: "project3",
    },
  ];

  // Tag filtering state
  const [selectedTags, setSelectedTags] = useState([]);

  // Grouping logic
  const yearTags = ['2025', '2024', '2023', '2022', '2021'];
  const typeTags = ['Personal Project', 'Internship', 'CMU', 'Startup'];
  const sidebarTags = [
    'React', 'Product Innovation', 'UX/UI', 'Python', 'C', 'Computer Vision', 'Creative Coding', 'User Stories', 'AI'
  ];
  const allTagsSet = new Set(projects.flatMap(p => p.tags));
  const yearTagSet = new Set(yearTags);
  const typeTagSet = new Set(typeTags);
  const tagsByYear = yearTags.filter(tag => allTagsSet.has(tag));
  const tagsByType = typeTags.filter(tag => allTagsSet.has(tag));
  const tagsOther = sidebarTags.filter(tag => allTagsSet.has(tag));

  // Filter projects based on selected tags
  const filteredProjects = selectedTags.length === 0
    ? projects
    : projects.filter(proj =>
        proj.tags.some(tag => selectedTags.includes(tag))
      );

  // Toggle tag selection
  const toggleTag = (tag) => {
    setSelectedTags(selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag]
    );
  };

  const sectionRef = useRef(null);
  const rightColRef = useRef(null);
  const [starRotation, setStarRotation] = useState(0);
  const leftSidebarRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
              // Check if section is perfectly at the top
              const rect = sectionRef.current.getBoundingClientRect();
              if (Math.abs(rect.top - 8) > 2) { // 8px spacer, allow 2px tolerance
                window.scrollTo({
                  top: window.scrollY + rect.top - 8,
                  behavior: 'smooth'
                });
              }
            }, 400);
          }, 100);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Animate star rotation based on window scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Window scroll
      const scrollTopWindow = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Left sidebar scroll
      let scrollTopSidebar = 0, maxSidebar = 0;
      if (leftSidebarRef.current) {
        scrollTopSidebar = leftSidebarRef.current.scrollTop;
        maxSidebar = leftSidebarRef.current.scrollHeight - leftSidebarRef.current.clientHeight;
      }
      // Right project list scroll
      let scrollTopRight = 0, maxRight = 0;
      if (rightColRef.current) {
        scrollTopRight = rightColRef.current.scrollTop;
        maxRight = rightColRef.current.scrollHeight - rightColRef.current.clientHeight;
      }
      // Combine all scrolls (average their progress)
      const progressArr = [
        docHeight > 0 ? scrollTopWindow / docHeight : 0,
        maxSidebar > 0 ? scrollTopSidebar / maxSidebar : 0,
        maxRight > 0 ? scrollTopRight / maxRight : 0
      ];
      const avgProgress = progressArr.reduce((a, b) => a + b, 0) / progressArr.length;
      const rotation = avgProgress * 360;
      const sensitiveRotation = avgProgress * 720;
      setStarRotation(sensitiveRotation);
    };
    window.addEventListener('scroll', handleScroll);
    if (leftSidebarRef.current) leftSidebarRef.current.addEventListener('scroll', handleScroll);
    if (rightColRef.current) rightColRef.current.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (leftSidebarRef.current) leftSidebarRef.current.removeEventListener('scroll', handleScroll);
      if (rightColRef.current) rightColRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Snap projrevamp to top if more than 30px visible
  useEffect(() => {
    const handleSnap = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < 30 && rect.top > -window.innerHeight + 30) {
          // More than 30px visible, but not already snapped
          window.scrollTo({
            top: window.scrollY + rect.top,
            behavior: 'smooth',
          });
        }
      }
    };
    window.addEventListener('scroll', handleSnap);
    return () => window.removeEventListener('scroll', handleSnap);
  }, []);

  return (
    <>
      <div style={{ height: 8, background: '#E2E1DF' }} />
      <section
        id="projrevamp"
        ref={sectionRef}
        style={{
          minHeight: "100vh",
          background: "#e2e1df",
          fontFamily: "Inconsolata, monospace",
          color: "#222",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          padding: 0,
          position: "relative",
          overflow: "hidden",
          overflowX: "hidden",
        }}
      >
        <div style={{ position: 'absolute', zIndex: 0, top: 0, left: 0, width: '100%', height: '100%' }}>
          <GradientBackground />
        </div>
        {/* Solid color rectangle to block gradient in sidebar */}
        <div style={{ position: 'absolute', zIndex: 1, top: 0, left: 0, width: 340, height: '100%', background: '#e2e1df', pointerEvents: 'none' }} />
        <div
          style={{
            display: "flex",
            width: "100vw",
            maxWidth: "1400px",
            height: "100vh",
            minHeight: 0,
            alignItems: "stretch",
            zIndex: 1,
            position: "relative",
            flexDirection: 'row',
          }}
          className="projrevamp-main-flex"
        >
          {/* Left Sidebar */}
          <div
            ref={leftSidebarRef}
            style={{
              width: "340px",
              minWidth: "260px",
              maxWidth: "400px",
              height: "100vh",
              minHeight: 0,
              overflowY: "auto",
              borderRight: "1px solid #1A1A1A",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              padding: 0,
              background: '#e2e1df',
              zIndex: 2,
              flexShrink: 0,
            }}
            className="projrevamp-sidebar"
          >
            {/* Projects Section */}
            <div style={{ padding: "32px 24px 24px 24px", borderBottom: "1px solid #1A1A1A" }}>
              <div style={{ display: 'flex', alignItems: 'center', fontWeight: 700, fontSize: 22, marginBottom: 4, marginTop: 12 }}>
                <span
                  style={{
                    display: 'inline-block',
                    marginRight: 10,
                    fontSize: 24,
                    transition: 'transform 0.2s',
                    transform: `rotate(${starRotation}deg)`
                  }}
                  aria-label="rotating star"
                >
                  ⚝
                </span>
                Projects
              </div>
              <div style={{ fontSize: 15, marginBottom: 12 }}>I create pixel perfect products, skillfully coded and aesthetically pleasing to look at. I hope to create products that are interesting, engaging, and useful. Featured projects are displayed first, and please click on each to learn more about them.</div>
              <div style={{ fontSize: 13, color: '#555', marginBottom: 18 }}>
              </div>
              <button
                style={{
                  fontFamily: "Inconsolata, monospace",
                  fontSize: 15,
                  background: "none",
                  border: "1.2px solid #222",
                  borderRadius: 18,
                  color: "#222",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 18px 4px 18px",
                  marginTop: 8,
                }}
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                about
                <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
              </button>
            </div>
            {/* Tags Section */}
            <div style={{ padding: "24px 24px 24px 24px", borderBottom: "1px solid #1A1A1A" }}>
              <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Tags</div>
              <div style={{ fontSize: 14, marginBottom: 12 }}>sort projects by clicking on the tags.</div>
              {/* Year Group */}
              <div style={{ fontSize: 13, color: '#888', marginBottom: 4, marginTop: 8 }}>Year:</div>
              <div style={{ display: "flex", flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                {tagsByYear.map(tag => (
                  <span
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    style={{
                      border: "1px solid #1A1A1A",
                      borderRadius: 6,
                      padding: "2px 14px",
                      fontSize: 13,
                      marginBottom: 6,
                      minHeight: 18,
                      cursor: 'pointer',
                      background: selectedTags.includes(tag) ? '#bdbdbd' : '#e2e1df',
                      color: '#222',
                      fontWeight: selectedTags.includes(tag) ? 700 : 400,
                      transition: 'background 0.2s, color 0.2s',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Type Group */}
              <div style={{ fontSize: 13, color: '#888', marginBottom: 4, marginTop: 8 }}>Type:</div>
              <div style={{ display: "flex", flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                {tagsByType.map(tag => (
                  <span
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    style={{
                      border: "1px solid #1A1A1A",
                      borderRadius: 6,
                      padding: "2px 14px",
                      fontSize: 13,
                      marginBottom: 6,
                      minHeight: 18,
                      cursor: 'pointer',
                      background: selectedTags.includes(tag) ? '#bdbdbd' : '#e2e1df',
                      color: '#222',
                      fontWeight: selectedTags.includes(tag) ? 700 : 400,
                      transition: 'background 0.2s, color 0.2s',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Other Tags Group */}
              <div style={{ fontSize: 13, color: '#888', marginBottom: 4, marginTop: 8 }}>Tags:</div>
              <div style={{ display: "flex", flexWrap: 'wrap', gap: 8, marginBottom: 6 }}>
                {tagsOther.map(tag => (
                  <span
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    style={{
                      border: "1px solid #1A1A1A",
                      borderRadius: 6,
                      padding: "2px 14px",
                      fontSize: 13,
                      marginBottom: 6,
                      minHeight: 18,
                      cursor: 'pointer',
                      background: selectedTags.includes(tag) ? '#bdbdbd' : '#e2e1df',
                      color: '#222',
                      fontWeight: selectedTags.includes(tag) ? 700 : 400,
                      transition: 'background 0.2s, color 0.2s',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Skills Section */}
            <div style={{ padding: "24px 24px 24px 24px", borderBottom: "1px solid #1A1A1A" }}>
              <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Skills</div>
              <div style={{ fontSize: 14, marginBottom: 12 }}>Skills that fill my technical and creative tool box.</div>
              <button
                style={{
                  fontFamily: "Inconsolata, monospace",
                  fontSize: 15,
                  background: "none",
                  border: "1.2px solid #222",
                  borderRadius: 18,
                  color: "#222",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 18px 4px 18px",
                  marginBottom: 12,
                }}
              >
                see more
                <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
              </button>
              {/* Technical */}
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, marginTop: 12 }}>Technical</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                {[
                  "Python", "C/C++", "JavaScript", "TypeScript", "React/React Native", "Node", "TailwindCSS", "OCaml", "Assembly x86", "HTML/CSS", "Processing", "Postgres/MySQL", "Android SDK", "P5.js", "GLSL"
                ].map(skill => (
                  <span key={skill} style={{ border: "1px solid #1A1A1A", borderRadius: 6, padding: "2px 14px", fontSize: 13, minHeight: 18, background: '#e2e1df', color: '#222', fontWeight: 500 }}>{skill}</span>
                ))}
                </div>
              {/* Methods */}
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, marginTop: 12 }}>Methods</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                {[
                  "Wireframing", "Experience Prototyping", "User Stories", "Semi-structured Interviews", "Affinity Diagramming", "Storyboarding", "User + Stakeholder Journey Mapping", "Think Aloud Study", "UML Diagramming", "ER Modeling", "Artifact Analysis", "Speed Dating", "Motion Design/Animation"
                ].map(method => (
                  <span key={method} style={{ border: "1px solid #1A1A1A", borderRadius: 6, padding: "2px 14px", fontSize: 13, minHeight: 18, background: '#e2e1df', color: '#222', fontWeight: 500 }}>{method}</span>
                ))}
                </div>
              {/* Tools */}
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, marginTop: 12 }}>Tools</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                {[
                  "Figma", "Adobe XD", "Sketch", "Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop", "Adobe Lightroom", "Procreate", "Jupyter Notebook", "Canva", "Microsoft Office", "Google Suite", "Slack", "GitHub", "AWS"
                ].map(tool => (
                  <span key={tool} style={{ border: "1px solid #1A1A1A", borderRadius: 6, padding: "2px 14px", fontSize: 13, minHeight: 18, background: '#e2e1df', color: '#222', fontWeight: 500 }}>{tool}</span>
                ))}
                </div>
            </div>
          </div>
          {/* Right Scrollable Project List */}
          <div
            ref={rightColRef}
            style={{
              flex: 1,
              minWidth: 0,
              height: "100vh",
              minHeight: 0,
              overflowY: "auto",
              boxSizing: "border-box",
              paddingLeft: 0,
              paddingRight: 0,
              background: 'transparent',
              zIndex: 2,
            }}
            className="projrevamp-project-list"
          >
            {filteredProjects.map((proj, i) => (
              <div
                key={i}
                style={{
                  borderBottom: i === filteredProjects.length - 1 ? "none" : "1px solid #1A1A1A",
                  padding: "48px 48px 40px 48px",
                  fontFamily: "Inconsolata, monospace",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 32,
                  minHeight: 280,
                }}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  style={{ width: '100%', maxWidth: 400, height: 'auto', aspectRatio: '16/9', objectFit: 'cover', background: '#ccc', borderRadius: 6, border: '1px solid #1A1A1A', flexShrink: 0 }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 6 }}>{proj.title}</div>
                  <div style={{ fontSize: 13.5, marginBottom: 14 }}>{proj.description}</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                    {proj.tags.map((tag, j) => (
                      <span
                        key={j}
                        onClick={() => toggleTag(tag)}
                        style={{
                          background: selectedTags.includes(tag) ? '#bdbdbd' : '#e2e1df',
                          color: selectedTags.includes(tag) ? '#222' : '#222',
                          border: "1px solid #1A1A1A",
                          borderRadius: 6,
                          padding: "2px 12px",
                          fontSize: 13,
                          marginRight: 6,
                          marginBottom: 4,
                          display: "inline-block",
                          cursor: 'pointer',
                          fontWeight: selectedTags.includes(tag) ? 700 : 400,
                          transition: 'background 0.2s, color 0.2s',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    {/* See more button with border and correct link */}
                    {proj.link && (proj.link.startsWith("http://") || proj.link.startsWith("https://")) ? (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: "Inconsolata, monospace",
                          fontSize: 15,
                          background: "none",
                          border: "1.2px solid #222",
                          borderRadius: 18,
                          color: "#222",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "6px 16px",
                          textDecoration: "none"
                        }}
                      >
                        see more
                        <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
                      </a>
                    ) : (
                    <button
                        onClick={() => {
                          navigate(`/${proj.link || proj.buttonAction}`);
                          setTimeout(() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); }, 0);
                        }}
                      style={{
                        fontFamily: "Inconsolata, monospace",
                        fontSize: 15,
                        background: "none",
                          border: "1.2px solid #222",
                          borderRadius: 18,
                        color: "#222",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "6px 16px",
                      }}
                    >
                      see more
                      <span style={{ fontSize: 18, marginLeft: 2 }}>→</span>
                    </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Thin black bar at the bottom of the section */}
      <div style={{ width: '100vw', height: 1, background: '#1A1A1A', margin: 0, padding: 0 }} />
      <style>{`
        @media (max-width: 900px) {
          .projrevamp-main-flex {
            flex-direction: column !important;
            max-width: 100vw !important;
            height: auto !important;
          }
          .projrevamp-sidebar {
            width: 100vw !important;
            min-width: 0 !important;
            max-width: 100vw !important;
            height: auto !important;
            border-right: none !important;
            border-bottom: 1px solid #1A1A1A !important;
            position: relative !important;
            z-index: 2;
          }
          .projrevamp-project-list {
            width: 100vw !important;
            min-width: 0 !important;
            max-width: 100vw !important;
            height: auto !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            z-index: 2;
          }
        }
      `}</style>
    </>
  );
}; 