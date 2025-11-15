import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, interest, kakaoConsent } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: '필수 항목을 모두 입력해주세요' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 주소를 입력해주세요' },
        { status: 400 }
      )
    }

    // Phone validation
    const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: '올바른 휴대폰 번호를 입력해주세요' },
        { status: 400 }
      )
    }

    // Send to Google Sheets via Google Apps Script
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

    if (GOOGLE_SCRIPT_URL) {
      try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            interest: interest || '선택 안함',
            kakaoConsent: kakaoConsent ? '동의' : '미동의',
          }),
        })

        const result = await response.json()

        if (!result.success) {
          console.error('Google Sheets error:', result)
          // Still return success to user, but log the error
        }
      } catch (sheetError) {
        console.error('Error sending to Google Sheets:', sheetError)
        // Continue even if Google Sheets fails
      }
    } else {
      console.warn('GOOGLE_SCRIPT_URL not configured')
    }

    // Log the submission
    console.log('Form submission:', {
      name,
      email,
      phone: phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'), // Mask middle digits
      interest,
      kakaoConsent,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: '신청이 완료되었습니다!'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다' },
      { status: 500 }
    )
  }
}
