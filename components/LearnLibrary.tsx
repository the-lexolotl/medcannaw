'use client'

import { useEffect, useMemo, useState, type ReactNode } from 'react'
import LearnCard from './LearnCard'
import { formatFilterLabels, type LearnFormat, type LearnItem } from '@/app/learn/learn-data'

type Filter = 'all' | LearnFormat

type LearnLibraryProps = {
  items: LearnItem[]
  /** Used in the results count, e.g. { one: 'resource', many: 'resources' } */
  noun: { one: string; many: string }
  /** Shown when there are no items at all */
  empty: ReactNode
}

const FORMAT_ORDER: LearnFormat[] = ['video', 'article', 'download', 'embed', 'link']

export default function LearnLibrary({ items, noun, empty }: LearnLibraryProps) {
  const [filter, setFilter] = useState<Filter>('all')

  // Only offer filters for formats that actually have content
  const formats = useMemo(
    () => FORMAT_ORDER.filter((format) => items.some((item) => item.format === format)),
    [items],
  )

  // Read ?format= on first load so filtered views can be linked to
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('format')
    if (requested && formats.includes(requested as LearnFormat)) {
      setFilter(requested as LearnFormat)
    }
  }, [formats])

  function choose(next: Filter) {
    setFilter(next)
    const url = new URL(window.location.href)
    if (next === 'all') url.searchParams.delete('format')
    else url.searchParams.set('format', next)
    window.history.replaceState(null, '', url.toString())
  }

  if (items.length === 0) return <div className="learn-empty">{empty}</div>

  const shown = filter === 'all' ? items : items.filter((item) => item.format === filter)

  return (
    <div className="learn-library">
      {formats.length > 1 && (
        <div className="learn-filters" role="group" aria-label="Filter by format">
          <button
            type="button"
            className="learn-filter"
            aria-pressed={filter === 'all'}
            onClick={() => choose('all')}
          >
            All
          </button>
          {formats.map((format) => (
            <button
              key={format}
              type="button"
              className="learn-filter"
              aria-pressed={filter === format}
              onClick={() => choose(format)}
            >
              {formatFilterLabels[format]}
            </button>
          ))}
        </div>
      )}

      <p className="learn-count" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? noun.one : noun.many}
      </p>

      <div className="learn-grid">
        {shown.map((item) => (
          <LearnCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
