import Hero from '@/components/Hero'
import Story from '@/components/Story'
import CTA from '@/components/CTA'
import SocialProof from '@/components/SocialProof'
import Form from '@/components/Form'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Top CTA */}
      <Hero />

      {/* First CTA */}
      <CTA variant="top" />

      {/* Story Section (Problem-Solution-Authority-Benefits) */}
      <Story />

      {/* Second CTA */}
      <CTA variant="middle" />

      {/* Social Proof Section */}
      <SocialProof />

      {/* Form Section */}
      <Form />

      {/* Final CTA */}
      <CTA variant="bottom" />

      {/* Footer */}
      <footer className="bg-dark-card border-t border-dark-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* About */}
              <div>
                <h3 className="font-bold text-gray-200 mb-4">돈버는 글쓰기</h3>
                <p className="text-sm text-gray-400">
                  평범한 글쓰기를 수익으로 만드는 실전 전략을 알려드립니다.
                </p>
              </div>

              {/* Links */}
              <div>
                <h3 className="font-bold text-gray-200 mb-4">바로가기</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="#story-section" className="hover:text-primary transition-colors">
                      특강 소개
                    </a>
                  </li>
                  <li>
                    <a href="#form-section" className="hover:text-primary transition-colors">
                      신청하기
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-primary transition-colors">
                      개인정보 처리방침
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-bold text-gray-200 mb-4">문의</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="mailto:support@example.com" className="hover:text-primary transition-colors">
                      support@example.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:02-1234-5678" className="hover:text-primary transition-colors">
                      02-1234-5678
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-dark-border text-center text-sm text-gray-500">
              <p>© 2025 돈버는 글쓰기. All rights reserved.</p>
              <p className="mt-2">
                Built with Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
