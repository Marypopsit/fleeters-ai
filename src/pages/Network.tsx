import React, { useState } from 'react';
import { Users2, Filter, MapPin, Briefcase, Award, UserPlus, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';

interface Professional {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  trustScore: number;
  skills: string[];
  aiTools: string[];
  availability: 'Available' | 'Busy' | 'Offline';
  rate: string;
  isFollowing: boolean;
}

export default function Network() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'following' | 'recommended'>('all');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const professionals: Professional[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'AI Motion Designer',
      company: 'Independent',
      location: 'San Francisco, CA',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      trustScore: 98,
      skills: ['Motion Design', '3D Animation', 'Visual Effects'],
      aiTools: ['Midjourney', 'DALL·E', 'Runway'],
      availability: 'Available',
      rate: '$150/hr',
      isFollowing: true
    },
    {
      id: '2',
      name: 'Michael Park',
      role: 'Creative Technologist',
      company: 'Future Labs',
      location: 'New York, NY',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      trustScore: 95,
      skills: ['Creative Direction', 'AI Integration', 'Interactive Design'],
      aiTools: ['Stable Diffusion', 'GPT-4', 'Adobe Firefly'],
      availability: 'Busy',
      rate: '$180/hr',
      isFollowing: false
    },
    {
      id: '3',
      name: 'Emma Thompson',
      role: 'AI Research Artist',
      company: 'AI Studio',
      location: 'London, UK',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      trustScore: 92,
      skills: ['Generative Art', 'Machine Learning', 'Installation Art'],
      aiTools: ['PyTorch', 'RunwayML', 'Processing'],
      availability: 'Available',
      rate: '$140/hr',
      isFollowing: false
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All Professionals', count: 1205 },
    { id: 'following', label: 'Following', count: 48 },
    { id: 'recommended', label: 'Recommended', count: 24 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onProfileClick={() => {}} onHomeClick={() => {}} />
      
      <main className="max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Professional Network</h1>
            <p className="text-gray-600 mt-1">Connect with AI creators and innovators</p>
          </div>
          <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <UserPlus className="h-5 w-5 mr-2" />
            Invite Professional
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Filters Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-gray-900">Filters</h2>
                <Filter className="h-5 w-5 text-gray-500" />
              </div>

              <div className="space-y-6">
                {/* Availability */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Availability</h3>
                  <div className="space-y-2">
                    {['Available Now', 'Available This Week', 'Available Next Week'].map((option) => (
                      <label key={option} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                        <span className="ml-2 text-sm text-gray-600">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Skills</h3>
                  <div className="space-y-2">
                    {['Motion Design', '3D Animation', 'Visual Effects', 'Creative Direction', 'AI Integration'].map((skill) => (
                      <label key={skill} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedSkills.includes(skill)}
                          onChange={() => {
                            setSelectedSkills(prev =>
                              prev.includes(skill)
                                ? prev.filter(s => s !== skill)
                                : [...prev, skill]
                            );
                          }}
                          className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                        />
                        <span className="ml-2 text-sm text-gray-600">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* AI Tools */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">AI Tools</h3>
                  <div className="space-y-2">
                    {['Midjourney', 'DALL·E', 'Stable Diffusion', 'RunwayML', 'Adobe Firefly'].map((tool) => (
                      <label key={tool} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                        <span className="ml-2 text-sm text-gray-600">{tool}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rate Range */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Hourly Rate</h3>
                  <div className="space-y-2">
                    {['Under $50', '$50-$100', '$100-$150', '$150-$200', '$200+'].map((range) => (
                      <label key={range} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                        <span className="ml-2 text-sm text-gray-600">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-9">
            {/* Search and Filters */}
            <div className="mb-6">
              <SearchBar />
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center space-x-6 mb-6">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                  className={`flex items-center space-x-2 pb-2 border-b-2 transition-colors ${
                    activeFilter === tab.id
                      ? 'border-purple-600 text-purple-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="text-sm text-gray-500">({tab.count})</span>
                </button>
              ))}
            </div>

            {/* Professionals Grid */}
            <div className="grid grid-cols-2 gap-6">
              {professionals.map((professional) => (
                <div
                  key={professional.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <img
                        src={professional.avatar}
                        alt={professional.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{professional.name}</h3>
                        <p className="text-gray-600">{professional.role}</p>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className="ml-1 text-sm text-gray-600">{professional.trustScore}% Trust Score</span>
                        </div>
                      </div>
                    </div>
                    <button
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        professional.isFollowing
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}
                    >
                      {professional.isFollowing ? 'Following' : 'Follow'}
                    </button>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{professional.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Briefcase className="h-4 w-4 mr-2" />
                      <span className="text-sm">{professional.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Award className="h-4 w-4 mr-2" />
                      <span className="text-sm">{professional.rate}</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {professional.aiTools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <button className="w-full px-4 py-2 bg-white border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}