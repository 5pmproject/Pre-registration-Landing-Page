// 파티클 시스템 상수들
export const PARTICLE_CONSTANTS = {
  // 파티클 개수 계산
  DENSITY_FACTOR: 15000, // canvas 면적 당 파티클 밀도
  MAX_PARTICLES: 100,
  
  // 파티클 속성 범위
  VELOCITY: {
    BASE: 0.5,
    RANGE: 1.0, // -0.5 ~ 0.5
  },
  
  SIZE: {
    MIN: 1,
    MAX: 4, // 1 ~ 4
  },
  
  OPACITY: {
    MIN: 0.2,
    MAX: 0.8,
    ANIMATION_SPEED: 0.001,
    VARIATION: 0.01,
  },
  
  // 색상 (HSL)
  HUE: {
    MIN: 30,  // 골드 색상 범위 시작
    MAX: 90,  // 골드 색상 범위 끝
  },
  
  // 글로우 효과
  GLOW: {
    MULTIPLIER: 3, // 파티클 크기 대비 글로우 크기
    OUTER_OPACITY: 0.3,
  },
  
  // 배경 그라데이션 색상
  BACKGROUND_COLORS: {
    TOP: '#0d0d0d',
    MIDDLE: '#1a1a1a',
    BOTTOM: '#0d0d0d',
  },
} as const;
