// src/components/Newsletter.jsx
// Light-green background section with email subscription CTA

import { useState } from 'react'

function Newsletter() {
  // Track email input value
  const [email, setEmail] = useState('')
  // Track if user has subscribed (to show success message)
  const [subscribed, setSubscribed] = useState(false)

  // Handle form submission
  const handleSubscribe = () => {
    if (email.trim() && email.includes('@')) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Newsletter card with light green background ─────── */}
        <div className="bg-[#d4edda] rounded-3xl px-8 py-14 md:px-16 md:py-16 text-center relative overflow-hidden">

          {/* Decorative background circles */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#7eb89a]/20 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#f4a7b9]/20 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto">

            {/* Small label */}
            <span className="inline-block text-xs font-semibold tracking-widest text-[#4a8c6a] uppercase mb-4">
              — Stay in the loop
            </span>

            {/* Heading */}
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#2d2d2d] leading-tight mb-4">
              Subscribe to our{' '}
              <span className="underline-yellow">newsletter</span>
            </h2>

            {/* Description */}
            <p className="font-body text-sm text-[#555] leading-relaxed mb-8">
              Get design tips, brand inspiration, and studio updates delivered
              straight to your inbox — no spam, ever. Unsubscribe anytime.
            </p>

            {/* ── Email input + button ───────────────────────── */}
            {subscribed ? (
              /* Success state */
              <div className="flex items-center justify-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm w-fit mx-auto">
                <span className="text-[#7eb89a] text-lg">✓</span>
                <p className="text-sm font-medium text-[#2d2d2d]">You're subscribed! Welcome aboard 🎉</p>
              </div>
            ) : (
              /* Input state */
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                  placeholder="your@email.com"
                  className="flex-1 max-w-sm px-5 py-3 rounded-full border border-[#b2d8b2] bg-white text-sm text-[#2d2d2d] placeholder-[#aaa] focus:outline-none focus:ring-2 focus:ring-[#7eb89a] transition"
                />
                <button
                  onClick={handleSubscribe}
                  className="px-8 py-3 bg-[#2d2d2d] text-white text-sm font-semibold rounded-full hover:bg-[#7eb89a] transition-all duration-300 hover:scale-105 shadow-md whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>
            )}

            {/* Fine print */}
            <p className="text-xs text-[#888] mt-4">
              By subscribing you agree to our{' '}
              <a href="#" className="underline hover:text-[#2d2d2d]">Privacy Policy</a>.
              Unsubscribe at any time.
            </p>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Newsletter
