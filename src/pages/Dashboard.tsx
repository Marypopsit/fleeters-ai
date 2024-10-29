import React, { useState } from 'react';
import { Activity, Users, Star, TrendingUp, Calendar, Settings, UserCheck, Video, Clock, DollarSign } from 'lucide-react';
import JobCarousel from '../components/JobCarousel';
import Navbar from '../components/Navbar';
import ActivityFeed from '../components/ActivityFeed';
import PendingRequestsCarousel from '../components/PendingRequestsCarousel';

type TimeFrame = '7d' | '30d' | '90d' | '1y';

export default function Dashboard() {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('30d');

  const handleProfileClick = () => {
    window.location.href = '/profile';
  };

  const handleHomeClick = () => {
    window.location.href = '/';
  };

  const handleDashboardClick = () => {
    // Already on dashboard, no action needed
  };

  const handleMessagesClick = () => {
    window.location.href = '/messages';
  };

  const handleNetworkClick = () => {
    window.location.href = '/collaborate';
  };

  const getRevenueData = (period: TimeFrame) => {
    const data = {
      '7d': { value: '2,450', trend: '+12%' },
      '30d': { value: '8,750', trend: '+27%' },
      '90d': { value: '24,600', trend: '+31%' },
      '1y': { value: '96,300', trend: '+45%' }
    };
    return data[period];
  };

  const stats = [
    { 
      label: `Revenue (${timeFrame})`, 
      value: `$${getRevenueData(timeFrame).value}`,
      trend: getRevenueData(timeFrame).trend,
      icon: <DollarSign className="h-5 w-5 text-green-500" /> 
    },
    { label: 'Trust Score', value: '94%', icon: <Star className="h-5 w-5 text-yellow-500" /> },
    { label: 'Network Growth', value: '+27%', icon: <TrendingUp className="h-5 w-5 text-purple-500" /> },
    { label: 'Community Impact', value: '2.3K', icon: <Users className="h-5 w-5 text-blue-500" /> }
  ];

  const upcomingConsultations = [
    {
      title: 'AI Motion Design Mentoring',
      consultant: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      date: 'Tomorrow, 2:00 PM',
      duration: '60 min',
      type: 'Upskilling Session',
      status: 'confirmed'
    },
    {
      title: 'Project Implementation Review',
      consultant: 'Michael Park',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      date: 'Wed, 11:00 AM',
      duration: '45 min',
      type: 'Advisory Call',
      status: 'pending'
    },
    {
      title: 'Career Development Strategy',
      consultant: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      date: 'Fri, 6:00 PM',
      duration: '30 min',
      type: 'Mentorship Session',
      status: 'confirmed'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        onProfileClick={handleProfileClick}
        onHomeClick={handleHomeClick}
        onDashboardClick={handleDashboardClick}
        onMessagesClick={handleMessagesClick}
        onNetworkClick={handleNetworkClick}
        currentView="dashboard"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8 pt-20">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Personal Dashboard</h1>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Settings className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Time Frame Selector */}
        <div className="flex items-center justify-end mb-6">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {[
              { value: '7d', label: '7D' },
              { value: '30d', label: '30D' },
              { value: '90d', label: '90D' },
              { value: '1y', label: '1Y' }
            ].map((period) => (
              <button
                key={period.value}
                onClick={() => setTimeFrame(period.value as TimeFrame)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  timeFrame === period.value
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500">{stat.label}</span>
                {stat.icon}
              </div>
              <div className="flex items-baseline">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                {stat.trend && (
                  <span className="ml-2 text-sm font-medium text-green-600">{stat.trend}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Activity Feed */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <ActivityFeed />
            </div>
            <PendingRequestsCarousel />
          </div>

          {/* Upcoming Consultations */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Upcoming Consultations</h2>
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {upcomingConsultations.map((consultation) => (
                <div key={consultation.title} className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <img
                      src={consultation.avatar}
                      alt={consultation.consultant}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{consultation.title}</h3>
                      <p className="text-sm text-gray-500">with {consultation.consultant}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{consultation.date}</span>
                      <span className="mx-2">•</span>
                      <span>{consultation.duration}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      consultation.status === 'confirmed'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {consultation.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                    </span>
                  </div>
                  <button className="w-full mt-3 flex items-center justify-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    <Video className="h-4 w-4" />
                    <span>Join Call</span>
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-purple-600 hover:text-purple-700 text-sm font-medium">
              View Full Calendar
            </button>
          </div>
        </div>

        {/* Job Carousel */}
        <JobCarousel />
      </div>
    </div>
  );
}