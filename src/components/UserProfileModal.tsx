import React from 'react';
import { X, Trophy, Star, Clock, MapPin, Building2, Calendar, Video, Mail } from 'lucide-react';

interface UserProfileModalProps {
  user: {
    name: string;
    role: string;
    avatar: string;
    trustScore: number;
    availability: {
      status: 'available' | 'busy' | 'offline';
      rate: string;
    };
    location: string;
    company: string;
    experience: string;
    about: string;
    toolStack: string[];
    softSkills: string[];
  };
  onClose: () => void;
}

const getAvailabilityColor = (status: string) => {
  switch (status) {
    case 'available':
      return 'bg-green-100 text-green-700';
    case 'busy':
      return 'bg-yellow-100 text-yellow-700';
    case 'offline':
      return 'bg-gray-100 text-gray-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export function UserProfileModal({ user, onClose }: UserProfileModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">Profile</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <div className="relative">
          <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-600" />
          <div className="px-6 relative">
            <div className="absolute -top-16 left-6">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <div className="absolute -top-10 right-0">
              <div className="bg-white rounded-full p-2 shadow-lg">
                <Trophy className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
            
            <div className="pt-20">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                  <p className="text-gray-600 mt-1">{user.role}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-green-700 font-medium">{user.trustScore}% Trust</span>
                  </div>
                  <div className={`flex items-center px-3 py-1 rounded-full ${getAvailabilityColor(user.availability.status)}`}>
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="font-medium capitalize">{user.availability.status}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-2 text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center">
                  <Building2 className="h-5 w-5 mr-2" />
                  <span>{user.company}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{user.experience}</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900">About</h3>
                <p className="mt-2 text-gray-600 whitespace-pre-line">{user.about}</p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Tool Stack</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {user.toolStack.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Soft Skills</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {user.softSkills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Video className="h-5 w-5" />
                  Book 1:1 Call
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  <Mail className="h-5 w-5" />
                  Share Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileModal;