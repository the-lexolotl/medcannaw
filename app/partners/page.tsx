export const metadata = { title: 'Partners | MCAW' }

const partners = [
  { name: 'Partner Organisation 1' },
  { name: 'Partner Organisation 2' },
  { name: 'Partner Organisation 3' },
]

export default function PartnersPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">Speakers &amp; Partners</span>
        <h1>Working Together</h1>
        <p style={{ maxWidth: '65ch' }}>
          MCAW is only possible through the organisations, clinicians and advocates who take
          part each year.
        </p>
        <div className="partner-grid">
          {partners.map((partner) => (
            <div key={partner.name} className="partner-card">
              <p style={{ fontWeight: 700, margin: 0 }}>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}