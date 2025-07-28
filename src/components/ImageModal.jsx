import { useEffect, useRef } from 'react';

const ImageModal = ({ isOpen, imageSrc, altText, onClose }) => {
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      // Store current scroll position
      scrollPositionRef.current = window.scrollY;
      document.addEventListener('keydown', handleEscape);
      // Don't hide body overflow to keep background visible
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      // Restore scroll position when modal closes
      if (!isOpen && scrollPositionRef.current !== 0) {
        window.scrollTo(0, scrollPositionRef.current);
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm overflow-auto"
      onClick={onClose}
    >
      <div className="relative max-w-[90vw] max-h-[90vh] my-8">
        <button
          onClick={onClose}
          className="fixed top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center z-10"
          aria-label="Close modal"
        >
          ×
        </button>
        <img
          src={imageSrc}
          alt={altText}
          className="max-w-full max-h-none object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};

export default ImageModal; 