import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';
import { CheckCircle, Mail, User, Users } from 'lucide-react';
import { ANIMATION_CONSTANTS, LAYOUT_CONSTANTS, STYLE_CONSTANTS } from '../constants';

export const PreRegistrationForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    character: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const successMessageRef = useRef<HTMLDivElement>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = '이메일 주소를 입력해주세요.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = '올바른 이메일 주소를 입력해주세요.';
    }

    if (!formData.nickname) {
      newErrors.nickname = '닉네임을 입력해주세요.';
    } else if (formData.nickname.length < 2) {
      newErrors.nickname = '닉네임은 2글자 이상이어야 합니다.';
    }

    if (!formData.character) {
      newErrors.character = '선호 캐릭터를 선택해주세요.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // 첫 번째 오류 필드에 포커스
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const element = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
        element?.focus();
      }
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, ANIMATION_CONSTANTS.API_SIMULATION_DELAY));
      
      setIsSuccess(true);
      toast.success(t('form.success'));
      
      // 성공 메시지에 포커스 이동
      setTimeout(() => {
        successMessageRef.current?.focus();
      }, 100);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({ email: '', nickname: '', character: '' });
        setIsSuccess(false);
        setErrors({});
      }, ANIMATION_CONSTANTS.FORM_RESET_DELAY);
      
    } catch (error) {
      toast.error(t('form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="preregister" className={LAYOUT_CONSTANTS.SPACING.SECTION_PADDING}>
        <div className={`container mx-auto ${LAYOUT_CONSTANTS.MAX_WIDTH.TEXT_CONTENT}`}>
          <div 
            className={`bg-gradient-to-b from-green-900/30 to-black/80 rounded-lg border border-green-600/30 ${LAYOUT_CONSTANTS.SPACING.FORM_PADDING} text-center`}
            ref={successMessageRef}
            tabIndex={-1}
            role="status"
            aria-live="polite"
            aria-label="사전예약 완료"
          >
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" aria-hidden="true" />
            <h2 className="text-3xl font-bold text-white mb-4">
              {t('form.success')}
            </h2>
            <p className="text-gray-300 text-lg">
              런칭 소식을 가장 먼저 받아보실 수 있습니다!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="preregister" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        {/* Form Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('form.title')}
          </h2>
          <p className="text-xl text-yellow-600">
            {t('form.subtitle')}
          </p>
        </div>

        {/* Form */}
        <div className="bg-gradient-to-b from-gray-900/50 to-black/80 rounded-lg border border-yellow-600/30 p-8 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white flex items-center space-x-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>{t('form.email')}</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: '' });
                }}
                placeholder={t('form.email.placeholder')}
                className={`bg-black/50 border-yellow-600/30 text-white placeholder:text-gray-500 focus:border-yellow-600 focus:ring-yellow-600/20 ${
                  errors.email ? 'border-red-500' : ''
                }`}
                required
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" role="alert" className="text-red-400 text-sm">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Nickname Field */}
            <div className="space-y-2">
              <Label htmlFor="nickname" className="text-white flex items-center space-x-2">
                <User className="w-4 h-4" aria-hidden="true" />
                <span>{t('form.nickname')}</span>
              </Label>
              <Input
                id="nickname"
                name="nickname"
                type="text"
                value={formData.nickname}
                onChange={(e) => {
                  setFormData({ ...formData, nickname: e.target.value });
                  if (errors.nickname) setErrors({ ...errors, nickname: '' });
                }}
                placeholder={t('form.nickname.placeholder')}
                className={`bg-black/50 border-yellow-600/30 text-white placeholder:text-gray-500 focus:border-yellow-600 focus:ring-yellow-600/20 ${
                  errors.nickname ? 'border-red-500' : ''
                }`}
                required
                aria-invalid={!!errors.nickname}
                aria-describedby={errors.nickname ? "nickname-error" : undefined}
              />
              {errors.nickname && (
                <p id="nickname-error" role="alert" className="text-red-400 text-sm">
                  {errors.nickname}
                </p>
              )}
            </div>

            {/* Character Selection */}
            <div className="space-y-2">
              <Label className="text-white flex items-center space-x-2">
                <Users className="w-4 h-4" aria-hidden="true" />
                <span>{t('form.character')}</span>
              </Label>
              <Select 
                value={formData.character} 
                onValueChange={(value) => {
                  setFormData({ ...formData, character: value });
                  if (errors.character) setErrors({ ...errors, character: '' });
                }}
                name="character"
              >
                <SelectTrigger 
                  className={`bg-black/50 border-yellow-600/30 text-white focus:border-yellow-600 focus:ring-yellow-600/20 ${
                    errors.character ? 'border-red-500' : ''
                  }`}
                  aria-invalid={!!errors.character}
                  aria-describedby={errors.character ? "character-error" : undefined}
                >
                  <SelectValue placeholder={t('form.character.placeholder')} />
                </SelectTrigger>
                <SelectContent className="bg-black border-yellow-600/30">
                  <SelectItem value="darkKnight" className="text-white hover:bg-yellow-600/20">
                    {t('form.character.darkKnight')}
                  </SelectItem>
                  <SelectItem value="bloodMage" className="text-white hover:bg-yellow-600/20">
                    {t('form.character.bloodMage')}
                  </SelectItem>
                  <SelectItem value="shadowArcher" className="text-white hover:bg-yellow-600/20">
                    {t('form.character.shadowArcher')}
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.character && (
                <p id="character-error" role="alert" className="text-red-400 text-sm">
                  {errors.character}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-800 hover:from-yellow-500 hover:to-yellow-700 text-black border-none shadow-lg hover:shadow-yellow-600/25 transform hover:scale-105 transition-all duration-300 text-lg py-6 focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-black"
              aria-label={isSubmitting ? '사전예약 처리 중' : '사전예약 신청하기'}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" aria-hidden="true"></div>
                  <span>처리 중...</span>
                </div>
              ) : (
                t('form.submit')
              )}
            </Button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 p-4 bg-yellow-600/10 border border-yellow-600/30 rounded-lg">
            <p className="text-sm text-gray-400 text-center">
              개인정보는 게임 런칭 안내 목적으로만 사용되며, 안전하게 보호됩니다.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-8 space-x-4">
          <div className="w-3 h-3 bg-yellow-600 transform rotate-45 animate-pulse"></div>
          <div className="w-3 h-3 bg-yellow-600/70 transform rotate-45 animate-pulse delay-300"></div>
          <div className="w-3 h-3 bg-yellow-600/40 transform rotate-45 animate-pulse delay-600"></div>
        </div>
      </div>
    </section>
  );
};