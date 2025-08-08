import React, { useState } from 'react';
import { FileText, Download, Star, Search, Filter, ArrowRight } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  stars: number;
  downloads: number;
  isFeatured: boolean;
}

const Templates: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'web', name: 'Web Application' },
    { id: 'network', name: 'Network' },
    { id: 'social', name: 'Social Engineering' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'cloud', name: 'Cloud' },
  ];
  
  const templates: Template[] = [
    {
      id: '1',
      title: 'Web App Vulnerability Assessment',
      description: 'Comprehensive template for testing web applications including OWASP Top 10 vulnerabilities.',
      category: 'web',
      stars: 482,
      downloads: 2145,
      isFeatured: true,
    },
    {
      id: '2',
      title: 'Network Perimeter Scan',
      description: 'Standard template for external network scanning and perimeter assessment.',
      category: 'network',
      stars: 325,
      downloads: 1876,
      isFeatured: false,
    },
    {
      id: '3',
      title: 'Phishing Campaign Simulation',
      description: 'Template for creating and managing ethical phishing simulations for security awareness.',
      category: 'social',
      stars: 512,
      downloads: 3214,
      isFeatured: true,
    },
    {
      id: '4',
      title: 'Internal Network Assessment',
      description: 'Template for internal network vulnerability scanning and enumeration.',
      category: 'network',
      stars: 287,
      downloads: 1432,
      isFeatured: false,
    },
    {
      id: '5',
      title: 'API Security Testing',
      description: 'Template focused on REST and GraphQL API security vulnerabilities.',
      category: 'web',
      stars: 398,
      downloads: 1987,
      isFeatured: false,
    },
    {
      id: '6',
      title: 'Mobile App Security Assessment',
      description: 'Template for testing security of Android and iOS applications.',
      category: 'mobile',
      stars: 265,
      downloads: 1156,
      isFeatured: false,
    },
    {
      id: '7',
      title: 'AWS Cloud Security Review',
      description: 'Comprehensive assessment for AWS environments covering common misconfigurations.',
      category: 'cloud',
      stars: 421,
      downloads: 1854,
      isFeatured: true,
    },
    {
      id: '8',
      title: 'Social Engineering Red Team',
      description: 'Full red team social engineering assessment templates and reporting.',
      category: 'social',
      stars: 318,
      downloads: 1678,
      isFeatured: false,
    },
  ];
  
  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          template.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Security Templates</h1>
        <p className="text-gray-400">
          Browse and download pre-configured templates for various security assessment scenarios.
        </p>
      </div>
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search templates..."
            className="focus:ring-primary focus:border-primary block w-full pl-10 pr-12 py-2 sm:text-sm border-gray-700 bg-gray-800 text-gray-200 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="relative w-full md:w-48">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter className="h-5 w-5 text-gray-400" />
          </div>
          <select
            className="focus:ring-primary focus:border-primary block w-full pl-10 pr-12 py-2 sm:text-sm border-gray-700 bg-gray-800 text-gray-200 rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Featured templates */}
      {selectedCategory === 'all' && !searchQuery && (
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">Featured Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templates
              .filter(template => template.isFeatured)
              .map(template => (
                <Card key={template.id} className="border-primary/30 bg-gradient-to-br from-gray-900 to-primary/5">
                  <div className="flex flex-col h-full">
                    <div className="inline-flex items-center mb-3">
                      <span className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary mr-2">
                        Featured
                      </span>
                      <span className="text-sm text-gray-400 capitalize">
                        {template.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white">{template.title}</h3>
                    <p className="mt-2 text-gray-400 text-sm flex-grow">{template.description}</p>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-400">
                        <Star className="h-4 w-4 text-warning mr-1" />
                        <span>{template.stars}</span>
                        <span className="mx-2">•</span>
                        <Download className="h-4 w-4 mr-1" />
                        <span>{template.downloads}</span>
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        rightIcon={<ArrowRight className="h-4 w-4" />}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      )}
      
      {/* All templates */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">
          {selectedCategory !== 'all' 
            ? `${categories.find(c => c.id === selectedCategory)?.name} Templates` 
            : searchQuery 
              ? 'Search Results' 
              : 'All Templates'}
        </h2>
        
        {filteredTemplates.length === 0 ? (
          <div className="text-center py-12">
            <FileText className="h-12 w-12 mx-auto text-gray-500 mb-4" />
            <h3 className="text-lg font-medium text-gray-300">No templates found</h3>
            <p className="mt-2 text-gray-400">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map(template => (
              <Card key={template.id} className="hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col h-full">
                  <span className="text-sm text-gray-400 capitalize mb-2">
                    {template.category}
                  </span>
                  
                  <h3 className="text-lg font-semibold text-white">{template.title}</h3>
                  <p className="mt-2 text-gray-400 text-sm flex-grow">{template.description}</p>
                  
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-400">
                      <Star className="h-4 w-4 text-warning mr-1" />
                      <span>{template.stars}</span>
                      <span className="mx-2">•</span>
                      <Download className="h-4 w-4 mr-1" />
                      <span>{template.downloads}</span>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      rightIcon={<Download className="h-4 w-4" />}
                    >
                      Download
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Templates;