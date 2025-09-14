 //이미지 URL 상수들
export const IMAGE_URLS = {
  CHARACTERS: {
    DARK_KNIGHT: 'https://images.unsplash.com/photo-1734122373993-36745ac6b688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwa25pZ2h0JTIwYXJtb3IlMjBtZWRpZXZhbHxlbnwxfHx8fDE3NTc4NDU3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    BLOOD_MAGE: 'https://images.unsplash.com/photo-1586796676977-d23a9217a24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aXphcmQlMjBtYWdlJTIwZGFyayUyMG1hZ2ljfGVufDF8fHx8MTc1Nzg0NTcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    SHADOW_ARCHER: 'https://images.unsplash.com/photo-1567192884689-3740d24919d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoZXIlMjBib3clMjBhcnJvdyUyMG1lZGlldmFsfGVufDF8fHx8MTc1Nzg0NTcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  
  HERO_BACKGROUND: 'https://images.unsplash.com/photo-1605433887450-490fcd8c0c17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZmFudGFzeSUyMHdhcnJpb3IlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzU3ODQ1NjYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  
  GAME_INTRO: 'https://images.unsplash.com/photo-1660544773979-0ba9854c8156?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGNhc3RsZSUyMHJ1aW5zJTIwZGFya3xlbnwxfHx8fDE3NTc4NDU2ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
} as const;

// 이미지 alt 텍스트 (접근성을 위해)
export const IMAGE_ALT_TEXTS = {
  CHARACTERS: {
    DARK_KNIGHT: '암흑 기사 - 어둠의 힘으로 무장한 불굴의 전사',
    BLOOD_MAGE: '혈법사 - 생명력을 조작하는 금기의 마법사',
    SHADOW_ARCHER: '그림자 궁수 - 그림자와 하나가 된 저격수',
  },
  
  HERO_BACKGROUND: 'Realm of Shadows 게임 히어로 배경 이미지',
  GAME_INTRO: '중세 성 유적의 어두운 풍경',
  LOGO: 'Realm of Shadows 로고',
} as const;
