import React, { useEffect, useRef } from 'react';

interface PlanetData {
  name: string;
  color: string;
  radius: number;
  speed: number;
  inclination: number; // angle in radians to tilt the orbital path
  phase: number; // initial angle offset
}

export const ThreeDSpaceSystem: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    // Setup 3D Earth points
    const earthRadius = 185;

    // Technology satellites (orbiting planets - "goroho")
    const planets: PlanetData[] = [
      { name: 'React.js', color: '#00f2fe', radius: 240, speed: 0.009, inclination: 0.25, phase: 0 },
      { name: 'Node.js', color: '#22c55e', radius: 300, speed: 0.007, inclination: -0.2, phase: Math.PI / 3 },
      { name: 'TypeScript', color: '#3b82f6', radius: 360, speed: 0.0055, inclination: 0.35, phase: (2 * Math.PI) / 3 },
      { name: 'MongoDB', color: '#10b981', radius: 420, speed: 0.0045, inclination: -0.35, phase: Math.PI },
      { name: 'Express.js', color: '#d946ef', radius: 480, speed: 0.0035, inclination: 0.15, phase: (4 * Math.PI) / 3 },
      { name: 'Docker', color: '#f97316', radius: 540, speed: 0.0025, inclination: -0.45, phase: (5 * Math.PI) / 3 },
    ];

    let planetAngles = planets.map((p) => p.phase);
    let earthAngle = 0;

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.clientWidth;
      height = canvas.height = container.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate cursor position relative to center of the Hero container
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - width / 2;
      const mouseY = e.clientY - rect.top - height / 2;
      
      // Limit range to prevent extreme rotations
      mouseRef.current.targetX = Math.max(-width / 2, Math.min(width / 2, mouseX));
      mouseRef.current.targetY = Math.max(-height / 2, Math.min(height / 2, mouseY));
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const fov = 650; // Perspective depth coordinate

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation based on cursor coordinates
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const cx = width / 2;
      const cy = height / 2;

      // Base camera tilts on mouse positions
      const camRotX = -mouseRef.current.y * 0.0006;
      const camRotY = mouseRef.current.x * 0.0006;

      const cosCX = Math.cos(camRotX);
      const sinCX = Math.sin(camRotX);
      const cosCY = Math.cos(camRotY);
      const sinCY = Math.sin(camRotY);

      // 1. RENDER CENTRAL EARTH GLOBE
      earthAngle += 0.003; // rotate earth slowly
      const cosE = Math.cos(earthAngle);
      const sinE = Math.sin(earthAngle);

      ctx.save();
      ctx.translate(cx, cy);

      // Helper to project 3D point to 2D
      const projectPoint = (x: number, y: number, z: number) => {
        let ex = x * cosE - z * sinE;
        let ey = y;
        let ez = x * sinE + z * cosE;

        let rx1 = ex;
        let ry1 = ey * cosCX - ez * sinCX;
        let rz1 = ey * sinCX + ez * cosCX;

        let rx2 = rx1 * cosCY + rz1 * sinCY;
        let ry2 = ry1;
        let rz2 = -rx1 * sinCY + rz1 * cosCY;

        const scale = fov / (fov + rz2);
        return {
          x: rx2 * scale,
          y: ry2 * scale,
          z: rz2
        };
      };

      // 1. DRAW EARTH LATITUDE GRID LINES
      const latitudeAngles = [-60, -30, 0, 30, 60];
      latitudeAngles.forEach((latVal) => {
        const radLat = (latVal * Math.PI) / 180;
        const r = earthRadius * Math.cos(radLat);
        const y = earthRadius * Math.sin(radLat);

        let prevPt: any = null;
        for (let lonVal = 0; lonVal <= 360; lonVal += 10) {
          const radLon = (lonVal * Math.PI) / 180;
          const x = r * Math.cos(radLon);
          const z = r * Math.sin(radLon);

          const currentPt = projectPoint(x, y, z);
          if (prevPt) {
            const avgZ = (currentPt.z + prevPt.z) / 2;
            const lineOpacity = avgZ > 0 
              ? Math.max(0.01, (1 - avgZ / earthRadius) * 0.04) 
              : Math.max(0.04, (1 - avgZ / earthRadius) * 0.16);

           ctx.strokeStyle = `rgba(0, 242, 254, ${lineOpacity})`;
            ctx.lineWidth = avgZ > 0 ? 0.35 : 0.65;
            ctx.beginPath();
            ctx.moveTo(prevPt.x, prevPt.y);
            ctx.lineTo(currentPt.x, currentPt.y);
            ctx.stroke();
          }
          prevPt = currentPt;
        }
      });

      // 2. DRAW EARTH LONGITUDE GRID LINES
      const longitudeAngles = [0, 30, 60, 90, 120, 150];
      longitudeAngles.forEach((lonVal) => {
        const radLon = (lonVal * Math.PI) / 180;

        let prevPt: any = null;
        for (let latVal = -90; latVal <= 270; latVal += 10) {
          const radLat = (latVal * Math.PI) / 180;
          const r = earthRadius * Math.cos(radLat);
          const y = earthRadius * Math.sin(radLat);
          const x = r * Math.cos(radLon);
          const z = r * Math.sin(radLon);

          const currentPt = projectPoint(x, y, z);
          if (prevPt) {
            const avgZ = (currentPt.z + prevPt.z) / 2;
            const lineOpacity = avgZ > 0 
              ? Math.max(0.01, (1 - avgZ / earthRadius) * 0.04) 
              : Math.max(0.04, (1 - avgZ / earthRadius) * 0.16);

            ctx.strokeStyle = `rgba(0, 242, 254, ${lineOpacity})`;
            ctx.lineWidth = avgZ > 0 ? 0.35 : 0.65;
            ctx.beginPath();
            ctx.moveTo(prevPt.x, prevPt.y);
            ctx.lineTo(currentPt.x, currentPt.y);
            ctx.stroke();
          }
          prevPt = currentPt;
        }
      });

      // Earth dots rendering removed to show only clean wireframe lines

      // Subtle atmospheric circular backdrop glow
      const radialGlow = ctx.createRadialGradient(0, 0, 10, 0, 0, earthRadius + 25);
      radialGlow.addColorStop(0, 'rgba(168, 85, 247, 0.15)');
      radialGlow.addColorStop(0.6, 'rgba(0, 242, 254, 0.08)');
      radialGlow.addColorStop(1, 'rgba(3, 0, 20, 0)');
      ctx.fillStyle = radialGlow;
      ctx.beginPath();
      ctx.arc(0, 0, earthRadius + 25, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // 2. RENDER PLANETS AND THEIR ORBIT RINGS
      // We will sort planets by their projected depth (z-index) to render back objects first, then Earth, then front objects!
      interface RenderableObject {
        type: 'planet';
        name: string;
        color: string;
        x: number;
        y: number;
        z: number;
        scale: number;
        screenX: number;
        screenY: number;
      }

      const projectedPlanets: RenderableObject[] = [];

      planets.forEach((p, idx) => {
        // Increment angle
        planetAngles[idx] += p.speed;
        const angle = planetAngles[idx];

        // 3D Elliptical Orbit Coordinate (flat)
        const ox = p.radius * Math.cos(angle);
        const oz = p.radius * Math.sin(angle);
        const oy = 0;

        // Apply orbital inclination (tilt orbital plane around Z-axis)
        const cosI = Math.cos(p.inclination);
        const sinI = Math.sin(p.inclination);
        
        let ix = ox * cosI - oy * sinI;
        let iy = ox * sinI + oy * cosI;
        let iz = oz;

        // Apply camera tilt
        let rx1 = ix;
        let ry1 = iy * cosCX - iz * sinCX;
        let rz1 = iy * sinCX + iz * cosCX;

        let rx2 = rx1 * cosCY + rz1 * sinCY;
        let ry2 = ry1;
        let rz2 = -rx1 * sinCY + rz1 * cosCY;

        const scale = fov / (fov + rz2);
        const screenX = cx + rx2 * scale;
        const screenY = cy + ry2 * scale;

        projectedPlanets.push({
          type: 'planet',
          name: p.name,
          color: p.color,
          x: rx2,
          y: ry2,
          z: rz2,
          scale,
          screenX,
          screenY,
        });

        // 3. DRAW ORBIT RING
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = 0.20;
        ctx.lineWidth = 1.4;

        // Trace orbital path ring in 3D
        for (let a = 0; a <= Math.PI * 2 + 0.1; a += 0.06) {
          const pathX = p.radius * Math.cos(a);
          const pathZ = p.radius * Math.sin(a);
          const pathY = 0;

          // Apply inclination tilt
          let ipx = pathX * cosI - pathY * sinI;
          let ipy = pathX * sinI + pathY * cosI;
          let ipz = pathZ;

          // Apply camera tilt
          let rpx1 = ipx;
          let rpy1 = ipy * cosCX - ipz * sinCX;
          let rpz1 = ipy * sinCX + ipz * cosCX;

          let rpx2 = rpx1 * cosCY + rpz1 * sinCY;
          let rpy2 = rpy1;
          let rpz2 = -rpx1 * sinCY + rpz1 * cosCY;

          const pScale = fov / (fov + rpz2);
          const sx = cx + rpx2 * pScale;
          const sy = cy + rpy2 * pScale;

          if (a === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        }
        ctx.stroke();
        ctx.restore();
      });

      // Sort projected planets by depth (Z: positive is far away, negative is close)
      // We render them back-to-front. If they are behind the Earth, we fade them out.
      projectedPlanets.sort((a, b) => b.z - a.z);

      projectedPlanets.forEach((p) => {
        // Calculate distance from center to see if planet is blocked by the Earth
        const dx = p.screenX - cx;
        const dy = p.screenY - cy;
        const dist2D = Math.sqrt(dx * dx + dy * dy);
        
        // Earth blockade checks (is it behind the Earth sphere?)
        const isBehindEarth = p.z > 0 && dist2D < (earthRadius - 10) * p.scale;
        
        let opacity = isBehindEarth ? 0.05 : Math.max(0.2, (fov - p.z) / fov);
        if (opacity > 1) opacity = 1;

        // Draw planet satellite body
        const rSize = Math.max(2.5, 4.5 * p.scale);
        ctx.save();
        ctx.shadowBlur = isBehindEarth ? 0 : 8;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = opacity;
        
        ctx.beginPath();
        ctx.arc(p.screenX, p.screenY, rSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw orbital connectors / subtle lasers
        if (!isBehindEarth) {
          ctx.save();
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = opacity * 0.12;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(p.screenX, p.screenY);
          ctx.stroke();
          ctx.restore();
        }

        // Draw text label next to the planet
        ctx.save();
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = opacity * 0.9;
        // Text scales with depth
        const fontSize = Math.max(8.5, Math.min(14, 11.5 * p.scale));
        ctx.font = `bold ${fontSize}px var(--font-heading)`;
        ctx.shadowBlur = isBehindEarth ? 0 : 4;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
        ctx.fillText(p.name, p.screenX + rSize + 4, p.screenY + rSize / 2);
        ctx.restore();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ 
          display: 'block',
          background: 'radial-gradient(circle at center, #050018 0%, #000000 100%)'
        }}
      />
    </div>
  );
};

export default ThreeDSpaceSystem;