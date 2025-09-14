import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { Gift } from 'lucide-react';
import { STYLE_CONSTANTS, LAYOUT_CONSTANTS } from '../../constants';

interface Milestone {
  id: string;
  target: number;
  titleKey: string;
  rewardKey: string;
  icon: React.ElementType;
  color: string;
}

interface MilestoneCardProps {
  milestone: Milestone;
  currentRegistrations: number;
}

export const MilestoneCard: React.FC<MilestoneCardProps> = ({
  milestone,
  currentRegistrations,
}) => {
  const { t } = useLanguage();
  
  const progress = Math.min((currentRegistrations / milestone.target) * 100, 100);
  const achieved = currentRegistrations >= milestone.target;
  const IconComponent = milestone.icon;

  return (
    <div
      className={`relative bg-gradient-to-r ${STYLE_CONSTANTS.GRADIENTS.BACKGROUND} rounded-lg border ${LAYOUT_CONSTANTS.SPACING.CARD_PADDING} ${STYLE_CONSTANTS.TRANSITIONS.SLOW} ${
        achieved 
          ? `border-${STYLE_CONSTANTS.COLORS.SUCCESS}/50 shadow-lg shadow-${STYLE_CONSTANTS.COLORS.SUCCESS}/25` 
          : `${STYLE_CONSTANTS.COLORS.BORDER} ${STYLE_CONSTANTS.HOVER_EFFECTS.BORDER_COLOR}`
      }`}
      role="article"
      aria-label={`${t(milestone.titleKey)} 마일스톤`}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
        {/* Milestone Icon */}
        <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-lg flex items-center justify-center relative`}>
          <IconComponent className={`${LAYOUT_CONSTANTS.HEIGHTS.ICON_LARGE} ${STYLE_CONSTANTS.COLORS.TEXT_PRIMARY}`} />
          {achieved && (
            <div className={`absolute -top-2 -right-2 ${LAYOUT_CONSTANTS.HEIGHTS.ICON_MEDIUM} bg-${STYLE_CONSTANTS.COLORS.SUCCESS} rounded-full flex items-center justify-center`}>
              <Gift className={`${LAYOUT_CONSTANTS.HEIGHTS.ICON_SMALL} ${STYLE_CONSTANTS.COLORS.TEXT_PRIMARY}`} />
            </div>
          )}
        </div>

        {/* Milestone Info */}
        <div className="flex-1 space-y-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
            <div>
              <h3 className={`text-xl font-bold ${STYLE_CONSTANTS.COLORS.TEXT_PRIMARY}`}>
                {t(milestone.titleKey)}
              </h3>
              <p className={STYLE_CONSTANTS.COLORS.TEXT_SECONDARY}>
                {t(milestone.rewardKey)}
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Badge 
                variant={achieved ? "default" : "secondary"} 
                className={achieved ? `bg-${STYLE_CONSTANTS.COLORS.SUCCESS}` : ""}
              >
                {achieved ? "달성 완료" : `${milestone.target.toLocaleString()}명 목표`}
              </Badge>
              <span className={`text-sm ${STYLE_CONSTANTS.COLORS.TEXT_SECONDARY}`}>
                {progress.toFixed(1)}%
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <Progress 
              value={progress} 
              className={`h-3 ${achieved ? `bg-${STYLE_CONSTANTS.COLORS.SUCCESS}/30` : 'bg-gray-800'}`}
              aria-label={`${milestone.target.toLocaleString()}명 목표 중 ${currentRegistrations.toLocaleString()}명 달성`}
            />
            <div className={`flex justify-between text-sm ${STYLE_CONSTANTS.COLORS.TEXT_SECONDARY}`}>
              <span>{currentRegistrations.toLocaleString()}</span>
              <span>{milestone.target.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Achievement Glow */}
      {achieved && (
        <div className={`absolute -inset-1 bg-gradient-to-r ${STYLE_CONSTANTS.GRADIENTS.SUCCESS} rounded-lg blur opacity-75 -z-10`}></div>
      )}
    </div>
  );
};
