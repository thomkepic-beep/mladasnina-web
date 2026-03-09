import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { news } from '../data'

export default function News() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle eyebrow="Novinky" title="Aktuality a oznamy" text="Samostatná stránka pre novinky, články a krátke reporty z vašich aktivít." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {news.map((item) => (
          <article key={item.title} className="rounded-[28px] bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black text-[#0B1A4A]">{item.title}</h3>
            <p className="mt-4 text-slate-600">{item.text}</p>
          </article>
        ))}
      </div>
    </main>
  )
}
