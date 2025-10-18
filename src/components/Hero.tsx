import React from 'react'
import { track } from '../utils/analytics'

const BOOKING_URL = 'https://calendar.app.google/cErANmim3yj6nuAB9'

export function Hero({ onOpenEarly }: { onOpenEarly: () => void }) {
  return (
    <section className="py-18 md:py-24">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="heading-premium leading-tight">
            Turn HR exports into clean, auditor‑ready history in minutes
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Upload a CSV. We auto‑detect hires, terminations, salary/title updates, and backdated edits—then assemble a shareable audit timeline.
          </p>
          <ul className="mt-5 text-slate-400 list-disc list-inside space-y-1">
            <li>CSV uploads only. No integrations required.</li>
            <li>Works with Gusto, BambooHR, Paycom, QuickBooks, Deel.</li>
            <li>Built for SOC 2 and ISO prep.</li>
          </ul>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              className="btn-primary btn-glow"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener"
              onClick={() => track('book-call-hero')}
            >
              Book a 15‑min Call
            </a>
            <button
              className="btn-ghost"
              onClick={() => { track('join-early-open-hero'); onOpenEarly(); }}
            >
              Join Early Access
            </button>
          </div>
          <div className="mt-3 text-sm text-slate-400">CSV only · Read‑only processing · SOC 2‑friendly</div>
        </div>
        <div className="card-premium overflow-hidden">
          <div className="p-3 flex gap-2">
            <span className="tag tag-approved">Approved</span>
            <span className="tag tag-backdated">Backdated</span>
            <span className="tag tag-flag">Risk</span>
          </div>
          <img src="/assets/mock-timeline.svg" alt="Timeline mock with diffs and risk flags" />
        </div>
      </div>
    </section>
  )
}
