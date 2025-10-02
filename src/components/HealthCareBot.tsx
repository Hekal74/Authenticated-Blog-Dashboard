import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const HealthCareBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const chatWindowRef = useRef<HTMLDivElement | null>(null);
  const botUrl: string = "https://bot-provider.wordworksai.me/?id=healthcare";
  
  // Close the window when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        chatWindowRef.current && 
        !chatWindowRef.current.contains(event.target as Node) && 
        !(event.target as Element).closest('.chat-toggle-btn')
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          className="mb-4 bg-white rounded-lg shadow-lg w-96 h-[500px] flex flex-col overflow-hidden border border-gray-200 "
        >
          {/* Header Bar */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">Healthcare </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-blue-700 rounded"
            >
              <X size={18} />
            </button>
          </div>
          
          {/* Chat Content (iframe) */}
          <div className="flex-grow ">
            <iframe
              src={botUrl}
              title="Healthcare"
              className="w-full h-full border-0"
              allow="microphone"
            />
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`chat-toggle-btn w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${
          isOpen ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        <MessageCircle size={22} />
      </button>
    </div>
  );
};

export default HealthCareBot;