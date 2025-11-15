export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalEvent',
    name: '돈버는 글쓰기 무료 비밀특강',
    description: '단 3일 만에 독자를 사로잡고 수익을 만드는 글쓰기 비법. 유튜브 수익화, 스토리텔링 쇼츠 마스터.',
    image: 'https://donwriting.com/og-image.png',
    organizer: {
      '@type': 'Organization',
      name: '돈버는 글쓰기',
      url: 'https://donwriting.com',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KRW',
      availability: 'https://schema.org/InStock',
    },
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'VirtualLocation',
      url: 'https://donwriting.com',
    },
  }

  const courseData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: '돈버는 글쓰기 무료 비밀특강',
    description: '평범한 글쓰기가 돈이 되는 순간을 경험하세요. 누적 수강생 1,000명+, 평균 수익 증가율 300%',
    provider: {
      '@type': 'Organization',
      name: '돈버는 글쓰기',
      url: 'https://donwriting.com',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'KRW',
    },
    educationalLevel: '초급-중급',
    coursePrerequisites: '없음',
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        courseMode: 'online',
        courseWorkload: 'P3D',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseData) }}
      />
    </>
  )
}
