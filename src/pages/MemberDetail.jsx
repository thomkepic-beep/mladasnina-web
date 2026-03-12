import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import { members } from '../data'

export default function MemberDetail() {
  const { slug } = useParams()
  const member = members.find((item) => item.slug === slug)

  if (!member) {
    return <Navigate to="/clenovia" replace />
  }

  return (
    <>
      <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <Link to="/clenovia" className="inline-flex text-sm font-bold text-[#1E2F6E]">
          ← Späť na členov
        </Link>

        <div className="mt-8 grid gap-10 rounded-[36px] bg-white p-8 shadow-sm ring-1 ring-slate-200 lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
          <div>
            <img src={member.photo} alt={member.name} className="h-[420px] w-full rounded-[28px] object-cover" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#1E2F6E]">Profil člena</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-[#0B1A4A]">{member.name}</h1>
            <p className="mt-4 text-lg font-semibold text-[#1E2F6E]">{member.role}</p>
            <p className="mt-2 text-slate-500">{member.school}</p>

            <div className="mt-8 rounded-[28px] bg-[#F5F7FB] p-6 ring-1 ring-slate-200">
              <h2 className="text-xl font-black text-[#0B1A4A]">Bio</h2>
              <p className="mt-3 leading-8 text-slate-600">{member.bio}</p>
            </div>
          </div>
        </div>
      </main>

      <ContactSection />
    </>
  )
}
