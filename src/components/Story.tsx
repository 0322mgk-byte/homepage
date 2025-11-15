'use client'

export default function Story() {
  return (
    <section id="story-section" className="py-20 bg-dark-bg relative">
      <div className="container mx-auto px-4">
        {/* Problem Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gray-400">왜 열심히 써도</span>
              <br />
              <span className="text-gradient">돈이 안 될까요?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">😓</div>
              <h3 className="text-lg font-bold mb-2 text-gray-200">독자가 없어요</h3>
              <p className="text-gray-400 text-sm">열심히 쓰지만 조회수는 한 자릿수...</p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">🤔</div>
              <h3 className="text-lg font-bold mb-2 text-gray-200">뭘 써야 할지 모르겠어요</h3>
              <p className="text-gray-400 text-sm">매번 주제 선정부터 막막합니다</p>
            </div>
            <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary/50 transition-all">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-lg font-bold mb-2 text-gray-200">수익화가 안 돼요</h3>
              <p className="text-gray-400 text-sm">글은 쓰는데 돈으로 연결이 안 됩니다</p>
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <span className="text-primary font-semibold">해결책</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">스토리텔링 + 전략</span>
              <br />
              <span className="text-gray-300">이 답입니다</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-200">검증된 글쓰기 템플릿</h3>
                  <p className="text-gray-400">독자를 사로잡는 구조화된 스토리텔링 기법을 3일 만에 마스터하세요</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/30 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-gray-200">실전 수익화 전략</h3>
                  <p className="text-gray-400">블로그, 뉴스레터, 전자책 등 다양한 채널로 수익을 만드는 방법</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Authority Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-dark-card to-dark-bg border border-dark-border rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">검증된 전문가</span>가 알려드립니다
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">📚</div>
                <div className="text-2xl font-bold text-gray-200 mb-1">도서 출간</div>
                <div className="text-gray-400">베스트셀러 저자</div>
              </div>
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">1,000+</div>
                <div className="text-2xl font-bold text-gray-200 mb-1">누적 수강생</div>
                <div className="text-gray-400">만족도 98%</div>
              </div>
              <div className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">300%</div>
                <div className="text-2xl font-bold text-gray-200 mb-1">평균 수익 증가</div>
                <div className="text-gray-400">실질적 결과 보장</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
              <span className="text-accent font-semibold">특별 혜택</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gray-300">무료 특강 신청 시</span>
              <br />
              <span className="text-gradient">이런 것들을 드려요</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative bg-dark-card border-2 border-primary/30 rounded-xl p-6 overflow-hidden group hover:border-primary transition-all">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                무료
              </div>
              <div className="text-3xl mb-4">📝</div>
              <h3 className="text-lg font-bold mb-2 text-gray-200">글쓰기 템플릿 3종</h3>
              <p className="text-gray-400 text-sm">바로 사용 가능한 실전 템플릿</p>
            </div>

            <div className="relative bg-dark-card border-2 border-accent/30 rounded-xl p-6 overflow-hidden group hover:border-accent transition-all">
              <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                무료
              </div>
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-bold mb-2 text-gray-200">수익화 체크리스트</h3>
              <p className="text-gray-400 text-sm">단계별 실행 가이드 PDF</p>
            </div>

            <div className="relative bg-dark-card border-2 border-primary/30 rounded-xl p-6 overflow-hidden group hover:border-primary transition-all">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                선착순 50명
              </div>
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-bold mb-2 text-gray-200">1:1 피드백 기회</h3>
              <p className="text-gray-400 text-sm">전문가의 맞춤 조언</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
