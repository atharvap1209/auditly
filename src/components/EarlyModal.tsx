import { track } from '../utils/analytics'

export function EarlyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div className={open ? 'fixed inset-0 block' : 'fixed inset-0 hidden'} aria-hidden={!open} role="dialog" aria-labelledby="early-title">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-w-md mx-auto mt-24 card-premium border border-white/10 p-6 shadow-soft">
        <button className="absolute top-2 right-3 text-2xl text-slate-300 hover:text-white" aria-label="Close" onClick={onClose}>×</button>
        <h3 id="early-title" className="heading-premium text-2xl">Join Early Access</h3>
        <p className="text-slate-300 mt-1">Tell us where to send your invite.</p>
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
          <label className="grid gap-1 text-slate-200 font-medium">Email
            <input className="h-11 px-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40" type="email" name="email" required placeholder="you@company.com" />
          </label>
          <label className="grid gap-1 text-slate-200 font-medium">Company
            <input className="h-11 px-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/40" type="text" name="company" required placeholder="Acme Inc." />
          </label>
          <button className="mt-1 btn-primary btn-glow" type="submit">Request Invite</button>
        </form>
        <p className="text-slate-400 text-sm mt-2">We’ll follow up within 1–2 business days.</p>
      </div>
    </div>
  )
}
