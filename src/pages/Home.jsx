import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { members, featuredMemberSlugs } from "../data";

const homepageEvents = [
  {
    title: "Ples mladých",
    text: "Spoločenské podujatie pre mladých ľudí v Snine, ktoré spája zábavu, kultúru a dobrú atmosféru.",
  },
  {
    title: "Piknik kino",
    text: "Letné premietanie filmov pod holým nebom, ktoré vytvára príjemnú atmosféru pre mladých aj rodiny.",
  },
  {
    title: "Gaming Day",
    text: "Tematické podujatie pre fanúšikov hier a moderných technológií, ktoré prináša súťaže, zábavu a komunitu.",
  },
  {
    title: "Color Run",
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
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#0B1A4A]/70" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#F1DE8B]">
              Mládežnícky parlament Snina
            </p>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Priestor pre mladých ľudí, ktorí chcú byť aktívni a meniť svoje
              mesto.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Spájame mladých ľudí zo základných a stredných škôl, organizujeme
              podujatia, podporujeme dobrovoľníctvo a vytvárame priestor pre
              nové nápady v meste Snina.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/pridaj-sa"
                className="inline-flex rounded-2xl bg-[#F1DE8B] px-6 py-3 font-bold text-[#0B1A4A] transition hover:opacity-90"
              >
                Pridaj sa k nám
              </Link>

              <Link
                to="/o-mp-snina"
                className="inline-flex rounded-2xl border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Zisti viac o MP
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 px-4 py-4 backdrop-blur">
                <div className="text-2xl font-black text-[#F1DE8B]">15</div>
                <div className="text-sm text-slate-200">členov parlamentu</div>
              </div>
              <div className="rounded-2xl bg-white/10 px-4 py-4 backdrop-blur">
                <div className="text-2xl font-black text-[#F1DE8B]">13–20</div>
                <div className="text-sm text-slate-200">rokov členstva</div>
              </div>
              <div className="rounded-2xl bg-white/10 px-4 py-4 backdrop-blur">
                <div className="text-2xl font-black text-[#F1DE8B]">Snina</div>
                <div className="text-sm text-slate-200">
                  mladí pre svoje mesto
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O MP - krátky blok */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
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
                className="inline-flex rounded-2xl bg-[#0B1A4A] px-6 py-3 font-bold text-white transition hover:bg-[#13245B]"
              >
                Viac o MP Snina
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] bg-[#F8F9FC] p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-2xl font-black text-[#0B1A4A]">
              Členstvo v MPS
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Členom Mládežníckeho parlamentu Snina sa môže stať fyzická osoba
              vo veku od 13 do 20 rokov, ktorá má trvalé bydlisko v meste Snina
              alebo navštevuje školu na území mesta Snina.
            </p>
          </div>
        </div>
      </section>

      {/* ČO ROBÍME */}
      <section className="bg-[#F8F9FC]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Čo robíme"
            title="Aktivity, ktoré prepájajú mladých ľudí, mesto a komunitu"
            text="Mládežnícky parlament Snina vytvára priestor pre participáciu, vlastné aktivity a dobrovoľníctvo v meste Snina."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1DE8B] text-2xl">
                👥
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
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1DE8B] text-2xl">
                📅
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
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F1DE8B] text-2xl">
                🤝
              </div>
              <h3 className="text-2xl font-black text-[#0B1A4A]">
                Dobrovoľníctvo
              </h3>
              <p className="mt-4 leading-8 text-slate-600">
                Zapájame sa do medzigeneračného stretávania so seniormi v
                denných centrách, upratovania a pomoci pri aktivitách
                organizovaných mestom Snina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PODUJATIA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="Naše podujatia"
          title="Podujatia, ktoré vytvárajú priestor pre komunitu, zážitky a aktivitu"
          text="Mládežnícky parlament Snina počas roka organizuje viacero podujatí pre mladých ľudí."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {homepageEvents.map((event) => (
            <div
              key={event.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 h-40 rounded-[20px] bg-gradient-to-br from-[#0B1A4A] to-[#1E2F6E]" />
              <h3 className="text-xl font-black text-[#0B1A4A]">
                {event.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {event.text}
              </p>
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
      </section>

      {/* ČLENOVIA */}
      <section className="bg-[#F8F9FC]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
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
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-28 w-28 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-slate-200 bg-white text-2xl font-black text-[#0B1A4A]">
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
              className="inline-flex rounded-2xl bg-[#0B1A4A] px-6 py-3 font-bold text-white transition hover:bg-[#13245B]"
            >
              Zobraziť všetkých členov
            </Link>
          </div>
        </div>
      </section>

      {/* PREČO SA ZAPOJIŤ */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionTitle
          eyebrow="Prečo sa zapojiť"
          title="Byť súčasťou MP Snina znamená viac než len členstvo"
          text="Mládežnícky parlament vytvára priestor pre rast, skúsenosti a nové kontakty."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 text-3xl">🚀</div>
            <h3 className="text-2xl font-black text-[#0B1A4A]">
              Nové skúsenosti
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Získaš skúsenosti s organizáciou podujatí, projektov a aktivít pre
              mladých ľudí.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 text-3xl">👥</div>
            <h3 className="text-2xl font-black text-[#0B1A4A]">
              Nové priateľstvá a kontakty
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Spoznáš mladých ľudí s podobnými záujmami a vytvoríš si nové
              priateľstvá aj kontakty.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 text-3xl">🏙️</div>
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
      <section className="bg-[#F8F9FC]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            eyebrow="Galéria"
            title="Atmosféra našich aktivít a podujatí"
            text="Pozri si výber fotografií z aktivít Mládežníckeho parlamentu Snina."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryPreview.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={image}
                  alt={`Galéria ${index + 1}`}
                  className="h-64 w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/galeria"
              className="inline-flex rounded-2xl bg-[#0B1A4A] px-6 py-3 font-bold text-white transition hover:bg-[#13245B]"
            >
              Zobraziť galériu
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[36px] bg-[#0B1A4A] px-8 py-14 text-center text-white shadow-xl lg:px-14">
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
              className="inline-flex rounded-2xl bg-[#F1DE8B] px-6 py-3 font-bold text-[#0B1A4A] transition hover:opacity-90"
            >
              Vyplniť prihlášku
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
