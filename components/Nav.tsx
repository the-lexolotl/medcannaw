'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type NavLink = { href: string; label: string; highlight?: boolean }
type NavGroup = {
  id: string
  label: string
  items: { href: string; label: string; description: string }[]
}
type NavEntry = NavLink | NavGroup

const entries: NavEntry[] = [
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Programme' },
  {
    id: 'learn',
    label: 'Learn',
    items: [
      { href: '/learn/resources', label: 'Resources', description: 'Guides, downloads and videos' },
      { href: '/learn/stories', label: 'Patient Stories', description: 'Real experiences, in their own words' },
    ],
  },
  { href: '/raffle', label: 'Raffle', highlight: true },
  { href: '/partners', label: 'Partners' },
  { href: '/get-involved', label: 'Get Involved' },
]

function isGroup(entry: NavEntry): entry is NavGroup {
  return 'items' in entry
}

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

type NavDropdownProps = {
  group: NavGroup
  isOpen: boolean
  pathname: string
  onToggle: () => void
  onClose: () => void
  onNavigate: () => void
}

function NavDropdown({ group, isOpen, pathname, onToggle, onClose, onNavigate }: NavDropdownProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelId = `site-nav-group-${group.id}`

  // Close on outside click or Escape while open
  useEffect(() => {
    if (!isOpen) return

    function handlePointer(event: PointerEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) onClose()
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        buttonRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, onClose])

  return (
    <div
      ref={wrapperRef}
      className={`site-nav__group ${isOpen ? 'is-open' : ''}`}
      onBlur={(event) => {
        // Close when keyboard focus moves out of the dropdown
        if (isOpen && !event.currentTarget.contains(event.relatedTarget as Node | null) && event.relatedTarget) {
          onClose()
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="site-nav__group-toggle"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {group.label}
        <span className="site-nav__chevron" aria-hidden="true" />
      </button>

      <div id={panelId} className="site-nav__submenu">
        <ul>
          {group.items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="site-nav__sublink"
                aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
                onClick={onNavigate}
              >
                <span className="site-nav__sublink-label">{item.label}</span>
                <span className="site-nav__sublink-desc">{item.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)
  const pathname = usePathname() ?? '/'

  const closeGroup = useCallback(() => setOpenGroup(null), [])
  const closeAll = () => {
    setOpen(false)
    setOpenGroup(null)
  }

  return (
    <header className="site-nav">
      <div className="container site-nav__inner">
        <Link href="/" className="site-nav__logo" aria-label="MCAW home" onClick={closeAll}>
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
          {entries.map((entry) =>
            isGroup(entry) ? (
              <NavDropdown
                key={entry.id}
                group={entry}
                isOpen={openGroup === entry.id}
                pathname={pathname}
                onToggle={() => setOpenGroup((current) => (current === entry.id ? null : entry.id))}
                onClose={closeGroup}
                onNavigate={closeAll}
              />
            ) : (
              <Link
                key={entry.href}
                href={entry.href}
                className={entry.highlight ? 'site-nav__link--highlight' : undefined}
                aria-current={isCurrent(pathname, entry.href) ? 'page' : undefined}
                onClick={closeAll}
              >
                {entry.label}
              </Link>
            ),
          )}
          <Link href="/events" className="btn btn-primary site-nav__cta" onClick={closeAll}>
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
