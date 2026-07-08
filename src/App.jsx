export default function App() {
  const details = [
    {
      label: 'Aso Ebi Colour',
      value: 'Dusty Teal Green',
      icon: (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 4.5V19.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: 'Package',
      value: 'Premium Lace & Gele',
      icon: (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 8.5L12 5L18 8.5L12 12L6 8.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M6 12.5L12 16L18 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: 'Price',
      value: '₦70,000',
      icon: (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3.5V20.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M16 7.5C16 5.84 14.21 4.5 12 4.5C9.79 4.5 8 5.84 8 7.5C8 11.5 16 10 16 14C16 15.66 14.21 17 12 17C9.79 17 8 15.66 8 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2F1E17] selection:bg-[#D8B36A]/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap');

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #FAF7F2;
          font-family: 'Manrope', sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .font-display {
          font-family: 'Cormorant Garamond', serif;
        }

        .section-label {
          letter-spacing: 0.42em;
        }

        .soft-card {
          background: rgba(255, 251, 246, 0.72);
          border: 1px solid rgba(216, 179, 106, 0.34);
          box-shadow: 0 18px 50px rgba(74, 46, 36, 0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .hero-shadow {
          box-shadow: 0 18px 34px rgba(74, 46, 36, 0.18), inset 0 1px 0 rgba(255,255,255,0.15);
        }

        .gold-divider {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.9rem;
        }

        .gold-divider::before,
        .gold-divider::after {
          content: '';
          height: 1px;
          width: 2.8rem;
          background: linear-gradient(90deg, rgba(216,179,106,0), rgba(216,179,106,0.9), rgba(216,179,106,0));
        }

        .fade-up {
          opacity: 0;
          transform: translateY(18px);
          animation: fadeUp .9s ease forwards;
        }

        .delay-1 { animation-delay: .08s; }
        .delay-2 { animation-delay: .16s; }
        .delay-3 { animation-delay: .24s; }
        .delay-4 { animation-delay: .32s; }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ornament {
          animation: floatSoft 8s ease-in-out infinite;
        }

        @keyframes floatSoft {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
      `}</style>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-[#D8B36A]/10 blur-3xl" />
          <div className="absolute -right-16 top-40 h-72 w-72 rounded-full bg-[#C96A2B]/10 blur-3xl" />
          <div className="absolute bottom-40 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#4A2E24]/4.5 blur-3xl" />
        </div>

        <svg className="ornament pointer-events-none absolute left-[8%] top-16 h-36 w-36 opacity-60 block" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 104C60 104 16 74 16 42C16 24 34 14 52 26C60 32 60 46 60 46C60 46 60 32 68 26C86 14 104 24 104 42C104 74 60 104 60 104Z" stroke="#D8B36A" strokeWidth="2" fill="none" />
          <path d="M46 38C46 28 54 22 60 24C66 22 74 28 74 38" stroke="#D8B36A" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        <svg className="ornament pointer-events-none absolute bottom-44 right-[9%] h-36 w-36 opacity-60 block" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 80L100 20" stroke="#D8B36A" strokeWidth="2" strokeLinecap="round" />
          <path d="M88 16L104 22L96 34" stroke="#D8B36A" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 78L12 92L24 86" stroke="#D8B36A" strokeWidth="2" strokeLinecap="round" />
          <path d="M28 56C32 42 44 34 58 36C70 38 80 48 82 58C84 70 76 82 62 90C48 98 32 94 28 80" stroke="#D8B36A" strokeWidth="2" fill="none" />
        </svg>

        <main className="relative mx-auto max-w-300 px-5 sm:px-6 lg:px-10">
          <section className="relative flex min-h-screen items-center justify-center py-16 sm:py-20">
            <div className="mx-auto w-full max-w-4xl text-center">
              <p className="fade-up section-label text-[11px] font-semibold uppercase text-[#C96A2B] sm:text-xs">
                Payment Details
              </p>

              <div className="fade-up delay-1 mt-6 flex justify-center text-[#D8B36A]">
                <div className="gold-divider text-xs">✧</div>
              </div>

              <h1 className="fade-up delay-2 font-display mx-auto mt-8 max-w-4xl text-[4rem] leading-[0.94] text-[#4A2E24] sm:text-[5.2rem] md:text-[6.4rem] lg:text-[6.8rem]">
                To Our Beautiful
                <span className="block text-[#C96A2B]">Aso Ebi</span>
                <span className="block">Ladies</span>
              </h1>

              <p className="fade-up delay-3 mx-auto mt-8 max-w-3xl text-base leading-8 text-[#4A2E24]/72 sm:text-lg">
                Thank you for choosing to celebrate one of the most special days of our lives with us. Your love, support, and presence mean more than words can express. We are truly grateful to have you share in this beautiful journey, and we can’t wait to celebrate together.
              </p>

              <div className="fade-up delay-4 mt-10">
                <a
                  href="#details"
                  className="hero-shadow inline-flex items-center justify-center gap-2 rounded-full border border-[#D8B36A]/45 bg-[#4A2E24] px-8 py-4 text-sm font-semibold uppercase tracking-[0.04em] text-[#FAF7F2] transition duration-300 hover:-translate-y-0.5 hover:bg-[#5B372C] focus:outline-none focus:ring-2 focus:ring-[#D8B36A]/50"
                >
                  View Aso Ebi Details
                  <span className="text-[#D8B36A]">✦</span>
                </a>
              </div>

              <div className="fade-up delay-4 mt-14 flex items-center justify-center gap-3 text-[#4A2E24]/55">
                <span className="text-xs uppercase tracking-[0.45em]">19</span>
                <span className="h-1 w-1 rounded-full bg-[#D8B36A]" />
                <span className="text-xs uppercase tracking-[0.45em]">November</span>
                <span className="h-1 w-1 rounded-full bg-[#D8B36A]" />
                <span className="text-xs uppercase tracking-[0.45em]">2026</span>
              </div>
            </div>
          </section>

          <section id="details" className="py-14 sm:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <p className="section-label text-[11px] font-semibold uppercase text-[#C96A2B] sm:text-xs">
                The Attire
              </p>
              <h2 className="font-display mt-4 text-5xl text-[#4A2E24] sm:text-6xl">Aso Ebi Details</h2>
              <div className="mt-5 flex justify-center text-[#D8B36A]">
                <div className="gold-divider text-xs">✧</div>
              </div>
            </div>

            <div className="soft-card mx-auto mt-12 max-w-5xl rounded-4xl p-6 sm:p-8 md:p-12">
              <div className="space-y-2">
                {details.map((item, index) => (
                  <div
                    key={item.label}
                    className={`${index !== 0 ? 'border-t border-[#D8B36A]/22' : ''} flex items-start gap-4 py-6 sm:gap-6 sm:py-8`}
                  >
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D8B36A]/40 bg-[#F4ECE0] text-[#7F5A45]">
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="section-label text-[11px] font-semibold uppercase text-[#7A6358]">
                          {item.label}
                        </p>

                        <p
                          className={`font-display font-bold leading-none ${
                            item.label === 'Price'
                              ? 'text-[#C96A2B] text-4xl sm:text-5xl md:text-6xl'
                              : 'text-[#4A2E24] text-3xl sm:text-4xl md:text-5xl'
                          }`}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-[#D8B36A]/22 pt-8 text-center">
                <a
                  href="#payment"
                  className="hero-shadow inline-flex items-center justify-center rounded-full border border-[#D8B36A]/45 bg-[#4A2E24] px-8 py-4 text-sm font-semibold uppercase tracking-[0.04em] text-[#FAF7F2] transition duration-300 hover:-translate-y-0.5 hover:bg-[#5B372C]"
                >
                  Continue to Payment
                </a>
              </div>
            </div>
          </section>

          <section id="payment" className="py-14 sm:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <p className="section-label text-[11px] font-semibold uppercase text-[#C96A2B] sm:text-xs">
                Secure Your Aso Ebi
              </p>
              <h2 className="font-display mt-4 text-5xl text-[#4A2E24] sm:text-6xl">Payment Details</h2>
              <div className="mt-5 flex justify-center text-[#D8B36A]">
                <div className="gold-divider text-xs">✧</div>
              </div>
            </div>

            <div className="soft-card relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-4xl p-6 sm:p-8 md:p-12">
              <div className="pointer-events-none absolute right-10 top-8 h-36 w-36 rounded-full bg-[#D8B36A]/18 blur-3xl" />

              <div className="relative grid gap-8 md:grid-cols-2 md:gap-10">
                <div className="space-y-7">
                  <div>
                    <p className="section-label text-[11px] font-semibold uppercase text-[#C96A2B]">Bank</p>
                    <p className="font-display mt-3 text-4xl leading-tight text-[#4A2E24] sm:text-[3rem]">Moniepoint MFB</p>
                  </div>

                  <div>
                    <p className="section-label text-[11px] font-semibold uppercase text-[#C96A2B]">Account Number</p>
                    <p className="font-display mt-4 break-all text-[2.7rem] leading-none tracking-[0.08em] text-[#4A2E24] sm:text-[4rem] md:text-[4.4rem]">
                      7038971582
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-8">
                  <div>
                    <p className="section-label text-[11px] font-semibold uppercase text-[#C96A2B]">Account Name</p>
                    <p className="font-display mt-3 text-4xl leading-tight text-[#4A2E24] sm:text-[3rem]">
                      Ibrahim Oluwagbemi
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => navigator.clipboard?.writeText('7038971582')}
                      className="hero-shadow inline-flex items-center justify-center gap-3 rounded-full border border-[#D8B36A]/45 bg-[#4A2E24] px-8 py-4 text-sm font-semibold uppercase tracking-[0.04em] text-[#FAF7F2] transition duration-300 hover:-translate-y-0.5 hover:bg-[#5B372C] focus:outline-none focus:ring-2 focus:ring-[#D8B36A]/50"
                    >
                      <svg className="h-4.5 w-4.5 text-[#D8B36A]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.7" />
                        <path d="M6 15H5C3.9 15 3 14.1 3 13V5C3 3.9 3.9 3 5 3H13C14.1 3 15 3.9 15 5V6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                      </svg>
                      Copy Account Number
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-9 text-[#4A2E24]/72 sm:text-lg">
              Kindly make your payment using the account details above and send your proof of payment for confirmation. Thank you for your love and support.
            </p>
          </section>

          <section className="py-20 sm:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <p className="section-label text-[11px] font-semibold uppercase text-[#C96A2B] sm:text-xs">
                A Heartfelt Note
              </p>
              <h2 className="font-display mt-4 text-5xl italic text-[#4A2E24] sm:text-6xl md:text-7xl">
                With Love &amp; Appreciation
              </h2>
              <div className="mt-5 flex justify-center text-[#D8B36A]">
                <div className="gold-divider text-xs">✧</div>
              </div>

              <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-9 text-[#4A2E24]/72 sm:text-lg">
                Thank you for being part of our love story. Your friendship, prayers, encouragement, and support mean the world to us. We sincerely appreciate your willingness to celebrate this special occasion with us and look forward to making unforgettable memories together.
              </p>

              <div className="mt-14 flex justify-center text-[#D8B36A]">
                <div className="gold-divider text-xs">✧</div>
              </div>
            </div>
          </section>
        </main>

        <footer className="px-5 pb-12 text-center sm:px-6 sm:pb-16">
          <p className="section-label text-[11px] font-semibold uppercase text-[#C96A2B]">With Love,</p>
          <p className="font-display mt-5 text-5xl italic leading-none text-[#4A2E24] sm:text-6xl md:text-7xl">
            Motunrayo &amp; Ayomide
          </p>

          <div className="mt-9 flex items-center justify-center gap-5 text-[#D8B36A]">
            <span className="h-px w-16 bg-[#D8B36A]/80 sm:w-20" />
            <p className="font-display text-2xl tracking-[0.18em] text-[#6D5548] sm:text-3xl">19 November 2026</p>
            <span className="h-px w-16 bg-[#D8B36A]/80 sm:w-20" />
          </div>
        </footer>
      </div>
    </div>
  );
}
