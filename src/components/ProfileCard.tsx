import React from 'react';
import { Users, UserPlus, Star } from 'lucide-react';

interface ProfileCardProps {
  onProfileClick: (name: string) => void;
}

interface RecommendedUser {
  name: string;
  role: string;
  avatar: string;
  trustScore: number;
  commonInterests: number;
  isFollowing: boolean;
}

const getTrustBadgeColor = (score: number): string => {
  if (score >= 90) return 'bg-green-500';
  if (score >= 70) return 'bg-blue-500';
  return 'bg-gray-500';
};

export default function ProfileCard({ onProfileClick }: ProfileCardProps) {
  const recommendedUsers: RecommendedUser[] = [
    {
      name: "Sarah Chen",
      role: "AI Video Artist",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      trustScore: 95,
      commonInterests: 87,
      isFollowing: false
    },
    {
      name: "David Kim",
      role: "Prompt Engineer",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      trustScore: 88,
      commonInterests: 92,
      isFollowing: true
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recommended for You</h3>
        <Users className="h-5 w-5 text-purple-600" />
      </div>
      <div className="space-y-4">
        {recommendedUsers.map((user) => (
          <div key={user.name} className="p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center min-w-0">
              <div className="relative flex-shrink-0">
                <button 
                  onClick={() => onProfileClick(user.name)}
                  className="hover:opacity-90 transition-opacity"
                >
                  <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                  <div className={`absolute -top-1 -right-1 ${getTrustBadgeColor(user.trustScore)} text-white text-xs font-bold px-1.5 py-0.5 rounded-md shadow-sm flex items-center`}>
                    <Star className="h-3 w-3 mr-0.5" />
                    {user.trustScore}
                  </div>
                </button>
              </div>
              <div className="ml-3 flex-1">
                <button 
                  onClick={() => onProfileClick(user.name)}
                  className="hover:opacity-80 transition-opacity text-left"
                >
                  <h4 className="font-medium text-gray-900">{user.name}</h4>
                  <p className="text-sm text-gray-500">{user.role}</p>
                  <div className="text-sm text-purple-600 mt-1">
                    {user.commonInterests}% interests match
                  </div>
                </button>
                <button
                  className={`mt-2 flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    user.isFollowing
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  }`}
                >
                  {user.isFollowing ? (
                    <>
                      <Users className="h-4 w-4 mr-1.5" />
                      Following
                    </>
                  ) : (
                    <>
                      <UserPlus className="h-4 w-4 mr-1.5" />
                      Follow
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full mt-4 text-purple-600 hover:text-purple-700 text-sm font-medium">
        View More Recommendations
      </button>
    </div>
  );
}