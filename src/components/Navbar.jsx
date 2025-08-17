import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Navbar(){
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)

  const linkBase = 'block px-3 py-2 rounded-lg text-sm md:text-base hover:bg-gray-100 dark:hover:bg-gray-800'

  return (
    <nav className="bg-gray-50/70 dark:bg-gray-900/70 backdrop-blur border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="container py-3">
        <div className="flex items-center justify-between gap-3">
          <Link to="/" className="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-400">Snehil Kumbhani</Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={linkBase}>Home</NavLink>
            <NavLink to="/about" className={linkBase}>About</NavLink>
            <NavLink to="/projects" className={linkBase}>Projects</NavLink>
            <NavLink to="/resume" className={linkBase}>Resume</NavLink>
            <button onClick={toggleTheme} className="ml-2 btn btn-outline" aria-label="Toggle theme">
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <button onClick={toggleTheme} className="btn btn-outline" aria-label="Toggle theme">
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
            <button onClick={() => setOpen(o => !o)} className="btn btn-ghost" aria-label="Open menu">☰</button>
          </div>
        </div>

        {/* Mobile sheet */}
        {open && (
          <div className="md:hidden mt-3 grid gap-1">
            <NavLink onClick={()=>setOpen(false)} to="/" className={linkBase}>Home</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/about" className={linkBase}>About</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/projects" className={linkBase}>Projects</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/resume" className={linkBase}>Resume</NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}