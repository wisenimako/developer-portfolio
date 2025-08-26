import React, { useEffect, useState } from 'react';

export function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      
      if (!isVisible) {
        setIsVisible(true);
        currentX = targetX;
        currentY = targetY;
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const animate = () => {
      // Smooth interpolation for trailing effect
      const ease = 0.15;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      setPosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        left: position.x - 12,
        top: position.y - 12,
        transform: 'translate3d(0, 0, 0)', // Hardware acceleration
      }}
    >
      {/* Main bubble */}
      <div className="w-6 h-6 bg-blue-500/30 dark:bg-blue-400/40 rounded-full blur-sm animate-pulse" />
      
      {/* Inner glow */}
      <div 
        className="absolute inset-0 w-6 h-6 bg-blue-400/50 dark:bg-blue-300/60 rounded-full"
        style={{
          animation: 'bubble-glow 2s ease-in-out infinite alternate',
        }}
      />
      
      {/* Core dot */}
      <div className="absolute inset-2 w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
      
      <style jsx>{`
        @keyframes bubble-glow {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.2);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}