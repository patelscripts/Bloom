// src/components/Testimonials.jsx
// Customer testimonials with a central quote card and surrounding avatars

// Testimonials data
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Bloom Studio completely transformed our brand. The team was thoughtful, creative, and delivered beyond our expectations. We saw a 40% increase in inquiries within the first month!',
    name: 'Sarah Johnson',
    role: 'Founder, Verdant Co.',
    avatar: 'https://i.pravatar.cc/80?img=47',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'Working with Bloom was a breath of fresh air. They truly listened and turned our messy ideas into a clean, beautiful identity. 10/10 would recommend to any founder.',
    name: 'Marcus Chen',
    role: 'CEO, Spark Labs',
    avatar: 'https://i.pravatar.cc/80?img=68',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'The new website they built for us has been our best investment yet. Professional, fast, and gorgeous — our clients constantly compliment it.',
    name: 'Priya Patel',
    role: 'Director, Studio Verve',
    avatar: 'https://i.pravatar.cc/80?img=23',
    rating: 5,
  },
]

// Surrounding decorative avatars (appear around the card)
const SIDE_AVATARS = [
  { id: 10, src: 'https://i.pravatar.cc/80?img=3',  position: 'top-0 left-0' },
  { id: 11, src: 'https://i.pravatar.cc/80?img=15', position: 'top-0 right-0' },
  { id: 12, src: 'https://i.pravatar.cc/80?img=33', position: 'bottom-0 left-8' },
  { id: 13, src: 'https://i.pravatar.cc/80?img=60', position: 'bottom-0 right-8' },
]

import { useState } from 'react'

function Testimonials() {
  // Track which testimonial is currently shown
  const [activeIndex, setActiveIndex] = useState(0)
  const current = TESTIMONIALS[activeIndex]

  return (
    <section className="py-20 px-6 bg-[#f5f0e8] overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ───────────────────────────────────── */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#f4a7b9] uppercase mb-3">
            — Testimonials
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2d2d2d] leading-tight">
            What our{' '}
            <span className="highlight-green">customers</span>
            {' '}say About{' '}
            <span className="underline-yellow">Us</span>
          </h2>
        </div>

        {/* ── Testimonial card + surrounding avatars ────────────── */}
        <div className="relative max-w-3xl mx-auto">

          {/* Decorative floating avatars around the card */}
          {SIDE_AVATARS.map((av) => (
            <img
              key={av.id}
              src={av.src}
              alt="Customer"
              className={`absolute hidden md:block w-12 h-12 rounded-full border-2 border-white shadow-md object-cover animate-float ${av.position}`}
            />
          ))}

          {/* ── Central testimonial card ─────────────────────── */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-[#e0d8cc] text-center mx-4 md:mx-16">

            {/* Big quotation mark */}
            <div className="font-display text-6xl text-[#f5c842] leading-none mb-4 select-none">"</div>

            {/* Quote text */}
            <p className="font-body text-[#444] text-base md:text-lg leading-relaxed mb-8 italic">
              {current.quote}
            </p>

            {/* Reviewer info */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={current.avatar}
                alt={current.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#7eb89a]"
              />
              <div className="text-left">
                <p className="font-semibold text-[#2d2d2d] text-sm">{current.name}</p>
                <p className="text-xs text-[#999]">{current.role}</p>
                {/* Stars */}
                <div className="flex gap-0.5 mt-1">
                  {Array(current.rating).fill(0).map((_, i) => (
                    <span key={i} className="text-[#f5c842] text-xs">★</span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* ── Dot navigation ───────────────────────────────── */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 h-2.5 bg-[#7eb89a]'
                    : 'w-2.5 h-2.5 bg-[#ccc] hover:bg-[#aaa]'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
