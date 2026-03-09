import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import ContactSection from '../components/ContactSection'
import GalleryGrid from '../components/GalleryGrid'
import JoinForm from '../components/JoinForm'
import { projekty, events, news } from '../data'

export default function Home() {
  return (
    <>
      <header id="domov" className="relative h-[85vh] w-full overflow-hidden text-white">
        <img src="/hero.jpg" alt="Mládežnícky parlament Snina" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#0B1A4A]/70" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-[#F1DE8B]/40 bg-white/10 px-4 py-2 text-sm font-medium text-[#F1DE8B]">
              #mladáSnina · hlas mladých v meste
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Mladí ľudia. Nápady. Energia, ktorá mení Sninu.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Mládežnícky parlament Snina vytvára priestor pre mladých ľudí, organizuje projekty a podujatia,
              prepája komunitu a prináša nové impulzy do života mesta.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/pridaj-sa" className="rounded-2xl bg-[#F1DE8B] px-6 py-3 font-bold text-[#0B1A4A] shadow-lg transition hover:-translate-y-0.5">
                Pridaj sa k nám
              </Link>
              <Link to="/o-nas" className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10">
                Zisti viac
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['Projekty', 'Organizujeme podujatia a aktivity, ktoré dávajú mladým priestor zažiť, tvoriť a meniť svoje mesto.'],
              ['Komunita', 'Prepájame školy, mladých ľudí, dobrovoľníkov a partnerov do jednej aktívnej siete.'],
              ['Príležitosť', 'Dávame mladým možnosť zapojiť sa, získať skúsenosti a byť hlasom svojej generácie.'],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-4 h-12 w-12 rounded-2xl bg-[#F1DE8B]" />
                <h3 className="text-2xl font-black text-[#0B1A4A]">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="o-nas" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-[32px] bg-[#0B1A4A] p-8 text-white shadow-xl sm:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/10 p-5"><div className="text-sm uppercase tracking-[0.18em] text-[#F1DE8B]">Kto sme</div><p className="mt-2 font-semibold">Platforma mladých ľudí zo základných a stredných škôl.</p></div>
                <div className="rounded-3xl bg-white/10 p-5"><div className="text-sm uppercase tracking-[0.18em] text-[#F1DE8B]">Čo robíme</div><p className="mt-2 font-semibold">Organizujeme projekty, eventy a dobrovoľnícke aktivity.</p></div>
                <div className="rounded-3xl bg-white/10 p-5"><div className="text-sm uppercase tracking-[0.18em] text-[#F1DE8B]">Pre koho</div><p className="mt-2 font-semibold">Pre mladých ľudí, ktorí chcú byť súčasťou diania v meste.</p></div>
                <div className="rounded-3xl bg-white/10 p-5"><div className="text-sm uppercase tracking-[0.18em] text-[#F1DE8B]">Prečo</div><p className="mt-2 font-semibold">Aby mladí v Snine mali hlas, priestor a reálnu možnosť ovplyvňovať veci.</p></div>
              </div>
            </div>
            <div>
              <SectionTitle eyebrow="O nás" title="Mládežnícky parlament Snina je priestor pre mladých, ktorí chcú tvoriť veci okolo seba." text="Spájame aktivitu, nápady a komunitu. Sme hlasom mladých ľudí v Snine, prinášame ich potreby a zároveň vytvárame podujatia, projekty a iniciatívy, ktoré zlepšujú život v meste." />
            </div>
          </div>
        </section>

        <section id="projekty" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="Činnosti MP" title="Čomu sa venuje Mládežnícky parlament Snina" text="Našou úlohou je vytvárať aktivity pre mladých, zapájať ich do života mesta a podporovať dobrovoľníctvo a participáciu." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projekty.map((projekt, index) => (
              <div key={projekt.title} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className={`relative h-44 ${index % 3 === 0 ? 'bg-[#0B1A4A]' : index % 3 === 1 ? 'bg-[#1E2F6E]' : 'bg-[#F1DE8B]'}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">MP Snina</div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-black text-[#0B1A4A]">{projekt.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{projekt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="podujatia" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle eyebrow="Podujatia" title="Najbližšie akcie a spoločné zážitky" text="Táto sekcia môže neskôr fungovať aj ako reálny kalendár akcií s detailom podujatia a registráciou." />
            <div className="mt-10 grid gap-5">
              {events.map((item) => (
                <div key={item.title} className="grid gap-4 rounded-[28px] border border-slate-200 bg-[#F5F7FB] p-6 shadow-sm md:grid-cols-[180px_1fr_auto] md:items-center">
                  <div className="rounded-2xl bg-[#0B1A4A] px-4 py-5 text-center text-white"><div className="text-sm font-bold uppercase tracking-[0.18em] text-[#F1DE8B]">Dátum</div><div className="mt-2 text-xl font-black">{item.date}</div></div>
                  <div><h3 className="text-2xl font-black text-[#0B1A4A]">{item.title}</h3><p className="mt-1 text-slate-600">Miesto: {item.place}</p></div>
                  <Link to="/podujatia" className="inline-flex rounded-2xl bg-[#F1DE8B] px-5 py-3 font-bold text-[#0B1A4A]">Detail</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="novinky" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="Novinky" title="Aktuálne informácie z Mládežníckeho parlamentu" text="Tu budú zverejňované novinky o podujatiach, aktivitách a dianí v Mládežníckom parlamente Snina." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {news.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black text-[#0B1A4A]">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
                <Link to="/novinky" className="mt-4 inline-flex font-bold text-[#1E2F6E]">Čítať viac →</Link>
              </div>
            ))}
          </div>
        </section>

        <section id="galeria" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle eyebrow="Galéria" title="Momenty, ktoré tvoria atmosféru MP Snina" text="Klikni na fotografiu a otvorí sa moderný fullscreen náhľad galérie." />
            <GalleryGrid />
          </div>
        </section>

        <section id="pridaj-sa" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 rounded-[36px] bg-[linear-gradient(135deg,#0B1A4A_0%,#13245B_60%,#1E2F6E_100%)] px-8 py-10 text-white shadow-2xl lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:py-14">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#F1DE8B]">Pridaj sa k nám</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Chceš byť súčasťou zmien, projektov a akcií pre mladých v Snine?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">Hľadáme mladých ľudí, ktorí majú nápady, energiu a chuť niečo robiť. Ak chceš pomáhať organizovať podujatia, prinášať nové projekty a byť aktívnou súčasťou komunity, si na správnom mieste.</p>
            </div>
            <div className="rounded-[28px] bg-white p-6 text-slate-900 shadow-lg"><JoinForm /></div>
          </div>
        </section>

        <ContactSection />
      </main>
    </>
  )
}
