import React from 'react'
import SectionTitle from '../components/SectionTitle'
import JoinForm from '../components/JoinForm'

export default function Join() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <SectionTitle eyebrow="Pridaj sa k nám" title="Staň sa súčasťou MP Snina" text="Vyplň formulár a tvoja prihláška sa automaticky zapíše do Google Sheets." />
      <div className="mt-10 max-w-2xl rounded-[28px] bg-white p-8 shadow-sm">
        <JoinForm />
      </div>
    </main>
  )
}
