import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, Share2, Bookmark, X, Lightbulb, TrendingUp } from 'lucide-react';

interface DiscussionFeedProps {
  onProfileClick: (name: string) => void;
}

export default function DiscussionFeed({ onProfileClick }: DiscussionFeedProps) {
  const [activeCommunity, setActiveCommunity] = useState('all');
  const [showAISuggestion, setShowAISuggestion] = useState(true);

  const communities = [
    { id: 'all', name: 'All Communities', count: 45 },
    { id: 'visual', name: 'Visual AI Artists', count: 18 },
    { id: 'prompt', name: 'Prompt Engineers', count: 12 },
    { id: 'video', name: 'AI Video Creators', count: 15 }
  ];

  const aiSuggestion = {
    title: "Content Opportunity",
    description: "The community is discussing Runway's new text-to-video feature. Share your experience with the latest update!",
    engagement: 89
  };

  const discussions = [
    {
      id: 1,
      author: "Sarah Chen",
      role: "ML Engineer at Google",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      time: "2h ago",
      community: "AI Development",
      title: "Implementing Attention Mechanisms in Production",
      content: "I've been working on scaling attention mechanisms for large language models. Here's what I've learned about optimizing memory usage...",
      likes: 234,
      comments: 56,
    },
    {
      id: 2,
      author: "Marcus Rodriguez",
      role: "AI Research Director",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      time: "5h ago",
      community: "AI in Marketing",
      title: "The Impact of Generative AI on Content Creation",
      content: "Our latest research shows that companies implementing AI in their content strategy see a 3x increase in engagement...",
      likes: 189,
      comments: 43,
    }
  ];

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center space-x-4 overflow-x-auto">
          {communities.map((community) => (
            <button
              key={community.id}
              onClick={() => setActiveCommunity(community.id)}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors whitespace-nowrap ${
                activeCommunity === community.id
                  ? 'bg-purple-100 text-purple-700'
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
            >
              <span>{community.name}</span>
              <span className="text-sm text-gray-500">({community.count})</span>
            </button>
          ))}
        </div>
      </div>

      {showAISuggestion && (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg shadow-sm border border-purple-100 p-6 relative">
          <button
            onClick={() => setShowAISuggestion(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Lightbulb className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{aiSuggestion.title}</h3>
              <p className="mt-1 text-gray-600">{aiSuggestion.description}</p>
              <div className="mt-2 flex items-center text-sm text-purple-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>{aiSuggestion.engagement}% engagement potential</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {discussions.map((post) => (
        <div key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <img src={post.avatar} alt={post.author} className="h-12 w-12 rounded-full" />
            <div className="ml-4">
              <h3 className="font-medium text-gray-900">{post.author}</h3>
              <div className="text-sm text-gray-500">
                <span>{post.role}</span>
                <span className="mx-2">·</span>
                <span>{post.time}</span>
                <span className="mx-2">·</span>
                <span className="text-blue-600">#{post.community}</span>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
            <p className="mt-2 text-gray-600">{post.content}</p>
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <div className="flex space-x-6">
              <button className="flex items-center text-gray-600 hover:text-blue-600">
                <ThumbsUp className="h-5 w-5 mr-2" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-600">
                <MessageSquare className="h-5 w-5 mr-2" />
                <span>{post.comments}</span>
              </button>
            </div>
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-blue-600">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="text-gray-600 hover:text-blue-600">
                <Bookmark className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}