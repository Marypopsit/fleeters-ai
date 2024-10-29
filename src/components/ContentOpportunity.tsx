import React, { useState } from 'react';
import { Lightbulb, TrendingUp, X } from 'lucide-react';

export default function ContentOpportunity() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg shadow-sm border border-purple-100 p-6 relative">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <X className="h-5 w-5" />
      </button>
      <div className="flex items-start space-x-4">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Lightbulb className="h-6 w-6 text-purple-600" />
        </div>
        <div className="text-center">
          <h3 className="font-medium text-gray-900">Content Opportunity</h3>
          <p className="mt-1 text-gray-600">
            The community is discussing Runway's new text-to-video feature. Share your experience with the latest update!
          </p>
          <div className="mt-2 flex items-center justify-center text-sm text-purple-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>89% engagement potential</span>
          </div>
        </div>
      </div>
    </div>
  );
}