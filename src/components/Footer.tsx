import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, MessageCircle, FileText, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-yellow-600/30 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-black transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold text-yellow-600">Realm of Shadows</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              어둠 속에서 깨어나는 전설의 시작. 엘든링 스타일의 다크 판타지 MMORPG에서 당신만의 모험을 시작하세요.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-600/20 transition-colors cursor-pointer">
                <MessageCircle className="w-4 h-4 text-gray-400" />
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-600/20 transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">빠른 링크</h3>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('characters')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-yellow-600 transition-colors"
              >
                캐릭터 소개
              </button>
              <button
                onClick={() => document.getElementById('preregister')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-yellow-600 transition-colors"
              >
                사전예약
              </button>
              <button
                onClick={() => document.getElementById('rewards')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-yellow-600 transition-colors"
              >
                보상 시스템
              </button>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">정보</h3>
            <div className="space-y-2">
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-yellow-600 transition-colors">
                <Mail className="w-4 h-4" />
                <span>{t('footer.contact')}</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-yellow-600 transition-colors">
                <Shield className="w-4 h-4" />
                <span>{t('footer.privacy')}</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-400 hover:text-yellow-600 transition-colors">
                <FileText className="w-4 h-4" />
                <span>{t('footer.terms')}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 text-sm">Coming 2025</span>
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-yellow-600/70 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-yellow-600/40 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent rounded-full"></div>
      </div>
    </footer>
  );
};