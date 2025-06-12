import React, { useRef } from "react";

export const BookProgressBar = ({ currentPage, totalPages, onChangePage }) => {
  const barRef = useRef(null);

  const handleClick = (e) => {
    const rect = barRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    const newPage = Math.round(percent * (totalPages - 1));
    onChangePage(newPage);
  };

  const progressPercent = (currentPage / (totalPages > 1 ? totalPages - 1 : 1)) * 100;

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 30 }}>
      <div
        ref={barRef}
        onClick={handleClick}
        style={{
          width: 480, // half the book width
          height: 6,
          background: 'rgba(243,244,246,0.75)', // lighter grey, 75% opacity
          borderRadius: 3,
          position: 'relative',
          cursor: 'pointer',
          boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${progressPercent}%`,
            background: '#bbb',
            borderRadius: 3,
            transition: 'width 0.2s',
          }}
        />
      </div>
    </div>
  );
}; 