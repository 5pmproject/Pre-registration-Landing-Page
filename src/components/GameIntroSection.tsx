import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sword, Shield, BookOpen } from 'lucide-react';

export const GameIntroSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t('intro.feature1.title'),
      description: t('intro.feature1.desc')
    },
    {
      icon: Sword,
      title: t('intro.feature2.title'),
      description: t('intro.feature2.desc')
    },
    {
      icon: BookOpen,
      title: t('intro.feature3.title'),
      description: t('intro.feature3.desc')
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t('intro.title')}
              </h2>
              <p className="text-xl text-yellow-600 mb-6">
                {t('intro.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gradient-to-r from-black/40 to-transparent border-l-4 border-yellow-600/50 hover:border-yellow-600 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg border border-yellow-600/30">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660544773979-0ba9854c8156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGNhc3RsZSUyMHJ1aW5zJTIwZGFya3xlbnwxfHx8fDE3NTc4NDU2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Medieval Castle Ruins"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Decorative glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600/20 via-transparent to-yellow-600/20 rounded-lg blur opacity-75"></div>
            
            {/* Floating ornaments */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-yellow-600 transform rotate-45 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-yellow-600/70 transform rotate-45 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};