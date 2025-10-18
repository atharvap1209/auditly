import React from 'react'

export const HowItWorks = () => (
  <section id="how-it-works" className="py-16 border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="text-2xl md:text-3xl font-bold">From CSV to auditor‑ready timeline</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-5">
        <div className="p-4 border rounded-lg">
          <img src="/assets/mock-upload.svg" alt="Upload CSV" className="mb-3" />
          <h3 className="font-semibold">Upload</h3>
          <p className="text-slate-600">Drop in your HR/payroll CSV. Use our sample if needed.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img src="/assets/mock-timeline.svg" alt="Detect changes" className="mb-3" />
          <h3 className="font-semibold">Detect</h3>
          <p className="text-slate-600">We identify hires, terminations, salary/title changes, and risk flags.</p>
        </div>
        <div className="p-4 border rounded-lg">
          <img src="/assets/mock-export.svg" alt="Export timeline" className="mb-3" />
          <h3 className="font-semibold">Export</h3>
          <p className="text-slate-600">One shareable timeline (CSV today; PDF planned).</p>
        </div>
      </div>
    </div>
  </section>
)

export const Outcomes = () => (
  <section className="py-16 border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="text-2xl md:text-3xl font-bold">What changed, when, and why — automatically</h2>
      <ul className="mt-3 list-disc list-inside text-slate-700 space-y-2">
        <li>Cut audit prep from days to minutes</li>
        <li>One source of truth for HR changes</li>
        <li>Evidence auditors can verify quickly</li>
      </ul>
    </div>
  </section>
)

export const Features = () => (
  <section className="py-16 border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-4 gap-4">
      <article className="p-4 border rounded-lg">
        <h3 className="font-semibold">Change detection</h3>
        <p className="text-slate-600">Track salary, title, department, status, and events with diffs.</p>
      </article>
      <article className="p-4 border rounded-lg">
        <h3 className="font-semibold">Risk flags</h3>
        <p className="text-slate-600">Backdated edits, outliers, and missing approver.</p>
      </article>
      <article className="p-4 border rounded-lg">
        <h3 className="font-semibold">Diffs & justifications</h3>
        <p className="text-slate-600">Side‑by‑side old → new with who/when.</p>
      </article>
      <article className="p-4 border rounded-lg">
        <h3 className="font-semibold">Export center</h3>
        <p className="text-slate-600">CSV today; PDF planned.</p>
      </article>
    </div>
  </section>
)

export const Trust = () => (
  <section className="py-10">
    <div className="max-w-6xl mx-auto px-5">
      <div className="text-center text-slate-600 border border-dashed rounded-lg p-3">CSV uploads only · Read‑only · SOC 2‑friendly</div>
    </div>
  </section>
)

export const Security = () => (
  <section id="security" className="py-16 border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="text-2xl md:text-3xl font-bold">Security & compliance, in plain English</h2>
      <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
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
  <section className="py-16 border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="text-2xl md:text-3xl font-bold">See the export your auditor will receive</h2>
      <p className="text-slate-700 mt-1">Download a redacted sample export to evaluate the structure.</p>
      <a className="inline-block mt-3 rounded-lg border px-4 py-2 font-semibold hover:bg-slate-50" href="/sample-export.csv" download>
        Download sample timeline (CSV)
      </a>
    </div>
  </section>
)

export const FAQ = () => (
  <section id="faq" className="py-16">
    <div className="max-w-6xl mx-auto px-5">
      <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
      <div className="mt-3 space-y-3">
        <details className="border rounded-lg p-3">
          <summary className="font-semibold">What CSV format do you support?</summary>
          <p className="text-slate-700 mt-2">We provide a simple template and work with common HR/payroll exports.</p>
        </details>
        <details className="border rounded-lg p-3">
          <summary className="font-semibold">How do you define a backdated edit?</summary>
          <p className="text-slate-700 mt-2">When an edit date is later than the effective date beyond a small tolerance window.</p>
        </details>
        <details className="border rounded-lg p-3">
          <summary className="font-semibold">Do you store PII?</summary>
          <p className="text-slate-700 mt-2">We process necessary fields, encrypt data in transit/at rest, and delete on request.</p>
        </details>
        <details className="border rounded-lg p-3">
          <summary className="font-semibold">Do you integrate directly with HR systems?</summary>
          <p className="text-slate-700 mt-2">Today, CSV uploads for speed and simplicity. Integrations may come later.</p>
        </details>
        <details className="border rounded-lg p-3">
          <summary className="font-semibold">What export formats are available?</summary>
          <p className="text-slate-700 mt-2">CSV today; PDF is planned.</p>
        </details>
      </div>
    </div>
  </section>
)

export const FinalCTA = () => (
  <section className="py-16">
    <div className="max-w-6xl mx-auto px-5 md:flex items-center justify-between gap-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold">Ready to stop scrambling for audits?</h2>
        <p className="text-slate-700 mt-1">Book a quick call or join Early Access to try it first.</p>
      </div>
      <div className="mt-4 md:mt-0 flex gap-3">
        <a className="inline-block rounded-lg bg-sky-500 text-white px-4 py-3 font-semibold shadow-sm hover:bg-sky-600" href="https://calendar.app.google/cErANmim3yj6nuAB9" target="_blank" rel="noopener">
          Book a 15‑min Call
        </a>
        <a className="inline-block rounded-lg border px-4 py-3 font-semibold hover:bg-slate-50" href="#top">Back to top</a>
      </div>
    </div>
  </section>
)
