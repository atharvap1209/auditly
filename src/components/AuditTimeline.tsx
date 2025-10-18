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
    <div className="card-premium p-4">
      <h3 className="text-sm font-semibold text-slate-300 mb-2">Change Timeline: Salary and Role Events</h3>
      <div className="relative pl-6">
        {/* vertical line */}
        <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10" />
        <ul className="space-y-3">
          {entries.map((e, idx) => (
            <li key={e.id} className="relative group">
              {/* dot */}
              <div className="absolute -left-[7px] top-5 h-3 w-3 rounded-full bg-white/20 ring-2 ring-white/20" />
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 shadow-sm hover:shadow-glow transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar name={e.employee} />
                    <div className="leading-tight">
                      <div className="text-white font-medium">{e.employee}</div>
                      <div className="text-xs text-slate-400 flex items-center gap-1"><EventIcon type={e.type} />{e.type === 'hire' ? 'New Hire' : e.type === 'salary' ? 'Salary Change' : 'Termination'}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {e.type === 'salary' && <span className="tag tag-salary">Salary Change</span>}
                    {e.type === 'hire' && <span className="tag tag-hire">New Hire</span>}
                    {e.type === 'termination' && <span className="tag tag-termination">Termination</span>}
                    {e.noteTag === 'backdated' && <span className="tag tag-backdated">Backdated</span>}
                    {e.noteTag === 'approved' && <span className="tag tag-info">Approved{e.approver ? `: ${e.approver}` : ''}</span>}
                  </div>
                </div>
                <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="text-sm">
                    <div className="text-slate-400">Before → After</div>
                    <div className="font-semibold"><span className="text-rose-400">{e.before}</span> <span className="text-slate-400">→</span> <span className="text-emerald-400">{e.after}</span></div>
                  </div>
                  <div className="text-sm">
                    <div className="text-slate-400">Approved by</div>
                    <div className="font-semibold text-slate-200">{e.approver || '—'}</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-slate-400">Dates</div>
                    <div className="flex items-center gap-4 text-slate-200">
                      <span className="inline-flex items-center gap-1"><CalendarIcon /> {e.effective}</span>
                      <span className="inline-flex items-center gap-1"><CalendarIcon /> {e.edited}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AuditTimeline


