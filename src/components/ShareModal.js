// components/ShareModal.js
import React from "react";
import { Facebook, MessageCircle, X } from "lucide-react";

export default function ShareModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex justify-center space-x-8 mb-4">
          <button className="flex flex-col items-center">
            <MessageCircle size={32} className="text-green-500" />
            <span>WhatsApp</span>
          </button>
          <button className="flex flex-col items-center">
            <Facebook size={32} className="text-blue-600" />
            <span>Facebook</span>
          </button>
        </div>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
