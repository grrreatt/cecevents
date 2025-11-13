export default function AboutSectionStatic() {
  return (
    <section className="py-[var(--space-128)] border-b border-[var(--border-color)]">
      <div className="mx-auto w-full max-w-[1200px] px-[var(--space-24)] grid gap-[var(--space-32)] md:grid-cols-2 items-start">
        <header>
          <div className="text-[12px] leading-[18px] tracking-[0.08em] uppercase text-[color:var(--color-text-muted)] mb-[var(--space-12)]">About</div>
          <h2 className="text-[40px] leading-[48px] font-semibold tracking-[-0.02em] text-[color:var(--color-text)]">India's most trusted event registration partner</h2>
        </header>
        <div className="text-[16px] leading-[26px] text-[color:var(--color-text-muted)] space-y-[var(--space-16)] max-w-[74ch]">
          <p>Since 2014, we’ve transformed how conferences handle registrations. From AIIMS medical conferences to IIT tech fests, our technology and team have powered hundreds of events across 25+ Indian cities.</p>
          <p>We bring trained professionals, equipment, and a proven system that scales from 100 to 10,000+ attendees seamlessly.</p>
        </div>
      </div>
    </section>
  )
}
