// 스타일 관련 상수들
export const STYLE_CONSTANTS = {
  // 브랜드 색상 (Tailwind 클래스)
  COLORS: {
    PRIMARY: 'yellow-600',
    PRIMARY_LIGHT: 'yellow-500',
    PRIMARY_DARK: 'yellow-800',
    BACKGROUND: 'black',
    SURFACE: 'gray-900',
    BORDER: 'yellow-600/30',
    BORDER_HOVER: 'yellow-600',
    TEXT_PRIMARY: 'white',
    TEXT_SECONDARY: 'gray-400',
    TEXT_MUTED: 'gray-500',
    SUCCESS: 'green-600',
    ERROR: 'red-600',
  },
  
  // 그라데이션 패턴
  GRADIENTS: {
    PRIMARY: 'from-yellow-600 to-yellow-800',
    PRIMARY_REVERSE: 'from-yellow-800 to-yellow-600',
    BACKGROUND: 'from-gray-900/50 to-black/80',
    SURFACE: 'from-gray-800/50 to-black/80',
    GLOW: 'from-yellow-600/30 to-yellow-800/30',
    SUCCESS: 'from-green-600/20 to-yellow-600/20',
  },
  
  // 호버 효과
  HOVER_EFFECTS: {
    SCALE: 'hover:scale-105',
    TEXT_COLOR: 'hover:text-yellow-600',
    BORDER_COLOR: 'hover:border-yellow-600',
    BACKGROUND: 'hover:bg-yellow-600/20',
    TRANSFORM: 'hover:scale-110',
  },
  
  // 전환 효과
  TRANSITIONS: {
    DEFAULT: 'transition-all duration-300',
    FAST: 'transition-all duration-200',
    SLOW: 'transition-all duration-500',
    COLORS: 'transition-colors',
    TRANSFORM: 'transition-transform duration-500',
    OPACITY: 'transition-opacity duration-300',
  },
  
  // 반응형 브레이크포인트
  BREAKPOINTS: {
    MOBILE_HIDDEN: 'hidden md:flex',
    DESKTOP_HIDDEN: 'md:hidden',
    RESPONSIVE_GRID: 'grid md:grid-cols-3 gap-8',
    RESPONSIVE_LAYOUT: 'grid lg:grid-cols-2 gap-12',
    RESPONSIVE_FLEX: 'flex flex-col md:flex-row',
  },
} as const;
