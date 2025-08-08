import React, { useState } from 'react';
import ScannerInterface from '../components/scanner/ScannerInterface';
import ResultsDisplay from '../components/scanner/ResultsDisplay';

interface ScanResult {
  target: string;
  scanType: string;
  vulnerabilities: {
    id: number;
    severity: 'high' | 'medium' | 'low' | 'info';
    name: string;
    description: string;
  }[];
}

const Scanner: React.FC = () => {
  const [scanResults, setScanResults] = useState<ScanResult | null>(null);
  
  const handleScanComplete = (results: ScanResult) => {
    // Add more sample data for the display component
    const enhancedResults = {
      ...results,
      timestamp: new Date().toLocaleString(),
      services: [
        { port: 80, name: 'http', version: 'Apache 2.4.41' },
        { port: 443, name: 'https', version: 'Apache 2.4.41' },
        { port: 22, name: 'ssh', version: 'OpenSSH 8.2' },
      ],
      openPorts: [22, 80, 443, 8080]
    };
    
    setScanResults(enhancedResults);
  };
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Vulnerability Scanner</h1>
        <p className="text-gray-400">
          Scan targets for security vulnerabilities and receive detailed remediation guidance.
        </p>
      </div>
      
      {!scanResults ? (
        <ScannerInterface onScanComplete={handleScanComplete} />
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white">Scan Results</h2>
            <button 
              onClick={() => setScanResults(null)}
              className="text-sm text-primary hover:text-primary/80"
            >
              New Scan
            </button>
          </div>
          <ResultsDisplay results={scanResults} />
        </div>
      )}
    </div>
  );
};

export default Scanner;