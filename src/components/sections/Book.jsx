import React, { useEffect, useRef, useState } from "react";
import { PageFlip } from 'page-flip';
import { RevealOnScroll } from "../RevealOnScroll";
import { BookProgressBar } from '../../components/BookProgressBar';
import { FollowMouseHint } from '../../components/FollowMouseHint';

export const Book = () => {
  const bookRef = useRef(null);
  const pageFlipRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [showHint, setShowHint] = useState(true);

  // Sample pages content - you can customize these
  const pages = [
    {
      title: "Cover",
      content: "My Story Book",
      isHard: true,
      backgroundColor: "bg-amber-600",
      textColor: "text-white"
    },
    {
      title: "Page 1",
      content: "Welcome to my journey...",
      isHard: false,
      backgroundColor: "bg-white",
      textColor: "text-gray-800"
    },
    {
      title: "Page 2", 
      content: "This is where my story begins...",
      isHard: false,
      backgroundColor: "bg-white",
      textColor: "text-gray-800"
    },
    {
      title: "Page 3",
      content: "Chapter One: The Beginning",
      isHard: false,
      backgroundColor: "bg-white",
      textColor: "text-gray-800"
    },
    {
      title: "Page 4",
      content: "Every great story has a start...",
      isHard: false,
      backgroundColor: "bg-white",
      textColor: "text-gray-800"
    },
    {
      title: "Page 5",
      content: "Adventures await around every corner...",
      isHard: false,
      backgroundColor: "bg-white",
      textColor: "text-gray-800"
    },
    {
      title: "Page 6",
      content: "Learning and growing through experiences...",
      isHard: false,
      backgroundColor: "bg-white",
      textColor: "text-gray-800"
    },
    {
      title: "Page 7",
      content: "Dreams taking shape...",
      isHard: false,
      backgroundColor: "bg-white",
      textColor: "text-gray-800"
    },
    {
      title: "Page 8",
      content: "The future is bright with possibilities...",
      isHard: false,
      backgroundColor: "bg-white",
      textColor: "text-gray-800"
    },
    {
      title: "Back Cover",
      content: "Thank you for reading",
      isHard: true,
      backgroundColor: "bg-amber-600",
      textColor: "text-white"
    }
  ];

  // Show hint only when mouse is in first section and not over the book
  useEffect(() => {
    const handleSectionMouseMove = (e) => {
      // Only show if user is in the first section (book section)
      const bookSection = document.getElementById('book');
      if (bookSection) {
        const rect = bookSection.getBoundingClientRect();
        // If the top of the section is out of view, hide the hint
        if (rect.top < -rect.height / 2) {
          setShowHint(false);
          return;
        }
      }
      // If mouse is over the book, do not show
      if (bookRef.current) {
        const rect = bookRef.current.getBoundingClientRect();
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          setShowHint(false);
          return;
        }
      }
      setShowHint(true);
    };
    window.addEventListener('mousemove', handleSectionMouseMove);
    return () => window.removeEventListener('mousemove', handleSectionMouseMove);
  }, []);

  useEffect(() => {
    if (bookRef.current && !pageFlipRef.current) {
      // Initialize PageFlip for two-page spread
      pageFlipRef.current = new PageFlip(bookRef.current, {
        width: 480,
        height: 600,
        size: "fixed",
        minWidth: 480,
        maxWidth: 960,
        minHeight: 600,
        maxHeight: 600,
        showCover: false,
        flippingTime: 1000,
        usePortrait: false,
        autoSize: false,
        drawShadow: true,
        mobileScrollSupport: false,
      });

      // Load pages
      const pageElements = bookRef.current.querySelectorAll('.page');
      pageFlipRef.current.loadFromHTML(pageElements);

      // Set up event listeners
      pageFlipRef.current.on('flip', (e) => {
        setCurrentPage(e.data);
      });
      pageFlipRef.current.on('init', (e) => {
        setTotalPages(pageFlipRef.current.getPageCount());
        setCurrentPage(e.data.page);
      });
    }

    // Cleanup function
    return () => {
      if (pageFlipRef.current) {
        try {
          pageFlipRef.current.destroy();
          pageFlipRef.current = null;
        } catch (error) {
          console.warn('Error destroying PageFlip:', error);
        }
      }
    };
  }, []);

  // Handler for progress bar
  const handleChangePage = (pageNum) => {
    if (pageFlipRef.current) {
      pageFlipRef.current.flip(pageNum);
    }
  };

  return (
    <section 
      id="book" 
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-8"
      style={{ 
        backgroundColor: '#E2E1DF',
        backgroundImage: 'url("abstract-background-cement-wall-shadow-light-concept.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden'
      }}
    >
      <FollowMouseHint visible={showHint} />
      <RevealOnScroll>
        <div className="w-full max-w-4xl mx-auto flex items-center justify-center">

          {/* Book Container - Two Page Spread */}
          <div className="flex justify-center items-center">
            <div 
              ref={bookRef}
              className="book-container book-shadow"
              style={{ 
                width: '100%',
                maxWidth: '960px', 
                height: '600px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'visible',
                filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.25)) drop-shadow(0 15px 25px rgba(0, 0, 0, 0.15))'
              }}
            >
              {pages.map((_, idx) => (
                <div
                  key={idx}
                  className="page"
                  data-density={idx === 0 || idx === pages.length - 1 ? "hard" : "soft"}
                  style={{
                    width: "480px",
                    height: "600px",
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Cover page (idx === 0) */}
                  {idx === 0 && (
                    <img
                      src="p1.gif"
                      alt="Cover GIF"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 2
                      }}
                    />
                  )}
                  {/* First page (idx === 1) */}
                  {idx === 1 && (
                    <>
                      <img
                        src="p2.gif"
                        alt="Page 1 GIF"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          zIndex: 2
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: 18,
                        right: 10,
                        width: 260,
                        color: '#102a13',
                        zIndex: 3,
                        textAlign: 'left',
                        borderRadius: 8,
                        padding: '18px 18px 14px 18px',
                      }}>
                        <div style={{
                          fontFamily: 'Grape Nuts',
                          fontSize: '2.6rem',
                          marginBottom: 12,
                          letterSpacing: 1,
                          lineHeight: 1.1,
                        }}>
                          ANGIE C.
                        </div>
                        <div style={{
                          fontFamily: 'Inconsolata, monospace',
                          fontSize: '0.85rem',
                          fontWeight: 400,
                          marginBottom: 14,
                          letterSpacing: 0.1,
                        }}>
                          DEVELOPER. DESIGNER. ARTIST.
                        </div>
                        <div style={{
                          fontFamily: 'Inconsolata, monospace',
                          fontSize: '0.75rem',
                          fontWeight: 400,
                          lineHeight: 1.5,
                          letterSpacing: 0,
                          whiteSpace: 'pre-line',
                        }}>
                          {`Currently studying computer science and art at Carnegie Mellon University. Creating cool stuff on the daily.\n\ntake a look around, and feel free to reach out here :)`}
                        </div>
                      </div>
                    </>
                  )}
                  {/* New pages with custom images */}
                  {idx === 2 && (
                    <img
                      src="page2.jpg"
                      alt="Page 2"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 2
                      }}
                    />
                  )}
                  {idx === 3 && (
                    <img
                      src="page3.jpg"
                      alt="Page 3"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 2
                      }}
                    />
                  )}
                  {idx === 4 && (
                    <img
                      src="page4.jpg"
                      alt="Page 4"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 2
                      }}
                    />
                  )}
                  {idx === 5 && (
                    <img
                      src="page5.jpg"
                      alt="Page 5"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 2
                      }}
                    />
                  )}
                  {/* Background image, flipped for left pages */}
                  <img
                    src="open-blank-book.jpg"
                    alt="Book page"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      zIndex: 0,
                      transform: idx > 0 && idx % 2 === 0 ? 'scaleX(-1)' : 'none',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </RevealOnScroll>
      <BookProgressBar
        currentPage={currentPage} 
        totalPages={totalPages}
        onChangePage={handleChangePage}
      />
    </section>
  );
}; 