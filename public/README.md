# 런치챗 인트로 페이지 (LunchChat Intro Page)

런치챗 서비스의 소개 페이지입니다. React와 TypeScript, TailwindCSS를 사용하여 구축되었습니다.

## 🚀 주요 기능

- **반응형 디자인**: 모바일과 데스크톱에 최적화된 레이아웃
- **애니메이션**: Framer Motion을 활용한 부드러운 스크롤 애니메이션
- **이미지 레이어링**: SVG 이미지들의 정밀한 배치와 겹침 효과
- **동적 UI**: 상태에 따라 변화하는 버튼 텍스트와 색상
- **고정 네비게이션**: 메인 서비스로 이동하는 플로팅 버튼

## 🛠️ 기술 스택

- **Frontend**: React 18, TypeScript
- **Styling**: TailwindCSS
- **Animation**: Framer Motion
- **Image Optimization**: React Image Component
- **Build Tool**: Vite (또는 Create React App)

## 📁 프로젝트 구조

```
lunchchat-intro/
├── src/
│   ├── components/
│   │   └── IntroPage.tsx     # 메인 인트로 페이지
│   ├── App.tsx               # 메인 앱 컴포넌트
│   ├── index.tsx             # 진입점
│   └── index.css             # 전역 스타일
├── public/                   # 정적 이미지 파일들
│   ├── 1.svg               # 메인 배경 이미지
│   ├── logo.svg            # 런치챗 로고
│   ├── text01.svg          # 메인 텍스트
│   ├── smartPhone.svg      # 스마트폰 인터페이스
│   ├── persona1.svg        # 페르소나 1
│   ├── persona2.svg        # 페르소나 2
│   ├── persona3.svg        # 페르소나 3
│   ├── text02.svg          # 설명 텍스트 2
│   ├── 2.svg               # 섹션 2 배경
│   ├── text03.svg          # 설명 텍스트 3
│   ├── text04.svg          # 설명 텍스트 4
│   ├── 3.svg               # 섹션 3 배경
│   ├── text05.svg          # 설명 텍스트 5
│   ├── 4.svg               # 섹션 4 배경
│   ├── text06.svg          # 설명 텍스트 6
│   ├── text07.svg          # 설명 텍스트 7
│   ├── 5.svg               # 섹션 5 배경
│   ├── 6.svg               # 섹션 6 배경
│   ├── text08.svg          # 설명 텍스트 8
│   ├── ending1.svg         # 엔딩 이미지 1
│   ├── ending2.svg         # 엔딩 이미지 2
│   ├── ending3.svg         # 엔딩 이미지 3
│   ├── footer.svg          # 푸터 이미지
│   └── goLunchchat.svg     # 메인 서비스 이동 버튼
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
# 또는
yarn install
```

### 2. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

### 3. 브라우저에서 확인

```
http://localhost:3000
```

## 🎨 주요 컴포넌트

### 메인 섹션 (1.svg)

- 로고, 메인 텍스트, 스마트폰 이미지가 레이어링
- 페이드업 애니메이션과 플로팅 효과

### 페르소나 섹션

- 3개의 페르소나 이미지 (오른쪽 → 왼쪽 → 오른쪽 배치)
- 스태거 애니메이션으로 순차적 등장

### 콘텐츠 섹션 (2.svg ~ 6.svg)

- 각 섹션별 배경 이미지와 오버레이 텍스트
- 스크롤 트리거 애니메이션

### 동적 버튼

- "런치챗 보내기" → "수락 대기중" → "채팅 보내기" 순환
- 상태에 따른 배경색 변화

### 고정 네비게이션

- 하단에 플로팅하는 메인 서비스 이동 버튼
- 무한 플로팅 애니메이션

## 📱 반응형 디자인

- **최대 너비**: 440px (모바일 최적화)
- **브레이크포인트**: `md:` 프리픽스로 태블릿/데스크톱 지원
- **이미지 최적화**: `next/image`로 자동 최적화

## 🚀 배포

### Vercel 배포

```bash
npm run build
vercel --prod
```

### GitHub Pages 배포

```bash
npm run build
npm run export
```

## 🔧 커스터마이징

### 메인 서비스 URL 변경

`src/components/IntroPage.tsx`의 `handleGoToMain` 함수에서 URL 수정:

```typescript
const handleGoToMain = (): void => {
  window.open("YOUR_MAIN_SERVICE_URL", "_blank");
};
```

### 애니메이션 조정

Framer Motion의 `duration`, `delay`, `ease` 값 수정

### 스타일 변경

TailwindCSS 클래스나 `style` 속성 수정

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

**런치챗** - 점심시간을 더욱 즐겁게! 🍱💬
