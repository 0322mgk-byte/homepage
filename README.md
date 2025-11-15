# 돈버는 글쓰기 무료 비밀특강 - 랜딩 페이지

Next.js와 Tailwind CSS v3로 제작된 다크모드 랜딩페이지입니다.

## 🚀 기술 스택

- **Framework**: Next.js 16.0.3 (App Router, No Turbo)
- **Styling**: Tailwind CSS v3.4.18
- **Language**: TypeScript 5.9.3
- **Form Handling**: React Hook Form + Zod
- **UI Components**: Custom components

## ✨ 주요 기능

### 섹션 구성
1. **Hero Section**: 강렬한 헤드라인과 CTA
2. **Story Section**: 문제 제기 → 해결책 → 권위 → 혜택
3. **Social Proof**: 수강생 후기 및 성과
4. **CTA Sections**: 3곳에 전략적 배치
5. **Form Section**: 유효성 검증이 포함된 신청 폼
6. **Thank You Page**: 신청 완료 페이지

### 디자인 특징
- ✅ 다크모드 기본 적용
- ✅ 원스크롤 레이아웃
- ✅ 모바일 퍼스트 반응형
- ✅ 부드러운 스크롤 애니메이션
- ✅ 호버 효과 및 인터랙션

### 컬러 시스템
- Primary: #FF6B35 (딥 오렌지)
- Accent: #F4A261 (골드)
- Background: #0F172A (다크 블루)
- Card: #1E293B (어두운 카드)

## 📦 설치 및 실행

```bash
# 의존성 설치 (이미 완료됨)
npm install

# 개발 서버 실행
npm run dev
```

개발 서버: http://localhost:3000

## 🏗️ 프로젝트 구조

```
src/
├── app/
│   ├── api/
│   │   └── submit-form/
│   │       └── route.ts          # 폼 제출 API
│   ├── thank-you/
│   │   └── page.tsx              # 감사 페이지
│   ├── layout.tsx                # 루트 레이아웃 (SEO 메타태그)
│   ├── page.tsx                  # 메인 페이지
│   └── globals.css               # 글로벌 스타일
├── components/
│   ├── Button.tsx                # 재사용 가능한 버튼
│   ├── Hero.tsx                  # 히어로 섹션
│   ├── Story.tsx                 # 스토리 섹션
│   ├── SocialProof.tsx           # 사회적 증거
│   ├── CTA.tsx                   # CTA 섹션
│   └── Form.tsx                  # 신청 폼
└── lib/
    └── utils.ts                  # 유틸리티 함수
```

## 🔧 환경 변수 설정

`.env.example`을 복사하여 `.env.local`을 생성하고 설정하세요:

```bash
cp .env.example .env.local
```

### Google Sheets 연동 (선택사항)

1. Google Sheets에서 새 스프레드시트 생성
2. Apps Script 에디터 열기 (확장 프로그램 > Apps Script)
3. 다음 코드 추가:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.phone,
    data.interest || '선택 안함',
    data.kakaoConsent ? '동의' : '미동의'
  ]);

  return ContentService.createTextOutput(JSON.stringify({
    success: true
  })).setMimeType(ContentService.MimeType.JSON);
}
```

4. 배포 > 새 배포 > 웹 앱으로 배포
5. URL을 `.env.local`의 `GOOGLE_SCRIPT_URL`에 추가

## 📊 Form 제출 플로우

1. 사용자가 폼 작성
2. Zod로 유효성 검증
3. `/api/submit-form`으로 POST 요청
4. Google Sheets에 데이터 저장 (설정 시)
5. `/thank-you` 페이지로 리디렉션

## 🎨 커스터마이징

### 컬러 변경
[tailwind.config.js](tailwind.config.js)에서 색상 수정:

```javascript
colors: {
  primary: {
    DEFAULT: '#FF6B35',  // 원하는 색상으로 변경
  },
  // ...
}
```

### 폰트 변경
[src/app/layout.tsx](src/app/layout.tsx)에서 Google Fonts 변경

### 콘텐츠 수정
각 컴포넌트 파일에서 텍스트와 내용 수정

## 🚀 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

또는 GitHub 연동:
1. GitHub 저장소 생성 및 푸시
2. Vercel에서 프로젝트 임포트
3. 환경 변수 설정
4. 배포

## 📈 성능 최적화

- ✅ Next.js Image 컴포넌트 사용 준비
- ✅ 폰트 최적화 (next/font)
- ✅ 코드 스플리팅 자동 적용
- ✅ CSS 최적화 (Tailwind)

## 📝 TODO (프로덕션 배포 전)

- [ ] Google Analytics 연동
- [ ] Google Sheets API 연동
- [ ] 실제 이미지 및 로고 추가
- [ ] 개인정보 처리방침 페이지 작성
- [ ] 이메일 자동화 설정
- [ ] Meta Pixel / 네이버 애널리틱스 추가
- [ ] Lighthouse 점수 최적화 (목표: 90+)
- [ ] 크로스 브라우저 테스트
- [ ] 실제 도메인 연결

## 📄 라이선스

이 프로젝트는 PRD 문서에 기반하여 제작되었습니다.

## 💬 문의

문제가 발생하거나 질문이 있으시면 이슈를 생성해주세요.
