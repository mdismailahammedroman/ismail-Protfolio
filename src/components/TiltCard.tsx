import React, { useState, useRef } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    
    // Position of cursor relative to card bounds (0 to width/height)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize coordinates to -0.5 to 0.5 range
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    // Calculate rotation angles (max tilt 12 degrees)
    const tiltX = -py * 12;
    const tiltY = px * 12;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)',
    });

    // Sheen/Glare gradient direction and opacity
    const glareAngle = Math.atan2(y - rect.height / 2, x - rect.width / 2) * (180 / Math.PI);
    setGlareStyle({
      opacity: 0.15,
      background: `linear-gradient(${glareAngle - 90}deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%)`,
      transition: 'opacity 0.1s ease',
    });
  };

  const handlePointerLeave = () => {
    // Reset smoothly
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
    });
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.5s ease',
    });
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative rounded-2xl glass-card overflow-hidden will-change-transform ${className}`}
      style={tiltStyle}
    >
      {/* Glare sheen element */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={glareStyle}
      />
      {children}
    </div>
  );
};
