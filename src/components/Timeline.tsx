
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ThreeDCard from './ThreeDCard';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < items.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={handlePrev} 
          className={`rounded-full p-2 bg-portfolio-purple/20 border border-portfolio-purple/30 transition-colors duration-300 ${activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-portfolio-purple/30'}`}
          disabled={activeIndex === 0}
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        
        <div className="relative overflow-hidden w-full mx-4 h-16">
          <div 
            ref={timelineRef}
            className="flex items-center justify-center transition-transform duration-500"
            style={{ transform: `translateX(${-activeIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 w-full flex justify-center ${activeIndex === index ? 'opacity-100' : 'opacity-40'}`}
              >
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-portfolio-light-purple">{item.year}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button 
          onClick={handleNext} 
          className={`rounded-full p-2 bg-portfolio-purple/20 border border-portfolio-purple/30 transition-colors duration-300 ${activeIndex === items.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-portfolio-purple/30'}`}
          disabled={activeIndex === items.length - 1}
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>
      
      <div className="relative h-96 overflow-hidden">
        {items.map((item, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <ThreeDCard className="h-full w-full bg-portfolio-dark-gray/60 backdrop-blur-sm rounded-xl border border-portfolio-purple/20">
              <div className="p-8 h-full">
                <h3 className="text-2xl font-bold text-portfolio-light-purple mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </ThreeDCard>
          </div>
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        {items.map((_, index) => (
          <button
            key={index}
            className={`mx-1 w-3 h-3 rounded-full transition-colors duration-300 ${index === activeIndex ? 'bg-portfolio-light-purple' : 'bg-portfolio-purple/30'}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
