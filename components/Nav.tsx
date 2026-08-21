'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Programme' },
  { href: '/partners', label: 'Partners' },
  { href: '/newsletter', label: 'Newsletter' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-nav">
      <div className="container site-nav__inner">
        <Link href="/" className="site-nav__logo" aria-label="MCAW home">
          MCAW
        </Link>

        <nav
          aria-label="Main navigation"
          id="site-nav-menu"
          className={`site-nav__links ${open ? 'is-open' : ''}`}
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/events"
            className="btn btn-primary site-nav__cta"
            onClick={() => setOpen(false)}
          >
            Explore the Programme
          </Link>
        </nav>

        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={open}
          aria-controls="site-nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}