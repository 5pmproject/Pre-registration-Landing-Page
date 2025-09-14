import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';
import { LAYOUT_CONSTANTS } from '../constants';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > LAYOUT_CONSTANTS.HEADER_SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 외부 클릭 시 언어 메뉴 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setShowLanguageMenu(false);
      }
    };

    if (showLanguageMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLanguageMenu]);

  // ESC 키로 언어 메뉴 닫기
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowLanguageMenu(false);
      }
    };

    if (showLanguageMenu) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showLanguageMenu]);

  const languages = [
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-yellow-600/30' 
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div 
              className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg flex items-center justify-center"
              role="img"
              aria-label="Realm of Shadows 로고"
            >
              <div className="w-6 h-6 bg-black transform rotate-45"></div>
            </div>
            <span className="text-xl font-bold text-yellow-600">Realm of Shadows</span>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="주요 내비게이션">
            <button 
              onClick={() => scrollToSection('preregister')}
              className="text-white hover:text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
              aria-label="사전예약 섹션으로 이동"
            >
              {t('nav.preregister')}
            </button>
            <button 
              onClick={() => scrollToSection('characters')}
              className="text-white hover:text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
              aria-label="캐릭터 섹션으로 이동"
            >
              {t('nav.characters')}
            </button>
            <button 
              onClick={() => scrollToSection('rewards')}
              className="text-white hover:text-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
              aria-label="보상 섹션으로 이동"
            >
              {t('nav.rewards')}
            </button>
          </nav>

          {/* Language Selector */}
          <div className="relative" ref={languageMenuRef}>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="bg-black/50 border-yellow-600/30 text-white hover:bg-yellow-600/20"
              aria-haspopup="true"
              aria-expanded={showLanguageMenu}
              aria-label={`언어 선택 메뉴. 현재 선택된 언어: ${languages.find(lang => lang.code === language)?.name}`}
            >
              <Globe className="w-4 h-4 mr-2" aria-hidden="true" />
              {languages.find(lang => lang.code === language)?.name}
            </Button>

            {showLanguageMenu && (
              <div 
                className="absolute top-full right-0 mt-2 bg-black/90 border border-yellow-600/30 rounded-lg overflow-hidden min-w-[150px]"
                role="menu"
                aria-label="언어 선택"
              >
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setShowLanguageMenu(false);
                    }}
                    className={`w-full px-4 py-2 text-left hover:bg-yellow-600/20 transition-colors flex items-center space-x-2 focus:outline-none focus:bg-yellow-600/20 ${
                      language === lang.code ? 'bg-yellow-600/30' : ''
                    }`}
                    role="menuitem"
                    aria-label={`언어를 ${lang.name}로 변경`}
                  >
                    <span aria-hidden="true">{lang.flag}</span>
                    <span className="text-white">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};