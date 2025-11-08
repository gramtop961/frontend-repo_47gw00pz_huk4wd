import { useState } from 'react'

function NavLink({ label, href = '#' }) {
  return (
    <a
      href={href}
      className="text-sm md:text-base text-zinc-300 hover:text-white transition-colors"
    >
      {label}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-zinc-950/60 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-white font-semibold tracking-wider text-lg">
            NOIR
            <span className="ml-2 rounded bg-white text-zinc-900 px-1.5 py-0.5 text-xs align-middle">WEAR</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink label="New Arrivals" />
            <NavLink label="Men" />
            <NavLink label="Women" />
            <NavLink label="Accessories" />
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition">Sign in</button>
            <button className="rounded-full bg-white text-zinc-900 px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition">Shop Now</button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white hover:bg-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-4 pt-2">
              <NavLink label="New Arrivals" />
              <NavLink label="Men" />
              <NavLink label="Women" />
              <NavLink label="Accessories" />
              <div className="pt-2 flex gap-2">
                <button className="flex-1 rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition">Sign in</button>
                <button className="flex-1 rounded-full bg-white text-zinc-900 px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition">Shop Now</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
