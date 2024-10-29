import React, { useState } from 'react';
import { Bell, MessageSquare, Users2, Settings, LogOut, LayoutDashboard } from 'lucide-react';
import SearchBar from './SearchBar';
import { currentUser } from '../App';

interface NavbarProps {
  onProfileClick: () => void;
  onHomeClick: () => void;
  onNetworkClick: () => void;
  onMessagesClick: () => void;
  onDashboardClick: () => void;
  currentView?: string;
}

interface ProfileDropdownProps {
  onProfileClick: () => void;
  onDashboardClick: () => void;
  onClose: () => void;
  isOpen: boolean;
}

function ProfileDropdown({ onProfileClick, onDashboardClick, onClose, isOpen }: ProfileDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
      <button
        onClick={() => {
          onProfileClick();
          onClose();
        }}
        className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors flex items-center space-x-2"
      >
        <img
          src={currentUser.avatar}
          alt="Profile"
          className="h-5 w-5 rounded-full"
        />
        <span>My Profile</span>
      </button>
      <button 
        onClick={() => {
          onDashboardClick();
          onClose();
        }}
        className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors flex items-center space-x-2"
      >
        <LayoutDashboard className="h-5 w-5" />
        <span>Personal Dashboard</span>
      </button>
      <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors flex items-center space-x-2">
        <Settings className="h-5 w-5" />
        <span>Settings</span>
      </button>
      <div className="border-t border-gray-200 my-1" />
      <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors flex items-center space-x-2">
        <LogOut className="h-5 w-5" />
        <span>Sign Out</span>
      </button>
    </div>
  );
}

export default function Navbar({ 
  onProfileClick, 
  onHomeClick, 
  onNetworkClick, 
  onMessagesClick,
  onDashboardClick,
  currentView = 'home'
}: NavbarProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-1">
            <button 
              onClick={onHomeClick}
              className="text-xl font-bold text-gray-900 mr-8 hover:text-purple-600 transition-colors"
            >
              fleeters.ai
            </button>
            <div className="w-full max-w-2xl">
              <SearchBar />
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <NavItem 
              icon={<Users2 />} 
              label="Collaborate" 
              active={currentView === 'collaborate'} 
              onClick={onNetworkClick} 
            />
            <NavItem 
              icon={<MessageSquare />} 
              label="Messages" 
              active={currentView === 'messages'} 
              onClick={onMessagesClick} 
            />
            <NavItem 
              icon={<Bell />} 
              label="Notifications" 
              active={currentView === 'notifications'} 
            />
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="h-8 w-8 rounded-full overflow-hidden"
              >
                <img
                  src={currentUser.avatar}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </button>
              <ProfileDropdown
                isOpen={isProfileOpen}
                onProfileClick={onProfileClick}
                onDashboardClick={onDashboardClick}
                onClose={() => setIsProfileOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, label, active = false, onClick }: NavItemProps) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center ${active ? 'text-purple-600' : 'text-gray-500 hover:text-gray-900'}`}
    >
      <div className="h-6 w-6">{icon}</div>
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}