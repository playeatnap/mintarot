'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const features = [{"icon":"🎴","title":"네온 테마 디자인","desc":"독특한 네온 비주얼로 방문자의 시선을 사로잡고 전문적인 브랜드 이미지를 구축합니다. 타로의 신비로운 분위기를 현대적으로 재해석한 디자인을 제공합니다."},{"icon":"📱","title":"모바일 최적화","desc":"어디서나 쉽게 접속하고 예약할 수 있는 반응형 웹사이트를 제공합니다. 카페 방문객부터 행사 참가자까지 모든 고객의 모바일 환경에 완벽하게 대응합니다."},{"icon":"🗓️","title":"실시간 예약 시스템","desc":"네이버 예약, 당근마켓 등 외부 플랫폼 의존 없이 나만의 사이트에서 직접 예약을 관리하세요. 원하는 시간대와 서비스를 설정하면 고객이 바로 예약할 수 있습니다."},{"icon":"🖼️","title":"포트폴리오 갤러리","desc":"과거 진행한 타로 행사, 카페 내부, 리딩 스타일을 사진과 글로 풍부하게展示하세요. 시각적 신뢰도를 높여 고객의 결심을 돕습니다."},{"icon":"✨","title":"SNS 연동 & 관리","desc":"인스타그램, 블로그 등 주요 SNS 콘텐츠를 홈페이지에 자동으로 연동하여 관리 부담을 줄입니다. 모든 채널의 방문자를 하나의 허브로 모을 수 있습니다."},{"icon":"🔮","title":"맞춤형 서비스 소개","desc":"개인 타로 리딩, 그룹 워크숍, 카페 출장, 기업 행사 등 다양한 서비스 유형을 체계적으로 소개하는 페이지를 쉽게 구성할 수 있습니다."}]
  const stats = [{"value":"300%+","label":"평균 예약 증가율"},{"value":"24시간","label":"실시간 문의 접수"},{"value":"100+","label":"활성 타로 리더"},{"value":"4.8/5","label":"평균 고객 만족도"}]
  const steps = [{"step":"1","title":"템플릿 선택","desc":"네온을 포함한 여러 타로 테마 중 나의 스타일에 맞는 디자인을 선택합니다."},{"step":"2","title":"내용 채우기","desc":"드래그 앤 드롭으로 내 사진, 소개글, 서비스, 예약 설정 등을 쉽게 입력합니다."},{"step":"3","title":"도메인 연결 & 공개","desc":"원하는 주소(도메인)를 연결하고, SNS와 명함에 홈페이지를 알려 문의를 받아보세요."}]
  const testimonials = [{"content":"인스타 DM으로 오는 '예약 가능하신가요?' 질문에 지쳐있었는데, mintarot 홈페이지를 만든 후 모든 예약과 문의가 체계적으로 정리되니 업무 효율이 정말 좋아졌어요. 전문성도 훨씬 올라간 느낌입니다.","author":"김별","role":"프리랜서 타로 리더","company":""},{"content":"카페에서 타로 이벤트를 자주 기획하는데, 매번 포스터와 링크를 새로 만드는 게 번거로웠어요. 이제 상시 운영되는 홈페이지가 있어 이벤트마다 간단히 업데이트만 하면 되어 정말 편리합니다. 고객들도 '여기서 보면 되겠구나' 하며 편해하세요.","author":"이솔","role":"타로 카페 매니저","company":"카페 미르"},{"content":"코딩은 전혀 모르지만, mintarot의 가이드 덕분에 생각보다 쉽게 멋진 홈페이지를 만들 수 있었습니다. 네온 디자인이 독특해서 지인들에게도 많이 칭찬받았고, 덕분에 새로운 기업 워크숍 문의까지 들어왔습니다.","author":"최연","role":"행사 기획자","company":"연희컴퍼니"}]
  const faqs = [{"q":"코딩 지식이 전혀 없어도 만들 수 있나요?","a":"네, 전혀 문제없습니다. mintarot은 드래그 앤 드롭 방식의 직관적인 편집기를 제공하여, 글쓰기나 프레젠테이션 만들듯이 쉽게 홈페이지를 구성할 수 있습니다."},{"q":"도메인(주소)은 별도로 구매해야 하나요?","a":"기본적으로 '내이름.mintarot.kr' 형식의 무료 서브도메인을 제공합니다. 만약 '내카페.com' 같은 개인 도메인을 원하시면 별도로 구매 후 간단한 설정으로 연결이 가능합니다."},{"q":"예약 관리와 결제는 어떻게 되나요?","a":"홈페이지 내에서 예약 가능한 시간과 서비스를 설정하면, 고객이 직접 날짜와 시간을 선택해 예약할 수 있습니다. 결제는 현재 계좌이체 안내 위주로 구성 가능하며, 간편결제 연동은 준비 중에 있습니다."},{"q":"디자인을 내가 원하는 대로 바꿀 수 있나요?","a":"선택한 네온 테마 내에서 색상, 폰트, 레이아웃 등을 자유롭게 커스터마이징할 수 있습니다. 또한, 자신의 로고와 이미지를 활용하여 브랜드 고유의 느낌을 충분히 담을 수 있습니다."}]
  const trustLogos = ["타로카페 달","행사기획사 별","프리랜서 타로리더 모임","명상&힐링센터"]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {/* Hero Section */}
      <section className="pt-20 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: 'var(--color-bg-secondary)', color: 'var(--color-text-secondary)' }}
          >
            타로 전문가 홈페이지 솔루션
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            타로 리더를 위한
            <br />
            <span style={{ color: 'var(--color-accent)' }}>네온 빛나는 홈페이지</span>
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            복잡한 코딩 없이, 당신의 타로 서비스 매력과 전문성을 표현하며 예약 문의가 자연스럽게 들어오는 체계적인 온라인 허브를 만드세요.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-16">
            <Link
              href="/signup"
              className="px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105"
              style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
            >
              무료로 시작하기
            </Link>
            <Link
              href="/login"
              className="px-8 py-4 rounded-xl text-lg font-semibold transition-all border"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
            >
              로그인
            </Link>
          </div>

          {/* Trust Logos */}
          <div className="pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
            <p className="text-sm mb-4" style={{ color: 'var(--color-text-secondary)' }}>신뢰받는 기업들이 선택했습니다</p>
            <div className="flex justify-center gap-8 flex-wrap">
              {trustLogos.map((logo: string, i: number) => (
                <span key={i} className="text-lg font-semibold opacity-50">{logo}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">mintarot이 만들어낸 변화</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat: { value: string; label: string }, i: number) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--color-accent)' }}>{stat.value}</div>
                <div style={{ color: 'var(--color-text-secondary)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              모든 것이 준비된 전문가 홈페이지
            </h2>
            <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              타로 비즈니스에 꼭 필요한 기능들로 가득 채워 바로 사용할 수 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature: { icon: string; title: string; desc: string }, i: number) => (
              <div
                key={i}
                className="p-8 rounded-2xl transition-all hover:scale-105"
                style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
              >
                <span className="text-5xl mb-6 block">{feature.icon}</span>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">시작하는 방법</h2>
            <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              복잡한 과정 없이, 간단한 3단계로 전문 홈페이지를 오픈하세요.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step: { step: string; title: string; desc: string }, i: number) => (
              <div key={i} className="flex items-start gap-6">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0"
                  style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
                >
                  {step.step}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">타로 리더들이 말하는 mintarot</h2>
            <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              실제로 홈페이지를 운영하며 변화를 경험한 분들의 생생한 후기입니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item: { content: string; author: string; role: string; company: string }, i: number) => (
              <div
                key={i}
                className="p-8 rounded-2xl"
                style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
              >
                <p className="text-lg mb-6 leading-relaxed">"{item.content}"</p>
                <div>
                  <div className="font-bold">{item.author}</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {item.role}, {item.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">궁금한 점이 있으신가요?</h2>

          <div className="space-y-4">
            {faqs.map((faq: { q: string; a: string }, i: number) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-5 text-left font-semibold flex justify-between items-center"
                >
                  {faq.q}
                  <span className="text-2xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5" style={{ color: 'var(--color-text-secondary)' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div
          className="max-w-4xl mx-auto text-center p-12 rounded-3xl"
          style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
        >
          <h2 className="text-4xl font-bold mb-6">당신의 타로 비즈니스, 빛나게 할 준비가 되셨나요?</h2>
          <p className="text-xl mb-10" style={{ color: 'var(--color-text-secondary)' }}>
            지금 바로 시작하면, 복잡한 코딩 없이 오늘 당신만의 전문 홈페이지를 만들 수 있습니다.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/signup"
              className="px-10 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105"
              style={{ background: 'var(--color-accent)', color: 'var(--color-bg)' }}
            >
              무료로 시작하기
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 rounded-xl text-lg font-semibold transition-all border"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">mintarot</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                복잡한 코딩 없이, 당신의 타로 서비스 매력과 전문성을 표현하며 예약 문의가 자연스럽게 들어오는 체계적인 온라인 허브를 만드세요.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">서비스</h4>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <li><Link href="/features" className="hover:underline">기능</Link></li>
                <li><Link href="/pricing" className="hover:underline">가격</Link></li>
                <li><Link href="/docs" className="hover:underline">문서</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">회사</h4>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <li><Link href="/about" className="hover:underline">소개</Link></li>
                <li><Link href="/contact" className="hover:underline">문의</Link></li>
                <li><Link href="/careers" className="hover:underline">채용</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">법적 고지</h4>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                <li><Link href="/privacy" className="hover:underline">개인정보처리방침</Link></li>
                <li><Link href="/terms" className="hover:underline">이용약관</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 text-center text-sm" style={{ borderTop: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}>
            © {new Date().getFullYear()} mintarot. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
