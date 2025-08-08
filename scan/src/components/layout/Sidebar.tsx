import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Scan, 
  LayoutDashboard, 
  FileText, 
  GraduationCap, 
  Users, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { path: '/scanner', label: 'Scanner', icon: <Scan size={20} /> },
    { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/templates', label: 'Templates', icon: <FileText size={20} /> },
    { path: '/education', label: 'Education', icon: <GraduationCap size={20} /> },
    { path: '/social-engineering', label: 'Social Engineering', icon: <Users size={20} /> },
  ];

  return (
    <>
      {/* Mobile backdrop */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-200 ${collapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} 
        onClick={() => setCollapsed(true)} />
      
      {/* Sidebar */}
      <aside 
        className={`fixed md:sticky top-0 h-full bg-gray-900 border-r border-gray-800 transition-all duration-300 z-30 ${
          collapsed ? 'w-16' : 'w-64'
        } md:h-[calc(100vh-64px)] flex flex-col`}
      >
        <div className="p-4 flex flex-col flex-1">
          <div className="space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center px-3 py-2.5 rounded-md transition-colors duration-200
                  ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-400 hover:text-white hover:bg-gray-800'}
                `}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                <span className={`ml-3 whitespace-nowrap transition-opacity duration-200 ${collapsed ? 'opacity-0 hidden' : 'opacity-100'}`}>
                  {item.label}
                </span>
              </NavLink>
            ))}
          </div>
          
          {/* Status indicator */}
          <div className={`mt-auto p-3 bg-gray-800/50 rounded-md flex items-center transition-all ${collapsed ? 'justify-center' : 'justify-between'}`}>
            <div className={`flex items-center ${collapsed ? 'hidden' : 'block'}`}>
              <div className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
              <span className="text-sm text-gray-400">System Online</span>
            </div>
            <button 
              onClick={() => setCollapsed(!collapsed)}
              className="p-1 rounded-full hover:bg-gray-700 transition-colors text-gray-400 hover:text-white"
            >
              {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          </div>
        </div>
      </aside>

      {/* Toggle button for mobile */}
      <button
        className="md:hidden fixed bottom-4 right-4 z-40 p-2 rounded-full bg-primary text-white shadow-lg"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </button>
    </>
  );
};

export default Sidebar;