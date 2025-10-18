import React, { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { EarlyModal } from './components/EarlyModal'
import { HowItWorks, Outcomes, Features, Trust, Security, Demo, FAQ, FinalCTA } from './sections'

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <div className="app-premium-bg font-sans">
      <Header onOpenEarly={() => setOpen(true)} />
      <main id="top" className="pt-2">
        <Hero onOpenEarly={() => setOpen(true)} />
        <div className="section-divider" />
        <HowItWorks />
        <div className="section-divider" />
        <Outcomes />
        <div className="section-divider" />
        <Features />
        <Trust />
        <div className="section-divider" />
        <Security />
        <div className="section-divider" />
        <Demo />
        <div className="section-divider" />
        <FAQ />
        <FinalCTA />
      </main>
      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-5 text-slate-400">
          <p>Built by a product manager who’s run SOC 2 and ISO audits solo—this replaces the scramble with a clean, automated audit trail.</p>
          <p className="text-sm text-slate-500 mt-2">© {new Date().getFullYear()} Audit Trails</p>
        </div>
      </footer>
      <EarlyModal open={open} onClose={() => setOpen(false)} />
    </div>
  )
}
