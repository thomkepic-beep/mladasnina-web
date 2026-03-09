import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { events } from '../data'

export default function Events() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle eyebrow="Podujatia" title="Podujatia Mládežníckeho parlamentu Snina" text="Tu môžeš neskôr doplniť detailné podstránky k jednotlivým eventom." />
      <div className="mt-10 grid gap-5">
        {events.map((item) => (
          <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#1E2F6E]">{item.date}</div>
            <h3 className="mt-2 text-2xl font-black text-[#0B1A4A]">{item.title}</h3>
            <p className="mt-2 text-slate-600">Miesto: {item.place}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
