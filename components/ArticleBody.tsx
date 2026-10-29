import type { ReactNode } from 'react'
import type { BodyBlock } from '@/app/learn/learn-data'

type ArticleBodyProps = {
  blocks: BodyBlock[]
}

/**
 * Renders an article `body` from learn-data.ts:
 *   'Paragraph'  → <p>
 *   '## Heading' → <h2>
 *   '- Item'     → <li>, consecutive items grouped into one <ul>
 *   { image }    → <figure> with optional caption
 */
export default function ArticleBody({ blocks }: ArticleBodyProps) {
  const output: ReactNode[] = []
  let list: string[] = []

  function flushList(key: string) {
    if (list.length === 0) return
    output.push(
      <ul key={key} className="article-list">
        {list.map((item, i) => (
          <li key={`${i}-${item}`}>{item}</li>
        ))}
      </ul>,
    )
    list = []
  }

  blocks.forEach((block, index) => {
    if (typeof block === 'string' && block.startsWith('- ')) {
      list.push(block.slice(2))
      return
    }

    flushList(`list-${index}`)

    if (typeof block !== 'string') {
      output.push(
        <figure key={`figure-${index}`} className="article-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={block.image} alt={block.alt} loading="lazy" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>,
      )
    } else if (block.startsWith('## ')) {
      output.push(
        <h2 key={`heading-${index}`} className="story-article__heading">
          {block.slice(3)}
        </h2>,
      )
    } else {
      output.push(<p key={`p-${index}`}>{block}</p>)
    }
  })

  flushList('list-end')

  return <div className="story-article__body">{output}</div>
}
