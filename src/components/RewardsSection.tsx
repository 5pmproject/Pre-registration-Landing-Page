import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Progress } from './ui/progress';
import { Badge } from './ui/badge';
import { Gift, Crown, Sword, Star } from 'lucide-react';

interface Milestone {
  id: string;
  target: number;
  titleKey: string;
  rewardKey: string;
  icon: React.ElementType;
  color: string;
}

export const RewardsSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentRegistrations, setCurrentRegistrations] = useState(GAME_CONSTANTS.INITIAL_REGISTRATIONS);

  const milestones: Milestone[] = [
    {
      id: 'milestone1',
      target: GAME_CONSTANTS.MILESTONES.FIRST,
      titleKey: 'rewards.milestone1.title',
      rewardKey: 'rewards.milestone1.reward',
      icon: Sword,
      color: 'from-blue-600 to-blue-800'
    },
    {
      id: 'milestone2',
      target: GAME_CONSTANTS.MILESTONES.SECOND,
      titleKey: 'rewards.milestone2.title',
      rewardKey: 'rewards.milestone2.reward',
      icon: Crown,
      color: 'from-purple-600 to-purple-800'
    },
    {
      id: 'milestone3',
      target: GAME_CONSTANTS.MILESTONES.THIRD,
      titleKey: 'rewards.milestone3.title',
      rewardKey: 'rewards.milestone3.reward',
      icon: Star,
      color: 'from-yellow-600 to-yellow-800'
    }
  ];

  useEffect(() => {
    // Simulate real-time registration updates
    const interval = setInterval(() => {
      setCurrentRegistrations(prev => prev + Math.floor(Math.random() * ANIMATION_CONSTANTS.MAX_REGISTRATION_INCREMENT));
    }, ANIMATION_CONSTANTS.REGISTRATION_UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="rewards" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('rewards.title')}
          </h2>
          <p className="text-xl text-yellow-600 mb-8">
            {t('rewards.subtitle')}
          </p>

        {/* Current Registration Count */}
        <CurrentStats currentRegistrations={currentRegistrations} />
        </div>

        {/* Milestones */}
        <div className="space-y-8">
          {milestones.map((milestone) => (
            <MilestoneCard
              key={milestone.id}
              milestone={milestone}
              currentRegistrations={currentRegistrations}
            />
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-600/10 to-yellow-800/10 rounded-lg border border-yellow-600/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              친구들과 함께 더 많은 보상을 받으세요!
            </h3>
            <p className="text-gray-300 mb-6">
              사전예약을 완료하고 소셜 미디어에 공유하여 목표 달성에 기여해보세요.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                페이스북 공유
              </button>
              <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                카카오톡 공유
              </button>
              <button className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                트위터 공유
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};