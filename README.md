# LunchChat 인트로 페이지

React와 TypeScript로 제작된 LunchChat 서비스의 인트로 페이지입니다.

## 🚀 기능

- **반응형 디자인**: 모바일과 데스크톱 모두 지원
- **이미지 지원**: SVG 이미지들의 정밀한 배치와 겹침 효과
- **애니메이션**: Framer Motion을 활용한 부드러운 스크롤 애니메이션
- **동적 UI**: 상태에 따라 변화하는 버튼 텍스트와 색상
- **Fixed 버튼**: 하단에 고정된 메인 서비스 이동 버튼
- **모던 UI**: Tailwind CSS를 활용한 현대적인 디자인

## 🛠️ 기술 스택

- **React 18** - 사용자 인터페이스 구축을 위한 JavaScript 라이브러리
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **Framer Motion** - 애니메이션 라이브러리

## 📁 프로젝트 구조

```bash
lunchchat-intro/
├── src/
│   ├── app/
│   │   ├── page.tsx          # 메인 인트로 페이지
│   │   ├── layout.tsx        # 루트 레이아웃
│   │   └── globals.css       # 전역 스타일
│   └── components/
│       └── ImageWithFallback.tsx  # 이미지 fallback 컴포넌트
├── public/                   # 정적 파일 (이미지 등)
└── package.json
```
