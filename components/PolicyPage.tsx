import Link from 'next/link'

interface PolicyPageProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export default function PolicyPage({ title, lastUpdated, children }: PolicyPageProps) {
  return (
    <section className="section">
      <div className="container policy-layout">
        <div className="policy-layout__main">
          <Link href="/policies">&larr; Back to policies</Link>
          <p style={{ color: 'var(--mid-grey)', fontSize: '0.9rem', marginTop: '1.5rem' }}>
            Last updated: {lastUpdated}
          </p>
          <h1>{title}</h1>
          <div>{children}</div>
        </div>

        <aside>
          <div style={{ border: '2px solid var(--mcaw-black)', borderRadius: '4px', padding: '1.5rem' }}>
            <h4>Our policies</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <li><Link href="/policies/cookies">Cookie policy &rarr;</Link></li>
              <li><Link href="/policies/privacy">Privacy policy &rarr;</Link></li>
              <li><Link href="/policies/terms">Terms &amp; conditions &rarr;</Link></li>
              <li><Link href="/policies/raffle-terms">Raffle terms &amp; conditions &rarr;</Link></li>
              <li><Link href="/policies/complaints">Complaints procedure &rarr;</Link></li>
              <li><Link href="/policies/safeguarding">Safeguarding policy &rarr;</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  )
}