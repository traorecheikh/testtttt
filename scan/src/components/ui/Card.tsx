import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  glow?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', title, glow = false }) => {
  return (
    <div className={`
      bg-gray-900 rounded-lg border border-gray-800 p-6 shadow-lg
      ${glow ? 'glow' : ''}
      ${className}
    `}>
      {title && <h3 className="text-lg font-medium text-gray-200 mb-4">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;