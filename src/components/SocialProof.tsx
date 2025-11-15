'use client'

export default function SocialProof() {
  const testimonials = [
    {
      name: "김민지",
      role: "블로거",
      result: "첫 달 수익 50만원 달성",
      content: "글쓰기 구조만 바꿨는데 광고 수익이 10배 늘었어요. 특히 스토리텔링 기법이 정말 유용했습니다!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "이준호",
      role: "뉴스레터 운영",
      result: "구독자 1,000명 돌파",
      content: "3주 만에 구독자가 100명에서 1,000명으로! 템플릿 그대로 적용했더니 반응이 폭발적이었어요.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "박서연",
      role: "전자책 작가",
      result: "판매 100부 달성",
      content: "처음 써본 전자책이 2주 만에 100부 판매. 수익화 전략 덕분에 자신감이 생겼습니다.",
      rating: 5,
      avatar: "👩‍🎨"
    }
  ]

  const achievements = [
    {
      icon: "📈",
      metric: "98%",
      label: "수강생 만족도",
      color: "primary"
    },
    {
      icon: "💰",
      metric: "평균 50만원",
      label: "첫 달 수익",
      color: "accent"
    },
    {
      icon: "⚡",
      metric: "3일",
      label: "마스터 기간",
      color: "primary"
    },
    {
      icon: "🎯",
      metric: "1,000+",
      label: "성공 사례",
      color: "accent"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg to-dark-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <span className="text-primary font-semibold">수강생 후기</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">실제 수강생들의</span>
            <br />
            <span className="text-gray-300">생생한 변화</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            이론이 아닌 실전, 수강생들의 실제 성과를 확인하세요
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary/50 transition-all hover:transform hover:scale-105"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Result Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-4">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-primary text-sm font-semibold">{testimonial.result}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-gray-200">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-dark-card border border-dark-border rounded-xl hover:border-primary/50 transition-all"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className={`text-2xl md:text-3xl font-bold mb-1 ${
                  item.color === 'primary' ? 'text-primary' : 'text-accent'
                }`}>
                  {item.metric}
                </div>
                <div className="text-sm text-gray-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-6">신뢰할 수 있는 교육</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="text-gray-600 font-semibold">✓ 환불 보장</div>
            <div className="text-gray-600">|</div>
            <div className="text-gray-600 font-semibold">✓ 평생 수강</div>
            <div className="text-gray-600">|</div>
            <div className="text-gray-600 font-semibold">✓ 1:1 피드백</div>
          </div>
        </div>
      </div>
    </section>
  )
}
