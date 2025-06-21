
import { useEffect, useRef } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  type: 'cloud' | 'plane' | 'balloon';
  rotation: number;
}

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const elementsRef = useRef<FloatingElement[]>([]);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createElements = () => {
      const elements: FloatingElement[] = [];
      const types: FloatingElement['type'][] = ['cloud', 'plane', 'balloon'];
      
      for (let i = 0; i < 15; i++) {
        elements.push({
          id: i,
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 30 + 10,
          speed: Math.random() * 0.5 + 0.1,
          type: types[Math.floor(Math.random() * types.length)],
          rotation: Math.random() * 360,
        });
      }
      
      elementsRef.current = elements;
    };

    const drawCloud = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.arc(x + size * 0.5, y, size * 0.8, 0, Math.PI * 2);
      ctx.arc(x - size * 0.5, y, size * 0.8, 0, Math.PI * 2);
      ctx.arc(x + size * 0.2, y - size * 0.5, size * 0.6, 0, Math.PI * 2);
      ctx.arc(x - size * 0.2, y - size * 0.5, size * 0.6, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawPlane = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      ctx.moveTo(-size, 0);
      ctx.lineTo(size, -size * 0.3);
      ctx.lineTo(size, size * 0.3);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const drawBalloon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      // Balloon
      ctx.fillStyle = 'rgba(255, 100, 100, 0.7)';
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
      
      // String
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, y + size);
      ctx.lineTo(x, y + size * 3);
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      elementsRef.current.forEach((element) => {
        // Update position
        element.x += element.speed;
        element.rotation += 0.2;

        // Reset position if off screen
        if (element.x > canvas.width + element.size) {
          element.x = -element.size;
          element.y = Math.random() * canvas.height;
        }

        // Draw element
        switch (element.type) {
          case 'cloud':
            drawCloud(ctx, element.x, element.y, element.size);
            break;
          case 'plane':
            drawPlane(ctx, element.x, element.y, element.size, element.rotation);
            break;
          case 'balloon':
            drawBalloon(ctx, element.x, element.y, element.size);
            break;
        }
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createElements();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createElements();
    });

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default AnimatedBackground;
