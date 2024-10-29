import React from 'react';
import { X, Command } from 'lucide-react';

interface KeyboardShortcutsProps {
  onClose: () => void;
}

export default function KeyboardShortcuts({ onClose }: KeyboardShortcutsProps) {
  const shortcuts = [
    { key: '?', description: 'Show keyboard shortcuts' },
    { key: 'n', description: 'New post' },
    { key: '/', description: 'Focus search' },
    { key: 'g h', description: 'Go home' },
    { key: 'g p', description: 'Go to profile' },
    { key: 'g m', description: 'Go to messages' },
    { key: 'esc', description: 'Close modal' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Command className="h-6 w-6 text-purple-600" />
              <h2 className="text-xl font-bold text-gray-900">Keyboard Shortcuts</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="space-y-4">
            {shortcuts.map(({ key, description }) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-gray-600">{description}</span>
                <kbd className="px-2 py-1 bg-gray-100 rounded text-sm font-mono">
                  {key}
                </kbd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}