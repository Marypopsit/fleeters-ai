import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Building2, Star, ArrowRight } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  matchPercentage: number;
  description: string;
  salary: string;
  location: string;
  type: string;
  duration: string;
  skills: string[];
}

export default function JobCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const jobs: Job[] = [
    {
      id: '1',
      title: 'AI Motion Designer Needed',
      company: 'Creative Studios',
      companyLogo: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
      matchPercentage: 92,
      description: 'Looking for an experienced motion designer with expertise in AI tools...',
      salary: '$8,000-$12,000/month',
      location: 'Remote',
      type: 'Contract',
      duration: '3 months',
      skills: ['After Effects', 'Runway', 'Midjourney']
    },
    {
      id: '2',
      title: 'AI Implementation Specialist',
      company: 'TechCorp',
      companyLogo: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2',
      matchPercentage: 87,
      description: 'Join our team to lead AI implementation projects...',
      salary: '$120,000-$150,000/year',
      location: 'Hybrid',
      type: 'Full-time',
      duration: 'Permanent',
      skills: ['Project Management', 'AI Integration', 'Team Leadership']
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340; // Width of card + gap
      const scrollLeft = scrollRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;
      
      scrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Recommended Opportunities</h2>
          <p className="text-sm text-gray-500 mt-1">Curated matches based on your profile and preferences</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex-none w-80 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors border border-gray-200 group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-white p-2 border border-gray-200">
                  <Building2 className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 line-clamp-1">{job.company}</h3>
                  <div className="flex items-center text-sm text-purple-600">
                    <Star className="h-4 w-4 mr-1" />
                    <span>{job.matchPercentage}% match</span>
                  </div>
                </div>
              </div>
            </div>

            <h4 className="text-gray-900 font-medium mb-2 line-clamp-2">{job.title}</h4>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{job.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Location:</span>
                <span className="text-gray-900">{job.location}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Type:</span>
                <span className="text-gray-900">{job.type}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Duration:</span>
                <span className="text-gray-900">{job.duration}</span>
              </div>
              <div className="flex items-center justify-between text-sm font-medium">
                <span className="text-gray-600">Budget:</span>
                <span className="text-gray-900">{job.salary}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>

            <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors group-hover:shadow-md">
              View Details
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-colors group">
          <span className="font-medium">View All Opportunities</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}