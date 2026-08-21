export const metadata = { title: 'About | MCAW' }

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">About</span>
        <h1>About Medical Cannabis Awareness Week</h1>
        <p style={{ fontSize: '1.1rem', maxWidth: '70ch' }}>
          MCAW is a UK-wide awareness, education and community campaign focused on prescribed
          cannabis-based medicines (CBPMs). We bring together existing patients, people
          considering treatment, families and carers, healthcare professionals, advocates,
          researchers and industry to raise awareness, share real experiences and challenge
          stigma and misinformation.
        </p>
        <p style={{ maxWidth: '70ch' }}>
          MCAW is not a recreational cannabis campaign, lifestyle brand or commercial
          marketplace — it's a patient-led movement focused on education, access and
          collaboration.
        </p>
      </div>
    </section>
  )
}