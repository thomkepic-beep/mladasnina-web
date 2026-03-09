import React from 'react'

export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#1E2F6E]">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-[#0B1A4A] sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-slate-600">{text}</p> : null}
    </div>
  )
}
