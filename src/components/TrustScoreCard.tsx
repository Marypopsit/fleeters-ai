import React from 'react';
import { Star, Trophy, TrendingUp } from 'lucide-react';

interface TrustScoreCardProps {
  trustScore: number;
  rank: number;
  totalProfessionals: number;
  category: string;
}

export default function TrustScoreCard({ 
  trustScore, 
  rank, 
  totalProfessionals, 
  category 
}: TrustScoreCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Star className="h-5 w-5 text-yellow-500" />
          <span className="text-gray-600">Trust Score</span>
        </div>
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-4 w-4 text-green-500" />
          <span className="text-sm text-green-600">Top 5%</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <p className="text-3xl font-bold text-gray-900">{trustScore}%</p>
          <span className="text-sm text-gray-500">Verified Professional</span>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end space-x-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <p className="font-semibold text-gray-900">Rank #{rank}</p>
          </div>
          <p className="text-sm text-gray-500">
            of {totalProfessionals} {category} professionals
          </p>
        </div>
      </div>
    </div>
  );
}