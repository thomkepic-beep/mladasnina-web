import React from 'react'
import ContactSection from '../components/ContactSection'
import SectionTitle from '../components/SectionTitle'
import { aboutPage, activities } from '../data'

export default function About() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionTitle
          eyebrow="O MP Snina"
          title="O MP Snina"
          text={aboutPage.intro}
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-black text-[#0B1A4A]">Čo je Mládežnícky parlament Snina</h3>
            <p className="mt-4 leading-8 text-slate-600">{aboutPage.mainGoal}</p>
            <p className="mt-4 leading-8 text-slate-600">{aboutPage.more}</p>
          </div>
          <div className="rounded-[32px] bg-[#0B1A4A] p-8 text-white shadow-xl">
            <h3 className="text-2xl font-black text-[#F1DE8B]">Pre koho je MP</h3>
            <p className="mt-4 leading-8 text-slate-200">{aboutPage.membership}</p>
          </div>
        </div>

        <section className="mt-16">
          <SectionTitle
            eyebrow="Čo robíme"
            title="Hlavné oblasti činnosti Mládežníckeho parlamentu Snina"
            text="Podporujeme aktivity, ktoré prepájajú mladých ľudí, komunitu a mesto Snina."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {activities.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-4 h-12 w-12 rounded-2xl bg-[#F1DE8B]" />
                <h3 className="text-2xl font-black text-[#0B1A4A]">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <ContactSection />
    </>
  )
}
