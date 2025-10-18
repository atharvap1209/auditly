import React from "react";
import { track } from "../utils/analytics";

const BOOKING_URL = "https://calendar.app.google/cErANmim3yj6nuAB9";

export function Header({ onOpenEarly }: { onOpenEarly: () => void }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold tracking-tight">Audit Trails</a>
        <nav className="hidden md:flex gap-6 text-slate-700 font-medium">
          <a href="#how-it-works" className="hover:text-slate-900">How it works</a>
          <a href="#security" className="hover:text-slate-900">Security</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            className="inline-block rounded-lg bg-sky-500 text-white px-3 py-2 text-sm font-semibold shadow-sm hover:bg-sky-600"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            onClick={() => track("book-call-nav")}
          >
            Book a 15‑min Call
          </a>
          <button
            className="hidden md:inline-block rounded-lg px-3 py-2 text-sky-600 text-sm font-semibold hover:text-sky-700"
            onClick={() => { track("join-early-open-nav"); onOpenEarly(); }}
          >
            Join Early Access
          </button>
        </div>
      </div>
    </header>
  );
}

