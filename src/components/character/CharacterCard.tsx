import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { STYLE_CONSTANTS, LAYOUT_CONSTANTS } from '../../constants';

interface Character {
  id: string;
  image: string;
  nameKey: string;
  roleKey: string;
  descKey: string;
}

interface CharacterCardProps {
  character: Character;
  index: number;
  isSelected: boolean;
  onHover: (characterId: string) => void;
  onLeave: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  index,
  isSelected,
  onHover,
  onLeave,
}) => {
  const { t } = useLanguage();

  return (
    <div
      className={`relative group cursor-pointer transform ${STYLE_CONSTANTS.TRANSITIONS.SLOW} ${STYLE_CONSTANTS.HOVER_EFFECTS.SCALE} ${
        isSelected ? 'scale-105' : ''
      }`}
      onMouseEnter={() => onHover(character.id)}
      onMouseLeave={onLeave}
      role="button"
      tabIndex={0}
      aria-label={`${t(character.nameKey)} 캐릭터 선택`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onHover(character.id);
        }
      }}
    >
      {/* Card Background */}
      <div className={`relative bg-gradient-to-b ${STYLE_CONSTANTS.GRADIENTS.SURFACE} rounded-lg overflow-hidden border ${STYLE_CONSTANTS.COLORS.BORDER} group-hover:border-${STYLE_CONSTANTS.COLORS.PRIMARY} ${STYLE_CONSTANTS.TRANSITIONS.DEFAULT}`}>
        
        {/* Character Image */}
        <div className={`relative ${LAYOUT_CONSTANTS.HEIGHTS.CHARACTER_IMAGE} overflow-hidden`}>
          <ImageWithFallback
            src={character.image}
            alt={t(character.nameKey)}
            className={`w-full h-full object-cover ${STYLE_CONSTANTS.HOVER_EFFECTS.TRANSFORM} ${STYLE_CONSTANTS.TRANSITIONS.TRANSFORM}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        {/* Character Info */}
        <div className={`${LAYOUT_CONSTANTS.SPACING.CARD_PADDING} space-y-4`}>
          <div className="flex items-center justify-between">
            <h3 className={`text-2xl font-bold ${STYLE_CONSTANTS.COLORS.TEXT_PRIMARY} group-hover:text-${STYLE_CONSTANTS.COLORS.PRIMARY} ${STYLE_CONSTANTS.TRANSITIONS.COLORS}`}>
              {t(character.nameKey)}
            </h3>
            <span className={`px-3 py-1 bg-${STYLE_CONSTANTS.COLORS.PRIMARY}/20 border border-${STYLE_CONSTANTS.COLORS.PRIMARY}/50 rounded-full text-${STYLE_CONSTANTS.COLORS.PRIMARY} text-sm`}>
              {t(character.roleKey)}
            </span>
          </div>

          <p className={`${STYLE_CONSTANTS.COLORS.TEXT_SECONDARY} group-hover:text-gray-300 ${STYLE_CONSTANTS.TRANSITIONS.COLORS} leading-relaxed`}>
            {t(character.descKey)}
          </p>
        </div>

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-${STYLE_CONSTANTS.COLORS.PRIMARY}/20 via-transparent to-transparent ${STYLE_CONSTANTS.TRANSITIONS.OPACITY} ${
          isSelected ? 'opacity-100' : 'opacity-0'
        }`}></div>

        {/* Glow Effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${STYLE_CONSTANTS.GRADIENTS.GLOW} rounded-lg blur ${STYLE_CONSTANTS.TRANSITIONS.OPACITY} -z-10 ${
          isSelected ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>

      {/* Floating Number */}
      <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${STYLE_CONSTANTS.GRADIENTS.PRIMARY} rounded-full flex items-center justify-center border-4 border-black text-black font-bold text-xl`}>
        {index + 1}
      </div>

      {/* Decorative Elements */}
      <div className={`absolute -top-2 -right-2 ${LAYOUT_CONSTANTS.HEIGHTS.ICON_MEDIUM} border-2 border-${STYLE_CONSTANTS.COLORS.PRIMARY}/50 transform rotate-45 group-hover:border-${STYLE_CONSTANTS.COLORS.PRIMARY} ${STYLE_CONSTANTS.TRANSITIONS.COLORS}`}></div>
      <div className={`absolute -bottom-2 -left-2 w-4 h-4 border-2 border-${STYLE_CONSTANTS.COLORS.PRIMARY}/30 transform rotate-45 group-hover:border-${STYLE_CONSTANTS.COLORS.PRIMARY}/70 ${STYLE_CONSTANTS.TRANSITIONS.COLORS}`}></div>
    </div>
  );
};
