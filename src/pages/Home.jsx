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

const instagramPosts = [
  {
    image: "/instagram/ig1.jpg",
    alt: "Instagram post 1",
    href: "https://www.instagram.com/mp_snina/",
  },
  {
    image: "/instagram/ig2.jpg",
    alt: "Instagram post 2",
    href: "https://www.instagram.com/mp_snina/",
  },
  {
    image: "/instagram/ig3.jpg",
    alt: "Instagram post 3",
    href: "https://www.instagram.com/mp_snina/",
  },
  {
    image: "/instagram/ig4.jpg",
    alt: "Instagram post 4",
    href: "https://www.instagram.com/mp_snina/",
  },
  {
    image: "/instagram/ig5.jpg",
    alt: "Instagram post 5",
    href: "https://www.instagram.com/mp_snina/",
  },
  {
    image: "/instagram/ig6.jpg",
    alt: "Instagram post 6",
    href: "https://www.instagram.com/mp_snina/",
  },
];

function PeopleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
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
      className="h-6 w-6"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path strokeLinecap="round" d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function VolunteerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-6 w-6"
      aria-hidden="true"
    >
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#061233]/80 via-[#0B1A4A]/65 to-[#13245B]/60" />

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
                className="inline-flex items-center justify-center rounded-2xl bg-[#F1DE8B] px-6 py-3 font-bold text-[#0B1A4A] transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Pridaj sa k nám
              </Link>

              <Link
                to="/o-mp-snina"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/5 px-6 py-3 font-bold text-white backdrop-blur-sm transition hover:bg-white/10"
              >
                Viac o MP
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
                  aktivity pre mladých v meste Snina
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 px-5 py-5 backdrop-blur-sm">
                <div className="text-lg font-black text-[#F1DE8B]">
                  Dobrovoľníctvo
                </div>
                <div className="mt-1 text-sm leading-6 text-slate-200">
                  pomoc pri aktivitách a projektoch v meste
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#what-we-do"
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
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

      {/* ČO ROBÍME */}
      <section id="what-we-do" className="bg-[#F3F6FC]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle
            eyebrow="Čo robíme"
            title="Aktivity, ktoré prepájajú mladých ľudí, mesto a komunitu"
            text="Mládežnícky parlament Snina vytvára priestor pre participáciu, vlastné aktivity a dobrovoľníctvo v meste Snina."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
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

            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
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

            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E9F8F0] text-[#0B1A4A]">
                <VolunteerIcon />
              </div>
              <h3 className="text-2xl font-black text-[#0B1A4A]">
                Dobrovoľníctvo
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Zapájame sa do medzigeneračného stretávania so seniormi,
                upratovania a pomoci pri aktivitách organizovaných mestom Snina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PODUJATIA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle
            eyebrow="Naše podujatia"
            title="Podujatia, ktoré vytvárajú priestor pre komunitu, zážitky a aktivitu"
            text="Mládežnícky parlament Snina počas roka organizuje viacero podujatí pre mladých ľudí."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {homepageEvents.map((event) => (
              <div
                key={event.title}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
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
              className="inline-flex rounded-2xl bg-[#0B1A4A] px-6 py-3 font-bold text-white transition hover:bg-[#13245B]"
            >
              Zobraziť podujatia
            </Link>
          </div>
        </div>
      </section>

      {/* NOVINKY / INSTAGRAM */}
      <section className="bg-[#F8F9FC]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <SectionTitle
            eyebrow="Novinky"
            title="Sleduj, čo je nové na našom Instagrame"
            text="Najnovšie momenty, aktivity a dianie z Mládežníckeho parlamentu Snina."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {instagramPosts.map((post, index) => (
              <a
                key={`${post.image}-${index}`}
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={post.image}
                  alt={post.alt}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.instagram.com/mp_snina/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-[#0B1A4A] px-6 py-3 font-bold text-[#0B1A4A] transition hover:bg-[#0B1A4A] hover:text-white"
            >
              <InstagramIcon />
              Sleduj nás na Instagrame
            </a>
          </div>
        </div>
      </section>

      {/* ČLENOVIA */}
      <section className="relative overflow-hidden bg-[#0B1A4A] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(241,222,139,0.10),transparent_25%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
  <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F1DE8B]">
    Členovia
  </p>

 <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
    Ľudia, ktorí tvoria Mládežnícky parlament Snina
  </h2>
</div>
         

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredMembers.map((member) => (
              <Link
                key={member.slug}
                to={`/clen/${member.slug}`}
                className="group rounded-[28px] border border-white/5 bg-white/10 p-6 backdrop-blur-sm shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-lg hover:border-[#F1DE8B]/40"
              >
                <div className="flex flex-col items-center text-center">
                  {member.photo ? (
                    <div className="overflow-hidden rounded-full ring-2 ring-white/10 transition group-hover:ring-[#F1DE8B]/60">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="h-28 w-28 object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-white/10 bg-white/10 text-2xl font-black text-white transition group-hover:border-[#F1DE8B]/60">
                      {getInitials(member.name)}
                    </div>
                  )}

                  <h3 className="mt-5 text-xl font-black text-white">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#F1DE8B]">
                    {member.role}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">{member.school}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/clenovia"
              className="inline-flex rounded-2xl bg-[#F1DE8B] px-6 py-3 font-bold text-[#0B1A4A] transition hover:opacity-90"
            >
              Zobraziť všetkých členov
            </Link>
          </div>
        </div>
      </section>

      {/* GALÉRIA */}
      <section className="bg-[#F8F9FC]">
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
                <img
                  src={image}
                  alt={`Galéria ${index + 1}`}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/galeria"
              className="inline-flex rounded-2xl border border-[#0B1A4A] px-6 py-3 font-bold text-[#0B1A4A] transition hover:bg-[#0B1A4A] hover:text-white"
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
      <section className="relative overflow-hidden bg-[#101B52] text-white">
        <div className="absolute left-[-60px] top-0 h-64 w-64 rounded-full bg-[#F1DE8B]/10 blur-3xl" />
        <div className="absolute bottom-[-80px] right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F1DE8B]">
                Kontakt
              </p>
              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Spoj sa s nami
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-200">
                Sleduj naše sociálne siete alebo nám napíš na e-mail.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.instagram.com/mp_snina/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-3 text-white transition hover:bg-white/20"
                aria-label="Instagram"
              >
                <InstagramIcon />
                <span className="font-semibold">Instagram</span>
              </a>

              <a
                href="https://www.facebook.com/p/Ml%C3%A1de%C5%BEn%C3%ADcky-parlament-Snina-100092895751320/?locale=sk_SK"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-3 text-white transition hover:bg-white/20"
                aria-label="Facebook"
              >
                <FacebookIcon />
                <span className="font-semibold">Facebook</span>
              </a>

              <div className="inline-flex items-center rounded-2xl bg-white/10 px-5 py-3 text-white">
                <span className="font-semibold">parlament.snina@gmail.com</span>
              </div>

              <div className="inline-flex items-center rounded-2xl bg-white/10 px-5 py-3 text-white">
                <span className="font-semibold">#mladáSnina</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
