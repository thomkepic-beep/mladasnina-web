import React from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
import ContactSection from '../components/ContactSection'
import { aboutPage, activities, featuredEvents, news, galleryAlbums, members } from '../data'

export default function Home() {
  return (
    <>
      <header id="domov" className="relative h-[85vh] w-full overflow-hidden text-white">
        <img src="/hero.jpg" alt="Mládežnícky parlament Snina" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#0B1A4A]/70" />

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-[#F1DE8B]/40 bg-white/10 px-4 py-2 text-sm font-medium text-[#F1DE8B]">
              #mladáSnina · hlas mladých v meste
            </div>
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Mládežnícky parlament Snina
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Priestor pre mladých ľudí, nápady a aktivity, ktoré menia naše mesto.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
              Mládežnícky parlament Snina spája mladých ľudí zo základných a stredných škôl,
              ktorí chcú byť aktívni, organizovať podujatia a prinášať nové nápady pre život v meste.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/pridaj-sa" className="rounded-2xl bg-[#F1DE8B] px-6 py-3 font-bold text-[#0B1A4A] shadow-lg transition hover:-translate-y-0.5">
                Pridaj sa k nám
              </Link>
              <Link to="/o-mp-snina" className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10">
                Zisti viac o MP
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Krátke predstavenie"
            title="Mládežnícky parlament Snina je platforma mladých ľudí, ktorí chcú byť aktívnou súčasťou života v meste."
            text={`${aboutPage.mainGoal} ${aboutPage.more}`}
          />
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Čo robíme"
              title="Aktivity, ktoré prepájajú mladých ľudí, mesto a komunitu"
              text="MP Snina vytvára priestor pre participáciu, vlastné aktivity a dobrovoľníctvo v meste Snina."
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
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Naše podujatia"
            title="Podujatia, ktoré vytvárajú priestor pre komunitu, zážitky a aktivitu"
            text="Mládežnícky parlament Snina počas roka organizuje viacero podujatí pre mladých ľudí."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredEvents.map((event) => (
              <div key={event.slug} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                <img src={event.image} alt={event.title} className="h-44 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#0B1A4A]">{event.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{event.date} · {event.place}</p>
                  <p className="mt-3 text-slate-600">{event.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/podujatia" className="inline-flex rounded-2xl bg-[#0B1A4A] px-6 py-3 font-bold text-white transition hover:bg-[#13245B]">
              Zobraziť všetky podujatia
            </Link>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Novinky"
              title="Najnovšie informácie z Mládežníckeho parlamentu Snina"
              text="Pozri si posledné správy, oznamy a dianie v Mládežníckom parlamente Snina."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {news.map((item) => (
                <article key={item.slug} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                  <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-black text-[#0B1A4A]">{item.title}</h3>
                    <p className="mt-3 text-slate-600">{item.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/novinky" className="inline-flex rounded-2xl bg-[#F1DE8B] px-6 py-3 font-bold text-[#0B1A4A] transition hover:opacity-90">
                Zobraziť všetky novinky
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Členovia"
            title="Ľudia, ktorí tvoria Mládežnícky parlament Snina"
            text="Predstavujeme členov parlamentu, ktorí sa aktívne zapájajú do života mesta a pripravujú aktivity pre mladých ľudí."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <Link key={member.slug} to={`/clen/${member.slug}`} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <img src={member.photo} alt={member.name} className="mx-auto h-40 w-40 rounded-full object-cover" />
                <h3 className="mt-4 text-center text-xl font-black text-[#0B1A4A]">{member.name}</h3>
                <p className="text-center text-sm font-semibold text-[#1E2F6E]">{member.role}</p>
                <p className="text-center text-sm text-slate-500">{member.school}</p>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/clenovia" className="inline-flex rounded-2xl bg-[#0B1A4A] px-6 py-3 font-bold text-white transition hover:bg-[#13245B]">
              Zobraziť všetkých členov
            </Link>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Instagram / Galéria"
              title="Atmosféra našich podujatí a aktivít"
              text="Na Instagrame a v galérii zdieľame momenty z akcií, ktoré organizujeme alebo na ktorých sa podieľame."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {galleryAlbums.slice(0, 6).map((item) => (
                <Link key={item.slug} to="/galeria" className="group relative overflow-hidden rounded-[28px] shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <img src={item.image} alt={item.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.05]" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                    <div className="font-black">{item.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 rounded-[36px] bg-[linear-gradient(135deg,#0B1A4A_0%,#13245B_60%,#1E2F6E_100%)] px-8 py-10 text-white shadow-2xl lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-14">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#F1DE8B]">Pridaj sa k nám</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Chceš byť súčasťou aktivít pre mladých v Snine?</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                Ak máš nápady, energiu a chuť zapojiť sa do organizovania podujatí alebo aktivít pre mladých ľudí, pridaj sa k nám.
              </p>
            </div>
            <Link to="/pridaj-sa" className="inline-flex rounded-2xl bg-[#F1DE8B] px-6 py-3 font-bold text-[#0B1A4A] transition hover:opacity-90">
              Vyplniť prihlášku
            </Link>
          </div>
        </section>

        <ContactSection />
      </main>
    </>
  )
}
