import { Link } from "react-router-dom"
import SectionTitle from "../components/SectionTitle"
import { members, featuredMemberSlugs } from "../data"

export default function Home() {

  const featuredMembers = members.filter(member =>
    featuredMemberSlugs.includes(member.slug)
  )

  function getInitials(name) {
    return name
      .split(" ")
      .map(p => p[0])
      .join("")
      .slice(0,2)
      .toUpperCase()
  }

  return (
    <>

      {/* HERO */}

      <section className="bg-[#0B1A4A] text-white py-28">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-black">
            Mládežnícky parlament Snina
          </h1>

          <p className="mt-6 text-lg text-slate-200 max-w-2xl mx-auto">
            Priestor pre mladých ľudí, ktorí chcú byť aktívni,
            prinášať nápady a meniť svoje mesto.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <Link
              to="/join"
              className="bg-[#F1DE8B] text-[#0B1A4A] px-6 py-3 rounded-xl font-bold"
            >
              Pridaj sa k nám
            </Link>

            <Link
              to="/about"
              className="border border-white px-6 py-3 rounded-xl font-bold"
            >
              O MP Snina
            </Link>

          </div>

        </div>
      </section>


      {/* ČO ROBÍME */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <SectionTitle
          eyebrow="Čo robíme"
          title="Aktivity, ktoré prepájajú mladých ľudí, mesto a komunitu"
          text="Mládežnícky parlament Snina vytvára priestor pre participáciu, vlastné aktivity a dobrovoľníctvo."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="p-8 rounded-3xl border bg-white shadow-sm">
            <h3 className="text-xl font-bold text-[#0B1A4A]">
              Participácia
            </h3>
            <p className="mt-3 text-slate-600">
              Zapájame mladých ľudí do diskusie o témach,
              ktoré sa týkajú ich života v meste.
            </p>
          </div>

          <div className="p-8 rounded-3xl border bg-white shadow-sm">
            <h3 className="text-xl font-bold text-[#0B1A4A]">
              Organizácia aktivít
            </h3>
            <p className="mt-3 text-slate-600">
              Pripravujeme podujatia a aktivity pre mladých
              ľudí v meste Snina.
            </p>
          </div>

          <div className="p-8 rounded-3xl border bg-white shadow-sm">
            <h3 className="text-xl font-bold text-[#0B1A4A]">
              Dobrovoľníctvo
            </h3>
            <p className="mt-3 text-slate-600">
              Zapájame sa do pomoci pri aktivitách mesta
              a komunitných projektoch.
            </p>
          </div>

        </div>

      </section>



      {/* ČLENOVIA */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <SectionTitle
          eyebrow="Členovia"
          title="Ľudia, ktorí tvoria Mládežnícky parlament Snina"
          text="Predstavujeme členov parlamentu, ktorí sa aktívne zapájajú do života mesta."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {featuredMembers.map(member => (

            <Link
              key={member.slug}
              to={`/clen/${member.slug}`}
              className="p-6 rounded-3xl border bg-white shadow-sm hover:shadow-lg transition"
            >

              <div className="flex flex-col items-center text-center">

                {member.photo ? (

                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-28 w-28 rounded-full object-cover"
                  />

                ) : (

                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-slate-200 text-xl font-black text-[#0B1A4A]">
                    {getInitials(member.name)}
                  </div>

                )}

                <h3 className="mt-4 text-lg font-bold text-[#0B1A4A]">
                  {member.name}
                </h3>

                <p className="text-sm text-slate-600">
                  {member.role}
                </p>

                <p className="text-sm text-slate-500">
                  {member.school}
                </p>

              </div>

            </Link>

          ))}

        </div>

        <div className="mt-10 text-center">

          <Link
            to="/clenovia"
            className="bg-[#0B1A4A] text-white px-6 py-3 rounded-xl font-bold"
          >
            Zobraziť všetkých členov
          </Link>

        </div>

      </section>

    </>
  )
}
