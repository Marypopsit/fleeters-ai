import React from 'react';
import { Layout } from 'lucide-react';

interface Community {
  id: string;
  name: string;
  memberCount: number;
}

interface CommunityToggleProps {
  communities: Community[];
  activeCommunity: string;
  onCommunityChange: (communityId: string) => void;
}

export function CommunityToggle({ communities, activeCommunity, onCommunityChange }: CommunityToggleProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex items-center space-x-4">
        {communities.map((community) => (
          <button
            key={community.id}
            onClick={() => onCommunityChange(community.id)}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
              activeCommunity === community.id
                ? 'bg-purple-100 text-purple-700'
                : 'hover:bg-gray-100 text-gray-600'
            }`}
          >
            <Layout className="h-4 w-4" />
            <span>{community.name}</span>
            <span className="text-sm text-gray-500">({community.memberCount})</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CommunityToggle;