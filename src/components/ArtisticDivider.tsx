import React from 'react';

export const ArtisticDivider: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center py-12">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-600/30 to-transparent"></div>
      </div>
      
      <div className="relative bg-[#0d0d0d] px-8">
        <div className="flex items-center space-x-4">
          {/* Left ornament */}
          <div className="w-6 h-6 transform rotate-45 border border-yellow-600/50 bg-gradient-to-br from-yellow-600/20 to-transparent"></div>
          
          {/* Center diamond */}
          <div className="relative">
            <div className="w-4 h-4 transform rotate-45 border-2 border-yellow-600 bg-gradient-to-br from-yellow-600/30 to-yellow-800/30"></div>
            <div className="absolute inset-0 w-4 h-4 transform rotate-45 bg-yellow-600/20 animate-pulse"></div>
          </div>
          
          {/* Right ornament */}
          <div className="w-6 h-6 transform rotate-45 border border-yellow-600/50 bg-gradient-to-br from-yellow-600/20 to-transparent"></div>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-yellow-600/10 blur-xl rounded-full"></div>
      </div>
    </div>
  );
};