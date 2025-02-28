
import React from 'react';
import ThreeDCard from './ThreeDCard';

export interface Skill {
  name: string;
  description: string;
  icon?: React.ReactNode;
}

interface SkillsGridProps {
  skills: Skill[];
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill, index) => (
        <ThreeDCard
          key={index}
          className="skill-card group"
          depth={10}
        >
          <div className="p-6 flex flex-col items-center">
            {skill.icon && (
              <div className="mb-4 text-portfolio-light-purple">
                {skill.icon}
              </div>
            )}
            <h3 className="text-xl font-bold mb-2 text-white">{skill.name}</h3>
            <div className="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
              <p className="text-sm text-gray-300 mt-2">{skill.description}</p>
            </div>
          </div>
        </ThreeDCard>
      ))}
    </div>
  );
};

export default SkillsGrid;
