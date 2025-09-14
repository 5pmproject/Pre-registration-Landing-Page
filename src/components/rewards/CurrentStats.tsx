import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Users, TrendingUp } from 'lucide-react';
import { STYLE_CONSTANTS, LAYOUT_CONSTANTS } from '../../constants';

interface CurrentStatsProps {
  currentRegistrations: number;
}

export const CurrentStats: React.FC<CurrentStatsProps> = ({ currentRegistrations }) => {
  const { t } = useLanguage();

  return (
    <div className={`${LAYOUT_CONSTANTS.SPACING.FORM_PADDING} bg-gradient-to-br ${STYLE_CONSTANTS.GRADIENTS.SURFACE} rounded-xl border ${STYLE_CONSTANTS.COLORS.BORDER} backdrop-blur-sm`}>
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className={`${LAYOUT_CONSTANTS.HEIGHTS.LOGO} bg-gradient-to-br ${STYLE_CONSTANTS.GRADIENTS.PRIMARY} rounded-lg flex items-center justify-center`}>
            <Users className={`${LAYOUT_CONSTANTS.HEIGHTS.ICON_MEDIUM} text-black`} />
          </div>
          <div className={`${LAYOUT_CONSTANTS.HEIGHTS.LOGO} bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center`}>
            <TrendingUp className={`${LAYOUT_CONSTANTS.HEIGHTS.ICON_MEDIUM} ${STYLE_CONSTANTS.COLORS.TEXT_PRIMARY}`} />
          </div>
        </div>
        
        <div>
          <h3 className={`text-lg font-semibold ${STYLE_CONSTANTS.COLORS.TEXT_SECONDARY} mb-2`}>
            {t('rewards.current')}
          </h3>
          <div 
            className={`text-4xl md:text-5xl font-bold text-${STYLE_CONSTANTS.COLORS.PRIMARY} mb-2`}
            aria-live="polite"
            aria-label={`현재 등록자 수: ${currentRegistrations.toLocaleString()}명`}
          >
            {currentRegistrations.toLocaleString()}
          </div>
          <p className={`text-sm ${STYLE_CONSTANTS.COLORS.TEXT_SECONDARY}`}>
            실시간 업데이트 중
          </p>
        </div>
      </div>
    </div>
  );
};
