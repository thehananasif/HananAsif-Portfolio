
import React, { useState } from 'react';
import ThreeDCard from './ThreeDCard';

export interface Project {
  title: string;
  description: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ThreeDCard
      className="project-card overflow-hidden"
      depth={15}
    >
      <div 
        className="p-6 transition-all duration-500 ease-in-out"
        style={{ height: isExpanded ? 'auto' : '180px' }}
      >
        {project.image && (
          <div className="mb-4 h-40 rounded-lg overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

        <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <p className="text-gray-300 text-sm">{project.description}</p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 px-4 py-2 rounded-lg bg-portfolio-purple/20 text-white border border-portfolio-purple/30 hover:bg-portfolio-purple/30 transition-colors duration-300"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
        </button>
      </div>
    </ThreeDCard>
  );
};

export default ProjectCard;
