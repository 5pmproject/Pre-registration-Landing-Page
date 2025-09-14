import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { STYLE_CONSTANTS, LAYOUT_CONSTANTS } from '../../constants';

interface CharacterDetailsProps {
  selectedCharacter: string;
}

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({ selectedCharacter }) => {
  const { t } = useLanguage();

  if (!selectedCharacter) return null;

  return (
    <div 
      className={`mt-12 ${LAYOUT_CONSTANTS.SPACING.FORM_PADDING} bg-gradient-to-r from-black/60 to-gray-900/60 rounded-lg border ${STYLE_CONSTANTS.COLORS.BORDER} backdrop-blur-sm`}
      role="region"
      aria-live="polite"
      aria-label="선택된 캐릭터 상세 정보"
    >
      <div className="text-center">
        <h3 className={`text-2xl font-bold text-${STYLE_CONSTANTS.COLORS.PRIMARY} mb-4`}>
          {t(`characters.${selectedCharacter}.name`)}
        </h3>
        <p className={`${STYLE_CONSTANTS.COLORS.TEXT_SECONDARY} ${LAYOUT_CONSTANTS.MAX_WIDTH.TEXT_CONTENT} mx-auto`}>
          {t(`characters.${selectedCharacter}.desc`)}
        </p>
      </div>
    </div>
  );
};
