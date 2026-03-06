const navigation = [
  { name: 'Domov', href: '#domov' },
  { name: 'O nás', href: '#o-nas' },
  { name: 'Činnosti MP', href: '#projekty' },
  { name: 'Podujatia', href: '#podujatia' },
  { name: 'Novinky', href: '#novinky' },
  { name: 'Galéria', href: '#galeria' },
  { name: 'Pridaj sa k nám', href: '#pridaj-sa' },
  { name: 'Kontakt', href: '#kontakt' },
];

const cinnosti = [
  {
    title: 'Organizácia podujatí',
    description:
      'Pripravujeme kultúrne, spoločenské a športové podujatia pre mladých ľudí v meste Snina.',
  },
  {
    title: 'Dobrovoľníctvo',
    description:
      'Podporujeme dobrovoľnícke aktivity a pomoc komunite, seniorom a mestu.',
  },
  {
    title: 'Participácia',
    description:
      'Dávame mladým ľuďom priestor vyjadriť svoje názory a zapojiť sa do rozhodovania o veciach v meste.',
  },
];

const podujatia = [
  { date: 'Február', title: 'Ples mladých', place: 'Snina' },
  { date: 'December', title: 'Vianočný benefičný koncert', place: 'Snina' },
  { date: 'Leto', title: 'Piknik kino', place: 'Snina' },
  { date: 'Jar / jeseň', title: 'Gaming Day', place: 'Snina' },
  { date: 'Leto', title: 'Color Run', place: 'Snina' },
];

const novinky = [
  {
    title: 'Gaming Day pripravujeme',
    text: 'Pripravujeme ďalší ročník obľúbeného podujatia Gaming Day pre mladých v Snine.',
  },
  {
    title: 'Ples mladých',
    text: 'Spoločenské podujatie pre mladých, ktoré každoročne spája komunitu mladých ľudí.',
  },
  {
    title: 'Dobrovoľnícke aktivity',
    text: 'Mladí ľudia sa zapájajú do aktivít, ktoré pomáhajú komunite a mestu.',
  },
];

const gallery = [
  { src: '/galeria1.jpg', alt: 'Ples mladých - tanečný parket' },
  { src: '/galeria2.jpg', alt: 'Gaming Day - skupinová fotografia' },
  { src: '/galeria3.jpg', alt: 'Športové aktivity v hale' },
  { src: '/galeria4.jpg', alt: 'Vianočný benefičný koncert na pódiu' },
  { src: '/galeria5.jpg', alt: 'Delegovanie členov Mládežníckeho parlamentu Snina' },
  { src: '/galeria6.jpg', alt: 'Športové aktivity na vonkajšom ihrisku' },
  { src: '/galeria7.jpg', alt: 'Ples mladých - spoločná fotografia' },
  { src: '/galeria8.jpg', alt: 'Stretnutie Mládežníckeho parlamentu Snina' },
];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-brand-blue">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-brand-navy sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-brand-bg text-slate-900">
      <header
        id="domov"
        className="relative isolate min-h-screen overflow-hidden text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,26,74,0.70), rgba(11,26,74,0.72)), url('/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,222,139,0.18),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,26,74,0.60)_0%,rgba(30,47,110,0.45)_100%)]" />
        <div className="absolute -left-10 top-28 h-48 w-48 rounded-full border border-white/15 animate-float" />
        <div className="absolute right-10 top-24 h-28 w-28 rounded-full border border-brand-yellow/40 animate-float" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pb-20 pt-6 lg:px-8">
          <nav className="mb-16 flex flex-col gap-6 rounded-full border border-white/10 bg-white/10 px-6 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <a href="#domov" className="flex items-center gap-3">
              <img src="/mp-snina-logo.png" alt="Mládežnícky parlament Snina" className="h-12 w-auto" />
              <div>
                <div className="text-sm font-black uppercase tracking-[0.18em] text-white">Mládežnícky parlament</div>
                <div className="text-base font-semibold text-brand-yellow">Snina</div>
              </div>
            </a>

            <div className="flex flex-wrap gap-4 text-sm text-slate-200 md:justify-end">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="transition hover:text-brand-yellow">
                  {item.name}
                </a>
              ))}
            </div>
          </nav>

          <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="animate-fade-up">
              <div className="mb-5 inline-flex rounded-full border border-brand-yellow/40 bg-white/10 px-4 py-2 text-sm font-medium text-brand-yellow">
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
                <a
                  href="#pridaj-sa"
                  className="rounded-2xl bg-brand-yellow px-6 py-3 font-bold text-brand-navy shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                >
                  Pridaj sa k nám
                </a>
                <a
                  href="#projekty"
                  className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition duration-300 hover:bg-white/20"
                >
                  Pozri činnosti MP
                </a>
              </div>
            </div>

            <div className="animate-fade-up rounded-[32px] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur lg:ml-auto">
              <div className="rounded-[28px] bg-white p-8 text-slate-900 shadow-soft">
                <div className="flex items-center gap-4">
                  <img src="/mp-snina-logo.png" alt="Logo MP Snina" className="h-14 w-auto shrink-0" />
                  <div>
                    <div className="text-sm font-black uppercase tracking-[0.18em] text-brand-navy">Mládežnícky parlament</div>
                    <div className="text-xl font-black uppercase text-brand-blue">Snina</div>
                  </div>
                </div>
                <div className="mt-8 grid gap-4">
                  <div className="rounded-3xl bg-brand-bg p-6 ring-1 ring-slate-200">
                    <div className="text-sm font-bold uppercase tracking-[0.18em] text-brand-blue">Naša misia</div>
                    <p className="mt-2 text-lg font-semibold text-brand-navy">
                      Vytvárať priestor, kde mladí ľudia nie sú bokom, ale sú súčasťou diania v meste.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-brand-navy p-5 text-white">
                      <div className="text-3xl font-black text-brand-yellow">13–20</div>
                      <p className="mt-2 text-sm text-slate-200">cieľová skupina mladých ľudí</p>
                    </div>
                    <div className="rounded-3xl bg-brand-yellow p-5 text-brand-navy">
                      <div className="text-3xl font-black">Komunita</div>
                      <p className="mt-2 text-sm font-medium">podujatia, dobrovoľníctvo a participácia</p>
                    </div>
                  </div>
                </div>
              </div>
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
            ].map(([title, text], index) => (
              <div
                key={title}
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="mb-4 h-12 w-12 rounded-2xl bg-brand-yellow" />
                <h3 className="text-2xl font-black text-brand-navy">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="o-nas" className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-[32px] bg-brand-navy p-8 text-white shadow-xl sm:p-10">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white/10 p-5">
                  <div className="text-sm uppercase tracking-[0.18em] text-brand-yellow">Kto sme</div>
                  <p className="mt-2 font-semibold">Platforma mladých ľudí zo základných a stredných škôl.</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-5">
                  <div className="text-sm uppercase tracking-[0.18em] text-brand-yellow">Čo robíme</div>
                  <p className="mt-2 font-semibold">Organizujeme projekty, eventy a dobrovoľnícke aktivity.</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-5">
                  <div className="text-sm uppercase tracking-[0.18em] text-brand-yellow">Pre koho</div>
                  <p className="mt-2 font-semibold">Pre mladých ľudí, ktorí chcú byť súčasťou diania v meste.</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-5">
                  <div className="text-sm uppercase tracking-[0.18em] text-brand-yellow">Prečo</div>
                  <p className="mt-2 font-semibold">Aby mladí v Snine mali hlas, priestor a reálnu možnosť ovplyvňovať veci.</p>
                </div>
              </div>
            </div>

            <div>
              <SectionTitle
                eyebrow="O nás"
                title="Mládežnícky parlament Snina je priestor pre mladých, ktorí chcú tvoriť veci okolo seba."
                text="Spájame aktivitu, nápady a komunitu. Sme hlasom mladých ľudí v Snine, prinášame ich potreby a zároveň vytvárame podujatia, projekty a iniciatívy, ktoré zlepšujú život v meste."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ['Zastupovanie mladých', 'Prinášame názory a potreby mládeže bližšie k mestu.'],
                  ['Aktivita', 'Podporujeme mladých, aby neboli iba divákmi, ale tvorcami.'],
                  ['Spolupráca', 'Prepájame školy, organizácie a partnerov v prospech mládeže.'],
                  ['Komunita', 'Budujeme prostredie, kde sa mladí cítia vítaní a vypočutí.'],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                    <h3 className="text-lg font-black text-brand-navy">{title}</h3>
                    <p className="mt-2 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projekty" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Činnosti MP"
            title="Čomu sa venuje Mládežnícky parlament Snina"
            text="Našou úlohou je vytvárať aktivity pre mladých, zapájať ich do života mesta a podporovať dobrovoľníctvo a participáciu."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cinnosti.map((projekt, index) => (
              <div
                key={projekt.title}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`relative h-52 ${
                    index % 3 === 0 ? 'bg-brand-navy' : index % 3 === 1 ? 'bg-brand-blue' : 'bg-brand-yellow'
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
                    MP Snina
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-black text-brand-navy">{projekt.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{projekt.description}</p>
                  <a href="#kontakt" className="mt-5 inline-flex font-bold text-brand-blue transition group-hover:translate-x-1">
                    Zisti viac →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="podujatia" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Podujatia"
              title="Kalendár hlavných podujatí"
              text="Táto sekcia je pripravená ako jednoduchý event kalendár. Neskôr sa dajú doplniť presné dátumy, registrácia aj detail podujatia."
            />

            <div className="mt-10 grid gap-5">
              {podujatia.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-4 rounded-[28px] border border-slate-200 bg-brand-bg p-6 shadow-soft md:grid-cols-[180px_1fr_auto] md:items-center transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="rounded-2xl bg-brand-navy px-4 py-5 text-center text-white">
                    <div className="text-sm font-bold uppercase tracking-[0.18em] text-brand-yellow">Obdobie</div>
                    <div className="mt-2 text-xl font-black">{item.date}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-brand-navy">{item.title}</h3>
                    <p className="mt-1 text-slate-600">Miesto: {item.place}</p>
                  </div>
                  <a href="#kontakt" className="inline-flex rounded-2xl bg-brand-yellow px-5 py-3 font-bold text-brand-navy">
                    Detail
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="novinky" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Novinky"
            title="Aktuálne informácie z Mládežníckeho parlamentu"
            text="Tu budú zverejňované novinky o podujatiach, aktivitách a dianí v Mládežníckom parlamente Snina."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {novinky.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-xl font-black text-brand-navy">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
                <a href="#kontakt" className="mt-4 inline-flex font-bold text-brand-blue">
                  Čítať viac →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="galeria" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="Galéria"
              title="Momenty, ktoré tvoria atmosféru MP Snina"
              text="Na webe sú už doplnené reálne fotografie z podujatí, dobrovoľníckych aktivít, stretnutí a spoločenských akcií."
            />

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {gallery.map((item, index) => (
                <div key={item.src} className={`group overflow-hidden rounded-[28px] bg-slate-100 shadow-soft ${index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={`w-full object-cover transition duration-500 group-hover:scale-105 ${index === 0 ? 'h-full min-h-[340px]' : 'h-72'}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-navy py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-brand-yellow">Instagram</p>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Sleduj náš Instagram</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  Zákulisie aktivít, fotky z podujatí a aktuálne dianie nájdeš na profile Mládežníckeho parlamentu Snina.
                </p>
              </div>
              <a
                href="https://www.instagram.com/mp_snina/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-brand-yellow px-6 py-3 font-bold text-brand-navy transition duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                @mp_snina
              </a>
            </div>
          </div>
        </section>

        <section id="pridaj-sa" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 rounded-[36px] bg-[linear-gradient(135deg,#0B1A4A_0%,#13245B_60%,#1E2F6E_100%)] px-8 py-10 text-white shadow-2xl lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:py-14">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-brand-yellow">Pridaj sa k nám</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Chceš byť súčasťou zmien, projektov a akcií pre mladých v Snine?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
                Hľadáme mladých ľudí, ktorí majú nápady, energiu a chuť niečo robiť. Ak chceš pomáhať organizovať podujatia,
                prinášať nové projekty a byť aktívnou súčasťou komunity, si na správnom mieste.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-6 text-slate-900 shadow-lg">
              <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
                <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Meno a priezvisko" />
                <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Škola" />
                <input className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Vek" />
                <textarea className="min-h-[130px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Prečo sa chceš pridať?" />
                <button className="rounded-2xl bg-brand-yellow px-6 py-3 font-bold text-brand-navy transition hover:opacity-90">
                  Odoslať záujem
                </button>
              </form>
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-brand-navy py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-brand-yellow">Kontakt</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Spoj sa s nami</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Napíš nám, sleduj naše sociálne siete alebo sa zastav osobne. Táto sekcia už obsahuje reálne kontaktné údaje Mládežníckeho parlamentu Snina.
              </p>

              <div className="mt-8 space-y-3 text-slate-200">
                <p><span className="font-bold text-white">Organizácia:</span> Mládežnícky parlament Snina</p>
                <p><span className="font-bold text-white">E-mail:</span> <a href="mailto:mparlament.snina@gmail.com" className="underline underline-offset-4">mparlament.snina@gmail.com</a></p>
                <p><span className="font-bold text-white">Instagram:</span> <a href="https://www.instagram.com/mp_snina/" target="_blank" rel="noreferrer" className="underline underline-offset-4">@mp_snina</a></p>
                <p><span className="font-bold text-white">Facebook:</span> <a href="https://www.facebook.com/p/Ml%C3%A1de%C5%BEn%C3%ADcky-parlament-Snina-100092895751320/?locale=sk_SK" target="_blank" rel="noreferrer" className="underline underline-offset-4">Mládežnícky parlament Snina</a></p>
                <p><span className="font-bold text-white">Adresa:</span> Strojárska 2060/95, 069 01 Snina</p>
                <p><span className="font-bold text-white">Hashtag:</span> #mladáSnina</p>
              </div>
            </div>

            <div className="rounded-[32px] bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur">
              <form className="grid gap-5" onSubmit={(e) => e.preventDefault()}>
                <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-brand-yellow" placeholder="Meno" />
                <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-brand-yellow" placeholder="Tvoj e-mail" />
                <textarea className="min-h-[150px] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-brand-yellow" placeholder="Tvoja správa" />
                <button className="rounded-2xl bg-brand-yellow px-6 py-3 font-bold text-brand-navy transition hover:opacity-90">
                  Odoslať správu
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <span className="font-bold text-brand-navy">Mládežnícky parlament Snina</span> · #mladáSnina
          </div>
          <div>© {currentYear} Všetky práva vyhradené</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
