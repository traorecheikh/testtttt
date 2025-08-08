import React, { useState } from 'react';
import { Users, Mail, AlertTriangle, FileText, ArrowRight, Phone, MessageCircle, Download, CheckCircle, Search } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Terminal from '../components/ui/Terminal';

const SocialEngineering: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const terminalLines = [
    'socialphish --target corporate-domain.com --employees 100 --technique spear-phishing',
    'Analyzing target domain...',
    'Collecting publicly available information...',
    'Identifying key employees and roles...',
    'Generating personalized templates...',
    'Campaign setup complete. 15 high-value targets identified.',
    'Security awareness assessment ready to deploy.'
  ];
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Social Engineering Tools</h1>
        <p className="text-gray-400">
          Educational resources and tools for understanding social engineering threats and conducting authorized security awareness assessments.
        </p>
      </div>
      
      {/* Warning */}
      <div className="bg-warning/10 border border-warning/30 rounded-lg p-4 text-warning flex">
        <AlertTriangle className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-medium mb-1">Important Ethical Notice</h3>
          <p className="text-sm">
            These tools are for educational purposes and authorized security awareness testing only. 
            Using social engineering techniques without proper authorization is illegal and unethical. 
            Always obtain explicit written permission before conducting any security assessments.
          </p>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-800">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'overview'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('phishing')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'phishing'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700'
            }`}
          >
            Phishing Simulation
          </button>
          <button
            onClick={() => setActiveTab('pretexting')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'pretexting'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700'
            }`}
          >
            Pretexting
          </button>
          <button
            onClick={() => setActiveTab('awareness')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'awareness'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-700'
            }`}
          >
            Awareness Training
          </button>
        </nav>
      </div>
      
      {/* Tab content */}
      <div>
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Understanding Social Engineering</h2>
                <p className="text-gray-300 mb-4">
                  Social engineering is the psychological manipulation of people into performing actions or divulging confidential information. It's a significant security threat that bypasses technical safeguards by exploiting human psychology.
                </p>
                <p className="text-gray-300 mb-6">
                  Our tools help security professionals understand these attack vectors and test organizational resilience through controlled, ethical simulations.
                </p>
                <Button
                  onClick={() => setActiveTab('awareness')}
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Explore Training Resources
                </Button>
              </div>
              
              <Terminal 
                lines={terminalLines} 
                autoType={true}
                className="h-[300px]"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-full bg-primary/10 inline-flex w-fit mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Phishing Campaigns</h3>
                  <p className="mt-2 text-gray-400 flex-grow">
                    Create controlled phishing simulations to test employee awareness and response to email-based threats.
                  </p>
                  <button
                    className="mt-4 inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                    onClick={() => setActiveTab('phishing')}
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </Card>
              
              <Card>
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-full bg-primary/10 inline-flex w-fit mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Pretexting Scenarios</h3>
                  <p className="mt-2 text-gray-400 flex-grow">
                    Develop realistic pretexting scenarios to assess how employees handle social manipulation attempts.
                  </p>
                  <button
                    className="mt-4 inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                    onClick={() => setActiveTab('pretexting')}
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </Card>
              
              <Card>
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-full bg-primary/10 inline-flex w-fit mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Awareness Training</h3>
                  <p className="mt-2 text-gray-400 flex-grow">
                    Comprehensive training materials to educate staff about social engineering threats and prevention.
                  </p>
                  <button
                    className="mt-4 inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium"
                    onClick={() => setActiveTab('awareness')}
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </Card>
            </div>
            
            <div className="bg-gray-900/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Common Social Engineering Techniques</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Phishing</h4>
                    <p className="mt-1 text-sm text-gray-400">
                      Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Vishing</h4>
                    <p className="mt-1 text-sm text-gray-400">
                      Voice phishing that uses phone calls to deceive individuals into revealing information.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Pretexting</h4>
                    <p className="mt-1 text-sm text-gray-400">
                      Creating a fabricated scenario to engage a victim and gain their trust.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Baiting</h4>
                    <p className="mt-1 text-sm text-gray-400">
                      Offering something enticing to users to spark their curiosity and lead them into a trap.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'phishing' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Phishing Simulation Tools</h2>
              <p className="text-gray-300">
                Create controlled, ethical phishing campaigns to test and improve your organization's security awareness.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <h3 className="text-lg font-semibold text-white mb-4">Campaign Builder</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Campaign Name
                      </label>
                      <input
                        type="text"
                        className="focus:ring-primary focus:border-primary block w-full px-3 py-2 sm:text-sm border-gray-700 bg-gray-800 text-gray-200 rounded-md"
                        placeholder="Q1 Security Awareness Test"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Target Audience
                      </label>
                      <select
                        className="focus:ring-primary focus:border-primary block w-full px-3 py-2 sm:text-sm border-gray-700 bg-gray-800 text-gray-200 rounded-md"
                      >
                        <option>All Employees</option>
                        <option>IT Department</option>
                        <option>Executive Team</option>
                        <option>Finance Department</option>
                        <option>Custom Group</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Phishing Template
                      </label>
                      <select
                        className="focus:ring-primary focus:border-primary block w-full px-3 py-2 sm:text-sm border-gray-700 bg-gray-800 text-gray-200 rounded-md"
                      >
                        <option>Password Reset Request</option>
                        <option>IT System Update</option>
                        <option>HR Policy Update</option>
                        <option>Urgent Executive Message</option>
                        <option>Cloud Storage Share</option>
                        <option>Custom Template</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Landing Page
                      </label>
                      <select
                        className="focus:ring-primary focus:border-primary block w-full px-3 py-2 sm:text-sm border-gray-700 bg-gray-800 text-gray-200 rounded-md"
                      >
                        <option>Credential Harvest</option>
                        <option>Awareness Training</option>
                        <option>File Download</option>
                        <option>Custom Page</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Schedule
                      </label>
                      <input
                        type="date"
                        className="focus:ring-primary focus:border-primary block w-full px-3 py-2 sm:text-sm border-gray-700 bg-gray-800 text-gray-200 rounded-md"
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button
                        className="w-full justify-center"
                      >
                        Create Campaign
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div>
                <Card className="h-full">
                  <h3 className="text-lg font-semibold text-white mb-4">Available Templates</h3>
                  <div className="space-y-4">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        placeholder="Search templates..."
                        className="focus:ring-primary focus:border-primary block w-full pl-10 pr-3 py-2 sm:text-sm border-gray-700 bg-gray-800 text-gray-200 rounded-md"
                      />
                    </div>
                    
                    <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                      <div className="p-3 rounded-md bg-gray-800/60 hover:bg-gray-800 cursor-pointer">
                        <h4 className="font-medium text-gray-300">Password Reset</h4>
                        <p className="text-xs text-gray-400 mt-1">Simulated IT request for password change</p>
                      </div>
                      <div className="p-3 rounded-md bg-gray-800/60 hover:bg-gray-800 cursor-pointer">
                        <h4 className="font-medium text-gray-300">Software Update</h4>
                        <p className="text-xs text-gray-400 mt-1">Fake software update notification</p>
                      </div>
                      <div className="p-3 rounded-md bg-gray-800/60 hover:bg-gray-800 cursor-pointer">
                        <h4 className="font-medium text-gray-300">Shared Document</h4>
                        <p className="text-xs text-gray-400 mt-1">Cloud storage document sharing request</p>
                      </div>
                      <div className="p-3 rounded-md bg-gray-800/60 hover:bg-gray-800 cursor-pointer">
                        <h4 className="font-medium text-gray-300">Email Quota Alert</h4>
                        <p className="text-xs text-gray-400 mt-1">Warning about email storage limit</p>
                      </div>
                      <div className="p-3 rounded-md bg-gray-800/60 hover:bg-gray-800 cursor-pointer">
                        <h4 className="font-medium text-gray-300">Urgent Invoice</h4>
                        <p className="text-xs text-gray-400 mt-1">Request for immediate invoice payment</p>
                      </div>
                      <div className="p-3 rounded-md bg-gray-800/60 hover:bg-gray-800 cursor-pointer">
                        <h4 className="font-medium text-gray-300">HR Benefits Update</h4>
                        <p className="text-xs text-gray-400 mt-1">Benefits enrollment deadline notification</p>
                      </div>
                      <div className="p-3 rounded-md bg-gray-800/60 hover:bg-gray-800 cursor-pointer">
                        <h4 className="font-medium text-gray-300">IT Security Alert</h4>
                        <p className="text-xs text-gray-400 mt-1">Warning about suspicious activity</p>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline"
                      size="sm"
                      className="w-full justify-center"
                    >
                      Create Custom Template
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
            
            <Card>
              <h3 className="text-lg font-semibold text-white mb-4">Campaign Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gray-800/60 p-4 rounded-md">
                  <h4 className="text-sm font-medium text-gray-400">Open Rate</h4>
                  <p className="text-3xl font-bold text-white mt-1">68%</p>
                  <p className="text-xs text-red-400 mt-1">12% higher than average</p>
                </div>
                <div className="bg-gray-800/60 p-4 rounded-md">
                  <h4 className="text-sm font-medium text-gray-400">Click-through Rate</h4>
                  <p className="text-3xl font-bold text-white mt-1">42%</p>
                  <p className="text-xs text-red-400 mt-1">8% higher than average</p>
                </div>
                <div className="bg-gray-800/60 p-4 rounded-md">
                  <h4 className="text-sm font-medium text-gray-400">Data Submission</h4>
                  <p className="text-3xl font-bold text-white mt-1">21%</p>
                  <p className="text-xs text-red-400 mt-1">5% higher than average</p>
                </div>
              </div>
              
              <div className="w-full h-72 bg-gray-800/60 rounded-md flex items-center justify-center text-gray-400">
                <p>Interactive analytics dashboard visualization would appear here</p>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button
                  variant="outline"
                  rightIcon={<Download className="h-4 w-4" />}
                >
                  Export Report
                </Button>
              </div>
            </Card>
          </div>
        )}
        
        {activeTab === 'pretexting' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Pretexting Scenarios</h2>
              <p className="text-gray-300">
                Create realistic pretexting scenarios to test how employees respond to social manipulation attempts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-lg font-semibold text-white mb-4">Scenario Builder</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Scenario Type
                    </label>
                    <select
                      className="focus:ring-primary focus:border-primary block w-full px-3 py-2 sm:text-sm border-gray-700 bg-gray-800 text-gray-200 rounded-md"
                    >
                      <option>Phone Call (Vishing)</option>
                      <option>In-Person Visit</option>
                      <option>Text Message</option>
                      <option>Social Media Contact</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Target Department
                    </label>
                    <select
                      className="focus:ring-primary focus:border-primary block w-full px-3 py-2 sm:text-sm border-gray-700 bg-gray-800 text-gray-200 rounded-md"
                    >
                      <option>Reception / Front Desk</option>
                      <option>IT Support</option>
                      <option>Human Resources</option>
                      <option>Executive Assistants</option>
                      <option>Finance</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Pretext Identity
                    </label>
                    <select
                      className="focus:ring-primary focus:border-primary block w-full px-3 py-2 sm:text-sm border-gray-700 bg-gray-800 text-gray-200 rounded-md"
                    >
                      <option>IT Support Technician</option>
                      <option>Executive / CEO</option>
                      <option>New Employee</option>
                      <option>Vendor / Contractor</option>
                      <option>Customer</option>
                      <option>Delivery Person</option>
                      <option>Job Applicant</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Information Target
                    </label>
                    <select
                      className="focus:ring-primary focus:border-primary block w-full px-3 py-2 sm:text-sm border-gray-700 bg-gray-800 text-gray-200 rounded-md"
                    >
                      <option>Employee Information</option>
                      <option>Network Access</option>
                      <option>Physical Access</option>
                      <option>Financial Information</option>
                      <option>Customer Data</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Scenario Details
                    </label>
                    <textarea
                      rows={4}
                      className="focus:ring-primary focus:border-primary block w-full px-3 py-2 sm:text-sm border-gray-700 bg-gray-800 text-gray-200 rounded-md"
                      placeholder="Describe the specific scenario, including the story, objectives, and success criteria..."
                    ></textarea>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="w-full justify-center">
                      Create Scenario
                    </Button>
                  </div>
                </div>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <h3 className="text-lg font-semibold text-white mb-4">Pretexting Best Practices</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Always obtain proper written authorization before conducting tests</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Ensure scenarios are realistic but not unnecessarily stressful</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Focus on education, not embarrassment or punishment</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Document all activities and interactions thoroughly</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Provide immediate feedback and training after the test</span>
                    </li>
                    <li className="flex">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>Respect privacy and sensitive personal information</span>
                    </li>
                  </ul>
                </Card>
                
                <Card>
                  <h3 className="text-lg font-semibold text-white mb-4">Sample Scenarios</h3>
                  <div className="space-y-4">
                    <div className="p-3 rounded-md bg-gray-800/60">
                      <h4 className="font-medium text-gray-300">IT Support Call</h4>
                      <p className="text-sm text-gray-400 mt-1">
                        Pretend to be IT support calling about a critical update requiring immediate password reset
                      </p>
                    </div>
                    <div className="p-3 rounded-md bg-gray-800/60">
                      <h4 className="font-medium text-gray-300">Executive Request</h4>
                      <p className="text-sm text-gray-400 mt-1">
                        Impersonate an executive asking for urgent financial transfer or sensitive information
                      </p>
                    </div>
                    <div className="p-3 rounded-md bg-gray-800/60">
                      <h4 className="font-medium text-gray-300">Vendor Visit</h4>
                      <p className="text-sm text-gray-400 mt-1">
                        Pose as a vendor/contractor requesting physical access to restricted areas
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button 
                      variant="outline"
                      rightIcon={<Download className="h-4 w-4" />}
                      size="sm"
                      className="w-full justify-center"
                    >
                      Download Scenario Guide
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'awareness' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Security Awareness Training</h2>
              <p className="text-gray-300">
                Comprehensive training materials to educate staff about social engineering threats and prevention.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-full bg-primary/10 inline-flex w-fit mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Basic Training</h3>
                  <p className="mt-2 text-gray-400 flex-grow">
                    Fundamental security awareness training covering common threats and best practices.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      <span>Introduction to security principles</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      <span>Recognizing phishing attempts</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      <span>Password security</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      <span>Data protection basics</span>
                    </li>
                  </ul>
                  <Button
                    className="mt-6"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Start Training
                  </Button>
                </div>
              </Card>
              
              <Card>
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-full bg-primary/10 inline-flex w-fit mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Advanced Protection</h3>
                  <p className="mt-2 text-gray-400 flex-grow">
                    In-depth training on sophisticated social engineering techniques and countermeasures.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-400">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      <span>Advanced phishing techniques</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      <span>Spear phishing defense</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      <span>Vishing and smishing protection</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-success mr-2" />
                      <span>Social media security</span>
                    </li>
                  </ul>
                  <Button
                    className="mt-6"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Start Training
                  </Button>
                </div>
              </Card>
              
              <Card>
                <div className="flex flex-col h-full">
                  <div className="p-3 rounded-full bg-primary/10 inline-flex w-fit mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Resources & Materials</h3>
                  <p className="mt-2 text-gray-400 flex-grow">
                    Downloadable guides, posters, and resources for ongoing security awareness.
                  </p>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li>
                      <a href="#" className="flex items-center text-primary hover:text-primary/80">
                        <Download className="h-4 w-4 mr-2" />
                        <span>Phishing Identification Guide</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-primary hover:text-primary/80">
                        <Download className="h-4 w-4 mr-2" />
                        <span>Social Engineering Response Procedure</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-primary hover:text-primary/80">
                        <Download className="h-4 w-4 mr-2" />
                        <span>Security Awareness Posters (PDF)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-primary hover:text-primary/80">
                        <Download className="h-4 w-4 mr-2" />
                        <span>Email Security Checklist</span>
                      </a>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="mt-6"
                  >
                    View All Resources
                  </Button>
                </div>
              </Card>
            </div>
            
            <Card>
              <h3 className="text-lg font-semibold text-white mb-4">Training Program Management</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-gray-800/60 p-4 rounded-md text-center">
                    <h4 className="text-sm font-medium text-gray-400">Total Employees</h4>
                    <p className="text-3xl font-bold text-white mt-1">157</p>
                  </div>
                  <div className="bg-gray-800/60 p-4 rounded-md text-center">
                    <h4 className="text-sm font-medium text-gray-400">Training Completed</h4>
                    <p className="text-3xl font-bold text-white mt-1">124</p>
                    <p className="text-xs text-gray-400 mt-1">78% completion rate</p>
                  </div>
                  <div className="bg-gray-800/60 p-4 rounded-md text-center">
                    <h4 className="text-sm font-medium text-gray-400">In Progress</h4>
                    <p className="text-3xl font-bold text-white mt-1">23</p>
                    <p className="text-xs text-gray-400 mt-1">15% in progress</p>
                  </div>
                  <div className="bg-gray-800/60 p-4 rounded-md text-center">
                    <h4 className="text-sm font-medium text-gray-400">Not Started</h4>
                    <p className="text-3xl font-bold text-white mt-1">10</p>
                    <p className="text-xs text-gray-400 mt-1">7% not started</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    leftIcon={<Mail className="h-4 w-4" />}
                  >
                    Send Reminders
                  </Button>
                  <Button
                    variant="outline"
                    leftIcon={<Download className="h-4 w-4" />}
                  >
                    Export Training Report
                  </Button>
                </div>
              </div>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-lg font-semibold text-white mb-4">Upcoming Webinars</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-md bg-gray-800/60">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-300">Latest Social Engineering Tactics</h4>
                        <p className="text-sm text-gray-400 mt-1">
                          Learn about the most recent social engineering techniques observed in the wild.
                        </p>
                      </div>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">
                        March 15
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-3"
                    >
                      Register
                    </Button>
                  </div>
                  
                  <div className="p-4 rounded-md bg-gray-800/60">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-300">Building a Security Culture</h4>
                        <p className="text-sm text-gray-400 mt-1">
                          Strategies for creating and maintaining a strong security culture in organizations.
                        </p>
                      </div>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">
                        March 22
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-3"
                    >
                      Register
                    </Button>
                  </div>
                  
                  <div className="p-4 rounded-md bg-gray-800/60">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-300">Social Media Threat Landscape</h4>
                        <p className="text-sm text-gray-400 mt-1">
                          Understanding and mitigating risks from social media platforms.
                        </p>
                      </div>
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary">
                        April 5
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-3"
                    >
                      Register
                    </Button>
                  </div>
                </div>
              </Card>
              
              <Card>
                <h3 className="text-lg font-semibold text-white mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-md bg-gray-800/60">
                    <h4 className="font-medium text-gray-300">How often should we conduct security awareness training?</h4>
                    <p className="text-sm text-gray-400 mt-2">
                      Security awareness training should be conducted at least quarterly, with ongoing microlearning 
                      and updates as new threats emerge. New employees should receive training during onboarding.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-md bg-gray-800/60">
                    <h4 className="font-medium text-gray-300">What's the most effective format for security training?</h4>
                    <p className="text-sm text-gray-400 mt-2">
                      A multi-modal approach tends to be most effective, combining interactive online modules, 
                      simulated phishing exercises, in-person workshops, and ongoing reinforcement through 
                      posters, newsletters, and regular communication.
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-md bg-gray-800/60">
                    <h4 className="font-medium text-gray-300">How do we measure the effectiveness of our training?</h4>
                    <p className="text-sm text-gray-400 mt-2">
                      Effectiveness can be measured through pre and post-training assessments, phishing simulation 
                      click rates over time, security incident reporting rates, and regular security awareness surveys.
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Button
                    variant="ghost"
                    size="sm"
                  >
                    View More FAQs
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialEngineering;