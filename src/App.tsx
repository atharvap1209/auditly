import React, { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { EarlyModal } from './components/EarlyModal'
import { HowItWorks, Outcomes, Features, Trust, Security, Demo, FAQ, FinalCTA } from './sections'

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="text-slate-900">
      <Header onOpenEarly={() => setOpen(true)} />
      <main id="top">
        <Hero onOpenEarly={() => setOpen(true)} />
        <HowItWorks />
        <Outcomes />
        <Features />
        <Trust />
        <Security />
        <Demo />
        <FAQ />
        <FinalCTA />
      </main>
      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-5 text-slate-600">
          <p>Built by a product manager who’s run SOC 2 and ISO audits solo—this replaces the scramble with a clean, automated audit trail.</p>
          <p className="text-sm text-slate-500 mt-2">© {new Date().getFullYear()} Audit Trails</p>
        </div>
      </footer>
      <EarlyModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
