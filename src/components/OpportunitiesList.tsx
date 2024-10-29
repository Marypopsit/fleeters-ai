import React from 'react';
import { MapPin, Briefcase, Clock, Plus } from 'lucide-react';

interface OpportunitiesListProps {
  onCreateOpportunity: () => void;
  onMessageUser: (id: string, name: string) => void;
}

export default function OpportunitiesList({ onCreateOpportunity, onMessageUser }: OpportunitiesListProps) {
  const opportunities = [
    {
      id: '1',
      title: 'AI Motion Designer Needed',
      company: 'Creative Studios',
      location: 'Remote',
      type: 'Contract',
      duration: '3 months',
      budget: '$8,000-$12,000/month',
      description: 'Looking for an experienced motion designer with expertise in AI tools...',
      skills: ['After Effects', 'Runway', 'Midjourney'],
      postedBy: {
        id: 'user1',
        name: 'Alex Chen',
        role: 'Creative Director'
      }
    },
    {
      id: '2',
      title: 'AI Implementation Specialist',
      company: 'TechCorp',
      location: 'Hybrid',
      type: 'Full-time',
      duration: 'Permanent',
      budget: '$120,000-$150,000/year',
      description: 'Join our team to lead AI implementation projects...',
      skills: ['Project Management', 'AI Integration', 'Team Leadership'],
      postedBy: {
        id: 'user2',
        name: 'Sarah Kim',
        role: 'Technical Lead'
      }
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Available Opportunities</h2>
        <button
          onClick={onCreateOpportunity}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Post Opportunity
        </button>
      </div>

      <div className="grid gap-6">
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{opportunity.title}</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>{opportunity.company}</span>
                    <span className="mx-2">•</span>
                    <span>{opportunity.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{opportunity.location}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{opportunity.duration}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-medium text-gray-900">{opportunity.budget}</span>
              </div>
            </div>

            <p className="mt-4 text-gray-600">{opportunity.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {opportunity.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t">
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="font-medium text-gray-900">{opportunity.postedBy.name}</p>
                  <p className="text-gray-500">{opportunity.postedBy.role}</p>
                </div>
              </div>
              <button
                onClick={() => onMessageUser(opportunity.postedBy.id, opportunity.postedBy.name)}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}