
import React from 'react';
import { cn } from "@/lib/utils";

interface FloatingTextProps {
  text: string;
  className?: string;
  speed?: 'slow' | 'medium' | 'fast';
  children?: React.ReactNode;
}

const FloatingText: React.FC<FloatingTextProps> = ({ 
  text, 
  className,
  speed = 'medium',
  children
}) => {
  const getAnimationDuration = () => {
    switch (speed) {
      case 'slow': return 'animation-duration: 4s;';
      case 'fast': return 'animation-duration: 2s;';
      default: return 'animation-duration: 3s;';
    }
  };

  return (
    <div 
      className={cn(
        "animate-float",
        className
      )}
      style={{ animationDelay: `${Math.random() * 1}s` }}
    >
      {text && <span style={{ display: 'inline-block' }}>{text}</span>}
      {children}
    </div>
  );
};

export default FloatingText;
