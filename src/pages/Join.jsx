import React from 'react'
import ContactSection from '../components/ContactSection'
import JoinForm from '../components/JoinForm'

export default function Join() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 rounded-[36px] bg-[linear-gradient(135deg,#0B1A4A_0%,#13245B_60%,#1E2F6E_100%)] px-8 py-10 text-white shadow-2xl lg:grid-cols-[1fr_0.95fr] lg:px-12 lg:py-14">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#F1DE8B]">Pridaj sa k nám</p>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Chceš byť súčasťou aktivít pre mladých v Snine?</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
              Ak máš nápady, energiu a chuť zapojiť sa do organizovania podujatí alebo aktivít pre mladých ľudí, pridaj sa k nám.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
              Členom Mládežníckeho parlamentu Snina sa môže stať fyzická osoba vo veku od 13 do 20 rokov, ktorá má trvalé bydlisko v meste Snina alebo navštevuje školu na území mesta Snina.
            </p>
          </div>

          <div className="rounded-[28px] bg-white p-6 text-slate-900 shadow-lg">
            <JoinForm />
          </div>
        </div>
      </main>

      <ContactSection />
    </>
  )
}
