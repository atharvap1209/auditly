import React from "react";
import { track } from "../utils/analytics";

const BOOKING_URL = "https://calendar.app.google/cErANmim3yj6nuAB9";

export function Header({ onOpenEarly }: { onOpenEarly: () => void }) {
  return (
    <header className="sticky top-0 z-50 bg-ocean/60 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto max-w-6xl px-5 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold tracking-tight text-white">Audit Trails</a>
        <nav className="hidden md:flex gap-6 text-slate-300 font-medium">
          <a href="#how-it-works" className="hover:text-white">How it works</a>
          <a href="#security" className="hover:text-white">Security</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            className="btn-primary btn-glow text-sm px-3 py-2"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener"
            onClick={() => track("book-call-nav")}
          >
            Book a 15‑min Call
          </a>
          <button
            className="hidden md:inline-block btn-ghost text-sm px-3 py-2"
            onClick={() => { track("join-early-open-nav"); onOpenEarly(); }}
          >
            Join Early Access
          </button>
        </div>
      </div>
    </header>
  );
}

