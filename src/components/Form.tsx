'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Button from './Button'
import { cn } from '@/lib/utils'

const formSchema = z.object({
  name: z.string().min(2, '이름은 최소 2글자 이상 입력해주세요'),
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  phone: z.string().regex(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/, '올바른 휴대폰 번호를 입력해주세요'),
  interest: z.string().optional(),
  kakaoConsent: z.coerce.boolean(),
})

type FormData = z.infer<typeof formSchema>

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      interest: '',
      kakaoConsent: false,
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        reset()
        // Redirect to thank you page after 2 seconds
        setTimeout(() => {
          window.location.href = '/thank-you'
        }, 2000)
      } else {
        alert('신청 중 오류가 발생했습니다. 다시 시도해주세요.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('신청 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <section id="form-section" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-dark-card border border-primary/30 rounded-2xl p-12">
              <div className="text-6xl mb-6">🎉</div>
              <h3 className="text-3xl font-bold text-gradient mb-4">신청이 완료되었습니다!</h3>
              <p className="text-gray-400 mb-4">감사 페이지로 이동합니다...</p>
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="form-section" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Form Header */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <span className="text-primary font-semibold">무료 신청</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">지금 바로</span>
              <br />
              <span className="text-gray-300">시작하세요</span>
            </h2>
            <p className="text-gray-400 text-lg">
              아래 정보를 입력하시면 무료 특강 신청이 완료됩니다
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="bg-dark-card border border-dark-border rounded-2xl p-8 md:p-10">
            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                이름 <span className="text-primary">*</span>
              </label>
              <input
                {...register('name')}
                type="text"
                id="name"
                className={cn(
                  "w-full px-4 py-3 bg-dark-bg border rounded-lg text-gray-200",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                  "transition-all duration-200",
                  errors.name ? "border-red-500" : "border-dark-border"
                )}
                placeholder="홍길동"
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                이메일 <span className="text-primary">*</span>
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className={cn(
                  "w-full px-4 py-3 bg-dark-bg border rounded-lg text-gray-200",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                  "transition-all duration-200",
                  errors.email ? "border-red-500" : "border-dark-border"
                )}
                placeholder="example@email.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-300 font-semibold mb-2">
                휴대폰 번호 <span className="text-primary">*</span>
              </label>
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                className={cn(
                  "w-full px-4 py-3 bg-dark-bg border rounded-lg text-gray-200",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                  "transition-all duration-200",
                  errors.phone ? "border-red-500" : "border-dark-border"
                )}
                placeholder="010-1234-5678"
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            {/* Interest Field */}
            <div className="mb-6">
              <label htmlFor="interest" className="block text-gray-300 font-semibold mb-2">
                관심 분야 <span className="text-gray-500 text-sm font-normal">(선택)</span>
              </label>
              <select
                {...register('interest')}
                id="interest"
                className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
              >
                <option value="">선택해주세요</option>
                <option value="blog">블로그</option>
                <option value="newsletter">뉴스레터</option>
                <option value="ebook">전자책</option>
                <option value="sns">SNS 콘텐츠</option>
              </select>
            </div>

            {/* Kakao Consent */}
            <div className="mb-8">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  {...register('kakaoConsent')}
                  type="checkbox"
                  className="mt-1 w-5 h-5 rounded border-dark-border bg-dark-bg text-primary focus:ring-2 focus:ring-primary"
                />
                <span className="text-sm text-gray-400">
                  카카오톡 알림 수신에 동의합니다 (특강 일정 및 자료 발송)
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="inline-block animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  처리 중...
                </span>
              ) : (
                '🎁 무료로 특강 신청하기'
              )}
            </Button>

            {/* Privacy Notice */}
            <p className="mt-6 text-xs text-gray-500 text-center">
              신청 시 <a href="#" className="text-primary hover:underline">개인정보 처리방침</a>에 동의하게 됩니다
            </p>

            {/* Trust Badges */}
            <div className="mt-6 flex justify-center items-center gap-4 text-xs text-gray-600">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>안전한 정보 보호</span>
              </div>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>스팸 발송 없음</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
