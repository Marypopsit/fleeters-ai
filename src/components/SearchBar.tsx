import React, { useState } from 'react';
import { Search, SlidersHorizontal, X, Check } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  options: string[];
}

const filterOptions: FilterOption[] = [
  {
    id: 'tools',
    label: 'AI Tools',
    options: ['Midjourney', 'DALL·E', 'Stable Diffusion', 'Runway', 'ChatGPT', 'Claude', 'Pika Labs']
  },
  {
    id: 'specialty',
    label: 'Specialty',
    options: ['Prompt Engineering', 'Video Generation', 'Image Creation', 'Motion Design', '3D Modeling']
  },
  {
    id: 'availability',
    label: 'Availability',
    options: ['Available Now', 'Next Week', 'Next Month']
  },
  {
    id: 'rate',
    label: 'Daily Rate',
    options: ['Under $500', '$500-$1000', 'Over $1000']
  }
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const toggleFilter = (category: string, value: string) => {
    setSelectedFilters(prev => {
      const current = prev[category] || [];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      
      return {
        ...prev,
        [category]: updated
      };
    });
  };

  const clearFilters = () => {
    setSelectedFilters({});
  };

  const getActiveFiltersCount = () => {
    return Object.values(selectedFilters).reduce((acc, curr) => acc + curr.length, 0);
  };

  return (
    <div className="relative">
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, tool, or specialty..."
          className="w-full pl-10 pr-36 py-2.5 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="absolute right-2 top-1.5 px-3 py-1.5 flex items-center space-x-2 bg-white hover:bg-gray-50 rounded-lg transition-colors border border-gray-200"
        >
          <SlidersHorizontal className="h-4 w-4 text-gray-600" />
          <span className="text-sm text-gray-600">Advanced</span>
          {getActiveFiltersCount() > 0 && (
            <span className="flex items-center justify-center bg-purple-600 text-white text-xs rounded-full h-5 w-5">
              {getActiveFiltersCount()}
            </span>
          )}
        </button>
      </div>

      {/* Advanced Filters Dropdown */}
      {showFilters && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Advanced Search</h3>
              <div className="flex items-center space-x-4">
                {getActiveFiltersCount() > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Clear all filters
                  </button>
                )}
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {filterOptions.map((category) => (
                <div key={category.id}>
                  <h4 className="font-medium text-gray-900 mb-2">{category.label}</h4>
                  <div className="space-y-2">
                    {category.options.map((option) => (
                      <label
                        key={option}
                        className="flex items-center space-x-2 cursor-pointer group"
                      >
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            selectedFilters[category.id]?.includes(option)
                              ? 'bg-purple-600 border-purple-600'
                              : 'border-gray-300 group-hover:border-purple-400'
                          }`}
                        >
                          {selectedFilters[category.id]?.includes(option) && (
                            <Check className="h-3 w-3 text-white" />
                          )}
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-900">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t">
              <p className="text-sm text-gray-500">
                {getActiveFiltersCount()} filters applied
              </p>
              <button
                onClick={() => setShowFilters(false)}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Show Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}