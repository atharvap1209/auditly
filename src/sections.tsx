import React from 'react'

export const HowItWorks = () => (
  <section id="how-it-works" className="py-18 md:py-20">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="heading-premium heading-accent">From CSV to auditor‑ready timeline</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="p-5 card-premium">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/20 text-sky-300">
            {/* Upload icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l4 4h-3v5h-2V7H8l4-4z"/><path d="M5 13h14v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6z"/></svg>
          </div>
          <h3 className="font-semibold text-white">Upload</h3>
          <p className="text-slate-400">Drop in your HR/payroll CSV. Use our sample if needed.</p>
        </div>
        <div className="p-5 card-premium">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300">
            {/* Detect icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 14h-2v-2h2zm0-4h-2V6h2z"/></svg>
          </div>
          <h3 className="font-semibold text-white">Detect</h3>
          <p className="text-slate-400">We identify hires, terminations, salary/title changes, and risk flags.</p>
        </div>
        <div className="p-5 card-premium">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
            {/* Export icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l4 4h-3v7h-2V7H8l4-4z"/><path d="M5 14h14v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5z"/></svg>
          </div>
          <h3 className="font-semibold text-white">Export</h3>
          <p className="text-slate-400">One shareable timeline (CSV today; PDF planned).</p>
        </div>
      </div>
    </div>
  </section>
)

export const Outcomes = () => (
  <section className="py-18 md:py-20">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="heading-premium heading-accent">What changed, when, and why — automatically</h2>
      <ul className="mt-4 list-disc list-inside text-slate-300 space-y-2">
        <li>Cut audit prep from days to minutes</li>
        <li>One source of truth for HR changes</li>
        <li>Evidence auditors can verify quickly</li>
      </ul>
    </div>
  </section>
)

export const Features = () => (
  <section className="py-18 md:py-20">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="heading-premium heading-accent">Features</h2>
      <div className="grid md:grid-cols-4 gap-5 mt-6">
        <article className="p-5 card-premium">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/20 text-sky-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>
          </div>
          <h3 className="font-semibold text-white">Change detection</h3>
          <p className="text-slate-400">Track salary, title, department, status, and events with diffs.</p>
        </article>
        <article className="p-5 card-premium">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/20 text-amber-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
          </div>
          <h3 className="font-semibold text-white">Risk flags</h3>
          <p className="text-slate-400">Backdated edits, outliers, and missing approver.</p>
        </article>
        <article className="p-5 card-premium">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h10v2H4zm0 5h7v2H4z"/><path d="M17 11l4 3-4 3v-6z"/></svg>
          </div>
          <h3 className="font-semibold text-white">Diffs & justifications</h3>
          <p className="text-slate-400">Side‑by‑side old → new with who/when.</p>
        </article>
        <article className="p-5 card-premium">
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4h14v12H5z"/><path d="M19 18H5l-2 2h18l-2-2z"/></svg>
          </div>
          <h3 className="font-semibold text-white">Export center</h3>
          <p className="text-slate-400">CSV today; PDF planned.</p>
        </article>
      </div>
    </div>
  </section>
)

export const Trust = () => (
  <section className="py-12">
    <div className="max-w-6xl mx-auto px-5">
      <div className="text-center text-slate-300 card-premium border-dashed p-3">CSV uploads only · Read‑only · SOC 2‑friendly</div>
    </div>
  </section>
)

export const Security = () => (
  <section id="security" className="py-18 md:py-20">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="heading-premium heading-accent">Security & compliance, in plain English</h2>
      <ul className="mt-4 list-disc list-inside text-slate-300 space-y-1">
        <li>Read‑only processing of your CSV data</li>
        <li>Encryption in transit and at rest</li>
        <li>Role‑based access controls</li>
        <li>Data deletion on request</li>
        <li>Minimal retention; no production system writeback</li>
      </ul>
    </div>
  </section>
)

export const Demo = () => (
  <section className="py-18 md:py-20">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="heading-premium heading-accent">See the export your auditor will receive</h2>
      <p className="text-slate-300 mt-1">Download a redacted sample export to evaluate the structure.</p>
      <a className="inline-block mt-3 btn-ghost border px-4 py-2" href="/sample-export.csv" download>
        Download sample timeline (CSV)
      </a>
    </div>
  </section>
)

export const FAQ = () => (
  <section id="faq" className="py-18 md:py-20">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="heading-premium heading-accent">FAQ</h2>
      <div className="mt-3 space-y-3">
        <details className="card-premium p-3">
          <summary className="font-semibold text-white">What CSV format do you support?</summary>
          <p className="text-slate-300 mt-2">We provide a simple template and work with common HR/payroll exports.</p>
        </details>
        <details className="card-premium p-3">
          <summary className="font-semibold text-white">How do you define a backdated edit?</summary>
          <p className="text-slate-300 mt-2">When an edit date is later than the effective date beyond a small tolerance window.</p>
        </details>
        <details className="card-premium p-3">
          <summary className="font-semibold text-white">Do you store PII?</summary>
          <p className="text-slate-300 mt-2">We process necessary fields, encrypt data in transit/at rest, and delete on request.</p>
        </details>
        <details className="card-premium p-3">
          <summary className="font-semibold text-white">Do you integrate directly with HR systems?</summary>
          <p className="text-slate-300 mt-2">Today, CSV uploads for speed and simplicity. Integrations may come later.</p>
        </details>
        <details className="card-premium p-3">
          <summary className="font-semibold text-white">What export formats are available?</summary>
          <p className="text-slate-300 mt-2">CSV today; PDF is planned.</p>
        </details>
      </div>
    </div>
  </section>
)

export const FinalCTA = () => (
  <section className="py-18 md:py-20">
    <div className="max-w-6xl mx-auto px-5 md:flex items-center justify-between gap-6">
      <div>
        <h2 className="heading-premium heading-accent">Ready to stop scrambling for audits?</h2>
        <p className="text-slate-300 mt-1">Book a quick call or join Early Access to try it first.</p>
      </div>
      <div className="mt-4 md:mt-0 flex gap-3">
        <a className="btn-primary btn-glow" href="https://calendar.app.google/cErANmim3yj6nuAB9" target="_blank" rel="noopener">
          Book a 15‑min Call
        </a>
        <a className="btn-ghost border px-4 py-3" href="#top">Back to top</a>
      </div>
    </div>
  </section>
)
