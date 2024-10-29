import React, { useState } from 'react';
import { Star, Clock, Award, BookOpen, Lightbulb, Users2, MessageSquare } from 'lucide-react';

interface ConsultantsListProps {
  onMessageConsultant: (id: string, name: string) => void;
}

export default function ConsultantsList({ onMessageConsultant }: ConsultantsListProps) {
  const [activeCategory, setActiveCategory] = useState<'upskilling' | 'advisory' | 'mentorship'>('upskilling');

  const consultants = [
    {
      id: '1',
      name: 'Dr. Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      role: 'AI Motion Design Expert',
      category: 'upskilling',
      expertise: ['Motion Design', 'AI Tools Integration', 'Creative Direction'],
      rating: 4.9,
      reviews: 124,
      rate: '$200/hour',
      availability: 'This Week',
      description: 'Helping creatives master AI-powered motion design workflows. Specialized in Runway, Midjourney, and After Effects integration.',
      languages: ['English', 'Mandarin'],
      nextAvailable: 'Tomorrow, 2 PM'
    },
    {
      id: '2',
      name: 'Michael Park',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      role: 'Technical Project Advisor',
      category: 'advisory',
      expertise: ['AI Implementation', 'Project Management', 'Team Scaling'],
      rating: 4.8,
      reviews: 89,
      rate: '$180/hour',
      availability: 'Next Week',
      description: 'Guiding teams through successful AI project implementations. Focus on scalable solutions and best practices.',
      languages: ['English', 'Korean'],
      nextAvailable: 'Monday, 10 AM'
    },
    {
      id: '3',
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      role: 'Creative AI Mentor',
      category: 'mentorship',
      expertise: ['Career Development', 'Portfolio Review', 'Industry Insights'],
      rating: 4.9,
      reviews: 156,
      rate: '$150/hour',
      availability: 'Today',
      description: 'Supporting emerging AI artists in developing their careers. Personalized guidance and industry connections.',
      languages: ['English', 'French'],
      nextAvailable: 'Today, 5 PM'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold text-gray-900">Expert Consultants</h2>
        <div className="flex space-x-3">
          <button
            onClick={() => setActiveCategory('upskilling')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeCategory === 'upskilling'
                ? 'bg-purple-100 text-purple-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <BookOpen className="h-4 w-4 mr-1" />
            <span>Upskilling Experts</span>
          </button>
          <button
            onClick={() => setActiveCategory('advisory')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeCategory === 'advisory'
                ? 'bg-purple-100 text-purple-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Lightbulb className="h-4 w-4 mr-1" />
            <span>Project Advisory</span>
          </button>
          <button
            onClick={() => setActiveCategory('mentorship')}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              activeCategory === 'mentorship'
                ? 'bg-purple-100 text-purple-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Users2 className="h-4 w-4 mr-1" />
            <span>Peer Mentorship</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {consultants
          .filter(consultant => consultant.category === activeCategory)
          .map((consultant) => (
            <div
              key={consultant.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <img
                  src={consultant.avatar}
                  alt={consultant.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{consultant.name}</h3>
                  <p className="text-gray-600 text-sm">{consultant.role}</p>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">
                      {consultant.rating} ({consultant.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-gray-600 text-sm">{consultant.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {consultant.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Next available: {consultant.nextAvailable}</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  <span>{consultant.rate}</span>
                </div>
              </div>

              <button
                onClick={() => onMessageConsultant(consultant.id, consultant.name)}
                className="w-full mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Send Message
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}