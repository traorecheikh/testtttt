import React, { useState } from 'react';
import { GraduationCap, BookOpen, Clock, Search, ArrowRight, PlayCircle, ChevronRight } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  imageUrl: string;
}

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const Education: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const courses: Course[] = [
    {
      id: '1',
      title: 'Network Scanning Fundamentals',
      description: 'Learn the basics of network scanning with Nmap and other essential tools.',
      duration: '3 hours',
      level: 'Beginner',
      imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '2',
      title: 'Web Application Penetration Testing',
      description: 'Comprehensive guide to testing web applications for security vulnerabilities.',
      duration: '8 hours',
      level: 'Intermediate',
      imageUrl: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '3',
      title: 'Advanced Social Engineering Techniques',
      description: 'Master the art of ethical social engineering for security assessments.',
      duration: '5 hours',
      level: 'Advanced',
      imageUrl: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '4',
      title: 'Security Report Writing',
      description: 'Learn how to create effective security assessment reports.',
      duration: '2 hours',
      level: 'Intermediate',
      imageUrl: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];
  
  const articles: Article[] = [
    {
      id: '1',
      title: 'Understanding OWASP Top 10 for 2025',
      excerpt: 'An updated guide to the OWASP Top 10 security risks and how to mitigate them.',
      date: 'February 20, 2025',
      readTime: '8 min read',
      category: 'Web Security',
    },
    {
      id: '2',
      title: 'The Rise of Zero-Day Exploits in 2025',
      excerpt: 'Analysis of recent zero-day exploits and best practices for protection.',
      date: 'February 15, 2025',
      readTime: '12 min read',
      category: 'Threats',
    },
    {
      id: '3',
      title: 'Ethical Considerations in Penetration Testing',
      excerpt: 'Navigating the ethical challenges of cybersecurity assessments and testing.',
      date: 'February 10, 2025',
      readTime: '10 min read',
      category: 'Ethics',
    },
  ];
  
  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Security Education Center</h1>
        <p className="text-gray-400">
          Enhance your cybersecurity knowledge with courses, articles, and resources.
        </p>
      </div>
      
      {/* Search */}
      <div className="relative max-w-2xl">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search courses and articles..."
          className="focus:ring-primary focus:border-primary block w-full pl-10 pr-12 py-3 text-base border-gray-700 bg-gray-800 text-gray-200 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Featured course */}
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-gray-900 to-primary/10">
        <div className="absolute inset-0 bg-gray-900/70"></div>
        <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center">
          <div className="flex-1 mb-6 md:mb-0 md:mr-8">
            <div className="inline-flex items-center bg-primary/20 text-primary text-sm px-3 py-1 rounded-full mb-4">
              <GraduationCap className="h-4 w-4 mr-1" />
              Featured Course
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Mastering Comprehensive Security Assessments
            </h2>
            <p className="text-gray-300 mb-6">
              Learn how to conduct thorough security assessments, from reconnaissance to reporting,
              with practical hands-on examples and best practices from industry experts.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-300 text-sm">
                <Clock className="h-4 w-4 text-primary mr-2" />
                <span>10 hours of content</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <BookOpen className="h-4 w-4 text-primary mr-2" />
                <span>12 modules</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <GraduationCap className="h-4 w-4 text-primary mr-2" />
                <span>Intermediate level</span>
              </div>
            </div>
            <Button
              size="lg"
              rightIcon={<PlayCircle className="h-5 w-5" />}
            >
              Start Learning
            </Button>
          </div>
          <div className="flex-shrink-0 w-full md:w-1/3">
            <img 
              src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Security Assessment Course" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Courses */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Popular Courses</h2>
          <a href="#" className="text-primary hover:text-primary/80 flex items-center text-sm">
            View all courses <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <div className="h-full flex flex-col">
                <div className="relative h-40 mb-4 overflow-hidden rounded-md">
                  <img 
                    src={course.imageUrl} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      course.level === 'Beginner' ? 'bg-green-900 text-green-300' :
                      course.level === 'Intermediate' ? 'bg-primary/20 text-primary' :
                      'bg-purple-900 text-purple-300'
                    }`}>
                      {course.level}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{course.description}</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full justify-center"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  View Course
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Articles */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
          <a href="#" className="text-primary hover:text-primary/80 flex items-center text-sm">
            View all articles <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id}>
              <div className="h-full flex flex-col">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{article.excerpt}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{article.date}</span>
                  <a 
                    href="#" 
                    className="text-primary hover:text-primary/80 flex items-center text-sm font-medium"
                  >
                    Read more <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Resources */}
      <div className="bg-gray-900/50 rounded-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Security Resources</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Access our curated collection of cybersecurity tools, checklists, and reference materials.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-sm text-gray-400 mb-4">
                Comprehensive guides, reference materials, and technical documentation.
              </p>
              <Button
                variant="ghost"
                size="sm"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Browse Docs
              </Button>
            </div>
          </Card>
          
          <Card>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Workshops</h3>
              <p className="text-sm text-gray-400 mb-4">
                Hands-on virtual workshops and training sessions with security experts.
              </p>
              <Button
                variant="ghost"
                size="sm"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Register Now
              </Button>
            </div>
          </Card>
          
          <Card>
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Tools Library</h3>
              <p className="text-sm text-gray-400 mb-4">
                Curated collection of cybersecurity tools with guides and tutorials.
              </p>
              <Button
                variant="ghost"
                size="sm"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Explore Tools
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Newsletter */}
      <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Stay Updated on Security Trends</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          Subscribe to our newsletter for the latest cybersecurity insights, threat intelligence, and educational resources.
        </p>
        <div className="flex flex-col sm:flex-row max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary bg-gray-800 border-gray-700 text-gray-200"
          />
          <Button className="mt-2 sm:mt-0 sm:rounded-l-none">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Education;