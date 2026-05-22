import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  px: number;
  py: number;
}

export const ThreeDBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particleCount = Math.min(100, Math.floor((width * height) / 12000));
    const particles: Particle[] = [];
    const maxDepth = 1000;

    // Initialize particles in a 3D box
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * maxDepth,
        px: 0,
        py: 0,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX - width / 2;
      mouseRef.current.targetY = e.clientY - height / 2;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const fov = 250; // Field of view / perspective factor

    const render = () => {
      ctx.fillStyle = '#030014';
      ctx.fillRect(0, 0, width, height);

      // Add a subtle gradient background glow
      const bgGlow = ctx.createRadialGradient(
        width / 2 + mouseRef.current.x * 0.3,
        height / 2 + mouseRef.current.y * 0.3,
        10,
        width / 2,
        height / 2,
        Math.max(width, height)
      );
      bgGlow.addColorStop(0, '#0a0524');
      bgGlow.addColorStop(0.5, '#050215');
      bgGlow.addColorStop(1, '#030014');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse tracking
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      ctx.save();
      ctx.translate(width / 2, height / 2);

      // Rotate camera slightly based on mouse
      const rotationX = -mouseRef.current.y * 0.00015;
      const rotationY = mouseRef.current.x * 0.00015;

      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      // মাউসের স্ক্রিন পজিশন (ট্রান্সলেটের পর অ্যাডজাস্ট করা)
      const mouseScreenX = mouseRef.current.x;
      const mouseScreenY = mouseRef.current.y;

      // Update and project particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Speed of movement forward (along Z axis)
        p.z -= 0.8;

        // Reset if passed viewport
        if (p.z <= 0) {
          p.z = maxDepth;
          p.x = (Math.random() - 0.5) * width * 1.5;
          p.y = (Math.random() - 0.5) * height * 1.5;
          p.px = 0; // রিসেট করার সময় px,py রিসেট করুন
          p.py = 0;
        }

        // Apply 3D Rotation on X and Y based on camera tilt
        let rx1 = p.x;
        let ry1 = p.y * cosX - p.z * sinX;
        let rz1 = p.y * sinX + p.z * cosX;

        let rx2 = rx1 * cosY + rz1 * sinY;
        let ry2 = ry1;
        let rz2 = -rx1 * sinY + rz1 * cosY;

        // Save rotated coordinates
        const scale = fov / (fov + rz2);
        const screenX = rx2 * scale;
        const screenY = ry2 * scale;

        // Particle size depends on depth (closer = bigger)
        const size = Math.max(0.5, (1 - rz2 / maxDepth) * 3);
        const alpha = Math.max(0.05, Math.min(0.8, (1 - rz2 / maxDepth)));

        // Color shifts from cyan to violet based on coordinate
        ctx.fillStyle = i % 2 === 0 
          ? `rgba(6, 182, 212, ${alpha})` // Cyan
          : `rgba(139, 92, 246, ${alpha})`; // Violet

        // Draw particle
        ctx.beginPath();
        ctx.arc(screenX, screenY, size, 0, Math.PI * 2);
        ctx.fill();

        // Connect lines if close to other particles
        if (p.px !== 0 && p.py !== 0) {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            if (p2.px !== 0 && p2.py !== 0) {
              const dx = p.x - p2.x;
              const dy = p.y - p2.y;
              const dz = p.z - p2.z;
              const dist3d = Math.sqrt(dx * dx + dy * dy + dz * dz);

              if (dist3d < 120) {
                const lineAlpha = (1 - dist3d / 120) * 0.12 * (1 - rz2 / maxDepth);
                ctx.strokeStyle = i % 3 === 0 
                  ? `rgba(6, 182, 212, ${lineAlpha})` 
                  : i % 3 === 1 
                  ? `rgba(139, 92, 246, ${lineAlpha})`
                  : `rgba(217, 70, 239, ${lineAlpha})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(screenX, screenY);
                // Project second point
                let prx1 = p2.x;
                let pry1 = p2.y * cosX - p2.z * sinX;
                let prz1 = p2.y * sinX + p2.z * cosX;
                let prx2 = prx1 * cosY + prz1 * sinY;
                let pry2 = pry1;
                let prz2 = -prx1 * sinY + prz1 * cosY;
                const p2scale = fov / (fov + prz2);
                ctx.lineTo(prx2 * p2scale, pry2 * p2scale);
                ctx.stroke();
              }
            }
          }
        }

        // Draw interactive connection to mouse pointer if active - ফিক্স করা হয়েছে
        if (mouseRef.current.active) {
          const mdx = screenX - mouseScreenX;
          const mdy = screenY - mouseScreenY;
          const distMouse = Math.sqrt(mdx * mdx + mdy * mdy);

          if (distMouse < 180) {
            const lineAlpha = (1 - distMouse / 180) * 0.25 * (1 - rz2 / maxDepth);
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(screenX, screenY);
            ctx.lineTo(mouseScreenX, mouseScreenY); // ← এই লাইনটা আগে ছিল না
            ctx.stroke();
          }
        }

        p.px = screenX;
        p.py = screenY;
      }

      ctx.restore();
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ThreeDBackground;