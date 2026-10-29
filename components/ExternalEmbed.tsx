'use client'

import { useEffect, useRef, useState } from 'react'
import type { EmbedAspect } from '@/app/learn/learn-data'

type ExternalEmbedProps = {
  title: string
  /** iframe src from the provider's embed code (Canva, Google Slides…) */
  src?: string
  /** Full embed code for script-based widgets (e.g. POWR) — rendered inside its own frame */
  html?: string
  /** Name shown on the load panel when using html, e.g. "POWR" */
  provider?: string
  /** Optional "Open in a new tab" link. Defaults to src. */
  href?: string
  aspect?: EmbedAspect
}

function hostnameOf(src: string) {
  try {
    return new URL(src).hostname.replace(/^www\./, '')
  } catch {
    return undefined
  }
}

// Wraps pasted embed code in a minimal page so script widgets run in their own frame.
// That keeps them working when people move between pages, and stops their scripts
// and styles affecting the rest of the site.
function wrapHtml(html: string) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><base target="_blank"><style>html,body{margin:0;padding:0;background:#fff;}</style></head><body>${html}</body></html>`
}

/**
 * Click-to-load embed for third-party content.
 * Nothing loads from the other site until someone asks for it, and where there's a
 * direct link there's always an "Open in a new tab" option for people who find embeds hard to use.
 */
export default function ExternalEmbed({ title, src, html, provider, href, aspect = '16/9' }: ExternalEmbedProps) {
  const [loaded, setLoaded] = useState(false)
  const frameRef = useRef<HTMLIFrameElement>(null)
  const source = provider ?? (src ? hostnameOf(src) : undefined) ?? 'another website'
  const openHref = href ?? src

  useEffect(() => {
    if (loaded) frameRef.current?.focus()
  }, [loaded])

  if (!src && !html) return null

  return (
    <div className="media-embed">
      <div className="media-frame" style={{ aspectRatio: aspect }}>
        {loaded ? (
          html ? (
            <iframe ref={frameRef} srcDoc={wrapHtml(html)} title={title} allowFullScreen />
          ) : (
            <iframe ref={frameRef} src={src} title={title} loading="lazy" allowFullScreen />
          )
        ) : (
          <div className="media-placeholder">
            <button type="button" className="btn btn-primary" onClick={() => setLoaded(true)}>
              Load content<span className="visually-hidden">: {title}</span>
            </button>
            <p>This loads content from {source} inside this page.</p>
          </div>
        )}
      </div>
      {openHref && (
        <a href={openHref} target="_blank" rel="noopener noreferrer" className="media-embed__open">
          Open in a new tab<span className="visually-hidden">: {title}</span>
        </a>
      )}
    </div>
  )
}
