import React, { useState } from 'react';
import { Activity, UserCheck, Users, Star } from 'lucide-react';

interface ActivityItem {
  id: string;
  user: {
    name: string;
    avatar: string;
    isFavorite?: boolean;
  };
  action: string;
  time: string;
  type: 'post' | 'comment' | 'like' | 'share';
}

export default function ActivityFeed() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'personal' | 'favorites'>('all');

  const activities: ActivityItem[] = [
    {
      id: '1',
      user: {
        name: 'You',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      },
      action: 'Your post received 25 likes',
      time: '2 hours ago',
      type: 'like'
    },
    {
      id: '2',
      user: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        isFavorite: true
      },
      action: 'shared your AI artwork',
      time: '3 hours ago',
      type: 'share'
    },
    {
      id: '3',
      user: {
        name: 'David Kim',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
        isFavorite: true
      },
      action: 'commented on your project',
      time: '5 hours ago',
      type: 'comment'
    }
  ];

  const filteredActivities = activities.filter(activity => {
    switch (activeFilter) {
      case 'personal':
        return activity.user.name === 'You';
      case 'favorites':
        return activity.user.isFavorite;
      default:
        return true;
    }
  });

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              activeFilter === 'all'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Users className="h-4 w-4 inline mr-1" />
            All
          </button>
          <button
            onClick={() => setActiveFilter('personal')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              activeFilter === 'personal'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Activity className="h-4 w-4 inline mr-1" />
            Personal
          </button>
          <button
            onClick={() => setActiveFilter('favorites')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              activeFilter === 'favorites'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <UserCheck className="h-4 w-4 inline mr-1" />
            Favorites
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {filteredActivities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4">
            <div className="relative">
              <img
                src={activity.user.avatar}
                alt={activity.user.name}
                className="w-10 h-10 rounded-full"
              />
              {activity.user.isFavorite && (
                <div className="absolute -top-1 -right-1 bg-yellow-400 rounded-full p-1">
                  <Star className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <p className="text-gray-900">
                <span className="font-medium">{activity.user.name}</span>
                {' '}
                {activity.action}
              </p>
              <p className="text-sm text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredActivities.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No activities to show for the selected filter
        </div>
      )}
    </>
  );
}