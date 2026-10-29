'use client'

import { useEffect, useRef, useState } from 'react'

type YouTubeEmbedProps = {
  /** The ID from the YouTube link (youtube.com/watch?v=THIS_PART) */
  id: string
  title: string
  /** Optional start time in seconds */
  start?: number
}

/**
 * Click-to-play YouTube player.
 * Shows a thumbnail and play button first, so no YouTube player, scripts or cookies
 * load until someone chooses to watch. Plays from youtube-nocookie.com.
 */
export default function YouTubeEmbed({ id, title, start }: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false)
  const [thumbFailed, setThumbFailed] = useState(false)
  const frameRef = useRef<HTMLIFrameElement>(null)

  // Move focus to the player once it replaces the button, so keyboard users aren't lost
  useEffect(() => {
    if (playing) frameRef.current?.focus()
  }, [playing])

  const params = new URLSearchParams({ autoplay: '1', rel: '0' })
  if (start) params.set('start', String(start))

  return (
    <div className="media-frame">
      {playing ? (
        <iframe
          ref={frameRef}
          src={`https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button type="button" className="media-facade" onClick={() => setPlaying(true)}>
          {!thumbFailed && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="media-facade__thumb"
              onError={() => setThumbFailed(true)}
            />
          )}
          <span className="media-facade__play" aria-hidden="true" />
          <span className="media-facade__label">
            Play video<span className="visually-hidden">: {title}</span>
            <span className="media-facade__source" aria-hidden="true"> · YouTube</span>
          </span>
        </button>
      )}
    </div>
  )
}
