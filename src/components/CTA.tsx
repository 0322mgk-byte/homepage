'use client'

import Button from './Button'

interface CTAProps {
  variant?: 'top' | 'middle' | 'bottom'
}

export default function CTA({ variant = 'middle' }: CTAProps) {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section')
    formSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const content = {
    top: {
      badge: "선착순 200명 한정",
      title: "지금 바로 글쓰기 마스터하기",
      subtitle: "3일 만에 수익화 글쓰기를 완전히 습득하세요",
      button: "무료 비밀특강 신청하기",
      urgent: false
    },
    middle: {
      badge: "100% 무료",
      title: "더 이상 망설이지 마세요",
      subtitle: "평범한 글쓰기가 돈이 되는 순간을 경험할 시간입니다",
      button: "지금 바로 글쓰기 마스터하기",
      urgent: false
    },
    bottom: {
      badge: "마감 임박",
      title: "놓치지 마세요!",
      subtitle: "오늘만 신청 가능한 특별한 기회입니다",
      button: "지금 신청하고 템플릿 3종 받기",
      urgent: true
    }
  }

  const currentContent = content[variant]

  return (
    <section className={`py-16 ${variant === 'bottom' ? 'bg-gradient-to-b from-dark-card to-dark-bg' : 'bg-dark-bg'}`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto rounded-2xl overflow-hidden ${
          currentContent.urgent
            ? 'bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-2 border-primary/50'
            : 'bg-gradient-to-r from-dark-card to-dark-bg border border-dark-border'
        }`}>
          <div className="p-8 md:p-12 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              {currentContent.urgent && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
              )}
              <span className="text-primary font-semibold text-sm">
                {currentContent.badge}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {currentContent.urgent ? (
                <span className="text-gradient animate-pulse">{currentContent.title}</span>
              ) : (
                <span className="text-gray-200">{currentContent.title}</span>
              )}
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              {currentContent.subtitle}
            </p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={scrollToForm}
                className={currentContent.urgent ? 'animate-bounce' : ''}
              >
                {currentContent.button}
              </Button>
            </div>

            {/* Benefits list for bottom CTA */}
            {variant === 'bottom' && (
              <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>글쓰기 템플릿 3종</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>수익화 체크리스트</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>1:1 피드백 (선착순)</span>
                </div>
              </div>
            )}

            {/* Timer for bottom CTA (static for now) */}
            {variant === 'bottom' && (
              <div className="mt-6 text-gray-500 text-sm">
                ⏰ 신청 마감까지 <span className="text-primary font-bold">24시간</span> 남았습니다
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
