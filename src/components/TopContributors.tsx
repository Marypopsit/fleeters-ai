import React from 'react';
import { Trophy, Star } from 'lucide-react';

export default function TopContributors() {
  const contributors = [
    {
      name: "Elena Rodriguez",
      role: "Motion Designer",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      trustScore: 98,
      contributions: 156
    },
    {
      name: "Michael Chang",
      role: "3D Artist",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      trustScore: 95,
      contributions: 143
    },
    {
      name: "Sarah Wilson",
      role: "Video Creator",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      trustScore: 93,
      contributions: 128
    }
  ];

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Top Contributors</h2>
        <Trophy className="h-5 w-5 text-yellow-500" />
      </div>
      <div className="space-y-4">
        {contributors.map((contributor, index) => (
          <div key={contributor.name} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="relative">
              <img
                src={contributor.avatar}
                alt={contributor.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {index + 1}
              </div>
            </div>
            <div className="flex-1 text-center">
              <h3 className="font-medium text-gray-900">{contributor.name}</h3>
              <p className="text-sm text-gray-500">{contributor.role}</p>
              <div className="flex items-center justify-center mt-1 text-sm">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span className="text-gray-600">{contributor.contributions} contributions</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-purple-600 hover:text-purple-700 text-sm font-medium">
        View Full Leaderboard
      </button>
    </>
  );
}