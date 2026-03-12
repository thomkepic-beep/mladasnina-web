import React from 'react'
import ContactSection from '../components/ContactSection'
import SectionTitle from '../components/SectionTitle'
import { featuredEvents } from '../data'

export default function Events() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Podujatia"
          title="Podujatia Mládežníckeho parlamentu Snina"
          text="Na tejto stránke nájdeš prehľad podujatí, ktoré organizuje alebo pripravuje Mládežnícky parlament Snina."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredEvents.map((event) => (
            <div key={event.slug} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <img src={event.image} alt={event.title} className="h-52 w-full object-cover" />
              <div className="p-7">
                <div className="inline-flex rounded-full bg-[#F1DE8B] px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-[#0B1A4A]">
                  {event.date}
                </div>
                <h3 className="mt-4 text-2xl font-black text-[#0B1A4A]">{event.title}</h3>
                <p className="mt-2 text-slate-500">Miesto: {event.place}</p>
                <p className="mt-4 text-slate-600">{event.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <ContactSection />
    </>
  )
}
