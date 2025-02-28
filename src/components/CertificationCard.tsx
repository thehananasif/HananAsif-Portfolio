
import React from 'react';
import ThreeDCard from './ThreeDCard';

export interface Certification {
  title: string;
  issuer: string;
  image?: string;
}

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
  return (
    <ThreeDCard className="certification-card">
      <div className="p-6">
        {certification.image && (
          <div className="mb-4 w-16 h-16 mx-auto rounded-full overflow-hidden bg-portfolio-purple/20 flex items-center justify-center">
            <img 
              src={certification.image} 
              alt={certification.title} 
              className="w-12 h-12 object-contain"
            />
          </div>
        )}
        <h3 className="text-xl font-bold text-white mb-2">{certification.title}</h3>
        <p className="text-gray-300 text-sm">{certification.issuer}</p>
      </div>
    </ThreeDCard>
  );
};

export default CertificationCard;
