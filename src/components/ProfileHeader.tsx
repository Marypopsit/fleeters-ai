import React from 'react';
import { Camera } from 'lucide-react';

interface ProfileHeaderProps {
  avatar: string;
  onImageChange: (file: File) => void;
}

export default function ProfileHeader({ avatar, onImageChange }: ProfileHeaderProps) {
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Basic image validation
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }
      
      // Size validation (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      onImageChange(file);
    }
  };

  return (
    <div className="relative mb-8">
      <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl" />
      <div className="absolute -bottom-16 left-8">
        <div className="relative">
          <img
            src={avatar}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <label className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-50">
            <Camera className="h-5 w-5 text-gray-600" />
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
}