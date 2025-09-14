import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ko: {
    // Header
    'nav.preregister': '사전예약',
    'nav.characters': '캐릭터',
    'nav.rewards': '보상',
    
    // Hero Section
    'hero.title': 'Realm of Shadows',
    'hero.subtitle': '어둠 속에서 깨어나는 전설의 시작',
    'hero.description': '엘든링의 영감을 받은 다크 판타지 MMORPG. 광활한 세계를 탐험하고, 강력한 적들과 맞서며, 당신만의 전설을 써내려가세요.',
    'hero.cta': '지금 사전예약하기',
    
    // Game Intro
    'intro.title': '그림자의 세계로',
    'intro.subtitle': '깊고 어두운 판타지 세계관',
    'intro.feature1.title': '광활한 오픈월드',
    'intro.feature1.desc': '신비롭고 위험한 세계를 자유롭게 탐험하세요',
    'intro.feature2.title': '전략적 전투 시스템',
    'intro.feature2.desc': '스킬과 전략이 승부를 가르는 하드코어 전투',
    'intro.feature3.title': '깊이 있는 스토리',
    'intro.feature3.desc': '고대의 비밀과 어둠의 진실을 파헤치세요',
    
    // Characters
    'characters.title': '영웅을 선택하세요',
    'characters.subtitle': '각각 고유한 능력을 가진 세 개의 클래스',
    'characters.darkKnight.name': '암흑 기사',
    'characters.darkKnight.role': '탱커',
    'characters.darkKnight.desc': '어둠의 힘으로 무장한 불굴의 전사. 강력한 방어력과 도발 스킬로 파티를 보호합니다.',
    'characters.bloodMage.name': '혈법사',
    'characters.bloodMage.role': '마법 딜러',
    'characters.bloodMage.desc': '생명력을 조작하는 금기의 마법사. 적의 피를 이용해 강력한 마법을 펼칩니다.',
    'characters.shadowArcher.name': '그림자 궁수',
    'characters.shadowArcher.role': '원거리 딜러',
    'characters.shadowArcher.desc': '그림자와 하나가 된 저격수. 은밀함과 정확성으로 적을 제거합니다.',
    
    // Pre-registration Form
    'form.title': '사전예약 신청',
    'form.subtitle': '독점 보상을 받고 런칭 소식을 가장 먼저 받아보세요',
    'form.email': '이메일 주소',
    'form.email.placeholder': 'your@email.com',
    'form.nickname': '게임 닉네임',
    'form.nickname.placeholder': '원하는 닉네임을 입력하세요',
    'form.character': '선호 캐릭터',
    'form.character.placeholder': '캐릭터를 선택하세요',
    'form.character.darkKnight': '암흑 기사',
    'form.character.bloodMage': '혈법사',
    'form.character.shadowArcher': '그림자 궁수',
    'form.submit': '사전예약 완료',
    'form.success': '사전예약이 완료되었습니다!',
    'form.error': '오류가 발생했습니다. 다시 시도해주세요.',
    
    // Rewards
    'rewards.title': '사전예약 보상',
    'rewards.subtitle': '목표 달성 시 모든 유저가 받는 특별 혜택',
    'rewards.current': '현재 등록자',
    'rewards.milestone1.title': '10만 명 달성',
    'rewards.milestone1.reward': '독점 무기 스킨 + 골드 10,000',
    'rewards.milestone2.title': '25만 명 달성',
    'rewards.milestone2.reward': '전설급 마운트 + 경험치 부스터',
    'rewards.milestone3.title': '50만 명 달성',
    'rewards.milestone3.reward': '최고급 장비 세트 + VIP 혜택',
    
    // Footer
    'footer.copyright': '© 2025 Realm of Shadows. 모든 권리 보유.',
    'footer.contact': '문의사항',
    'footer.privacy': '개인정보처리방침',
    'footer.terms': '이용약관'
  },
  
  en: {
    // Header
    'nav.preregister': 'Pre-Register',
    'nav.characters': 'Characters',
    'nav.rewards': 'Rewards',
    
    // Hero Section
    'hero.title': 'Realm of Shadows',
    'hero.subtitle': 'The Legend Awakens in Darkness',
    'hero.description': 'A dark fantasy MMORPG inspired by Elden Ring. Explore vast worlds, face powerful enemies, and write your own legend.',
    'hero.cta': 'Pre-Register Now',
    
    // Game Intro
    'intro.title': 'Enter the Shadow Realm',
    'intro.subtitle': 'Deep and Dark Fantasy Universe',
    'intro.feature1.title': 'Vast Open World',
    'intro.feature1.desc': 'Freely explore mysterious and dangerous realms',
    'intro.feature2.title': 'Strategic Combat',
    'intro.feature2.desc': 'Hardcore battles where skill and strategy determine victory',
    'intro.feature3.title': 'Rich Storyline',
    'intro.feature3.desc': 'Uncover ancient secrets and dark truths',
    
    // Characters
    'characters.title': 'Choose Your Hero',
    'characters.subtitle': 'Three unique classes with distinct abilities',
    'characters.darkKnight.name': 'Dark Knight',
    'characters.darkKnight.role': 'Tank',
    'characters.darkKnight.desc': 'An indomitable warrior armed with dark power. Protects the party with strong defense and taunt skills.',
    'characters.bloodMage.name': 'Blood Mage',
    'characters.bloodMage.role': 'Magic Dealer',
    'characters.bloodMage.desc': 'A forbidden mage who manipulates life force. Uses enemy blood to cast powerful spells.',
    'characters.shadowArcher.name': 'Shadow Archer',
    'characters.shadowArcher.role': 'Ranged Dealer',
    'characters.shadowArcher.desc': 'A sniper who becomes one with shadows. Eliminates enemies with stealth and precision.',
    
    // Pre-registration Form
    'form.title': 'Pre-Registration',
    'form.subtitle': 'Get exclusive rewards and be the first to know about launch',
    'form.email': 'Email Address',
    'form.email.placeholder': 'your@email.com',
    'form.nickname': 'Game Nickname',
    'form.nickname.placeholder': 'Enter your desired nickname',
    'form.character': 'Preferred Character',
    'form.character.placeholder': 'Select a character',
    'form.character.darkKnight': 'Dark Knight',
    'form.character.bloodMage': 'Blood Mage',
    'form.character.shadowArcher': 'Shadow Archer',
    'form.submit': 'Complete Pre-Registration',
    'form.success': 'Pre-registration completed!',
    'form.error': 'An error occurred. Please try again.',
    
    // Rewards
    'rewards.title': 'Pre-Registration Rewards',
    'rewards.subtitle': 'Special benefits for all users when milestones are reached',
    'rewards.current': 'Current Registrations',
    'rewards.milestone1.title': '100K Milestone',
    'rewards.milestone1.reward': 'Exclusive Weapon Skin + 10,000 Gold',
    'rewards.milestone2.title': '250K Milestone',
    'rewards.milestone2.reward': 'Legendary Mount + EXP Booster',
    'rewards.milestone3.title': '500K Milestone',
    'rewards.milestone3.reward': 'Premium Equipment Set + VIP Benefits',
    
    // Footer
    'footer.copyright': '© 2025 Realm of Shadows. All rights reserved.',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service'
  },
  
  ja: {
    // Header
    'nav.preregister': '事前登録',
    'nav.characters': 'キャラクター',
    'nav.rewards': '報酬',
    
    // Hero Section
    'hero.title': 'Realm of Shadows',
    'hero.subtitle': '闇の中で覚醒する伝説の始まり',
    'hero.description': 'エルデンリングにインスパイアされたダークファンタジーMMORPG。広大な世界を探索し、強力な敵と戦い、あなただけの伝説を書き記してください。',
    'hero.cta': '今すぐ事前登録',
    
    // Game Intro
    'intro.title': '影の世界へ',
    'intro.subtitle': '深く暗いファンタジー世界観',
    'intro.feature1.title': '広大なオープンワールド',
    'intro.feature1.desc': '神秘的で危険な世界を自由に探索しよう',
    'intro.feature2.title': '戦略的戦闘システム',
    'intro.feature2.desc': 'スキルと戦略が勝負を分けるハードコア戦闘',
    'intro.feature3.title': '深いストーリー',
    'intro.feature3.desc': '古代の秘密と闇の真実を解き明かそう',
    
    // Characters
    'characters.title': 'ヒーローを選択',
    'characters.subtitle': 'それぞれ独特な能力を持つ3つのクラス',
    'characters.darkKnight.name': '暗黒騎士',
    'characters.darkKnight.role': 'タンク',
    'characters.darkKnight.desc': '闇の力で武装した不屈の戦士。強力な防御力と挑発スキルでパーティを守ります。',
    'characters.bloodMage.name': '血法師',
    'characters.bloodMage.role': '魔法ディーラー',
    'characters.bloodMage.desc': '生命力を操る禁断の魔法使い。敵の血を利用して強力な魔法を繰り出します。',
    'characters.shadowArcher.name': '影の射手',
    'characters.shadowArcher.role': '遠距離ディーラー',
    'characters.shadowArcher.desc': '影と一つになった狙撃手。隠密性と正確性で敵を排除します。',
    
    // Pre-registration Form
    'form.title': '事前登録申請',
    'form.subtitle': '独占報酬を受け取り、ローンチニュースを最初に受け取ろう',
    'form.email': 'メールアドレス',
    'form.email.placeholder': 'your@email.com',
    'form.nickname': 'ゲームニックネーム',
    'form.nickname.placeholder': '希望のニックネームを入力',
    'form.character': '好みのキャラクター',
    'form.character.placeholder': 'キャラクターを選択',
    'form.character.darkKnight': '暗黒騎士',
    'form.character.bloodMage': '血法師',
    'form.character.shadowArcher': '影の射手',
    'form.submit': '事前登録完了',
    'form.success': '事前登録が完了しました！',
    'form.error': 'エラーが発生しました。再試行してください。',
    
    // Rewards
    'rewards.title': '事前登録報酬',
    'rewards.subtitle': '目標達成時に全ユーザーが受け取る特別特典',
    'rewards.current': '現在の登録者',
    'rewards.milestone1.title': '10万人達成',
    'rewards.milestone1.reward': '専用武器スキン + ゴールド10,000',
    'rewards.milestone2.title': '25万人達成',
    'rewards.milestone2.reward': '伝説級マウント + 経験値ブースター',
    'rewards.milestone3.title': '50万人達成',
    'rewards.milestone3.reward': '最高級装備セット + VIP特典',
    
    // Footer
    'footer.copyright': '© 2025 Realm of Shadows. 全著作権所有。',
    'footer.contact': 'お問い合わせ',
    'footer.privacy': 'プライバシーポリシー',
    'footer.terms': '利用規約'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('ko');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    if (['ko', 'en', 'ja'].includes(browserLang)) {
      setLanguage(browserLang);
    }
  }, []);

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.ko] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};