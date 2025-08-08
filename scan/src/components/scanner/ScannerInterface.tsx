import React, { useState } from 'react';
import Button from '../ui/Button';
import Terminal from '../ui/Terminal';
import { Scan, AlertTriangle, Shield, ChevronRight, AlertCircle } from 'lucide-react';

interface ScannerProps {
  onScanComplete?: (results: any) => void;
}

const ScannerInterface: React.FC<ScannerProps> = ({ onScanComplete }) => {
  const [target, setTarget] = useState('');
  const [scanType, setScanType] = useState('full');
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  
  const scanTypes = [
    { id: 'quick', name: 'Quick Scan', description: 'Basic port scan and service detection' },
    { id: 'full', name: 'Full Scan', description: 'Complete vulnerability assessment' },
    { id: 'stealth', name: 'Stealth Scan', description: 'Low visibility scan to avoid detection' },
    { id: 'custom', name: 'Custom Scan', description: 'User-defined scan parameters' },
  ];
  
  const startScan = () => {
    if (!target) return;
    
    setIsScanning(true);
    setScanProgress(0);
    setTerminalLines([
      `nmap -v -A ${target} -oX scan_results.xml`,
      'Starting Nmap scan...',
      'Scanning target systems...',
    ]);
    
    const maxProgress = 100;
    const interval = setInterval(() => {
      setScanProgress(prev => {
        const newProgress = prev + Math.floor(Math.random() * 5) + 1;
        
        if (newProgress >= 25 && terminalLines.length < 5) {
          setTerminalLines(prev => [
            ...prev, 
            'Discovered open port 443/tcp on target'
          ]);
        }
        
        if (newProgress >= 50 && terminalLines.length < 7) {
          setTerminalLines(prev => [
            ...prev, 
            'Service detection running...',
            'OS detection attempted...'
          ]);
        }
        
        if (newProgress >= 75 && terminalLines.length < 10) {
          setTerminalLines(prev => [
            ...prev, 
            'Vulnerability scan in progress...',
            'Checking for outdated software versions...',
            'Analyzing SSL/TLS configuration...'
          ]);
        }
        
        if (newProgress >= maxProgress) {
          clearInterval(interval);
          setTerminalLines(prev => [
            ...prev,
            'Scan completed successfully.',
            'Found 3 potential vulnerabilities.',
            'Generating report...'
          ]);
          
          setTimeout(() => {
            setIsScanning(false);
            if (onScanComplete) {
              onScanComplete({
                target,
                scanType,
                vulnerabilities: [
                  { id: 1, severity: 'high', name: 'CVE-2023-1234', description: 'Outdated OpenSSL version' },
                  { id: 2, severity: 'medium', name: 'CVE-2023-5678', description: 'Insecure cipher suite' },
                  { id: 3, severity: 'low', name: 'CVE-2022-9876', description: 'Missing HTTP security headers' },
                ]
              });
            }
          }, 1500);
          
          return maxProgress;
        }
        
        return newProgress;
      });
    }, 300);
    
    return () => clearInterval(interval);
  };
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="target" className="block text-sm font-medium text-gray-300 mb-1">
              Target URL or IP Address
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type="text"
                id="target"
                className="focus:ring-primary focus:border-primary block w-full pl-3 pr-12 py-2 sm:text-sm border-gray-700 bg-gray-800 text-gray-200 rounded-md"
                placeholder="example.com or 192.168.1.1"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                disabled={isScanning}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Scan className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Scan Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
              {scanTypes.map((type) => (
                <div
                  key={type.id}
                  className={`
                    cursor-pointer border rounded-md p-3 transition-colors
                    ${scanType === type.id 
                      ? 'border-primary bg-primary/10 text-white' 
                      : 'border-gray-700 bg-gray-800/50 text-gray-300 hover:bg-gray-800'}
                    ${isScanning ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                  onClick={() => !isScanning && setScanType(type.id)}
                >
                  <div className="font-medium">{type.name}</div>
                  <div className="text-xs text-gray-400 mt-1">{type.description}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-2">
            <Button
              onClick={startScan}
              disabled={!target || isScanning}
              isLoading={isScanning}
              leftIcon={<Shield className="h-4 w-4" />}
              className="w-full justify-center"
              size="lg"
            >
              {isScanning ? 'Scanning...' : 'Start Security Scan'}
            </Button>
          </div>
          
          {isScanning && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Scan in progress</span>
                <span>{scanProgress}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full transition-all duration-300 animate-pulse" 
                  style={{ width: `${scanProgress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
        
        <Terminal 
          lines={terminalLines} 
          autoType={isScanning}
          className="h-[300px]"
        />
      </div>
      
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
        <h3 className="flex items-center text-gray-300 font-medium">
          <AlertCircle className="h-5 w-5 text-warning mr-2" />
          Important Security Notice
        </h3>
        <p className="mt-2 text-sm text-gray-400">
          This scanner should only be used on systems you own or have explicit permission to test. 
          Unauthorized scanning may be illegal and unethical. Always follow responsible disclosure practices 
          and obtain proper authorization before security testing.
        </p>
      </div>
    </div>
  );
};

export default ScannerInterface;