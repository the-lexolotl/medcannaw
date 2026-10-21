'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type NavLink = { href: string; label: string; highlight?: boolean }

const links: NavLink[] = [
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Programme' },
  { href: '/raffle', label: 'Raffle', highlight: true },
  { href: '/partners', label: 'Partners' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-nav">
      <div className="container site-nav__inner">
        <Link href="/" className="site-nav__logo" aria-label="MCAW home">
          <Image
            src="/images/MCAW_LOGO_Primary_Light_Transparent_NoDate_v1.0.png"
            alt="Medical Cannabis Awareness Week"
            width={160}
            height={48}
            className="logo-img"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          id="site-nav-menu"
          className={`site-nav__links ${open ? 'is-open' : ''}`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.highlight ? 'site-nav__link--highlight' : undefined}
              onClick={() => setOpen(false)}
            >
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