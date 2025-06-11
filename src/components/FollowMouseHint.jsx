import React, { useEffect, useState } from "react";

export const FollowMouseHint = ({ visible }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!visible) return;
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x + 16,
        top: pos.y + 16,
        pointerEvents: "none",
        zIndex: 100,
        color: "#333",
        background: "rgba(255,255,255,0.8)",
        borderRadius: 6,
        padding: "4px 12px",
        fontSize: 14,
        fontFamily: "Inconsolata, monospace",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        transition: "opacity 0.2s",
        opacity: 0.85,
        whiteSpace: "nowrap",
      }}
    >
      ⚝ scroll to see more
    </div>
  );
}; 