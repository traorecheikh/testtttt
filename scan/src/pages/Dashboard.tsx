import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Calendar, Clock, ArrowUpRight, ShieldAlert, Shield, Users, AlertTriangle } from 'lucide-react';
import Card from '../components/ui/Card';

const Dashboard: React.FC = () => {
  const [timeRange, setTimeRange] = useState('week');
  
  const trendData = [
    { name: 'Jan', vulnerabilities: 65 },
    { name: 'Feb', vulnerabilities: 59 },
    { name: 'Mar', vulnerabilities: 80 },
    { name: 'Apr', vulnerabilities: 55 },
    { name: 'May', vulnerabilities: 40 },
    { name: 'Jun', vulnerabilities: 35 },
    { name: 'Jul', vulnerabilities: 30 },
  ];
  
  const severityData = [
    { name: 'High', value: 12, color: '#FF4539' },
    { name: 'Medium', value: 24, color: '#FF9F0A' },
    { name: 'Low', value: 38, color: '#0A84FF' },
    { name: 'Info', value: 56, color: '#64748B' },
  ];
  
  const categoryData = [
    { name: 'Injection', count: 18 },
    { name: 'XSS', count: 12 },
    { name: 'Authentication', count: 9 },
    { name: 'Misconfiguration', count: 16 },
    { name: 'Exposure', count: 7 },
    { name: 'Other', count: 12 },
  ];
  
  const recentScans = [
    { id: 1, target: 'example.com', timestamp: '2025-02-25 14:32', vulnerabilities: 5, critical: 1 },
    { id: 2, target: '192.168.1.10', timestamp: '2025-02-24 09:15', vulnerabilities: 3, critical: 0 },
    { id: 3, target: 'api.service.org', timestamp: '2025-02-23 16:48', vulnerabilities: 8, critical: 2 },
    { id: 4, target: 'internal.network', timestamp: '2025-02-22 11:05', vulnerabilities: 0, critical: 0 },
  ];
  
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Security Dashboard</h1>
          <p className="text-gray-400 flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>February 25, 2025</span>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>Last updated: 10 minutes ago</span>
          </p>
        </div>
        
        <div className="flex p-1 bg-gray-800 rounded-lg">
          <button
            className={`px-3 py-1 text-sm rounded-md ${timeRange === 'week' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setTimeRange('week')}
          >
            Week
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-md ${timeRange === 'month' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setTimeRange('month')}
          >
            Month
          </button>
          <button
            className={`px-3 py-1 text-sm rounded-md ${timeRange === 'year' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
            onClick={() => setTimeRange('year')}
          >
            Year
          </button>
        </div>
      </div>
      
      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gray-900/70">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Vulnerabilities</p>
              <h3 className="text-2xl font-bold text-white mt-1">130</h3>
              <p className="text-sm text-green-500 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>12% less than last month</span>
              </p>
            </div>
            <div className="bg-red-500/10 p-3 rounded-lg">
              <ShieldAlert className="h-6 w-6 text-error" />
            </div>
          </div>
        </Card>
        
        <Card className="bg-gray-900/70">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-400 text-sm">Critical Issues</p>
              <h3 className="text-2xl font-bold text-white mt-1">12</h3>
              <p className="text-sm text-red-500 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>3 new this week</span>
              </p>
            </div>
            <div className="bg-orange-500/10 p-3 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-warning" />
            </div>
          </div>
        </Card>
        
        <Card className="bg-gray-900/70">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-400 text-sm">Protected Assets</p>
              <h3 className="text-2xl font-bold text-white mt-1">28</h3>
              <p className="text-sm text-green-500 flex items-center mt-1">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>5 new assets added</span>
              </p>
            </div>
            <div className="bg-blue-500/10 p-3 rounded-lg">
              <Shield className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>
        
        <Card className="bg-gray-900/70">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-400 text-sm">Team Members</p>
              <h3 className="text-2xl font-bold text-white mt-1">7</h3>
              <p className="text-sm text-gray-400 flex items-center mt-1">
                <span>4 active now</span>
              </p>
            </div>
            <div className="bg-purple-500/10 p-3 rounded-lg">
              <Users className="h-6 w-6 text-accent" />
            </div>
          </div>
        </Card>
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-lg font-medium text-gray-200 mb-4">Vulnerability Trends</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={trendData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', borderRadius: '0.375rem' }} 
                  labelStyle={{ color: '#F9FAFB' }}
                  itemStyle={{ color: '#F9FAFB' }}
                />
                <Legend />
                <Line type="monotone" dataKey="vulnerabilities" stroke="#0A84FF" strokeWidth={2} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
        
        <Card>
          <h3 className="text-lg font-medium text-gray-200 mb-4">Vulnerability Severity</h3>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={severityData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={110}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {severityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', borderRadius: '0.375rem' }} 
                  labelStyle={{ color: '#F9FAFB' }}
                  itemStyle={{ color: '#F9FAFB' }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-lg font-medium text-gray-200 mb-4">Vulnerability Categories</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={categoryData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', borderRadius: '0.375rem' }} 
                  labelStyle={{ color: '#F9FAFB' }}
                  itemStyle={{ color: '#F9FAFB' }}
                />
                <Legend />
                <Bar dataKey="count" fill="#0A84FF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-200">Recent Scans</h3>
            <button className="text-sm text-primary hover:text-primary/80">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Target</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Vulnerabilities</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {recentScans.map((scan) => (
                  <tr key={scan.id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{scan.target}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-400">{scan.timestamp}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                      {scan.vulnerabilities} 
                      {scan.critical > 0 && (
                        <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-900 text-red-200">
                          {scan.critical} critical
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-900 text-green-200">
                        Complete
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;