import React, { useState, useEffect, ReactNode } from 'react';

interface TerminalProps {
  children?: ReactNode;
  lines?: string[];
  prompt?: string;
  className?: string;
  autoType?: boolean;
  typeDelay?: number;
}

const Terminal: React.FC<TerminalProps> = ({
  children,
  lines = [],
  prompt = '$ ',
  className = '',
  autoType = false,
  typeDelay = 50,
}) => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
  useEffect(() => {
    if (!autoType || lines.length === 0) {
      setDisplayedLines(lines);
      return;
    }
    
    if (currentLineIndex < lines.length) {
      const timer = setTimeout(() => {
        if (currentCharIndex < lines[currentLineIndex].length) {
          setDisplayedLines(prev => {
            const newLines = [...prev];
            if (newLines.length <= currentLineIndex) {
              newLines.push('');
            }
            newLines[currentLineIndex] = lines[currentLineIndex].substring(0, currentCharIndex + 1);
            return newLines;
          });
          setCurrentCharIndex(prev => prev + 1);
        } else {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }
      }, typeDelay);
      
      return () => clearTimeout(timer);
    }
  }, [lines, currentLineIndex, currentCharIndex, autoType, typeDelay]);
  
  return (
    <div className={`terminal font-mono text-sm text-green-400 bg-black/60 rounded-md p-4 shadow-inner border border-gray-800 overflow-auto ${className}`}>
      {children || (
        <div>
          {displayedLines.map((line, index) => (
            <div key={index} className="mb-1">
              <span className="text-primary">{prompt}</span>
              <span>{line}</span>
            </div>
          ))}
          {autoType && currentLineIndex < lines.length && (
            <div className="animate-pulse">
              <span className="text-primary">{prompt}</span>
              <span className="inline-block h-4 w-2 bg-green-400"></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Terminal;