import React from 'react';
import { Lightbulb, TrendingUp, Video, FileText } from 'lucide-react';

interface Suggestion {
  id: string;
  type: 'content' | 'question' | 'tutorial';
  title: string;
  description: string;
  potential: number;
}

interface AISuggestionsProps {
  suggestions: Suggestion[];
  onSuggestionSelect: (suggestion: Suggestion) => void;
}

export function AISuggestions({ suggestions, onSuggestionSelect }: AISuggestionsProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case 'content':
        return <FileText className="h-5 w-5 text-purple-500" />;
      case 'question':
        return <Lightbulb className="h-5 w-5 text-yellow-500" />;
      case 'tutorial':
        return <Video className="h-5 w-5 text-blue-500" />;
      default:
        return <TrendingUp className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">AI Suggestions</h3>
      <div className="space-y-3">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion.id}
            onClick={() => onSuggestionSelect(suggestion)}
            className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100 hover:border-gray-200"
          >
            <div className="flex items-start space-x-3">
              {getIcon(suggestion.type)}
              <div>
                <h4 className="font-medium text-gray-900">{suggestion.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{suggestion.description}</p>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600">
                    {suggestion.potential}% engagement potential
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default AISuggestions;