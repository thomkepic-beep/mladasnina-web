import React from 'react'
import SectionTitle from '../components/SectionTitle'

export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle eyebrow="O nás" title="Kto je Mládežnícky parlament Snina" text="Samostatná podstránka pre detailné predstavenie parlamentu, jeho vízie, hodnôt a fungovania." />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-[28px] bg-white p-8 shadow-sm"><h3 className="text-2xl font-black text-[#0B1A4A]">Naša vízia</h3><p className="mt-4 text-slate-600">Budovať mesto, v ktorom mladí ľudia nie sú bokom, ale aktívne sa podieľajú na živote komunity.</p></div>
        <div className="rounded-[28px] bg-white p-8 shadow-sm"><h3 className="text-2xl font-black text-[#0B1A4A]">Ako fungujeme</h3><p className="mt-4 text-slate-600">Prepájame školy, mladých ľudí, samosprávu a komunitu. Organizujeme podujatia a prinášame priestor pre participáciu.</p></div>
      </div>
    </main>
  )
}
