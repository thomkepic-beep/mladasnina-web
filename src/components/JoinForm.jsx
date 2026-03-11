import React, { useState } from 'react'
import { formEndpoint } from '../data'

export default function JoinForm() {
  const [formData, setFormData] = useState({ meno: '', skola: '', vek: '', sprava: '' })
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

 const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('loading')
  setMessage('Odosielanie prihlášky...')

  try {
    const payload = new URLSearchParams()
    payload.append('meno', formData.meno)
    payload.append('skola', formData.skola)
    payload.append('vek', formData.vek)
    payload.append('sprava', formData.sprava)

    await fetch(formEndpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: payload.toString()
    })

    setStatus('success')
    setMessage('Ďakujeme, tvoja prihláška bola úspešne odoslaná.')
    setFormData({ meno: '', skola: '', vek: '', sprava: '' })
  } catch (error) {
    setStatus('error')
    setMessage('Pri odosielaní nastal problém. Skús to prosím znova.')
  }
}

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <input name="meno" value={formData.meno} onChange={handleChange} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-[#1E2F6E]" placeholder="Meno a priezvisko" required />
      <input name="skola" value={formData.skola} onChange={handleChange} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-[#1E2F6E]" placeholder="Škola" required />
      <input name="vek" value={formData.vek} onChange={handleChange} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-[#1E2F6E]" placeholder="Vek" required />
      <textarea name="sprava" value={formData.sprava} onChange={handleChange} className="min-h-[130px] rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-[#1E2F6E]" placeholder="Prečo sa chceš pridať?" required />
      <button type="submit" disabled={status === 'loading'} className="rounded-2xl bg-[#F1DE8B] px-6 py-3 font-bold text-[#0B1A4A] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70">
        {status === 'loading' ? 'Odosielam...' : 'Odoslať záujem'}
      </button>
      {message ? <p className={`text-sm font-medium ${status === 'success' ? 'text-green-700' : status === 'error' ? 'text-red-600' : 'text-slate-600'}`}>{message}</p> : null}
    </form>
  )
}
