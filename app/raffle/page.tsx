import type { Metadata } from 'next'
import Link from 'next/link'
import PrizeCard from '@/components/PrizeCard'
import NewsletterSignup from '@/components/NewsletterSignup'
import CircleField from '@/components/CircleField'
import {
  visibleRafflePrizes,
  raffleOrganiser,
  getRafflePhase,
  totalPrizeCount,
  totalRaffleCount,
  numberToWords,
  type RafflePhase,
} from './raffle-data'

const raffleWord = numberToWords(totalRaffleCount)
const RaffleWord = raffleWord.charAt(0).toUpperCase() + raffleWord.slice(1)

export const metadata: Metadata = {
  title: 'Prize Raffle | MCAW',
  description:
    `The MCAW 2026 Prize Raffle: ${raffleWord} raffles, ${numberToWords(totalPrizeCount)} donated prizes, tickets from £1. Newsletter subscribers get first access from 26 October. Draw on 8 November 2026 at 9pm.`,
}

// Re-check the date every minute so the page moves through early access, general sale and close on its own.
export const revalidate = 60

const heroStatus: Record<RafflePhase, { label: string; text: string }> = {
  upcoming: {
    label: 'Opens 26 October',
    text: 'Newsletter subscribers get first access to tickets from 26 October. Sign up now so you don’t miss it.',
  },
  'early-access': {
    label: 'Subscriber early access',
    text: 'Tickets are on sale to newsletter subscribers now. Check your inbox for your link, or sign up below to get it.',
  },
  open: {
    label: 'Tickets on sale now',
    text: 'Entries close at 8pm on Sunday 8 November. Choose a prize below to enter.',
  },
  closed: {
    label: 'Entries closed',
    text: `Thank you to everyone who entered. All ${raffleWord} raffles will be drawn at 9pm tonight.`,
  },
  drawn: {
    label: 'Raffles drawn',
    text: 'Thank you for supporting MCAW. Winners will be contacted within 7 days of the draw.',
  },
}

const keyDates = [
  { label: 'Subscriber early access', date: '26 October', note: 'Tickets open to newsletter subscribers first' },
  { label: 'General sale', date: '1 November', note: 'Tickets open to everyone' },
  { label: 'Entries close', date: '8 November', note: '8pm UK time' },
  { label: 'The draw', date: '8 November', note: '9pm UK time' },
]

export default function RafflePage() {
  const phase = getRafflePhase()
  const status = heroStatus[phase]
  const showSignupFirst = phase === 'upcoming' || phase === 'early-access'

  return (
    <>
      {/* Hero */}
      <section className="section section--black section--decorative raffle-hero">
        <CircleField variant="corner-tr" tone="on-dark" />
        <div className="container">
          <span className="eyebrow">MCAW 2026 Prize Raffle</span>
          <h1 className="display">Win a prize. Back the campaign.</h1>
          <p className="raffle-hero__intro">
            {RaffleWord} raffles, {totalPrizeCount} donated prizes, tickets from £1. Every ticket helps
            {' '}{raffleOrganiser.society} keep supporting patients, during MCAW and all year round.
          </p>

          <p className="raffle-status">
            <span className="raffle-status__label">{status.label}</span>
            <span className="raffle-status__text">{status.text}</span>
          </p>

          <div className="raffle-hero__actions">
            {showSignupFirst ? (
              <>
                <a href="#early-access" className="btn btn-primary">Get early access</a>
                <a href="#prizes" className="btn btn-secondary btn-secondary--on-dark">See the prizes</a>
              </>
            ) : (
              <>
                <a href="#prizes" className="btn btn-primary">See the prizes</a>
                <Link href="/policies/raffle-terms" className="btn btn-secondary btn-secondary--on-dark">
                  Terms &amp; conditions
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      <div className="seam" />

      {/* Key dates */}
      <section className="raffle-dates" aria-labelledby="raffle-dates-heading">
        <div className="container">
          <h2 id="raffle-dates-heading" className="visually-hidden">Key dates</h2>
          <ol className="raffle-dates__list">
            {keyDates.map((item) => (
              <li key={item.label} className="raffle-dates__item">
                <span className="raffle-dates__label">{item.label}</span>
                <span className="raffle-dates__date">{item.date}</span>
                <span className="raffle-dates__note">{item.note}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Early access sign-up — sits above the prizes until general sale opens */}
      {showSignupFirst && <EarlyAccess phase={phase} />}

      {/* Prizes */}
      <section id="prizes" className="section raffle-prizes" aria-labelledby="prizes-heading">
        <div className="container">
          <div className="raffle-prizes__head">
            <h2 id="prizes-heading">The prizes</h2>
            <p>
              Each prize is its own raffle with its own tickets and its own draw, so pick the
              ones you want to win. Buying a ticket for one doesn’t enter you into the others.
            </p>
          </div>

          <div className="prize-grid">
            {visibleRafflePrizes.map((prize) => (
              <PrizeCard key={prize.id} prize={prize} phase={phase} />
            ))}
          </div>

          <p className="raffle-prizes__note">
            All prizes have been kindly donated. Prize values are the supplier’s recommended retail
            price. Winners must be 18 or over and live in Great Britain.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="section section--lime-mist" aria-labelledby="how-heading">
        <div className="container raffle-how">
          <div>
            <h2 id="how-heading">How it works</h2>
            <p>
              Tickets are sold through Zeffy, the fundraising platform we use to take payment and
              send e-tickets. The draws are run by {raffleOrganiser.society}.
            </p>
          </div>

          <ol className="activity-list raffle-how__steps">
            <li className="activity-item">
              <div className="activity-number" aria-hidden="true">01</div>
              <div className="activity-body">
                <h3>Choose your prize</h3>
                <p>Pick a raffle above and follow its link to the Zeffy entry page.</p>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-number" aria-hidden="true">02</div>
              <div className="activity-body">
                <h3>Buy your tickets</h3>
                <p>
                  Confirm you’re 18 or over and buy as many tickets as you like. Zeffy may suggest
                  an optional tip at checkout. It goes to Zeffy, not to us, and you can set it to £0
                  without affecting your entry.
                </p>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-number" aria-hidden="true">03</div>
              <div className="activity-body">
                <h3>Get your e-ticket</h3>
                <p>Your e-ticket and entry numbers arrive by email. Keep it until the draw.</p>
              </div>
            </li>
            <li className="activity-item">
              <div className="activity-number" aria-hidden="true">04</div>
              <div className="activity-body">
                <h3>The draw</h3>
                <p>
                  Each raffle is drawn at 9pm on 8 November using random.org, witnessed by two
                  people. Winners are contacted within 7 days.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Sign-up — moves below the prizes once everyone can enter */}
      {!showSignupFirst && (
        <section className="section">
          <div className="container">
            <NewsletterSignup
              variant="card"
              heading="Never miss an MCAW update"
              intro="Programme announcements, patient stories and first access to future MCAW raffles, straight to your inbox."
            />
          </div>
        </section>
      )}

      {/* Good to know */}
      <section className="section section--cool-grey" aria-labelledby="know-heading">
        <div className="container">
          <h2 id="know-heading">Good to know</h2>
          <div className="raffle-know">
            <div className="raffle-know__item">
              <h3>18+ only</h3>
              <p>You must be 18 or over to enter. We check the age of every winner before sending a prize.</p>
            </div>
            <div className="raffle-know__item">
              <h3>Great Britain only</h3>
              <p>Open to residents of England, Scotland and Wales. We can’t accept entries from Northern Ireland, the Channel Islands or the Isle of Man.</p>
            </div>
            <div className="raffle-know__item">
              <h3>One prize per raffle</h3>
              <p>You can win once in each raffle, but you can win in more than one raffle.</p>
            </div>
            <div className="raffle-know__item">
              <h3>Where the money goes</h3>
              <p>All prizes are donated, so ticket money goes to {raffleOrganiser.society}’s running costs, less any prize delivery costs.</p>
            </div>
          </div>

          <div className="raffle-responsible">
            <h3>Please play responsibly</h3>
            <p>
              Only spend what you can afford. If you’re worried about your own or someone else’s
              gambling, free and confidential support is available from{' '}
              <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer">
                GambleAware<span className="visually-hidden"> (opens in a new tab)</span>
              </a>{' '}
              or the National Gambling Helpline on{' '}
              <a href="tel:08088020133">0808 8020 133</a>, 24 hours a day.
            </p>
          </div>

          <Link href="/policies/raffle-terms" className="btn btn-secondary" style={{ marginTop: '2rem' }}>
            Read the full raffle terms &amp; conditions
          </Link>
        </div>
      </section>

      {/* Legal line */}
      <section className="raffle-legal" aria-label="Lottery registration">
        <div className="container">
          <p>
            The MCAW 2026 Raffle Programme is six separate Small Society Lotteries (MCAW-01 to MCAW-06)
            promoted by {raffleOrganiser.society} (company no. {raffleOrganiser.companyNumber}),
            registered with {raffleOrganiser.council} under registration number{' '}
            {raffleOrganiser.registration}. Person responsible for the promotion:{' '}
            {raffleOrganiser.responsiblePerson}, {raffleOrganiser.address}. Questions?{' '}
            <a href={`mailto:${raffleOrganiser.email}`}>{raffleOrganiser.email}</a>
          </p>
        </div>
      </section>
    </>
  )
}

function EarlyAccess({ phase }: { phase: RafflePhase }) {
  return (
    <section
      id="early-access"
      className="section section--lime-mist raffle-early"
      aria-labelledby="early-access-heading"
    >
      <div className="container raffle-early__inner">
        <div className="raffle-early__copy">
          <span className="section-label">Subscribers first</span>
          <h2 id="early-access-heading" className="raffle-early__title">
            Get your tickets before anyone else.
          </h2>
          <p>
            {phase === 'upcoming'
              ? 'Newsletter subscribers can buy tickets from 26 October, nearly a week before general sale opens on 1 November.'
              : 'Early access is open now. Subscribers already have their link, and if you sign up today we’ll send you yours.'}
          </p>
          <ul className="raffle-early__list">
            <li>Your entry links by email, before general sale</li>
            <li>Programme announcements and patient stories</li>
            <li>No spam. Unsubscribe any time</li>
          </ul>
        </div>

        <div className="raffle-early__form">
          <NewsletterSignup
            variant="card"
            heading="Get early access"
            intro="Sign up to the MCAW newsletter and we’ll send you the raffle entry links first."
          />
        </div>
      </div>
    </section>
  )
}
