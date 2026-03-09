import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { projekty } from '../data'

export default function Activities() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle eyebrow="Činnosti MP" title="Hlavné oblasti činnosti" text="Samostatná stránka pre detailnejší opis aktivít Mládežníckeho parlamentu Snina." />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projekty.map((projekt) => (
          <div key={projekt.title} className="rounded-[28px] bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-black text-[#0B1A4A]">{projekt.title}</h3>
            <p className="mt-4 text-slate-600">{projekt.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
