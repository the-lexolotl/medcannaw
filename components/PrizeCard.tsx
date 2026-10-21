import type { RafflePhase, RafflePrize } from '@/app/raffle/raffle-data'
import { formatGBP } from '@/app/raffle/raffle-data'

type PrizeCardProps = {
  prize: RafflePrize
  phase: RafflePhase
}

export default function PrizeCard({ prize, phase }: PrizeCardProps) {
  const { id, brand, name, quantity, valueEach, ticketPrice, image, imageAlt, entryHref } = prize
  const prizeLabel = quantity === 1 ? '1 prize' : `${quantity} prizes`

  return (
    <article className="prize-card" aria-labelledby={`prize-${id}`}>
      <div className="prize-card__media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={imageAlt} loading="lazy" />
        <span className="prize-card__id">{id}</span>
      </div>

      <div className="prize-card__body">
        <p className="prize-card__brand">{brand}</p>
        <h3 id={`prize-${id}`} className="prize-card__name">{name}</h3>
        <p className="prize-card__meta">
          <span>{prizeLabel}</span>
          <span aria-hidden="true"> · </span>
          <span>Worth {formatGBP(valueEach)}{quantity > 1 ? ' each' : ''}</span>
        </p>

        <div className="prize-card__price">
          <span className="prize-card__price-value">{formatGBP(ticketPrice)}</span>
          <span className="prize-card__price-label">per ticket</span>
        </div>

        <PrizeAction phase={phase} entryHref={entryHref} name={`${brand} ${name}`} />
      </div>
    </article>
  )
}

function PrizeAction({ phase, entryHref, name }: { phase: RafflePhase; entryHref: string; name: string }) {
  if (phase === 'open' && entryHref) {
    return (
      <a
        href={entryHref}
        className="btn btn-primary prize-card__cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Enter on Zeffy
        <span className="visually-hidden"> for the {name} raffle (opens in a new tab)</span>
      </a>
    )
  }

  const notes: Record<RafflePhase, string> = {
    upcoming: 'Subscribers first: 26 October',
    'early-access': 'Subscriber early access: link in your inbox',
    open: 'Entry link coming soon',
    closed: 'Entries closed. Draw at 9pm',
    drawn: 'This raffle has been drawn',
  }

  return <p className="prize-card__status">{notes[phase]}</p>
}
