'use client'

import ScrollExpandMedia from '@/components/ui/scroll-expand-media'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function Hero() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070"
      bgImageSrc="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070"
      title="단 3일 만에|독자를 사로잡고|수익을 만드는 글쓰기 비법"
      scrollToExpand="스크롤하여 더 알아보기 ↓"
      textBlend={true}
    >
      {/* Trust Indicators Section */}
      <section className="bg-dark-bg/50 backdrop-blur-sm rounded-3xl p-8 mb-12">
        <div className="group relative m-auto max-w-7xl">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:pr-6 md:border-dark-border mb-4 md:mb-0">
              <p className="text-center md:text-end text-sm text-gray-400">신뢰할 수 있는 교육</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)] w-full">
              <InfiniteSlider
                speedOnHover={20}
                speed={40}
                gap={112}>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-300">누적 수강생 1,000명+</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-300">평균 수익 증가율 300%</span>
                </div>

                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-gray-300">100% 무료 특강</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-2xl">📚</span>
                  <span className="text-sm font-semibold text-gray-300">베스트셀러 저자</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <span className="text-sm font-semibold text-gray-300">실전 수익화 전략</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <span className="text-sm font-semibold text-gray-300">3일 완성 커리큘럼</span>
                </div>
              </InfiniteSlider>

              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary/50 transition-all">
          <div className="text-4xl mb-4">🎁</div>
          <h3 className="text-xl font-bold mb-2 text-gray-200">선착순 200명 한정</h3>
          <p className="text-gray-400">지금 신청하시면 글쓰기 템플릿 3종 무료 제공</p>
        </div>

        <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-accent/50 transition-all">
          <div className="text-4xl mb-4">💰</div>
          <h3 className="text-xl font-bold mb-2 text-gray-200">평균 수익 50만원</h3>
          <p className="text-gray-400">첫 달부터 실제 수익 창출 가능</p>
        </div>

        <div className="bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary/50 transition-all">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-xl font-bold mb-2 text-gray-200">3일 완성</h3>
          <p className="text-gray-400">단 3일 만에 수익화 글쓰기 마스터</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-2xl p-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-primary text-sm font-semibold">오늘만 신청 가능</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-gradient">평범한 글쓰기가 돈이 되는 순간</span>
          <br />
          <span className="text-gray-200">지금 바로 경험하세요</span>
        </h2>

        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          누적 수강생 1,000명+, 평균 수익 증가율 300%의 검증된 커리큘럼
        </p>

        <button
          onClick={() => {
            const formSection = document.getElementById('form-section')
            formSection?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="bg-primary hover:bg-primary-dark text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg shadow-primary/50"
        >
          🎁 무료 비밀특강 신청하기
        </button>
      </section>
    </ScrollExpandMedia>
  )
}
