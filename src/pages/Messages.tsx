import React, { useState, useEffect, useRef } from 'react';
import { Search, MoreVertical, Check, Clock, Smile, Paperclip, Send, ChevronLeft } from 'lucide-react';
import Navbar from '../components/Navbar';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: string;
  isRead: boolean;
}

interface Conversation {
  id: string;
  user: {
    name: string;
    avatar: string;
    status: 'online' | 'offline';
  };
  lastMessage: Message;
  unreadCount: number;
}

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: '1',
      user: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        status: 'online'
      },
      lastMessage: {
        id: 'm1',
        content: 'Looking forward to our collaboration!',
        timestamp: '2 min ago',
        sender: 'Sarah Chen',
        isRead: false
      },
      unreadCount: 2
    },
    {
      id: '2',
      user: {
        name: 'David Kim',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        status: 'offline'
      },
      lastMessage: {
        id: 'm2',
        content: 'The project looks great! When can we...',
        timestamp: '1 hour ago',
        sender: 'David Kim',
        isRead: true
      },
      unreadCount: 0
    }
  ]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isMobile = window.innerWidth < 768;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: `m${Date.now()}`,
      content: newMessage,
      timestamp: 'Just now',
      sender: 'You',
      isRead: false
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const handleProfileClick = () => {
    window.location.href = '/profile';
  };

  const handleDashboardClick = () => {
    window.location.href = '/dashboard';
  };

  const handleNetworkClick = () => {
    window.location.href = '/collaborate';
  };

  const handleHomeClick = () => {
    window.location.href = '/';
  };

  const renderConversationsList = () => (
    <div className={`col-span-12 md:col-span-4 border-r border-gray-200 ${selectedConversation && isMobile ? 'hidden' : ''}`}>
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-12rem)]">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => setSelectedConversation(conversation.id)}
            className={`w-full p-4 flex items-center space-x-4 hover:bg-gray-50 ${
              selectedConversation === conversation.id ? 'bg-purple-50' : ''
            }`}
          >
            <div className="relative">
              <img
                src={conversation.user.avatar}
                alt={conversation.user.name}
                className="w-12 h-12 rounded-full"
              />
              <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                conversation.user.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
              }`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900 truncate">{conversation.user.name}</h3>
                <span className="text-sm text-gray-500">{conversation.lastMessage.timestamp}</span>
              </div>
              <p className={`text-sm truncate ${conversation.unreadCount > 0 ? 'font-medium text-gray-900' : 'text-gray-500'}`}>
                {conversation.lastMessage.content}
              </p>
              {conversation.unreadCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 bg-purple-600 text-white text-xs rounded-full">
                  {conversation.unreadCount}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const renderChatArea = () => {
    if (!selectedConversation && !isMobile) {
      return (
        <div className="col-span-12 md:col-span-8 flex items-center justify-center h-[calc(100vh-12rem)]">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900">Select a conversation</h3>
            <p className="text-gray-500">Choose a conversation to start messaging</p>
          </div>
        </div>
      );
    }

    const conversation = conversations.find(c => c.id === selectedConversation);
    if (!conversation) return null;

    return (
      <div className={`col-span-12 md:col-span-8 ${!selectedConversation && isMobile ? 'hidden' : ''}`}>
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          {isMobile && (
            <button
              onClick={() => setSelectedConversation(null)}
              className="p-2 hover:bg-gray-100 rounded-lg mr-2"
            >
              <ChevronLeft className="h-5 w-5 text-gray-500" />
            </button>
          )}
          <div className="flex items-center space-x-4">
            <img
              src={conversation.user.avatar}
              alt={conversation.user.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-medium text-gray-900">{conversation.user.name}</h3>
              <p className="text-sm text-gray-500">
                {conversation.user.status === 'online' ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <MoreVertical className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-[calc(100vh-16rem)]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex mb-4 ${message.sender === 'You' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[70%] ${message.sender === 'You' ? 'bg-purple-600 text-white' : 'bg-gray-100'} rounded-lg px-4 py-2`}>
                <p>{message.content}</p>
                <div className="flex items-center justify-end space-x-1 mt-1">
                  <span className="text-xs opacity-75">{message.timestamp}</span>
                  {message.sender === 'You' && (
                    <Check className="h-4 w-4 opacity-75" />
                  )}
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <div className="animate-bounce">•</div>
              <div className="animate-bounce delay-100">•</div>
              <div className="animate-bounce delay-200">•</div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Smile className="h-5 w-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Paperclip className="h-5 w-5 text-gray-500" />
            </button>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        onProfileClick={handleProfileClick}
        onHomeClick={handleHomeClick}
        onNetworkClick={handleNetworkClick}
        onMessagesClick={() => {}}
        onDashboardClick={handleDashboardClick}
        currentView="messages"
      />
      
      <div className="max-w-7xl mx-auto px-4 pt-20">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="grid grid-cols-12">
            {renderConversationsList()}
            {renderChatArea()}
          </div>
        </div>
      </div>
    </div>
  );
}