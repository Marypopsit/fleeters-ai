import React, { useState } from 'react';
import { Camera, Edit2, MapPin, Building2, Calendar, Wand2, Plus, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import TrustScoreCard from '../components/TrustScoreCard';
import ReviewsCarousel from '../components/ReviewsCarousel';
import ProfileHeader from '../components/ProfileHeader';
import ImageCropModal from '../components/ImageCropModal';

interface Profile {
  name: string;
  title: string;
  location: string;
  company: string;
  avatar: string;
  about: string;
  trustScore: number;
  aiTools: string[];
  skills: {
    technical: { name: string; level: number }[];
    soft: { name: string; level: number }[];
  };
  featuredProjects: {
    id: string;
    title: string;
    link: string;
  }[];
}

export default function Profile() {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [showTechnicalSkills, setShowTechnicalSkills] = useState(true);
  const [showCropModal, setShowCropModal] = useState(false);
  const [tempImage, setTempImage] = useState<string | null>(null);
  
  const [editableProfile, setEditableProfile] = useState<Profile>({
    name: "Sarah Chen",
    title: "AI Motion Designer",
    location: "San Francisco, CA",
    company: "Freelance",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    about: "Passionate AI motion designer with 5+ years of experience creating compelling visual narratives. Specialized in combining traditional animation principles with cutting-edge AI tools.",
    trustScore: 95,
    aiTools: ["Midjourney", "DALL·E", "Stable Diffusion", "ChatGPT"],
    skills: {
      technical: [
        { name: "Motion Design", level: 95 },
        { name: "3D Animation", level: 88 },
        { name: "Prompt Engineering", level: 92 },
        { name: "Video Editing", level: 90 }
      ],
      soft: [
        { name: "Communication", level: 95 },
        { name: "Problem Solving", level: 93 },
        { name: "Time Management", level: 89 },
        { name: "Creativity", level: 96 }
      ]
    },
    featuredProjects: [
      {
        id: "1",
        title: "AI-Powered Brand Animation",
        link: "https://example.com/project1"
      },
      {
        id: "2",
        title: "Interactive AI Art Installation",
        link: "https://example.com/project2"
      }
    ]
  });

  const handleImageChange = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setTempImage(reader.result as string);
      setShowCropModal(true);
    };
    reader.readAsDataURL(file);
  };

  const handleCroppedImage = (croppedImage: string) => {
    setEditableProfile(prev => ({
      ...prev,
      avatar: croppedImage
    }));
    setTempImage(null);
  };

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      title: "New Project",
      link: ""
    };
    setEditableProfile(prev => ({
      ...prev,
      featuredProjects: [...prev.featuredProjects, newProject]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onProfileClick={() => {}} onHomeClick={() => {}} onNetworkClick={() => {}} />
      
      <div className="max-w-4xl mx-auto px-4 py-8 pt-20">
        <ProfileHeader
          avatar={editableProfile.avatar}
          onImageChange={handleImageChange}
        />

        {/* Profile Info */}
        <div className="mt-20 space-y-8">
          {/* Basic Info */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-start">
              <div>
                {isEditingProfile ? (
                  <input
                    type="text"
                    value={editableProfile.name}
                    onChange={(e) => setEditableProfile(prev => ({ ...prev, name: e.target.value }))}
                    className="text-2xl font-bold mb-2 border-b border-gray-300 focus:border-purple-500 focus:outline-none"
                  />
                ) : (
                  <h1 className="text-2xl font-bold mb-2">{editableProfile.name}</h1>
                )}
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {isEditingProfile ? (
                      <input
                        type="text"
                        value={editableProfile.location}
                        onChange={(e) => setEditableProfile(prev => ({ ...prev, location: e.target.value }))}
                        className="border-b border-gray-300 focus:border-purple-500 focus:outline-none"
                      />
                    ) : (
                      <span>{editableProfile.location}</span>
                    )}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Building2 className="h-4 w-4 mr-2" />
                    {isEditingProfile ? (
                      <input
                        type="text"
                        value={editableProfile.title}
                        onChange={(e) => setEditableProfile(prev => ({ ...prev, title: e.target.value }))}
                        className="border-b border-gray-300 focus:border-purple-500 focus:outline-none"
                      />
                    ) : (
                      <span>{editableProfile.title}</span>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsEditingProfile(!isEditingProfile)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Edit2 className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Trust Score & AI Stack */}
          <div className="grid grid-cols-2 gap-4">
            <TrustScoreCard
              trustScore={editableProfile.trustScore}
              rank={23}
              totalProfessionals={1205}
              category="Motion Design"
            />
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Wand2 className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-600">AI Stack</span>
                </div>
                <button
                  onClick={() => setIsEditingProfile(true)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <Edit2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {editableProfile.aiTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* About */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">About</h2>
              <button
                onClick={() => setIsEditingProfile(!isEditingProfile)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Edit2 className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            {isEditingProfile ? (
              <textarea
                value={editableProfile.about}
                onChange={(e) => setEditableProfile(prev => ({ ...prev, about: e.target.value }))}
                className="w-full p-2 border rounded-lg focus:border-purple-500 focus:outline-none"
                rows={4}
              />
            ) : (
              <p className="text-gray-600">{editableProfile.about}</p>
            )}
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Skills</h2>
              <div className="flex items-center space-x-4">
                <div className="flex rounded-lg bg-gray-100 p-1">
                  <button
                    onClick={() => setShowTechnicalSkills(true)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      showTechnicalSkills
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Technical
                  </button>
                  <button
                    onClick={() => setShowTechnicalSkills(false)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      !showTechnicalSkills
                        ? 'bg-white text-gray-900 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Soft Skills
                  </button>
                </div>
                <button
                  onClick={() => setIsEditingProfile(!isEditingProfile)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <Edit2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {(showTechnicalSkills ? editableProfile.skills.technical : editableProfile.skills.soft)
                .map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Featured Projects</h2>
              <button
                onClick={addProject}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Plus className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {editableProfile.featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 transition-colors"
                >
                  {isEditingProfile ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={project.title}
                        onChange={(e) => {
                          const updatedProjects = editableProfile.featuredProjects.map(p =>
                            p.id === project.id ? { ...p, title: e.target.value } : p
                          );
                          setEditableProfile(prev => ({ ...prev, featuredProjects: updatedProjects }));
                        }}
                        className="w-full border-b border-gray-300 focus:border-purple-500 focus:outline-none"
                      />
                      <input
                        type="text"
                        value={project.link}
                        onChange={(e) => {
                          const updatedProjects = editableProfile.featuredProjects.map(p =>
                            p.id === project.id ? { ...p, link: e.target.value } : p
                          );
                          setEditableProfile(prev => ({ ...prev, featuredProjects: updatedProjects }));
                        }}
                        className="w-full text-sm text-gray-500 border-b border-gray-300 focus:border-purple-500 focus:outline-none"
                        placeholder="Project URL"
                      />
                    </div>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <h3 className="font-medium text-gray-900">{project.title}</h3>
                      <p className="text-sm text-gray-500 truncate">{project.link}</p>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <ReviewsCarousel />
        </div>
      </div>

      {showCropModal && tempImage && (
        <ImageCropModal
          image={tempImage}
          onClose={() => setShowCropModal(false)}
          onSave={handleCroppedImage}
        />
      )}
    </div>
  );
}