import React, { useState } from 'react';
import { Image, Plus, Send, Tag, X } from 'lucide-react';

const availableTags = [
  'freelance gig',
  'job',
  'tutorial',
  'showcase',
  'question',
  'discussion',
  'resource'
];

export default function CreatePost() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCommunities, setSelectedCommunities] = useState<string[]>([]);
  const [showTagMenu, setShowTagMenu] = useState(false);

  const communities = [
    { id: 'visual', name: 'Visual AI Artists' },
    { id: 'prompt', name: 'Prompt Engineers' },
    { id: 'video', name: 'AI Video Creators' }
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const toggleCommunity = (communityId: string) => {
    setSelectedCommunities(prev =>
      prev.includes(communityId)
        ? prev.filter(id => id !== communityId)
        : [...prev, communityId]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div className="flex items-start space-x-4">
        <textarea
          placeholder="Share your thoughts, experiences, or ask a question..."
          className="flex-1 resize-none border-0 bg-transparent focus:ring-0 min-h-[100px] text-gray-900 placeholder-gray-500"
        />
      </div>

      {/* Selected Tags */}
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {selectedTags.map(tag => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
              <button
                onClick={() => toggleTag(tag)}
                className="ml-1 hover:text-purple-900"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Selected Communities */}
      {selectedCommunities.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {selectedCommunities.map(communityId => {
            const community = communities.find(c => c.id === communityId);
            return (
              <span
                key={communityId}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700"
              >
                {community?.name}
                <button
                  onClick={() => toggleCommunity(communityId)}
                  className="ml-1 hover:text-blue-900"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            );
          })}
        </div>
      )}

      <div className="flex items-center justify-between mt-4 pt-3 border-t">
        <div className="flex space-x-2">
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
            <Image className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
            <Plus className="h-5 w-5" />
          </button>
          <div className="relative">
            <button
              onClick={() => setShowTagMenu(!showTagMenu)}
              className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100"
            >
              <Tag className="h-5 w-5" />
            </button>
            
            {/* Tags Menu */}
            {showTagMenu && (
              <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-10">
                <div className="space-y-1">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Add tags</h4>
                  {availableTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`w-full px-3 py-1.5 text-left text-sm rounded-md transition-colors ${
                        selectedTags.includes(tag)
                          ? 'bg-purple-100 text-purple-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Select communities</h4>
                  {communities.map(community => (
                    <button
                      key={community.id}
                      onClick={() => toggleCommunity(community.id)}
                      className={`w-full px-3 py-1.5 text-left text-sm rounded-md transition-colors ${
                        selectedCommunities.includes(community.id)
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {community.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center space-x-2">
          <Send className="h-4 w-4" />
          <span>Share</span>
        </button>
      </div>
    </div>
  );
}