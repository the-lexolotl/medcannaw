type ComingSoonProps = {
  eyebrow: string
  title: string
  message: string
}

export default function ComingSoon({ eyebrow, title, message }: ComingSoonProps) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="section-label">{eyebrow}</div>
          <h1>{title}</h1>
        </div>
      </section>

      <div className="seam" />

      <section className="section">
        <div className="container coming-soon__inner">
          <span className="coming-soon__mark">*</span>
          <p className="coming-soon__message">{message}</p>
          <a href="/newsletter" className="btn btn-primary">Get notified</a>
        </div>
      </section>
    </>
  )
}