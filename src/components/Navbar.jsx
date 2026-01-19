import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Users, Settings, LogOut, Clock, Grid } from 'lucide-react';

const Navbar = ({ pendingCount = 0 }) => {  // Add prop with default value of 0
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', icon: Grid, path: '/admindash', badge: null },
    { name: 'Pending Requests', icon: Clock, path: '/pending', badge: pendingCount || null }, // Use pendingCount or null
    { name: 'Calendar', icon: Calendar, path: '/calendar', badge: null },
    { name: 'All Bookings', icon: Calendar, path: '/admin/bookings', badge: null },
    { name: 'Users', icon: Users, path: '/admin/users', badge: null },
    { name: 'Settings', icon: Settings, path: '/admin/settings', badge: null },
  ];

  const handleLogout = () => {
    // Add your logout logic here
    navigate('/login');
  };

  return (
    <div className="w-72 h-screen bg-gradient-to-b from-green-800 to-green-900 text-white flex flex-col fixed left-0 top-0">
      {/* Header */}
      <div className="p-6 border-b border-green-700">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold">Futsal Admin</h1>
            <p className="text-sm text-green-300">Management Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-green-600 shadow-lg'
                  : 'hover:bg-green-700/50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="flex-1 text-left font-medium">{item.name}</span>
              {item.badge && (
                <span className="bg-yellow-500 text-green-900 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-green-700">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-700/50 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;