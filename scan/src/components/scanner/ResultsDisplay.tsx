import React from 'react';
import { Shield, AlertTriangle, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface Vulnerability {
  id: number;
  severity: 'high' | 'medium' | 'low' | 'info';
  name: string;
  description: string;
  cve?: string;
}

interface ScanResult {
  target: string;
  timestamp: string;
  vulnerabilities: Vulnerability[];
  openPorts?: number[];
  services?: { port: number; name: string; version?: string }[];
}

interface ResultsDisplayProps {
  results: ScanResult;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high':
        return <AlertTriangle className="h-5 w-5 text-error" />;
      case 'medium':
        return <AlertCircle className="h-5 w-5 text-warning" />;
      case 'low':
        return <AlertCircle className="h-5 w-5 text-primary" />;
      default:
        return <CheckCircle className="h-5 w-5 text-success" />;
    }
  };
  
  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-error/10 text-error border-error/30';
      case 'medium':
        return 'bg-warning/10 text-warning border-warning/30';
      case 'low':
        return 'bg-primary/10 text-primary border-primary/30';
      default:
        return 'bg-success/10 text-success border-success/30';
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">Scan Results</h2>
          <p className="text-gray-400 text-sm">
            Target: <span className="text-gray-200">{results.target}</span> | 
            Scan completed: <span className="text-gray-200">{results.timestamp || new Date().toLocaleString()}</span>
          </p>
        </div>
        <div className="flex space-x-2">
          <Button 
            variant="outline"
            leftIcon={<ExternalLink className="h-4 w-4" />}
            size="sm"
          >
            Export Report
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gray-900/60">
          <div className="flex items-start">
            <div className="bg-error/10 p-2 rounded-md">
              <AlertTriangle className="h-6 w-6 text-error" />
            </div>
            <div className="ml-3">
              <h3 className="text-xl font-semibold text-gray-200">
                {results.vulnerabilities.filter(v => v.severity === 'high').length}
              </h3>
              <p className="text-gray-400 text-sm">High Severity</p>
            </div>
          </div>
        </Card>
        
        <Card className="bg-gray-900/60">
          <div className="flex items-start">
            <div className="bg-warning/10 p-2 rounded-md">
              <AlertCircle className="h-6 w-6 text-warning" />
            </div>
            <div className="ml-3">
              <h3 className="text-xl font-semibold text-gray-200">
                {results.vulnerabilities.filter(v => v.severity === 'medium').length}
              </h3>
              <p className="text-gray-400 text-sm">Medium Severity</p>
            </div>
          </div>
        </Card>
        
        <Card className="bg-gray-900/60">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-md">
              <AlertCircle className="h-6 w-6 text-primary" />
            </div>
            <div className="ml-3">
              <h3 className="text-xl font-semibold text-gray-200">
                {results.vulnerabilities.filter(v => v.severity === 'low').length}
              </h3>
              <p className="text-gray-400 text-sm">Low Severity</p>
            </div>
          </div>
        </Card>
      </div>
      
      <Card className="overflow-hidden">
        <h3 className="text-lg font-medium text-gray-200 mb-4">Discovered Vulnerabilities</h3>
        <div className="space-y-3">
          {results.vulnerabilities.length > 0 ? (
            results.vulnerabilities.map((vuln) => (
              <div
                key={vuln.id}
                className={`flex p-3 rounded-md border ${getSeverityClass(vuln.severity)}`}
              >
                <div className="flex-shrink-0 mr-3">
                  {getSeverityIcon(vuln.severity)}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{vuln.name}</h4>
                  <p className="text-sm text-gray-300 mt-1">{vuln.description}</p>
                  {vuln.cve && (
                    <div className="mt-2">
                      <a 
                        href={`https://cve.mitre.org/cgi-bin/cvename.cgi?name=${vuln.cve}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-gray-800 text-gray-400 hover:text-primary py-1 px-2 rounded inline-flex items-center"
                      >
                        {vuln.cve} <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  )}
                </div>
                <div className="flex-shrink-0 self-start ml-2">
                  <span className={`text-xs uppercase tracking-wider px-2 py-1 rounded-full ${
                    vuln.severity === 'high' ? 'bg-error/20 text-error' :
                    vuln.severity === 'medium' ? 'bg-warning/20 text-warning' :
                    'bg-primary/20 text-primary'
                  }`}>
                    {vuln.severity}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-gray-400">
              <Shield className="h-8 w-8 mx-auto text-success mb-2" />
              <p>No vulnerabilities detected.</p>
            </div>
          )}
        </div>
      </Card>
      
      {results.services && (
        <Card>
          <h3 className="text-lg font-medium text-gray-200 mb-4">Detected Services</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Port</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Service</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Version</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {results.services.map((service, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{service.port}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{service.name}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{service.version || 'Unknown'}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                        Open
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
      
      <Card className="bg-gray-900/50">
        <h3 className="text-lg font-medium text-gray-200 mb-4">Recommendations</h3>
        <ul className="space-y-2 text-sm text-gray-300">
          <li className="flex">
            <CheckCircle className="h-5 w-5 text-success mr-2 flex-shrink-0" />
            <span>Update all software to the latest security patches</span>
          </li>
          <li className="flex">
            <CheckCircle className="h-5 w-5 text-success mr-2 flex-shrink-0" />
            <span>Configure firewalls to restrict access to essential services only</span>
          </li>
          <li className="flex">
            <CheckCircle className="h-5 w-5 text-success mr-2 flex-shrink-0" />
            <span>Implement strong SSL/TLS configurations and disable outdated protocols</span>
          </li>
          <li className="flex">
            <CheckCircle className="h-5 w-5 text-success mr-2 flex-shrink-0" />
            <span>Enable all recommended HTTP security headers</span>
          </li>
          <li className="flex">
            <CheckCircle className="h-5 w-5 text-success mr-2 flex-shrink-0" />
            <span>Schedule regular security scans to monitor for new vulnerabilities</span>
          </li>
        </ul>
        <div className="mt-4 text-right">
          <Button
            variant="outline"
            size="sm"
          >
            View Full Recommendations
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ResultsDisplay;