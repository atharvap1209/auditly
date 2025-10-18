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
          <div className="px-3 pb-3">
            <div className="rounded-xl bg-white/2 border border-white/10 overflow-hidden">
              <table className="table-fixed w-full text-sm">
                <thead className="bg-white/5">
                  <tr className="text-slate-300">
                    <th className="text-left font-medium px-4 py-3 w-[28%]">Employee</th>
                    <th className="text-left font-medium px-4 py-3 w-[16%]">Change</th>
                    <th className="text-left font-medium px-4 py-3 w-[28%]">Old → New</th>
                    <th className="text-left font-medium px-4 py-3 w-[14%]">Effective</th>
                    <th className="text-left font-medium px-4 py-3 w-[14%]">Edited</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="text-slate-200">
                    <td className="px-4 py-4">Alex Chen</td>
                    <td className="px-4 py-4 text-sky-300 font-medium">Salary</td>
                    <td className="px-4 py-4">
                      <span className="text-rose-300 font-semibold">$120k</span>
                      <span className="mx-2 text-slate-400">→</span>
                      <span className="text-emerald-300 font-semibold">$132k</span>
                      <span className="ml-3 align-middle tag tag-backdated">Backdated</span>
                    </td>
                    <td className="px-4 py-4 text-slate-300">2025-03-01</td>
                    <td className="px-4 py-4 text-slate-300">2025-03-03</td>
                  </tr>
                  <tr className="text-slate-200">
                    <td className="px-4 py-4">Priya Rao</td>
                    <td className="px-4 py-4 text-sky-300 font-medium">Title</td>
                    <td className="px-4 py-4">
                      Engineer <span className="text-slate-400 mx-1">→</span> Senior Engineer
                      <span className="ml-3 align-middle tag tag-approved">Approved</span>
                    </td>
                    <td className="px-4 py-4 text-slate-300">2025-04-15</td>
                    <td className="px-4 py-4 text-slate-300">2025-04-15</td>
                  </tr>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <tr key={`empty-${i}`} className="text-slate-400/60">
                      <td className="px-4 py-6">&nbsp;</td>
                      <td className="px-4 py-6">&nbsp;</td>
                      <td className="px-4 py-6">&nbsp;</td>
                      <td className="px-4 py-6">&nbsp;</td>
                      <td className="px-4 py-6">&nbsp;</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
