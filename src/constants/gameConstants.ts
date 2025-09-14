 // 게임 관련 상수들
export const GAME_CONSTANTS = {
  // 마일스톤 목표치
  MILESTONES: {
    FIRST: 100000,
    SECOND: 250000,
    THIRD: 500000,
  },
  
  // 초기 등록자 수
  INITIAL_REGISTRATIONS: 87420,
  
  // 캐릭터 정보
  CHARACTERS: {
    DARK_KNIGHT: {
      id: 'darkKnight',
      nameKey: 'characters.darkKnight.name',
      roleKey: 'characters.darkKnight.role',
      descKey: 'characters.darkKnight.desc',
    },
    BLOOD_MAGE: {
      id: 'bloodMage',
      nameKey: 'characters.bloodMage.name',
      roleKey: 'characters.bloodMage.role',
      descKey: 'characters.bloodMage.desc',
    },
    SHADOW_ARCHER: {
      id: 'shadowArcher',
      nameKey: 'characters.shadowArcher.name',
      roleKey: 'characters.shadowArcher.role',
      descKey: 'characters.shadowArcher.desc',
    },
  },
} as const;

// 애니메이션 타이밍 상수
export const ANIMATION_CONSTANTS = {
  // 타이핑 애니메이션
  TITLE_TYPING_DELAY: 100,
  SUBTITLE_TYPING_DELAY: 50,
  SUBTITLE_START_DELAY: 500,
  
  // API 시뮬레이션
  API_SIMULATION_DELAY: 2000,
  
  // 실시간 업데이트
  REGISTRATION_UPDATE_INTERVAL: 3000,
  MAX_REGISTRATION_INCREMENT: 5,
  
  // 폼 리셋 지연
  FORM_RESET_DELAY: 3000,
  
  // 애니메이션 지속시간
  TRANSITION_DURATION: 300,
  HOVER_TRANSITION: 500,
} as const;

// 레이아웃 상수
export const LAYOUT_CONSTANTS = {
  // 스크롤 관련
  HEADER_SCROLL_THRESHOLD: 50,
  
  // 컨테이너 크기
  MAX_WIDTH: {
    CONTAINER: 'max-w-6xl',
    TEXT_CONTENT: 'max-w-2xl',
  },
  
  // 간격
  SPACING: {
    SECTION_PADDING: 'py-20 px-4',
    CARD_PADDING: 'p-6',
    FORM_PADDING: 'p-8',
  },
  
  // 높이
  HEIGHTS: {
    CHARACTER_IMAGE: 'h-80',
    LOGO: 'h-10 w-10',
    ICON_SMALL: 'h-4 w-4',
    ICON_MEDIUM: 'h-6 w-6',
    ICON_LARGE: 'h-8 w-8',
  },
} as const;
