import React from 'react'
import { track } from '../utils/analytics'

export function EarlyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={open ? 'fixed inset-0 block' : 'fixed inset-0 hidden'} aria-hidden={!open} role="dialog" aria-labelledby="early-title">
      <div className="absolute inset-0 bg-slate-900/60" onClick={onClose} />
      <div className="relative max-w-md mx-auto mt-24 bg-white border border-slate-200 rounded-xl p-5 shadow-xl">
        <button className="absolute top-2 right-3 text-2xl" aria-label="Close" onClick={onClose}>×</button>
        <h3 id="early-title" className="text-xl font-semibold">Join Early Access</h3>
        <p className="text-slate-600 mt-1">Tell us where to send your invite.</p>
        <form className="grid gap-3 mt-3" onSubmit={(e)=>{
          e.preventDefault()
          const form = e.currentTarget as HTMLFormElement
          const data = new FormData(form)
          const email = String(data.get('email')||'').trim()
          const company = String(data.get('company')||'').trim()
          if (!email || !company) { alert('Please enter email and company'); return }
          track('early-submit', { email, company })
          try { localStorage.setItem('early-access-request', JSON.stringify({ email, company, ts: Date.now() })) } catch {}
          form.reset()
          alert('Thanks! We\'ll be in touch shortly.')
          onClose()
        }}>
          <label className="grid gap-1 text-slate-700 font-medium">Email
            <input className="h-10 px-3 border border-slate-300 rounded-lg" type="email" name="email" required placeholder="you@company.com" />
          </label>
          <label className="grid gap-1 text-slate-700 font-medium">Company
            <input className="h-10 px-3 border border-slate-300 rounded-lg" type="text" name="company" required placeholder="Acme Inc." />
          </label>
          <button className="mt-1 rounded-lg bg-sky-500 text-white px-4 py-2 font-semibold hover:bg-sky-600" type="submit">Request Invite</button>
        </form>
        <p className="text-slate-500 text-sm mt-2">We’ll follow up within 1–2 business days.</p>
      </div>
    </div>
  )
}
