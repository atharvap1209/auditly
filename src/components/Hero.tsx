import React from 'react'
import { track } from '../utils/analytics'

const BOOKING_URL = 'https://calendar.app.google/cErANmim3yj6nuAB9'

export function Hero({ onOpenEarly }: { onOpenEarly: () => void }) {
  return (
    <section className="py-18 md:py-20 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-7 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Turn HR exports into clean, auditor‑ready history in minutes
          </h1>
          <p className="mt-3 text-lg text-slate-700">
            Upload a CSV. We auto‑detect hires, terminations, salary/title updates, and backdated edits—then assemble a shareable audit timeline.
          </p>
          <ul className="mt-4 text-slate-600 list-disc list-inside space-y-1">
            <li>CSV uploads only. No integrations required.</li>
            <li>Works with Gusto, BambooHR, Paycom, QuickBooks, Deel.</li>
            <li>Built for SOC 2 and ISO prep.</li>
          </ul>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              className="inline-block rounded-lg bg-sky-500 text-white px-4 py-3 font-semibold shadow-sm hover:bg-sky-600"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              onClick={() => track('book-call-hero')}
            >
              Book a 15‑min Call
            </a>
            <button
              className="inline-block rounded-lg px-4 py-3 text-sky-600 font-semibold hover:text-sky-700"
              onClick={() => { track('join-early-open-hero'); onOpenEarly(); }}
            >
              Join Early Access
            </button>
          </div>
          <div className="mt-2 text-sm text-slate-600">CSV only · Read‑only processing · SOC 2‑friendly</div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
          <img src="/assets/mock-timeline.svg" alt="Timeline mock with diffs and risk flags" />
        </div>
      </div>
    </section>
  )
}
