import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navigation } from '../data'

function LogoMark() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src="/MPS logo2.PNG" alt="Mládežnícky parlament Snina" className="h-12 w-auto" />
    </Link>
  )
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F5F7FB] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-[#F1DE8B]/20 bg-[#0B1A4A]/95 shadow-lg backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <LogoMark />

          <nav className="hidden flex-wrap items-center gap-5 text-sm font-black uppercase tracking-[0.08em] text-white lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative transition ${isActive ? 'text-[#F1DE8B]' : 'text-white hover:text-[#F1DE8B]'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <span
                      className={`absolute -bottom-2 left-0 h-[3px] rounded-full bg-[#F1DE8B] transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-xl border border-white/15 p-2 text-white lg:hidden"
            aria-label="Otvoriť menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open ? (
          <div className="border-t border-white/10 bg-[#0B1A4A] lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-3 py-3 text-sm font-bold uppercase tracking-[0.08em] transition ${
                      isActive ? 'bg-white/10 text-[#F1DE8B]' : 'text-white hover:bg-white/5'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      {children}
    </div>
  )
}
