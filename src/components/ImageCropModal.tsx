import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ImageCropModalProps {
  image: string;
  onClose: () => void;
  onSave: (croppedImage: string) => void;
}

export default function ImageCropModal({ image, onClose, onSave }: ImageCropModalProps) {
  const [scale, setScale] = useState(1);

  const handleSave = () => {
    // For now, we'll just pass the original image
    // In a real implementation, you'd want to use a library like react-image-crop
    onSave(image);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-xl w-full">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Adjust Profile Picture</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4">
          <div className="aspect-square w-full max-w-md mx-auto mb-4 overflow-hidden rounded-lg">
            <img
              src={image}
              alt="Preview"
              className="w-full h-full object-cover"
              style={{ transform: `scale(${scale})` }}
            />
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Zoom
              </label>
              <input
                type="range"
                min="1"
                max="2"
                step="0.1"
                value={scale}
                onChange={(e) => setScale(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}