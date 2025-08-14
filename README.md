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

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

### 3. 브라우저에서 확인

http://localhost:3000 으로 접속

## 🖼️ 이미지 추가하기

### 필수 이미지 파일

`public/` 폴더에 다음 이미지들을 추가하세요:

- `intro-logo.png` - 메인 로고 (200x200px 권장)
- `feature-1.png` - AI 메뉴 추천 기능 이미지 (300x200px 권장)
- `feature-2.png` - 실시간 대화 기능 이미지 (300x200px 권장)

### 이미지 형식

- PNG, JPG, WebP 등 지원
- 최적화된 파일 크기 권장 (각 이미지 500KB 이하)

## 🔧 커스터마이징

### 메인 서비스 URL 변경

`src/app/page.tsx`의 `handleGoToMain` 함수에서 URL을 수정하세요:

```typescript
const handleGoToMain = () => {
  // 외부 URL로 이동
  window.location.href = "https://your-main-service.com";

  // 또는 내부 페이지로 이동
  // router.push("/main");
};
```

### 색상 및 스타일 변경

Tailwind CSS 클래스를 수정하여 색상과 스타일을 변경할 수 있습니다.

## 📱 반응형 디자인

- **모바일**: 단일 컬럼 레이아웃
- **태블릿**: 중간 크기 텍스트
- **데스크톱**: 2열 그리드 레이아웃

## 🚀 배포

### Vercel 배포 (권장)

```bash
npm run build
```

### 정적 내보내기

```bash
npm run build
npm run export
```

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
