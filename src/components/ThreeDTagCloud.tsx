import React, { useEffect, useRef, useState } from 'react';

const SKILLS = [
  { name: 'Node.js', color: 'text-green-400 border-green-500/20' },
  { name: 'Express.js', color: 'text-gray-300 border-gray-500/20' },
  { name: 'MongoDB', color: 'text-green-500 border-green-500/20' },
  { name: 'TypeScript', color: 'text-blue-400 border-blue-500/20' },
  { name: 'JavaScript', color: 'text-yellow-400 border-yellow-500/20' },
  { name: 'React.js', color: 'text-cyan-400 border-cyan-500/20' },
  { name: 'Next.js', color: 'text-white border-white/20' },
  { name: 'Tailwind CSS', color: 'text-teal-400 border-teal-500/20' },
  { name: 'PostgreSQL', color: 'text-sky-400 border-sky-500/20' },
  { name: 'Redis', color: 'text-red-400 border-red-500/20' },
  { name: 'Docker', color: 'text-blue-500 border-blue-500/20' },
  { name: 'Git', color: 'text-orange-500 border-orange-500/20' },
  { name: 'JWT', color: 'text-pink-400 border-pink-500/20' },
  { name: 'Firebase', color: 'text-amber-400 border-amber-500/20' },
  { name: 'Redux', color: 'text-violet-400 border-violet-500/20' },
  { name: 'Zod', color: 'text-purple-400 border-purple-500/20' },
  { name: 'REST APIs', color: 'text-indigo-400 border-indigo-500/20' },
  { name: 'Mongoose', color: 'text-red-500 border-red-500/20' },
  { name: 'OAuth', color: 'text-orange-400 border-orange-400/20' },
];

interface Tag {
  name: string;
  color: string;
  x: number;
  y: number;
  z: number;
}

export const ThreeDTagCloud: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tags, setTags] = useState<Tag[]>([]);
  
  // Track rotation speed and angle
  const angleX = useRef(0.003);
  const angleY = useRef(0.003);
  
  // Mouse position and drag state
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const containerSize = useRef({ width: 350, height: 350 });

  useEffect(() => {
    // Fibonacci sphere distribution
    const count = SKILLS.length;
    const tempTags: Tag[] = SKILLS.map((skill, idx) => {
      const phi = Math.acos(-1 + (2 * idx) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      // Coordinates normalized on unit sphere (-1 to 1)
      const x = Math.cos(theta) * Math.sin(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(phi);
      
      return {
        name: skill.name,
        color: skill.color,
        x,
        y,
        z,
      };
    });
    
    setTags(tempTags);
    
    // Update container dimensions
    if (containerRef.current) {
      containerSize.current = {
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      };
    }
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const rotateTags = () => {
      if (tags.length === 0) return;

      const cosX = Math.cos(angleX.current);
      const sinX = Math.sin(angleX.current);
      const cosY = Math.cos(angleY.current);
      const sinY = Math.sin(angleY.current);

      setTags((prevTags) =>
        prevTags.map((tag) => {
          // Rotate about X axis
          const y1 = tag.y * cosX - tag.z * sinX;
          const z1 = tag.y * sinX + tag.z * cosX;

          // Rotate about Y axis
          const x2 = tag.x * cosY + z1 * sinY;
          const z2 = -tag.x * sinY + z1 * cosY;

          return {
            ...tag,
            x: x2,
            y: y1,
            z: z2,
          };
        })
      );

      // Decelerate rotation back to base speed if not dragging/hovered
      if (!isDragging.current) {
        angleX.current += (0.003 - angleX.current) * 0.05;
        angleY.current += (0.003 - angleY.current) * 0.05;
      }

      animationFrameId = requestAnimationFrame(rotateTags);
    };

    animationFrameId = requestAnimationFrame(rotateTags);
    return () => cancelAnimationFrame(animationFrameId);
  }, [tags.length]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    if (isDragging.current) {
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;
      
      // Speed up rotation based on dragging distance
      angleY.current = deltaX * 0.006;
      angleX.current = -deltaY * 0.006;

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    } else {
      // Rotate based on hover position relative to center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate speed proportional to distance from center
      angleY.current = (clientX - centerX) * 0.00008;
      angleX.current = -(clientY - centerY) * 0.00008;
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    previousMousePosition.current = { x: e.clientX, y: e.clientY };
    if (containerRef.current) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  // Determine sphere radius based on viewport
  const radius = containerSize.current.width * 0.35;
  const cx = containerSize.current.width / 2;
  const cy = containerSize.current.height / 2;

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      className="relative w-full aspect-square max-w-[420px] mx-auto select-none cursor-grab active:cursor-grabbing flex touch-none"
    >
      {/* Visual background center glow */}
      <div className="absolute inset-12 rounded-full radial-glow-violet -z-10 blur-xl opacity-80 pointer-events-none" />

      {tags.map((tag, idx) => {
        // Perspective scaling
        // tag.z goes from -1 (back) to 1 (front)
        const depth = radius * 1.5;
        const scale = (depth + tag.z * radius) / depth;
        const opacity = (tag.z + 1.5) / 2.5; // range 0.2 to 1
        
        // 2D Projection coordinates
        const x = cx + tag.x * radius;
        const y = cy + tag.y * radius;

        // Custom styling based on depth
        const zIndex = Math.round((tag.z + 1) * 100);
        const blurAmount = Math.max(0, (1 - tag.z) * 1.5); // Blur background items

        return (
          <div
            key={idx}
            className={`absolute px-3 py-1.5 rounded-full border text-xs sm:text-sm font-semibold glass transition-shadow duration-300 pointer-events-none ${tag.color}`}
            style={{
              transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`,
              opacity: opacity,
              zIndex: zIndex,
              filter: `blur(${blurAmount}px)`,
              boxShadow: tag.z > 0.4 ? `0 0 15px rgba(139, 92, 246, ${tag.z * 0.15})` : 'none',
            }}
          >
            {tag.name}
          </div>
        );
      })}
    </div>
  );
};
