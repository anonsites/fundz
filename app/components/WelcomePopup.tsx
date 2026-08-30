'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if modal has been dismissed before
    const isDismissed = localStorage.getItem('fundraisingModalDismissed');
    
    if (isDismissed) {
      return;
    }

    // Show modal after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Mark modal as dismissed in localStorage so it doesn't show again
    localStorage.setItem('fundraisingModalDismissed', 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-sm mx-4 animate-fadeIn">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/site-icon.png"
              alt="Site Icon"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4">
            Help bucura raise 50k this week
          </h2>
          <button
            onClick={handleDismiss}
            className="w-full bg-emerald-400 text-black font-bold py-3 rounded-lg hover:bg-emerald-500 transition-colors active:scale-95"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
