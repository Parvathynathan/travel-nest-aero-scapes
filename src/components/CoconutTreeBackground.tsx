
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

    const drawAirplane = (x: number, y: number, scale: number = 1, rotation: number = 0) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.scale(scale, scale);

      // Airplane body
      ctx.fillStyle = '#4A90E2';
      ctx.beginPath();
      ctx.ellipse(0, 0, 25, 8, 0, 0, Math.PI * 2);
      ctx.fill();

      // Wings
      ctx.fillStyle = '#357ABD';
      ctx.beginPath();
      ctx.ellipse(-5, 0, 35, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Tail
      ctx.fillStyle = '#2E6BA8';
      ctx.beginPath();
      ctx.moveTo(-20, 0);
      ctx.lineTo(-30, -8);
      ctx.lineTo(-30, 8);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    const drawDottedPath = (startX: number, startY: number, endX: number, endY: number) => {
      ctx.strokeStyle = '#B0C4DE';
      ctx.lineWidth = 2;
      ctx.setLineDash([8, 12]);
      
      ctx.beginPath();
      
      // Create curved path
      const midX = (startX + endX) / 2;
      const midY = (startY + endY) / 2 - 50;
      
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(midX, midY, endX, endY);
      ctx.stroke();
      ctx.setLineDash([]);
    };

    const drawPalmTree = (x: number, y: number, scale: number = 1) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);

      // Tree trunk
      ctx.fillStyle = '#8B4513';
      ctx.fillRect(-4, -80, 8, 80);
      
      // Palm leaves - simplified
      ctx.fillStyle = '#228B22';
      ctx.strokeStyle = '#228B22';
      ctx.lineWidth = 3;
      
      // Draw 6 palm fronds
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const leafLength = 40;
        
        ctx.beginPath();
        ctx.moveTo(0, -80);
        ctx.lineTo(
          Math.cos(angle) * leafLength,
          -80 - Math.sin(angle) * leafLength * 0.5
        );
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawCloud = (x: number, y: number, scale: number = 1) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      
      ctx.fillStyle = 'rgba(176, 196, 222, 0.6)';
      
      // Cloud made of circles
      ctx.beginPath();
      ctx.arc(-15, 0, 12, 0, Math.PI * 2);
      ctx.arc(0, -5, 15, 0, Math.PI * 2);
      ctx.arc(15, 0, 12, 0, Math.PI * 2);
      ctx.arc(0, 8, 10, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw clouds
      drawCloud(canvas.width * 0.2, canvas.height * 0.2, 0.8);
      drawCloud(canvas.width * 0.7, canvas.height * 0.15, 0.6);
      drawCloud(canvas.width * 0.9, canvas.height * 0.3, 0.4);
      
      // Draw airplanes with dotted paths
      const airplane1X = canvas.width * 0.15;
      const airplane1Y = canvas.height * 0.25;
      const airplane2X = canvas.width * 0.85;
      const airplane2Y = canvas.height * 0.35;
      
      drawAirplane(airplane1X, airplane1Y, 0.8, Math.PI / 6);
      drawDottedPath(airplane1X - 50, airplane1Y + 20, airplane2X + 50, airplane2Y - 20);
      
      drawAirplane(airplane2X, airplane2Y, 0.6, -Math.PI / 8);
      
      // Additional dotted paths
      drawDottedPath(canvas.width * 0.1, canvas.height * 0.4, canvas.width * 0.6, canvas.height * 0.2);
      drawDottedPath(canvas.width * 0.4, canvas.height * 0.6, canvas.width * 0.9, canvas.height * 0.4);
      
      // Draw palm trees at bottom
      drawPalmTree(canvas.width * 0.05, canvas.height, 0.6);
      drawPalmTree(canvas.width * 0.95, canvas.height, 0.8);
      
      // Additional small airplane
      drawAirplane(canvas.width * 0.5, canvas.height * 0.1, 0.4, Math.PI / 4);
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
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
      style={{ zIndex: 1 }}
    />
  );
};

export default CoconutTreeBackground;
