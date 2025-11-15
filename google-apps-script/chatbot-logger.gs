// Google Apps Script 코드
// 스프레드시트 ID: 1Qqh4DD2l8mIr71L8LeB5oevChdmHm1caUVfM_32Pog4
// 이 코드를 Google Apps Script 에디터에 붙여넣으세요

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.openById('1Qqh4DD2l8mIr71L8LeB5oevChdmHm1caUVfM_32Pog4');
    const chatSheet = sheet.getSheetByName('챗봇대화기록') || sheet.insertSheet('챗봇대화기록');

    // 헤더가 없으면 추가
    if (chatSheet.getLastRow() === 0) {
      chatSheet.appendRow(['타임스탬프', '사용자 메시지', 'AI 응답', 'IP 주소', 'User Agent']);
    }

    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date();
    const userMessage = data.userMessage || '';
    const aiResponse = data.aiResponse || '';
    const ipAddress = data.ipAddress || '';
    const userAgent = data.userAgent || '';

    chatSheet.appendRow([
      timestamp,
      userMessage,
      aiResponse,
      ipAddress,
      userAgent
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: '대화 기록이 저장되었습니다.'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    message: 'Chatbot Logger API is running'
  })).setMimeType(ContentService.MimeType.JSON);
}
