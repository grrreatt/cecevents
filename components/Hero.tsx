export default function Hero() {
  return (
    <section className="relative py-[var(--space-128)] md:py-[var(--space-160)] border-b border-[var(--border-color)]">
      <div className="mx-auto w-full max-w-[1200px] px-[var(--space-24)]">
        <div className="max-w-[840px]">
          <div className="mb-[var(--space-16)] text-[12px] leading-[18px] tracking-[0.08em] uppercase text-[color:var(--color-text-muted)]">
            India's Premier Event Registration Partner
          </div>
          <h1 className="mb-[var(--space-16)] text-[56px] leading-[64px] font-semibold tracking-[-0.02em] text-[color:var(--color-text)]">
            Transform every event experience
          </h1>
          <p className="mb-[var(--space-32)] text-[18px] leading-[28px] text-[color:var(--color-text-muted)] max-w-[68ch]">
            Seamless on-site registration, clear operations, and reliable execution for conferences across India.
          </p>
          <div className="flex flex-wrap gap-[var(--space-16)]">
            <a href="/contact" className="inline-flex items-center px-[20px] py-[12px] rounded-[8px] bg-[color:var(--color-brand)] text-white text-[14px] leading-[22px] font-semibold">
              Start your event
            </a>
            <a href="/services" className="inline-flex items-center px-[20px] py-[12px] rounded-[8px] border border-[var(--border-color)] text-[14px] leading-[22px] font-semibold text-[color:var(--color-text)]">
              Explore services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
