import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { nomoUrl } from '../data.ts'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#works', label: 'Selected works' },
  { href: '/#contact', label: 'Contact' },
]

export function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className="nav">
      <Link className="nav-about" to="/#about">
        About
      </Link>
      <Link className="mark" to="/">
        PENG CHENGXU
      </Link>
      <Link className="nav-contact" to="/#contact">
        Contact
      </Link>
      <button
        className="nav-menu"
        type="button"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Close' : 'Menu'}
      </button>
      {open ? (
        <div className="menu" id="site-menu">
          <nav aria-label="Menu">
            {links.map((link) => (
              <Link key={link.href} to={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <a href={nomoUrl} target="_blank" rel="noreferrer">
              Nomo
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
