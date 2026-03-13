import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { members, featuredMemberSlugs } from "../data";

const homepageEvents = [
  {
    title: "Ples mladých",
    image: "/events/ples-mladych.jpg",
    text: "Spoločenské podujatie pre mladých ľudí v Snine, ktoré spája zábavu, kultúru a dobrú atmosféru.",
  },
  {
    title: "Piknik kino",
    image: "/events/piknik-kino.jpg",
    text: "Letné premietanie filmov pod holým nebom, ktoré vytvára príjemnú atmosféru pre mladých aj rodiny.",
  },
  {
    title: "Gaming Day",
    image: "/events/gaming-day.jpg",
    text: "Tematické podujatie pre fanúšikov hier a moderných technológií, ktoré prináša súťaže, zábavu a komunitu.",
  },
  {
    title: "Color Run",
    image: "/events/color-run.jpg",
    text: "Farebný beh plný energie, hudby a zábavy, ktorý spája mladých ľudí a podporuje aktívny životný štýl.",
  },
];

const galleryPreview = [
  "/galeria1.jpg",
  "/galeria2.jpg",
  "/galeria3.jpg",
  "/galeria4.jpg",
  "/galeria5.jpg",
  "/hero.jpg",
];

function PeopleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"
      />
      <circle cx="9.5" cy="7" r="3" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 21v-2a4 4 0 0 0-3-3.87"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 4.13a4 4 0 0 1 0 5.74"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path strokeLinecap="round" d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function HeartHandshakeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-7 w-7"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 12.5 10 10a2.2 2.2 0 0 1 3.1 0l.9.9a2.2 2.2 0 0 0 3.1 0L18.5 9"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10.5 6.5 7a2 2 0 0 1 2.8 0l1.2 1.2"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 10.5 17.5 7a2 2 0 0 0-2.8 0L10 11.7"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9.2 14.3 1.3 1.3a1.6 1.6 0 0 0 2.3 0l3.7-3.7"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s-6.5-3.8-8.5-8.2C2.2 9.8 4.1 7 7 7c1.7 0 3 1 5 3 2-2 3.3-3 5-3 2.9 0 4.8 2.8 3.5 5.8C18.5 17.2 12 21 12 21Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d="M22 12.07C22 6.49 17.52 2 12 2S2 6.49 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.02H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.25.2 2.25.2v2.48H15.2c-1.25 0-1.64.78-1.64 1.58v1.9h2.8l-.45 2.9h-2.35V22c4.78-.74 8.44-4.91 8.44-9.93Z" />
    </svg>
  );
}

export default function Home() {
  const featuredMembers = members.filter((member) =>
    featuredMemberSlugs.includes(member.slug)
  );

  function getInitials(name) {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#0B1A4A] text-white">
        <img
          src="/hero.jpg"
          alt="Mládežnícky parlament Snina"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#071233]/80 via-[#0B1A4A]/65 to-[#13245B]/65" />
        <div className="absolute left-[-80px] top-10 h-72 w-72 rounded-full bg-[#F1DE8B]/10 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[-40px] h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-[#F1DE8B] backdrop-blur-sm">
              Aktívna mládež v meste Snina
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Mladí ľudia,
              <br />
              ktorí menia Sninu
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
              Organizujeme podujatia, zapájame sa do dobrovoľníctva a prinášame
              nové nápady pre mesto Snina.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/pridaj-sa"
                className="inline-flex items-center justify-center rounded-2xl bg-[#F1DE8B] px-6 py-3 font-bold text-[#0B1A4A] shadow-lg shadow-[#F1DE8B]/20 transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Pridaj sa k nám
              </Link>

              <Link
                to="/o-mp-snina"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/5 px-6 py-3 font-bold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Zisti viac o MP
              </Link>
            </div>

            <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-5 backdrop-blur-sm">
                <div className="text-2xl font-black text-[#F1DE8B]">8000 €</div>
                <div className="mt-1 text-sm leading-6 text-slate-200">
                  pomoci pre komunitu za posledné 3 roky
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-5 backdrop-blur-sm">
                <div className="text-lg font-black text-[#F1DE8B]">
                  Podujatia
                </div>
                <div className="mt-1 text-sm leading-6 text-slate-200">
                  organizujeme aktivity pre mladých v meste Snina
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-5 backdrop-blur-sm">
                <div className="text-lg font-black text-[#F1DE8B]">
                  Dobrovoľníctvo
                </div>
                <div className="mt-1 text-sm leading-6 text-slate-200">
                  zapájame sa do pomoci pri aktivitách a projektoch v meste
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transition hover:opacity-100"
          aria-label="Prejsť nižšie"
        >
          <div className="flex flex-col items-center gap-2 text-white/75">
            <div className="flex h-10 w-6 justify-center rounded-full border border-white/35">
              <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-white" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/60">
              scroll
            </span>
          </div>
        </a>
      </section>

      {/* O MP */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionTitle
              eyebrow="O MP Snina"
              title="Mladí ľudia, nápady a aktivity pre mesto Snina"
              text="Hlavným cieľom Mládežníckeho parlamentu Snina je hájiť záujmy a potreby mládeže v meste Snina a navrhovať riešenia na problémy, ktoré ich ovplyvňujú."
            />
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Mládežnícky parlament Snina sa zapája do participácie pri tvorbe
              strategických dokumentov týkajúcich sa mládeže, organizuje vlastné
              aktivity a podporuje dobrovoľníctvo pri rôznych aktivitách v meste
              Snina.
            </p>

            <div className="mt-8">
              <Link
                to="/o-mp-snina"
                className="inline-flex rounded-2xl bg-[#0B1A4A] px-6 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#13245B]"
              >
                Viac o MP Snina
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-[#F8F9FC] to-white p-8 shadow-sm">
            <h3 className="text-2xl font-black text-[#0B1A4A]">Členstvo v MPS</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Členom Mládežníckeho parlamentu Snina sa môže stať fyzická osoba
              vo veku od 13 do 20 rokov, ktorá má trvalé bydlisko v meste Snina
              alebo navštevuje školu na území mesta Snina.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <div className="text-sm font-semibold text-[#1E2F6E]">Vek</div>
                <div className="mt-1 text-lg font-black text-[#0B1A4A]">
                  13 až 20 rokov
                </div>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <div className="text-sm font-semibold text-[#1E2F6E]">
                  Pre koho
                </div>
                <div className="mt-1 text-lg font-black text-[#0B1A4A]">
                  mladí zo Sniny
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ČO ROBÍME */}
      <section className="bg-[#F5F7FC]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle
            eyebrow="Čo robíme"
            title="Aktivity, ktoré prepájajú mladých ľudí, mesto a komunitu"
            text="Mládežnícky parlament Snina vytvára priestor pre participáciu, vlastné aktivity a dobrovoľníctvo v meste Snina."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF0FF] text-[#0B1A4A]">
                <PeopleIcon />
              </div>
              <h3 className="text-2xl font-black text-[#0B1A4A]">
                Participácia
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Zapájame sa do tvorby strategických dokumentov týkajúcich sa
                mládeže a prinášame pohľad mladých ľudí do diskusie o rozvoji
                mesta.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF6D7] text-[#0B1A4A]">
                <CalendarIcon />
              </div>
              <h3 className="text-2xl font-black text-[#0B1A4A]">
                Organizácia aktivít
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Organizujeme vlastné podujatia a aktivity pre mladých ľudí v
                meste Snina, ktoré prepájajú komunitu a vytvárajú priestor pre
                nové zážitky.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9F8F0] text-[#0B1A4A]">
                <HeartHandshakeIcon />
              </div>
              <h3 className="text-2xl font-black text-[#0B1A4A]">
                Dobrovoľníctvo
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Zapájame sa do medzigeneračného stretávania so seniormi,
                upratovania a pomoci pri aktivitách organizovaných mestom
                Snina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PODUJATIA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionTitle
          eyebrow="Naše podujatia"
          title="Podujatia, ktoré vytvárajú priestor pre komunitu, zážitky a aktivitu"
          text="Mládežnícky parlament Snina počas roka organizuje viacero podujatí pre mladých ľudí."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {homepageEvents.map((event) => (
            <div
              key={event.title}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="overflow-hidden">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-44 w-full bg-gradient-to-br from-[#0B1A4A] to-[#1E2F6E]" />
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black text-[#0B1A4A]">
                  {event.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {event.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/podujatia"
            className="inline-flex rounded-2xl bg-[#0B1A4A] px-6 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#13245B]"
          >
            Zobraziť podujatia
          </Link>
        </div>
      </section>

      {/* ČLENOVIA */}
      <section className="bg-[#F5F7FC]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle
            eyebrow="Členovia"
            title="Ľudia, ktorí tvoria Mládežnícky parlament Snina"
            text="Na homepage zobrazujeme výber členov parlamentu, ktorí sa aktívne zapájajú do života mesta."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredMembers.map((member) => (
              <Link
                key={member.slug}
                to={`/clen/${member.slug}`}
                className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col items-center text-center">
                  {member.photo ? (
                    <div className="overflow-hidden rounded-full ring-4 ring-[#F8F9FC] transition group-hover:ring-[#F1DE8B]">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="h-28 w-28 object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-slate-200 bg-white text-2xl font-black text-[#0B1A4A] transition group-hover:border-[#F1DE8B]">
                      {getInitials(member.name)}
                    </div>
                  )}

                  <h3 className="mt-5 text-xl font-black text-[#0B1A4A]">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#1E2F6E]">
                    {member.role}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{member.school}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/clenovia"
              className="inline-flex rounded-2xl bg-[#0B1A4A] px-6 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#13245B]"
            >
              Zobraziť všetkých členov
            </Link>
          </div>
        </div>
      </section>

      {/* PREČO SA ZAPOJIŤ */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionTitle
          eyebrow="Prečo sa zapojiť"
          title="Byť súčasťou MP Snina znamená viac než len členstvo"
          text="Mládežnícky parlament vytvára priestor pre rast, skúsenosti a nové kontakty."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 text-4xl">🚀</div>
            <h3 className="text-2xl font-black text-[#0B1A4A]">
              Nové skúsenosti
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Získaš skúsenosti s organizáciou podujatí, projektov a aktivít pre
              mladých ľudí.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 text-4xl">👥</div>
            <h3 className="text-2xl font-black text-[#0B1A4A]">
              Nové priateľstvá a kontakty
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Spoznáš mladých ľudí s podobnými záujmami a vytvoríš si nové
              priateľstvá aj kontakty.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mb-6 text-4xl">🏙️</div>
            <h3 className="text-2xl font-black text-[#0B1A4A]">
              Možnosť meniť mesto
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Môžeš prinášať nápady a byť súčasťou aktivít, ktoré zlepšujú život
              mladých ľudí v Snine.
            </p>
          </div>
        </div>
      </section>

      {/* GALÉRIA */}
      <section className="bg-[#F5F7FC]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle
            eyebrow="Galéria"
            title="Atmosféra našich aktivít a podujatí"
            text="Pozri si výber fotografií z aktivít Mládežníckeho parlamentu Snina."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPreview.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm"
              >
                <div className="overflow-hidden">
                  <img
                    src={image}
                    alt={`Galéria ${index + 1}`}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/galeria"
              className="inline-flex rounded-2xl bg-[#0B1A4A] px-6 py-3 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#13245B]"
            >
              Zobraziť galériu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-[#0B1A4A] px-8 py-14 text-center text-white shadow-xl lg:px-14">
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-[#F1DE8B]/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F1DE8B]">
              Pridaj sa k nám
            </p>
            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Staň sa súčasťou Mládežníckeho parlamentu Snina
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Ak máš nápady a chceš byť aktívny v meste Snina, pridaj sa k nám a
              vyplň prihlášku.
            </p>

            <div className="mt-8">
              <Link
                to="/pridaj-sa"
                className="inline-flex rounded-2xl bg-[#F1DE8B] px-6 py-3 font-bold text-[#0B1A4A] shadow-lg shadow-[#F1DE8B]/20 transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Vyplniť prihlášku
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="relative overflow-hidden bg-[#0B1A4A] text-white">
        <div className="absolute left-[-60px] top-0 h-64 w-64 rounded-full bg-[#F1DE8B]/10 blur-3xl" />
        <div className="absolute bottom-[-80px] right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle
            eyebrow="Kontakt"
            title="Spoj sa s Mládežníckym parlamentom Snina"
            text="Máš otázku, nápad na spoluprácu alebo sa chceš pridať? Ozvi sa nám alebo sleduj naše sociálne siete."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[28px] border border-white/10 bg-white/10 p-8 backdrop-blur-sm shadow-lg">
              <h3 className="text-xl font-black text-white">Kontakt</h3>
              <p className="mt-4 leading-8 text-slate-200">
                Pre viac informácií o aktivitách, členstve alebo spolupráci si
                pozri kontaktnú stránku.
              </p>

              <div className="mt-6">
                <Link
                  to="/kontakt"
                  className="inline-flex rounded-2xl bg-[#F1DE8B] px-6 py-3 font-bold text-[#0B1A4A] transition hover:opacity-90"
                >
                  Prejsť na kontakt
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/10 p-8 backdrop-blur-sm shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#F1DE8B]">
                <InstagramIcon />
              </div>
              <h3 className="mt-5 text-xl font-black text-white">Instagram</h3>
              <p className="mt-4 leading-8 text-slate-200">
                Sleduj novinky, zákulisie podujatí a dianie v Mládežníckom
                parlamente Snina na Instagrame.
              </p>

              <div className="mt-6">
                <a
                  href="https://www.instagram.com/mp_snina/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-2xl border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  Otvoriť Instagram
                </a>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/10 p-8 backdrop-blur-sm shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#F1DE8B]">
                <FacebookIcon />
              </div>
              <h3 className="mt-5 text-xl font-black text-white">Facebook</h3>
              <p className="mt-4 leading-8 text-slate-200">
                Na Facebooku nájdeš informácie o pripravovaných aktivitách,
                podujatiach a komunitnom dianí.
              </p>

              <div className="mt-6">
                <a
                  href="https://www.facebook.com/p/Ml%C3%A1de%C5%BEn%C3%ADcky-parlament-Snina-100092895751320/?locale=sk_SK"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-2xl border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  Otvoriť Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
