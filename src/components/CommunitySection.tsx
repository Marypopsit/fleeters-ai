import React from 'react';
import { Users, TrendingUp, Palette, Code2, LineChart } from 'lucide-react';

export default function CommunitySection() {
  const communities = [
    {
      name: "AI in Marketing",
      icon: <TrendingUp className="h-5 w-5" />,
      members: "12.4K",
      color: "text-green-500"
    },
    {
      name: "AI Design Hub",
      icon: <Palette className="h-5 w-5" />,
      members: "8.7K",
      color: "text-purple-500"
    },
    {
      name: "AI Development",
      icon: <Code2 className="h-5 w-5" />,
      members: "15.2K",
      color: "text-blue-500"
    },
    {
      name: "AI Analytics",
      icon: <LineChart className="h-5 w-5" />,
      members: "10.1K",
      color: "text-orange-500"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Your Communities</h2>
          <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">
            Find More
          </button>
        </div>
        <div className="space-y-4">
          {communities.map((community) => (
            <div key={community.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="flex items-center space-x-3">
                <div className={`${community.color} bg-opacity-10 p-2 rounded-lg`}>
                  {community.icon}
                </div>
                <div className="text-center">
                  <h3 className="font-medium text-gray-900">{community.name}</h3>
                  <div className="text-sm text-gray-500 mt-1">
                    <Users className="h-4 w-4 inline mr-1" />
                    <span>{community.members} members</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}