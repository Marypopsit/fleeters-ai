import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Review {
  id: string;
  client: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
  rating: number;
  text: string;
  date: string;
  project: string;
}

export default function ReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews: Review[] = [
    {
      id: '1',
      client: {
        name: 'Michael Chen',
        role: 'Creative Director',
        company: 'DesignLab',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
      },
      rating: 5,
      text: "Sarah's ability to blend traditional design principles with AI tools is exceptional. Her work on our brand animation project exceeded expectations.",
      date: 'Last month',
      project: 'Brand Animation Series'
    },
    {
      id: '2',
      client: {
        name: 'Emma Thompson',
        role: 'Marketing Lead',
        company: 'TechCorp',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
      },
      rating: 5,
      text: "Incredible attention to detail and creative problem-solving skills. Sarah delivered outstanding results for our AI-powered video campaign.",
      date: '2 months ago',
      project: 'Video Campaign'
    },
    {
      id: '3',
      client: {
        name: 'David Park',
        role: 'Product Manager',
        company: 'InnovateLabs',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
      },
      rating: 5,
      text: "Working with Sarah was a game-changer for our product demos. Her expertise in AI motion design brought our vision to life.",
      date: '3 months ago',
      project: 'Product Launch'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
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
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Client Reviews</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex-none w-[400px] bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
          >
            <div className="flex items-start space-x-4">
              <img
                src={review.client.avatar}
                alt={review.client.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-medium text-gray-900">{review.client.name}</h3>
                <p className="text-sm text-gray-500">{review.client.role} at {review.client.company}</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 relative">
              <Quote className="h-8 w-8 text-gray-200 absolute -top-2 -left-2 -z-10" />
              <p className="text-gray-600 relative z-10 pl-4">{review.text}</p>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-600 font-medium">{review.project}</span>
                <span className="text-gray-500">{review.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}