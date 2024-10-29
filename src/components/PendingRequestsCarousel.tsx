import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, Video, Calendar, CheckCircle2, XCircle } from 'lucide-react';

interface ConsultationRequest {
  id: string;
  requester: {
    name: string;
    avatar: string;
    role: string;
  };
  type: string;
  topic: string;
  proposedDate: string;
  duration: string;
  rate: string;
  message: string;
}

export default function PendingRequestsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const requests: ConsultationRequest[] = [
    {
      id: '1',
      requester: {
        name: 'James Wilson',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        role: 'Motion Designer'
      },
      type: 'Portfolio Review',
      topic: 'AI Motion Design Feedback',
      proposedDate: 'Tomorrow, 3:00 PM',
      duration: '45 min',
      rate: '$150',
      message: 'Would love to get your feedback on my recent AI-generated motion pieces and discuss potential improvements.'
    },
    {
      id: '2',
      requester: {
        name: 'Emily Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        role: 'Creative Director'
      },
      type: 'Project Advisory',
      topic: 'AI Implementation Strategy',
      proposedDate: 'Wed, 2:00 PM',
      duration: '60 min',
      rate: '$200',
      message: 'Need guidance on implementing AI tools in our creative workflow. Looking forward to your insights.'
    },
    {
      id: '3',
      requester: {
        name: 'Michael Park',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
        role: 'AI Artist'
      },
      type: 'Mentorship Session',
      topic: 'Career Development',
      proposedDate: 'Fri, 11:00 AM',
      duration: '30 min',
      rate: '$100',
      message: 'Would appreciate your guidance on transitioning into AI-focused creative roles.'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 340;
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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Pending Consultation Requests</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
            aria-label="Previous request"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
            aria-label="Next request"
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
        {requests.map((request) => (
          <div
            key={request.id}
            className="flex-none w-[400px] bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors border border-gray-200"
          >
            <div className="flex items-start space-x-3 mb-3">
              <img
                src={request.requester.avatar}
                alt={request.requester.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium text-gray-900">{request.requester.name}</h3>
                <p className="text-sm text-gray-500">{request.requester.role}</p>
              </div>
            </div>

            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Type:</span>
                <span className="font-medium text-gray-900">{request.type}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Topic:</span>
                <span className="font-medium text-gray-900">{request.topic}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Proposed Date:</span>
                <span className="font-medium text-gray-900">{request.proposedDate}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Duration:</span>
                <span className="font-medium text-gray-900">{request.duration}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Rate:</span>
                <span className="font-medium text-gray-900">{request.rate}</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">{request.message}</p>

            <div className="flex space-x-2">
              <button className="flex-1 flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Accept
              </button>
              <button className="flex-1 flex items-center justify-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                <XCircle className="h-4 w-4 mr-2" />
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}