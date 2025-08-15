# LunchChat 인트로 페이지

Next.js와 TypeScript로 제작된 LunchChat 서비스의 인트로 페이지입니다.

## 🚀 기능

- **반응형 디자인**: 모바일과 데스크톱 모두 지원
- **이미지 지원**: 실제 이미지와 fallback 아이콘 모두 지원
- **Fixed 버튼**: 우측 하단에 고정된 메인 서비스 이동 버튼
- **모던 UI**: Tailwind CSS를 활용한 현대적인 디자인

## 🛠️ 기술 스택

- **Next.js 14** - React 기반 풀스택 프레임워크
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **App Router** - Next.js 13+ App Router 사용

## 📁 프로젝트 구조

```
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
