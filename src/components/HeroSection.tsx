import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [titleText, setTitleText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [showContent, setShowContent] = useState(false);

  const title = t('hero.title');
  const subtitle = t('hero.subtitle');

  useEffect(() => {
    // Typing animation for title
    let titleIndex = 0;
    const titleInterval = setInterval(() => {
      if (titleIndex < title.length) {
        setTitleText(title.slice(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleInterval);
        // Start subtitle animation
        setTimeout(() => {
          let subtitleIndex = 0;
          const subtitleInterval = setInterval(() => {
            if (subtitleIndex < subtitle.length) {
              setSubtitleText(subtitle.slice(0, subtitleIndex + 1));
              subtitleIndex++;
            } else {
              clearInterval(subtitleInterval);
              setShowContent(true);
            }
          }, 50);
        }, 500);
      }
    }, 100);

    return () => clearInterval(titleInterval);
  }, [title, subtitle]);

  const scrollToForm = () => {
    const element = document.getElementById('preregister');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1605433887450-490fcd8c0c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmFudGFzeSUyMHdhcnJpb3IlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzU3ODQ1NjYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Dark Fantasy Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Title with typing effect */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-white">{titleText}</span>
          <span className="animate-pulse">|</span>
        </h1>

        {/* Subtitle with typing effect */}
        <h2 className="text-xl md:text-2xl lg:text-3xl text-yellow-600 mb-8">
          <span>{subtitleText}</span>
          {subtitleText.length > 0 && <span className="animate-pulse">|</span>}
        </h2>

        {/* Content that appears after typing */}
        <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            {t('hero.description')}
          </p>

          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-500 hover:to-yellow-700 text-black border-none shadow-lg hover:shadow-yellow-600/25 transform hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
          >
            {t('hero.cta')}
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-6 h-10 border-2 border-yellow-600/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-600 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-yellow-600/30 transform rotate-45 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border border-yellow-600/20 transform rotate-45 animate-pulse delay-500"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 border border-yellow-600/20 transform rotate-45 animate-pulse delay-1000"></div>
    </section>
  );
};