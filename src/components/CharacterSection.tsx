import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Character {
  id: string;
  image: string;
  nameKey: string;
  roleKey: string;
  descKey: string;
}

export const CharacterSection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);

  const characters: Character[] = [
    {
      id: 'darkKnight',
      image: 'https://images.unsplash.com/photo-1734122373993-36745ac6b688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwa25pZ2h0JTIwYXJtb3IlMjBtZWRpZXZhbHxlbnwxfHx8fDE3NTc4NDU3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      nameKey: 'characters.darkKnight.name',
      roleKey: 'characters.darkKnight.role',
      descKey: 'characters.darkKnight.desc'
    },
    {
      id: 'bloodMage',
      image: 'https://images.unsplash.com/photo-1586796676977-d23a9217a24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXphcmQlMjBtYWdlJTIwZGFyayUyMG1hZ2ljfGVufDF8fHx8MTc1Nzg0NTcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      nameKey: 'characters.bloodMage.name',
      roleKey: 'characters.bloodMage.role',
      descKey: 'characters.bloodMage.desc'
    },
    {
      id: 'shadowArcher',
      image: 'https://images.unsplash.com/photo-1567192884689-3740d24919d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoZXIlMjBib3clMjBhcnJvdyUyMG1lZGlldmFsfGVufDF8fHx8MTc1Nzg0NTcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      nameKey: 'characters.shadowArcher.name',
      roleKey: 'characters.shadowArcher.role',
      descKey: 'characters.shadowArcher.desc'
    }
  ];

  return (
    <section id="characters" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('characters.title')}
          </h2>
          <p className="text-xl text-yellow-600">
            {t('characters.subtitle')}
          </p>
        </div>

        {/* Character Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {characters.map((character, index) => (
            <div
              key={character.id}
              className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                selectedCharacter === character.id ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setSelectedCharacter(character.id)}
              onMouseLeave={() => setSelectedCharacter(null)}
            >
              {/* Card Background */}
              <div className="relative bg-gradient-to-b from-gray-800/50 to-black/80 rounded-lg overflow-hidden border border-yellow-600/30 group-hover:border-yellow-600 transition-all duration-300">
                
                {/* Character Image */}
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src={character.image}
                    alt={t(character.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>

                {/* Character Info */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white group-hover:text-yellow-600 transition-colors">
                      {t(character.nameKey)}
                    </h3>
                    <span className="px-3 py-1 bg-yellow-600/20 border border-yellow-600/50 rounded-full text-yellow-600 text-sm">
                      {t(character.roleKey)}
                    </span>
                  </div>

                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {t(character.descKey)}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-yellow-600/20 via-transparent to-transparent transition-opacity duration-300 ${
                  selectedCharacter === character.id ? 'opacity-100' : 'opacity-0'
                }`}></div>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-yellow-600/30 to-yellow-800/30 rounded-lg blur transition-opacity duration-300 -z-10 ${
                  selectedCharacter === character.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>

              {/* Floating Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center border-4 border-black text-black font-bold text-xl">
                {index + 1}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-yellow-600/50 transform rotate-45 group-hover:border-yellow-600 transition-colors"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-2 border-yellow-600/30 transform rotate-45 group-hover:border-yellow-600/70 transition-colors"></div>
            </div>
          ))}
        </div>

        {/* Selected Character Details */}
        {selectedCharacter && (
          <div className="mt-12 p-8 bg-gradient-to-r from-black/60 to-gray-900/60 rounded-lg border border-yellow-600/30 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-yellow-600 mb-4">
                {t(`characters.${selectedCharacter}.name`)}
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                {t(`characters.${selectedCharacter}.desc`)}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};