
import React from 'react';

const Preloader: React.FC<{ loading: boolean }> = ({ loading }) => {
  if (!loading) return null;
  
  return (
    <div className="fixed inset-0 bg-portfolio-dark-purple z-50 flex justify-center items-center">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-t-4 border-portfolio-purple rounded-full animate-rotate-slow"></div>
        <div className="absolute inset-2 border-t-4 border-portfolio-light-purple rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute inset-5 bg-portfolio-purple rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Preloader;
