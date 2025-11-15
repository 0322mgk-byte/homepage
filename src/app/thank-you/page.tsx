'use client'

import { useEffect, useState } from 'react'
import Button from '@/components/Button'

export default function ThankYouPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const downloadResource = (resourceName: string) => {
    // In production, this would trigger actual file downloads
    alert(`${resourceName} 다운로드가 시작됩니다!`)
  }

  return (
    <main className="min-h-screen bg-dark-bg flex items-center justify-center px-4">
      <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Success Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/20 rounded-full mb-6">
            <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">축하합니다!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            무료 비밀특강 신청이 완료되었습니다
          </p>
          <p className="text-gray-400">
            입력하신 이메일로 특강 안내가 발송됩니다
          </p>
        </div>

        {/* What's Next */}
        <div className="bg-dark-card border border-dark-border rounded-2xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6">
            다음 단계
          </h2>

          <div className="space-y-6 text-left max-w-2xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-200 mb-1">이메일을 확인하세요</h3>
                <p className="text-gray-400 text-sm">
                  5분 이내에 특강 일정과 참여 링크가 발송됩니다
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-200 mb-1">무료 자료를 다운로드하세요</h3>
                <p className="text-gray-400 text-sm">
                  아래 버튼을 클릭해서 글쓰기 템플릿과 체크리스트를 받아가세요
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-200 mb-1">특강 날짜를 캘린더에 추가하세요</h3>
                <p className="text-gray-400 text-sm">
                  놓치지 않도록 미리 일정을 등록해두세요
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Free Resources */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-4">
            🎁 무료 자료 다운로드
          </h2>
          <p className="text-gray-400 mb-8">
            특강 전에 미리 살펴보세요!
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <Button
              variant="primary"
              onClick={() => downloadResource('글쓰기 템플릿 3종')}
            >
              📝 글쓰기 템플릿 3종
            </Button>
            <Button
              variant="secondary"
              onClick={() => downloadResource('수익화 체크리스트')}
            >
              📊 수익화 체크리스트
            </Button>
            <Button
              variant="outline"
              onClick={() => downloadResource('스토리텔링 가이드')}
            >
              📚 스토리텔링 가이드
            </Button>
          </div>
        </div>

        {/* Social Share */}
        <div className="text-gray-400 mb-8">
          <p className="mb-4">친구에게도 공유해보세요!</p>
          <div className="flex gap-4 justify-center">
            <button className="w-12 h-12 bg-dark-card border border-dark-border rounded-full flex items-center justify-center hover:border-primary/50 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </button>
            <button className="w-12 h-12 bg-dark-card border border-dark-border rounded-full flex items-center justify-center hover:border-primary/50 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
              </svg>
            </button>
            <button className="w-12 h-12 bg-dark-card border border-dark-border rounded-full flex items-center justify-center hover:border-primary/50 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm3.1 7.9h-1.84c-.37 0-.62.2-.62.67v1.3h2.46l-.34 2.5h-2.1v7.25h-2.6v-7.25h-2.1v-2.5h2.1v-1.5c0-2.1 1.3-3.2 3.1-3.2h1.94v2.74z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>메인으로 돌아가기</span>
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-dark-card border border-dark-border rounded-xl">
          <p className="text-sm text-gray-400">
            💌 이메일이 도착하지 않았나요? 스팸 메일함을 확인해주세요.<br />
            문의사항이 있으시면 <a href="mailto:support@example.com" className="text-primary hover:underline">support@example.com</a>으로 연락주세요.
          </p>
        </div>
      </div>
    </main>
  )
}
