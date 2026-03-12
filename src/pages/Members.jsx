import React from 'react'
import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import SectionTitle from '../components/SectionTitle'
import { members } from '../data'

export default function Members() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Členovia"
          title="Členovia Mládežníckeho parlamentu Snina"
          text="Mládežnícky parlament Snina tvoria mladí ľudia zo základných a stredných škôl, ktorí sa aktívne zapájajú do života v meste."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <Link key={member.slug} to={`/clen/${member.slug}`} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <img src={member.photo} alt={member.name} className="mx-auto h-44 w-44 rounded-full object-cover" />
              <h3 className="mt-5 text-center text-2xl font-black text-[#0B1A4A]">{member.name}</h3>
              <p className="text-center text-sm font-semibold text-[#1E2F6E]">{member.role}</p>
              <p className="text-center text-sm text-slate-500">{member.school}</p>
              <p className="mt-4 text-center text-sm text-slate-600">{member.bio}</p>
            </Link>
          ))}
        </div>
      </main>

      <ContactSection />
    </>
  )
}
