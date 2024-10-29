import React from 'react';
import { Star, UserPlus } from 'lucide-react';

export default function RecommendedUsers() {
  const users = [
    {
      id: '1',
      name: 'David Kim',
      role: 'Motion Designer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      matchPercentage: 87,
      trustScore: 94
    },
    {
      id: '2',
      name: 'Lisa Chen',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      matchPercentage: 82,
      trustScore: 91
    },
    {
      id: '3',
      name: 'James Wilson',
      role: 'VFX Artist',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      matchPercentage: 79,
      trustScore: 88
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommended for You</h2>
        <div className="space-y-4">
          {users.map(user => (
            <div key={user.id} className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50">
              <div className="relative mb-2">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full"
                />
                <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {user.trustScore}
                </div>
              </div>
              <h3 className="font-medium text-gray-900">{user.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{user.role}</p>
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span>{user.matchPercentage}% match</span>
              </div>
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center justify-center space-x-2">
                <UserPlus className="h-4 w-4" />
                <span>Follow</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}