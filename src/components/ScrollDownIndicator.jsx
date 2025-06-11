import React from "react";

export const ScrollDownIndicator = () => (
  <div
    style={{
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      opacity: 0.7,
      pointerEvents: 'none',
    }}
    className="hidden md:flex"
  >
    <span style={{ fontSize: 12, color: '#222', marginBottom: 4 }}>Scroll down</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  </div>
); 