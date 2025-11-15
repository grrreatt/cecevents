export default function ContactSectionStatic() {
  return (
    <section className="py-[var(--space-128)] border-t border-[var(--border-color)]">
      <div className="mx-auto w-full max-w-[1200px] px-[var(--space-24)]">
        <header className="mb-[var(--space-32)]">
          <div className="text-[12px] leading-[18px] tracking-[0.08em] uppercase text-[color:var(--color-text-muted)] mb-[var(--space-12)]">Contact</div>
          <h2 className="text-[40px] leading-[48px] font-semibold tracking-[-0.02em] text-[color:var(--color-text)]">Let’s talk about your event</h2>
          <p className="mt-[var(--space-12)] text-[16px] leading-[26px] max-w-[72ch] text-[color:var(--color-text-muted)]">Share your city, dates, attendee volume, and on-site needs for a fast quote.</p>
        </header>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-[var(--space-16)]">
          <div className="flex flex-col gap-[var(--space-8)]">
            <label htmlFor="name" className="text-[12px] leading-[18px] uppercase tracking-[0.08em] text-[color:var(--color-text-muted)]">Name</label>
            <input id="name" name="name" type="text" className="h-[44px] px-[var(--space-12)] rounded-[8px] border border-[var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text)]" />
          </div>
          <div className="flex flex-col gap-[var(--space-8)]">
            <label htmlFor="phone" className="text-[12px] leading-[18px] uppercase tracking-[0.08em] text-[color:var(--color-text-muted)]">Phone</label>
            <input id="phone" name="phone" type="tel" className="h-[44px] px-[var(--space-12)] rounded-[8px] border border-[var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text)]" />
          </div>
          <div className="flex flex-col gap-[var(--space-8)] md:col-span-2">
            <label htmlFor="email" className="text-[12px] leading-[18px] uppercase tracking-[0.08em] text-[color:var(--color-text-muted)]">Email</label>
            <input id="email" name="email" type="email" className="h-[44px] px-[var(--space-12)] rounded-[8px] border border-[var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text)] w-full" />
          </div>
          <div className="flex flex-col gap-[var(--space-8)] md:col-span-2">
            <label htmlFor="message" className="text-[12px] leading-[18px] uppercase tracking-[0.08em] text-[color:var(--color-text-muted)]">Details</label>
            <textarea id="message" name="message" rows={6} className="p-[var(--space-12)] rounded-[8px] border border-[var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text)] w-full" />
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="inline-flex items-center px-[20px] py-[12px] rounded-[8px] bg-[color:var(--color-brand)] text-white text-[14px] leading-[22px] font-semibold">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
