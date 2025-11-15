# 구글 시트 연동 설정 가이드

## 1. 구글 시트 준비

### 1.1 구글 시트 생성 및 헤더 설정

1. 구글 시트 ID: `1u12v-0yz6mwPGJr6ADKPBreZWkILL97Vk1G5HwuxRsQ`
2. 첫 번째 행에 다음 헤더를 추가하세요:

| A열 | B열 | C열 | D열 | E열 | F열 |
|-----|-----|-----|-----|-----|-----|
| 신청시간 | 이름 | 이메일 | 휴대폰번호 | 관심분야 | 카카오톡수신동의 |

## 2. 구글 앱스 스크립트 설정

### 2.1 스크립트 에디터 열기

1. 구글 시트에서 **확장 프로그램** > **Apps Script** 클릭
2. 기본 코드를 모두 삭제

### 2.2 스크립트 코드 붙여넣기

```javascript
// Google Apps Script - 구글 시트에 배포할 코드
function doPost(e) {
  try {
    // 스프레드시트 ID
    const SHEET_ID = '1u12v-0yz6mwPGJr6ADKPBreZWkILL97Vk1G5HwuxRsQ';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    // POST 데이터 파싱
    const data = JSON.parse(e.postData.contents);

    // 현재 시간 (한국 시간)
    const now = new Date();
    const kstTime = Utilities.formatDate(now, 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');

    // 시트에 데이터 추가
    sheet.appendRow([
      kstTime,                              // 신청 시간
      data.name || '',                      // 이름
      data.email || '',                     // 이메일
      data.phone || '',                     // 휴대폰 번호
      data.interest || '선택 안함',         // 관심 분야
      data.kakaoConsent ? '동의' : '미동의' // 카카오톡 수신 동의
    ]);

    // 성공 응답
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: '신청이 완료되었습니다!'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // 에러 응답
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: '오류가 발생했습니다: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// GET 요청 테스트용
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'API is running',
    message: 'Use POST method to submit data'
  })).setMimeType(ContentService.MimeType.JSON);
}
```

### 2.3 스크립트 저장

1. 파일 이름: `글쓰기특강_폼제출` (원하는 이름으로 변경 가능)
2. **저장** 버튼 클릭 (💾 아이콘)

## 3. 웹 앱으로 배포

### 3.1 배포 설정

1. **배포** > **새 배포** 클릭
2. **유형 선택**에서 ⚙️ 아이콘 클릭 > **웹 앱** 선택
3. 설정:
   - **설명**: "글쓰기 특강 신청 폼" (선택사항)
   - **다음 계정으로 실행**: **나** 선택
   - **액세스 권한**: **모든 사용자** 선택 ⚠️ 중요!
4. **배포** 버튼 클릭

### 3.2 권한 승인

1. "승인 필요" 팝업이 나타나면 **액세스 승인** 클릭
2. 구글 계정 선택
3. "이 앱은 Google에서 확인하지 않았습니다" 경고 표시되면:
   - **고급** 클릭
   - **[프로젝트명](안전하지 않은 페이지)로 이동** 클릭
4. **허용** 클릭

### 3.3 배포 URL 복사

1. 배포 완료 후 **웹 앱 URL** 복사
2. URL 형식: `https://script.google.com/macros/s/XXXXX.../exec`

## 4. Next.js 환경 변수 설정

### 4.1 .env.local 파일 생성

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용 추가:

```bash
# Google Apps Script URL
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/복사한_스크립트_ID/exec
```

### 4.2 서버 재시작

```bash
# 개발 서버 재시작
npm run dev
```

## 5. 테스트

### 5.1 로컬 테스트

1. http://localhost:3000 접속
2. 폼 작성 및 제출
3. 구글 시트에서 데이터 확인

### 5.2 문제 해결

**폼 제출 시 오류 발생:**
- Apps Script 콘솔에서 로그 확인: **실행** > **실행 로그**
- 배포 URL이 정확한지 확인
- 액세스 권한이 "모든 사용자"로 설정되어 있는지 확인

**데이터가 시트에 저장되지 않음:**
- 시트 ID가 올바른지 확인
- 헤더 행이 올바르게 설정되어 있는지 확인
- Apps Script 권한이 승인되었는지 확인

## 6. 배포 (프로덕션)

### 6.1 Vercel 환경 변수 설정

1. Vercel 대시보드 접속
2. 프로젝트 선택 > **Settings** > **Environment Variables**
3. 새 환경 변수 추가:
   - **Name**: `GOOGLE_SCRIPT_URL`
   - **Value**: 배포된 Apps Script URL
   - **Environment**: Production, Preview, Development 모두 선택
4. **Save** 클릭
5. 프로젝트 재배포

## 7. 추가 기능 (선택사항)

### 7.1 이메일 알림 추가

Apps Script에 다음 함수 추가:

```javascript
function sendEmailNotification(data) {
  const recipient = 'your-email@gmail.com'; // 알림 받을 이메일
  const subject = '[신규 신청] ' + data.name + '님의 특강 신청';
  const body = `
새로운 특강 신청이 접수되었습니다.

이름: ${data.name}
이메일: ${data.email}
휴대폰: ${data.phone}
관심분야: ${data.interest}
카카오톡 수신동의: ${data.kakaoConsent ? '동의' : '미동의'}

시간: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}
  `;

  MailApp.sendEmail(recipient, subject, body);
}

// doPost 함수의 sheet.appendRow 다음에 추가:
// sendEmailNotification(data);
```

### 7.2 중복 신청 방지

```javascript
function isDuplicate(email) {
  const SHEET_ID = '1u12v-0yz6mwPGJr6ADKPBreZWkILL97Vk1G5HwuxRsQ';
  const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][2] === email) { // C열 (이메일)
      return true;
    }
  }
  return false;
}

// doPost 함수의 시작 부분에 추가:
// if (isDuplicate(data.email)) {
//   return ContentService.createTextOutput(JSON.stringify({
//     success: false,
//     message: '이미 신청하신 이메일입니다.'
//   })).setMimeType(ContentService.MimeType.JSON);
// }
```

## 8. 보안 권장사항

1. ✅ Apps Script URL은 절대 공개 저장소에 커밋하지 마세요
2. ✅ `.env.local`은 `.gitignore`에 포함되어 있는지 확인
3. ✅ 정기적으로 구글 시트 백업
4. ✅ 민감한 개인정보는 암호화 고려

## 문의

문제가 발생하면 Apps Script 실행 로그를 확인하거나 개발자에게 문의하세요.
