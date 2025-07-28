import { useState, useRef, useEffect } from 'react';
import ImageModal from './ImageModal';

const ClickableGallery = ({ 
  images, 
  title, 
  autoScrollSpeed = 1,
  imageScale = 1 
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalAlt, setModalAlt] = useState('');
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const imageWidth = 380 * imageScale;
  const imageGap = 16; // 4 * 4px (gap-4)

  const openModal = (imageSrc, altText) => {
    setModalImage(imageSrc);
    setModalAlt(altText);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Auto-scroll animation
  useEffect(() => {
    const animate = () => {
      if (isAutoScrolling && containerRef.current) {
        setScrollPosition(prev => {
          const newPosition = prev - autoScrollSpeed;
          const containerWidth = containerRef.current?.scrollWidth || 0;
          const clientWidth = containerRef.current?.clientWidth || 0;
          if (Math.abs(newPosition) >= containerWidth - clientWidth) {
            return 0;
          }
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
  }, [isAutoScrolling, autoScrollSpeed]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(true);

  // Manual scroll functions
  const scrollLeft = () => {
    const scrollAmount = imageWidth + imageGap;
    setScrollPosition(prev => {
      const newPosition = prev + scrollAmount;
      const containerWidth = containerRef.current?.scrollWidth || 0;
      const clientWidth = containerRef.current?.clientWidth || 0;
      if (newPosition >= 0) {
        return -(containerWidth - clientWidth);
      }
      return newPosition;
    });
  };

  const scrollRight = () => {
    const scrollAmount = imageWidth + imageGap;
    setScrollPosition(prev => {
      const newPosition = prev - scrollAmount;
      const containerWidth = containerRef.current?.scrollWidth || 0;
      const clientWidth = containerRef.current?.clientWidth || 0;
      if (Math.abs(newPosition) >= containerWidth - clientWidth) {
        return 0;
      }
      return newPosition;
    });
  };

  return (
    <div className="w-full">
      {title && (
        <div className="text-black text-2xl md:text-2xl font-bold mb-2 text-center" 
             style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Courier New, monospace' }}>
          {title}
        </div>
      )}
      
      <div 
        ref={containerRef}
        className="w-screen h-[600px] mb-15 overflow-hidden relative"
        style={{ 
          position: 'relative', 
          left: '50%', 
          right: '50%', 
          marginLeft: '-50vw', 
          marginRight: '-50vw' 
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left Arrow Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border-2 border-black hover:bg-gray-100 text-black rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-lg"
          aria-label="Scroll left"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white border-2 border-black hover:bg-gray-100 text-black rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200 shadow-lg"
          aria-label="Scroll right"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
        <div 
          className="flex gap-4 h-full items-center transition-transform duration-1000 ease-out"
          style={{ 
            transform: `translateX(${scrollPosition}px)`,
            minWidth: 'max-content'
          }}
        >
          {/* Duplicate images for seamless loop */}
          {[...images, ...images].map((image, index) => (
            <div 
              key={index}
              className="flex-shrink-0 h-full flex items-center justify-center"
              style={{ 
                width: `${380 * imageScale}px`,
                height: `${850 * imageScale}px`
              }}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-contain cursor-pointer hover:opacity-90 transition-opacity rounded-lg shadow-lg"
                style={{ 
                  maxWidth: `${380 * imageScale}px`,
                  maxHeight: `${850 * imageScale}px`
                }}
                onClick={() => openModal(image, `Gallery Image ${index + 1}`)}
              />
            </div>
          ))}
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

export default ClickableGallery; 