import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Scan, LayoutDashboard, GraduationCap, Users, ArrowRight, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Terminal from '../components/ui/Terminal';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      title: "Advanced Vulnerability Scanner",
      description: "Identify security weaknesses in web applications, networks, and systems with our comprehensive scanning engine.",
      icon: <Scan className="h-6 w-6 text-primary" />,
    },
    {
      title: "Security Assessment Dashboard",
      description: "Visualize security threats and track vulnerabilities with our intuitive, data-driven dashboard.",
      icon: <LayoutDashboard className="h-6 w-6 text-primary" />,
    },
    {
      title: "Educational Resources",
      description: "Learn about the latest security threats and best practices for protecting your systems.",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
    },
    {
      title: "Social Engineering Toolkit",
      description: "Understand and defend against social engineering attacks with our specialized tools and training.",
      icon: <Users className="h-6 w-6 text-primary" />,
    }
  ];
  
  const terminalLines = [
    'nmap -sV -sC -oA scan target.com',
    'Starting Nmap 7.94 at 2025-02-25 12:00 UTC',
    'Scanning target.com (192.168.1.10) [1000 ports]',
    'Discovered open port 443/tcp on 192.168.1.10',
    'Discovered open port 80/tcp on 192.168.1.10',
    'Discovered open port 22/tcp on 192.168.1.10',
    'Service detection performed.',
    'Scan completed in 15.32 seconds',
    'Found 3 vulnerabilities (CVE-2023-1234, CVE-2023-5678, CVE-2022-9876)',
    'Report generated: scan-target.com.xml'
  ];
  
  return (
    <div className="space-y-16">
      {/* Hero section */}
      <section className="relative overflow-hidden matrix-bg rounded-2xl">
        <div className="relative z-10 py-16 px-4 sm:px-6 lg:py-24 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Stellar Cybersecurity <span className="text-primary">Scanner</span>
                </h1>
                <p className="mt-6 text-xl text-gray-300 max-w-3xl">
                  Advanced vulnerability assessment tools to protect your digital assets from emerging threats.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  onClick={() => navigate('/scanner')}
                  rightIcon={<ArrowRight className="h-5 w-5" />}
                >
                  Start Scanning
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/education')}
                >
                  Learn More
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-primary mr-1" />
                  <span>Comprehensive Scans</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-primary mr-1" />
                  <span>Detailed Reports</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-primary mr-1" />
                  <span>Actionable Insights</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Check className="h-5 w-5 text-primary mr-1" />
                  <span>Enterprise-Grade Security</span>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <Terminal lines={terminalLines} autoType={true} className="h-[400px] border-2 border-primary/30 shadow-[0_0_15px_rgba(10,132,255,0.3)]" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Comprehensive Security Features</h2>
            <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
              Our platform offers a full suite of tools to identify, analyze, and address security vulnerabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:translate-y-[-5px] transition-all duration-300 glow">
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-full bg-primary/10 inline-flex w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-gray-400 flex-grow">{feature.description}</p>
                  <button
                    className="mt-4 inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                    onClick={() => navigate('/scanner')}
                  >
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* How it works section */}
      <section className="bg-gray-900/50 py-16 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">How It Works</h2>
            <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
              Our streamlined process makes security scanning accessible and effective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Configure Scan</h3>
              <p className="text-gray-400">
                Input your target and select scan parameters tailored to your security needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Execute Analysis</h3>
              <p className="text-gray-400">
                Our advanced engine conducts thorough scans to identify vulnerabilities and potential threats.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Review Results</h3>
              <p className="text-gray-400">
                Receive comprehensive reports with actionable remediation steps to enhance your security posture.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button
              size="lg"
              onClick={() => navigate('/scanner')}
              rightIcon={<ArrowRight className="h-5 w-5" />}
            >
              Start Your First Scan
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials/trust section */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Trusted by Security Professionals</h2>
            <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
              See why organizations rely on our tools to secure their infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="h-full flex flex-col">
                <div className="flex-1">
                  <p className="text-gray-300 italic">
                    "StellarScan helped us identify critical vulnerabilities that other tools missed. Their detailed reports saved our security team countless hours."
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    JD
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">John Doe</h4>
                    <p className="text-sm text-gray-400">CISO, Tech Company</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="h-full flex flex-col">
                <div className="flex-1">
                  <p className="text-gray-300 italic">
                    "The social engineering toolkit has been invaluable for training our team and raising security awareness across the organization."
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    JS
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">Jane Smith</h4>
                    <p className="text-sm text-gray-400">Security Director, Enterprise Corp</p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="h-full flex flex-col">
                <div className="flex-1">
                  <p className="text-gray-300 italic">
                    "We've incorporated StellarScan into our regular security testing routine. The interface is intuitive and the results are comprehensive."
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    RJ
                  </div>
                  <div className="ml-3">
                    <h4 className="text-white font-medium">Robert Johnson</h4>
                    <p className="text-sm text-gray-400">Penetration Tester, Security Firm</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="bg-primary/10 rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Secure Your Systems?</h2>
          <p className="mt-4 text-xl text-gray-300">
            Start scanning today and take the first step toward comprehensive security.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              onClick={() => navigate('/scanner')}
            >
              Get Started for Free
            </Button>
            <Button
              variant="outline"
              size="lg"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;