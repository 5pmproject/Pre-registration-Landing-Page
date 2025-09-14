import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ArtisticBackground } from './components/ArtisticBackground';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ArtisticDivider } from './components/ArtisticDivider';
import { GameIntroSection } from './components/GameIntroSection';
import { CharacterSection } from './components/CharacterSection';
import { PreRegistrationForm } from './components/PreRegistrationForm';
import { RewardsSection } from './components/RewardsSection';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Artistic Background with Particles */}
        <ArtisticBackground />
        
        {/* Navigation Header */}
        <Header />
        
        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection />
          
          {/* Artistic Divider */}
          <ArtisticDivider />
          
          {/* Game Introduction */}
          <GameIntroSection />
          
          {/* Artistic Divider */}
          <ArtisticDivider />
          
          {/* Character Showcase */}
          <CharacterSection />
          
          {/* Artistic Divider */}
          <ArtisticDivider />
          
          {/* Pre-Registration Form */}
          <PreRegistrationForm />
          
          {/* Artistic Divider */}
          <ArtisticDivider />
          
          {/* Rewards Section */}
          <RewardsSection />
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Toast Notifications */}
        <Toaster 
          theme="dark"
          toastOptions={{
            style: {
              background: '#1a1a1a',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              color: '#ffffff'
            }
          }}
        />
      </div>
    </LanguageProvider>
  );
}