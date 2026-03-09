import React from 'react'
import { Instagram, Facebook, Send } from 'lucide-react'
import { contacts } from '../data'

export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-[#0B1A4A] py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#F1DE8B]">Kontakt</p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Spoj sa s nami</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            Napíš nám, sleduj naše sociálne siete alebo sa zastav osobne.
            Táto sekcia už obsahuje reálne kontaktné údaje Mládežníckeho parlamentu Snina.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a href={contacts.instagram} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#F1DE8B] hover:text-[#0B1A4A]" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </a>
            <a href={contacts.facebook} target="_blank" rel="noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#F1DE8B] hover:text-[#0B1A4A]" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </a>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium">✉ {contacts.email}</div>
          </div>

          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-slate-200">
            <Send className="h-5 w-5 text-[#F1DE8B]" />
            <span><span className="font-bold text-white">Hashtag:</span> {contacts.hashtag}</span>
          </div>
        </div>

        <div className="rounded-[32px] bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
          <div className="grid gap-5">
            <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Meno" />
            <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Tvoj e-mail" />
            <textarea className="min-h-[150px] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Tvoja správa" />
            <button className="rounded-2xl bg-[#F1DE8B] px-6 py-3 font-bold text-[#0B1A4A] transition hover:opacity-90">Odoslať správu</button>
          </div>
        </div>
      </div>
    </section>
  )
}
