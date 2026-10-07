import Link from 'next/link'
import Image from 'next/image'
import NewsletterSignup from './NewsletterSignup'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <Image
              src="/images/MCAW_LOGO_Primary_Dark_Transparent_NoDate_v1.0.png"
              alt="Medical Cannabis Awareness Week"
              width={170}
              height={50}
              className="footer-logo"
            />
            <p><strong>Together for Patients. </strong></p>
            <p>A UK-wide awareness, education and community campaign for prescribed cannabis-based medicines.</p>
            <p className="footer-note">Organised collaboratively by our <Link href="/partners">partner organisations</Link></p>
          </div>

          <div className="footer-links">
            <h5>Site</h5>
            <Link href="/about">About</Link>
            <Link href="/open-campaign">Our statement</Link>
            <Link href="/events">Programme</Link>
            <Link href="/partners">Partners</Link>
            <Link href="/get-involved">Get Involved</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-links">
            <h5>Get Involved</h5>
            <Link href="/events">Attend an event</Link>
            <Link href="/get-involved#share">Share your story</Link>
            <Link href="/get-involved#partner">Become a partner</Link>
            <Link href="/get-involved#support">Support MCAW</Link>
          </div>

          <div className="footer-links">
            <h5>Legal</h5>
            <Link href="/policies">All policies</Link>
            <Link href="/policies/privacy">Privacy policy</Link>
            <Link href="/policies/cookies">Cookie policy</Link>
            <Link href="/policies/terms">Terms &amp; conditions</Link>
            <Link href="/policies/complaints">Complaints</Link>
            <Link href="/policies/safeguarding">Safeguarding</Link>
          </div>

          <div className="footer-newsletter">
            <NewsletterSignup variant="compact" />
          </div>
        </div>

        <div className="footer-bottom">
          <p>MCAW does not provide medical advice. Always consult your prescribing clinician.</p>
          <p>Medical Cannabis Awareness Week is organised by a group of organisations. Company information can be found on each organiser&apos;s own website.</p>
        </div>
      </div>
    </footer>
  )
}