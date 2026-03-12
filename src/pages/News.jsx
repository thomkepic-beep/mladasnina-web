import React from 'react'
import ContactSection from '../components/ContactSection'
import SectionTitle from '../components/SectionTitle'
import { news } from '../data'

export default function News() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="Novinky"
          title="Novinky z Mládežníckeho parlamentu Snina"
          text="Sekcia noviniek prináša informácie o aktivitách Mládežníckeho parlamentu Snina, pripravovaných podujatiach a ďalších udalostiach."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {news.map((item) => (
            <article key={item.slug} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
              <div className="p-7">
                <h3 className="text-2xl font-black text-[#0B1A4A]">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.excerpt}</p>
                <p className="mt-4 text-sm leading-7 text-slate-500">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </main>

      <ContactSection />
    </>
  )
}
