import React from 'react'

type TimelineEventType = 'hire' | 'salary' | 'termination'

type TimelineEntry = {
  id: string
  employee: string
  type: TimelineEventType
  before?: string
  after?: string
  noteTag?: 'backdated' | 'approved'
  approver?: string
  effective: string
  edited: string
}

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-slate-400">
    <path d="M7 2h2v2H7zM15 2h2v2h-2z"/>
    <path d="M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 4v10h14V8H5z"/>
  </svg>
)

const EventIcon: React.FC<{ type: TimelineEventType }> = ({ type }) => {
  if (type === 'hire') {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">●</span>
    )
  }
  if (type === 'salary') {
    return (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">↻</span>
    )
  }
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-500/20 text-rose-300">▾</span>
  )
}

const Avatar: React.FC<{ name: string }> = ({ name }) => {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
  return (
    <div className="h-8 w-8 rounded-full bg-white/10 border border-white/10 text-white grid place-items-center text-xs font-semibold">
      {initials}
    </div>
  )
}

const entries: TimelineEntry[] = [
  {
    id: '1',
    employee: 'Alex Chen',
    type: 'salary',
    before: '$120k',
    after: '$132k',
    noteTag: 'backdated',
    effective: '2025-03-01',
    edited: '2025-03-03',
  },
  {
    id: '2',
    employee: 'Priya Rao',
    type: 'salary',
    before: 'Engineer',
    after: 'Senior Engineer',
    noteTag: 'approved',
    approver: 'M. Lopez',
    effective: '2025-04-15',
    edited: '2025-04-15',
  },
  {
    id: '3',
    employee: 'Jordan Lee',
    type: 'termination',
    before: 'Active',
    after: 'Terminated',
    noteTag: 'approved',
    approver: 'HR Ops',
    effective: '2025-05-10',
    edited: '2025-05-11',
  },
]

export const AuditTimeline: React.FC = () => {
  return (
    <div className="timeline-panel">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-white">HR Audit Timeline</h3>
        <button className="btn-glass">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10"/><path d="M8 7h8"/><path d="M6 21h12l-2-6H8l-2 6z"/></svg>
          Upload CSV
        </button>
      </div>
      <div className="relative pl-6">
        <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10" />
        <ul className="space-y-4">
          {entries.map((e) => (
            <li key={e.id} className="relative">
              <div className="absolute -left-[7px] top-6 h-3 w-3 rounded-full bg-white/50" />
              <div className={`timeline-card ${e.noteTag === 'backdated' ? 'amber' : e.type === 'termination' ? 'rose' : ''} hover:shadow-glow transition-shadow`}> 
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Avatar name={e.employee} />
                      <div>
                        <div className="timeline-title">
                          {e.type === 'salary' && <>Salary Changed: <span className="text-rose-400">{e.before}</span> <span className="text-slate-400">→</span> <span className="text-emerald-400">{e.after}</span></>}
                          {e.type === 'hire' && <>New Hire: <span className="text-emerald-400">{e.employee}</span></>}
                          {e.type === 'termination' && <>Termination</>}
                        </div>
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4 timeline-meta">
                          <div className="flex items-center gap-2"><CalendarIcon /> Effective: {e.effective}</div>
                          <div className="flex items-center gap-2"><CalendarIcon /> Edited: {e.edited}</div>
                          <div className="flex items-center gap-2">
                            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-400/20 text-sky-300">♥</span>
                            {e.approver ? `Approved by ${e.approver}` : '—'}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {e.type === 'salary' && <span className="tag tag-salary">Approved</span>}
                      {e.noteTag === 'backdated' && <span className="tag tag-backdated">Backdated</span>}
                      {e.type === 'termination' && <span className="tag tag-flag">Risk</span>}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <button className="btn-glass">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M5 20h14v-2H5z"/><path d="M19 10H5v6h14v-6z"/><path d="M12 4l4 4H8l4-4z"/></svg>
          Export CSV
        </button>
        <button className="btn-glass">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h12v20H6z"/><path d="M9 6h6"/><path d="M9 10h6"/><path d="M9 14h6"/></svg>
          Export PDF
        </button>
      </div>
    </div>
  )
}

export default AuditTimeline


