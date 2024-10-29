import React, { useState } from 'react';
import { Star, MapPin, Briefcase, Clock, CheckCircle2, XCircle, MessageSquare, FileText, ExternalLink } from 'lucide-react';

interface Applicant {
  id: string;
  name: string;
  avatar: string;
  role: string;
  location: string;
  experience: string;
  appliedFor: string;
  coverLetter: string;
  portfolio: string;
  matchScore: number;
  skills: string[];
  availability: string;
  expectedRate: string;
  status: 'pending' | 'shortlisted' | 'rejected';
}

export default function ApplicantsList() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'shortlisted' | 'rejected'>('all');
  
  const applicants: Applicant[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      role: 'Senior Motion Designer',
      location: 'San Francisco, CA',
      experience: '8 years',
      appliedFor: 'AI Motion Design Lead',
      coverLetter: 'I have extensive experience in combining traditional motion design principles with cutting-edge AI tools...',
      portfolio: 'https://portfolio.example.com/sarah',
      matchScore: 95,
      skills: ['After Effects', 'Runway', 'Midjourney', 'Motion Design', 'Team Leadership'],
      availability: 'Immediate',
      expectedRate: '$120/hr',
      status: 'pending'
    },
    {
      id: '2',
      name: 'Michael Park',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Creative Technologist',
      location: 'New York, NY',
      experience: '6 years',
      appliedFor: 'AI Motion Design Lead',
      coverLetter: 'My background in both creative direction and technical implementation makes me uniquely qualified...',
      portfolio: 'https://portfolio.example.com/michael',
      matchScore: 88,
      skills: ['Motion Graphics', 'Stable Diffusion', 'Creative Direction', 'Project Management'],
      availability: '2 weeks',
      expectedRate: '$100/hr',
      status: 'shortlisted'
    },
    {
      id: '3',
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      role: 'AI Artist & Animator',
      location: 'London, UK',
      experience: '5 years',
      appliedFor: 'AI Motion Design Lead',
      coverLetter: 'I bring a unique perspective combining traditional animation with AI-powered workflows...',
      portfolio: 'https://portfolio.example.com/emma',
      matchScore: 92,
      skills: ['3D Animation', 'AI Integration', 'Character Design', 'Storyboarding'],
      availability: '1 month',
      expectedRate: '$95/hr',
      status: 'pending'
    }
  ];

  const filteredApplicants = applicants.filter(
    applicant => filter === 'all' || applicant.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'shortlisted':
        return 'bg-green-100 text-green-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'all'
              ? 'bg-purple-100 text-purple-700'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          All Applications ({applicants.length})
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'pending'
              ? 'bg-yellow-100 text-yellow-700'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Pending Review
        </button>
        <button
          onClick={() => setFilter('shortlisted')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'shortlisted'
              ? 'bg-green-100 text-green-700'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Shortlisted
        </button>
        <button
          onClick={() => setFilter('rejected')}
          className={`px-4 py-2 rounded-lg ${
            filter === 'rejected'
              ? 'bg-red-100 text-red-700'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Rejected
        </button>
      </div>

      {/* Applicants List */}
      <div className="space-y-4">
        {filteredApplicants.map((applicant) => (
          <div
            key={applicant.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <img
                  src={applicant.avatar}
                  alt={applicant.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{applicant.name}</h3>
                  <p className="text-gray-600">{applicant.role}</p>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">
                      {applicant.matchScore}% match
                    </span>
                  </div>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(applicant.status)}`}>
                {applicant.status.charAt(0).toUpperCase() + applicant.status.slice(1)}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                {applicant.location}
              </div>
              <div className="flex items-center text-gray-600">
                <Briefcase className="h-4 w-4 mr-2" />
                {applicant.experience}
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                Available in {applicant.availability}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium text-gray-900 mb-2">Cover Letter</h4>
              <p className="text-gray-600 text-sm">{applicant.coverLetter}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {applicant.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t flex items-center justify-between">
              <div className="flex space-x-4">
                <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message
                </button>
                <a
                  href={applicant.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  View Portfolio
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Shortlist
                </button>
                <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <XCircle className="h-4 w-4 mr-2" />
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}