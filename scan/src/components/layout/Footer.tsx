import React from 'react';
import { Shield, Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">STELLAR<span className="text-primary">SCAN</span></span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Advanced cybersecurity scanning and assessment tools for modern security challenges.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Products</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-primary">Scanner</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-primary">Dashboard</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-primary">Templates</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-primary">Enterprise</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-gray-400 hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-primary">Education</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-primary">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="flex items-center text-sm text-gray-400 hover:text-primary">
                  <Github className="h-4 w-4 mr-2" /> GitHub
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-sm text-gray-400 hover:text-primary">
                  <Twitter className="h-4 w-4 mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-sm text-gray-400 hover:text-primary">
                  <Mail className="h-4 w-4 mr-2" /> Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} StellarScan Cybersecurity. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-xs text-gray-500 hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-primary">Terms of Service</a>
            <a href="#" className="text-xs text-gray-500 hover:text-primary">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;