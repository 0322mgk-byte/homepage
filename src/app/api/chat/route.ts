import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: '메시지를 입력해주세요.' },
        { status: 400 }
      )
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'API 키가 설정되지 않았습니다.' },
        { status: 500 }
      )
    }

    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

    // System instruction for the chatbot
    const systemInstruction = `당신은 "돈버는 글쓰기 무료 비밀특강"의 친절한 AI 어시스턴트입니다.

주요 역할:
- 특강에 대한 궁금한 점을 상세히 안내합니다
- 글쓰기로 수익을 내는 방법에 대해 조언합니다
- 특강 신청을 권장하고 도와줍니다

특강 정보:
- 주제: 단 3일 만에 독자를 사로잡고 수익을 만드는 글쓰기 비법
- 혜택: 무료 특강, 실전 템플릿 제공, 1:1 피드백
- 대상: 블로그, 뉴스레터, 전자책, SNS 콘텐츠 작성자

답변 스타일:
- 친근하고 따뜻한 톤으로 대화합니다
- 간결하고 명확하게 답변합니다
- 질문자의 관심사를 파악하고 맞춤형 조언을 제공합니다
- 항상 긍정적이고 격려하는 태도를 유지합니다`

    // Build chat history for context
    const chatHistory = history?.map((msg: { role: string; content: string }) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }],
    })) || []

    const chat = model.startChat({
      history: chatHistory,
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    })

    const result = await chat.sendMessage(systemInstruction + '\n\n' + message)
    const response = await result.response
    const text = response.text()

    return NextResponse.json({ message: text })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: '응답 생성 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
