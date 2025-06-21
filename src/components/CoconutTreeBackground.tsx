
import { useEffect, useRef } from 'react';

const CoconutTreeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawCoconutTree = (x: number, y: number, scale: number = 1) => {
      // Tree trunk
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(x - 8 * scale, y - 200 * scale, 16 * scale, 200 * scale);
      
      // Coconut leaves
      ctx.strokeStyle = '#228B22';
      ctx.lineWidth = 4 * scale;
      
      // Draw palm fronds
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4;
        const leafLength = 80 * scale;
        
        ctx.beginPath();
        ctx.moveTo(x, y - 200 * scale);
        ctx.quadraticCurveTo(
          x + Math.cos(angle) * leafLength * 0.7,
          y - 200 * scale - Math.sin(angle) * leafLength * 0.3,
          x + Math.cos(angle) * leafLength,
          y - 200 * scale - Math.sin(angle) * leafLength
        );
        ctx.stroke();
        
        // Add leaf details
        for (let j = 1; j <= 3; j++) {
          const detailX = x + Math.cos(angle) * leafLength * (j / 4);
          const detailY = y - 200 * scale - Math.sin(angle) * leafLength * (j / 4);
          
          ctx.beginPath();
          ctx.moveTo(detailX, detailY);
          ctx.lineTo(
            detailX + Math.cos(angle + Math.PI/2) * 15 * scale,
            detailY - Math.sin(angle + Math.PI/2) * 15 * scale
          );
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(detailX, detailY);
          ctx.lineTo(
            detailX + Math.cos(angle - Math.PI/2) * 15 * scale,
            detailY - Math.sin(angle - Math.PI/2) * 15 * scale
          );
          ctx.stroke();
        }
      }
      
      // Coconuts
      ctx.fillStyle = '#8B4513';
      for (let i = 0; i < 3; i++) {
        const coconutAngle = (i * Math.PI) / 6 - Math.PI/12;
        const coconutX = x + Math.cos(coconutAngle) * 30 * scale;
        const coconutY = y - 180 * scale - Math.sin(coconutAngle) * 20 * scale;
        
        ctx.beginPath();
        ctx.ellipse(coconutX, coconutY, 8 * scale, 12 * scale, coconutAngle, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw multiple coconut trees at different positions and scales
      drawCoconutTree(canvas.width * 0.1, canvas.height, 0.8);
      drawCoconutTree(canvas.width * 0.85, canvas.height, 0.6);
      drawCoconutTree(canvas.width * 0.95, canvas.height, 0.4);
    };

    resizeCanvas();
    draw();

    window.addEventListener('resize', () => {
      resizeCanvas();
      draw();
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
      style={{ zIndex: 1 }}
    />
  );
};

export default CoconutTreeBackground;
