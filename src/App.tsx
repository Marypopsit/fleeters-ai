import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CommunitySection from './components/CommunitySection';
import DiscussionFeed from './components/DiscussionFeed';
import CreatePost from './components/CreatePost';
import UserProfileModal from './components/UserProfileModal';
import RecommendedUsers from './components/RecommendedUsers';
import ContentOpportunity from './components/ContentOpportunity';
import TopContributors from './components/TopContributors';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import Collaborate from './pages/Collaborate';

export const currentUser = {
  name: "Alex Chen",
  role: "Motion Designer & AI Artist",
  avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
  email: "alex.chen@example.com",
  dailyRate: "$750/day",
  trustScore: 94
};

function App() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [currentView, setCurrentView] = useState<'feed' | 'profile' | 'dashboard' | 'messages' | 'collaborate'>('feed');

  const handleProfileClick = () => {
    setCurrentView('profile');
  };

  const handleHomeClick = () => {
    setCurrentView('feed');
  };

  const handleDashboardClick = () => {
    setCurrentView('dashboard');
  };

  const handleMessagesClick = () => {
    setCurrentView('messages');
  };

  const handleNetworkClick = () => {
    setCurrentView('collaborate');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'profile':
        return <Profile />;
      case 'dashboard':
        return <Dashboard />;
      case 'messages':
        return <Messages />;
      case 'collaborate':
        return <Collaborate />;
      default:
        return (
          <>
            <main className="max-w-7xl mx-auto px-4 pt-20">
              <div className="grid grid-cols-12 gap-8 py-6">
                <div className="col-span-3 space-y-4">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-6">
                      <TopContributors />
                    </div>
                  </div>
                  <CommunitySection />
                </div>
                
                <div className="col-span-6 space-y-4">
                  <CreatePost />
                  <DiscussionFeed onProfileClick={setSelectedProfile} />
                </div>
                
                <div className="col-span-3 space-y-4">
                  <ContentOpportunity />
                  <RecommendedUsers onProfileClick={setSelectedProfile} />
                </div>
              </div>
            </main>

            {selectedProfile && (
              <UserProfileModal 
                user={selectedProfile} 
                onClose={() => setSelectedProfile(null)} 
              />
            )}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Navbar 
        onProfileClick={handleProfileClick}
        onHomeClick={handleHomeClick}
        onDashboardClick={handleDashboardClick}
        onMessagesClick={handleMessagesClick}
        onNetworkClick={handleNetworkClick}
        currentView={currentView}
      />
      {renderContent()}
    </div>
  );
}

export default App;