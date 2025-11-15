# 챗봇 구글 시트 연동 설정 가이드

## 1. Google Apps Script 설정

### 1단계: Google Sheets 준비
1. 구글 시트 열기: https://docs.google.com/spreadsheets/d/1Qqh4DD2l8mIr71L8LeB5oevChdmHm1caUVfM_32Pog4/edit
2. 시트 이름이 "챗봇대화기록"인지 확인 (자동 생성됨)

### 2단계: Apps Script 코드 배포
1. 구글 시트에서 **확장 프로그램 > Apps Script** 클릭
2. `google-apps-script/chatbot-logger.gs` 파일의 코드를 복사하여 붙여넣기
3. **배포 > 새 배포** 클릭
4. 배포 유형:
   - **웹 앱** 선택
   - 다음 사용자로 실행: **나**
   - 액세스 권한: **모든 사용자**
5. **배포** 클릭
6. 생성된 **웹 앱 URL** 복사

### 3단계: 환경변수 설정

#### 로컬 개발 환경
`.env.local` 파일에서 다음 값을 수정:
```env
CHATBOT_LOGGER_URL=여기에_복사한_웹앱_URL_붙여넣기
```

#### Vercel 프로덕션 환경
1. Vercel 대시보드 접속
2. 프로젝트 선택
3. **Settings > Environment Variables**
4. 새 환경변수 추가:
   - Name: `CHATBOT_LOGGER_URL`
   - Value: 복사한 웹 앱 URL
5. 저장 후 재배포

## 2. 기록되는 데이터

챗봇 대화 시 다음 정보가 구글 시트에 자동 저장됩니다:

| 컬럼 | 설명 |
|------|------|
| 타임스탬프 | 대화 발생 시간 |
| 사용자 메시지 | 사용자가 입력한 질문 |
| AI 응답 | Gemini AI의 답변 |
| IP 주소 | 사용자 IP (익명화) |
| User Agent | 브라우저/기기 정보 |

## 3. 테스트

1. 로컬에서 개발 서버 실행:
```bash
npm run dev
```

2. 챗봇에서 메시지 전송
3. 구글 시트에서 "챗봇대화기록" 탭 확인
4. 새 행이 추가되었는지 확인

## 4. 문제 해결

### 데이터가 저장되지 않을 때
1. Apps Script URL이 올바르게 설정되었는지 확인
2. Apps Script 배포 시 "모든 사용자" 권한으로 설정했는지 확인
3. Vercel 환경변수가 올바르게 설정되었는지 확인
4. 브라우저 개발자 도구 콘솔에서 오류 메시지 확인

### 권한 오류가 발생할 때
1. Apps Script 편집기에서 코드 실행 권한 승인
2. Google 계정 로그인 확인
3. 스프레드시트 편집 권한 확인

## 5. 보안 고려사항

- IP 주소는 분석 목적으로만 사용
- 개인정보는 저장하지 않음
- 필요시 정기적으로 오래된 데이터 삭제 권장
- Apps Script URL은 외부 공개 금지
