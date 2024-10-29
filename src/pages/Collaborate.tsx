import React, { useState } from 'react';
import { Users2, Filter, MapPin, Briefcase, Award, UserPlus, Star, Video, Calendar, TrendingUp, Search, Clock, CheckCircle2, XCircle, MessageSquare, Plus, Sparkles, BookOpen, Lightbulb } from 'lucide-react';
import MessageModal from '../components/MessageModal';
import CreateOpportunityModal from '../components/CreateOpportunityModal';
import Navbar from '../components/Navbar';
import OpportunitiesList from '../components/OpportunitiesList';
import ConsultantsList from '../components/ConsultantsList';
import ApplicantsList from '../components/ApplicantsList';

export default function Collaborate() {
  const [activeTab, setActiveTab] = useState<'opportunities' | 'consultants' | 'applicants'>('opportunities');
  const [selectedRecipient, setSelectedRecipient] = useState<{ id: string; name: string } | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);

  const handleSendMessage = (message: string) => {
    console.log('Sending message:', message);
    setShowMessageModal(false);
    setSelectedRecipient(null);
  };

  const handleCreateOpportunity = (data: any) => {
    console.log('Creating opportunity:', data);
    setShowCreateModal(false);
  };

  const handleMessagesClick = () => {
    window.location.href = '/messages';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        onProfileClick={() => {}} 
        onHomeClick={() => {}} 
        onNetworkClick={() => {}} 
        onMessagesClick={handleMessagesClick}
        onDashboardClick={() => {}}
        currentView="collaborate"
      />
      
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Collaborate</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('opportunities')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'opportunities'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Opportunities
            </button>
            <button
              onClick={() => setActiveTab('consultants')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'consultants'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              1:1 Consultants
            </button>
            <button
              onClick={() => setActiveTab('applicants')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'applicants'
                  ? 'bg-purple-100 text-purple-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Review Applicants
            </button>
          </div>
        </div>

        {activeTab === 'opportunities' && (
          <OpportunitiesList 
            onCreateOpportunity={() => setShowCreateModal(true)}
            onMessageUser={(id, name) => {
              setSelectedRecipient({ id, name });
              setShowMessageModal(true);
            }}
          />
        )}
        
        {activeTab === 'consultants' && (
          <ConsultantsList
            onMessageConsultant={(id, name) => {
              setSelectedRecipient({ id, name });
              setShowMessageModal(true);
            }}
          />
        )}

        {activeTab === 'applicants' && (
          <ApplicantsList />
        )}

        {showCreateModal && (
          <CreateOpportunityModal
            onClose={() => setShowCreateModal(false)}
            onSubmit={handleCreateOpportunity}
          />
        )}

        {showMessageModal && selectedRecipient && (
          <MessageModal
            recipientName={selectedRecipient.name}
            onClose={() => {
              setShowMessageModal(false);
              setSelectedRecipient(null);
            }}
            onSend={handleSendMessage}
          />
        )}
      </div>
    </div>
  );
}