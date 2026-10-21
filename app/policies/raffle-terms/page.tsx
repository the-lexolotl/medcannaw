import type { Metadata } from 'next'
import Link from 'next/link'
import PolicyPage from '@/components/PolicyPage'
import { rafflePrizes } from '@/app/raffle/raffle-data'

export const metadata: Metadata = {
  title: 'Raffle Terms & Conditions | MCAW',
  description:
    'Terms and conditions for the MCAW 2026 Raffle Programme: six Small Society Lotteries promoted by Medicinal Cannabis UK CIC.',
}

const money = (value: number) => `£${value.toFixed(2)}`
const count = (value: number) => value.toLocaleString('en-GB')

export default function RaffleTerms() {
  return (
    <PolicyPage title="MCAW 2026 Raffle Programme: Terms & Conditions" lastUpdated="18 October 2026">
      <p>
        <Link href="/raffle">&larr; Back to the prize raffle</Link>
      </p>

      <h2>About these Terms</h2>
      <p>
        These Terms &amp; Conditions apply to each of the individual Small Society Lotteries operated
        as part of the MCAW 2026 Raffle Programme. By entering a lottery, you agree to these Terms and
        to the lottery information for that lottery set out in the{' '}
        <a href="#schedule">Schedule</a>.
      </p>

      <div className="terms-facts">
        <div>
          <h3>The promoting society</h3>
          <p>
            Medicinal Cannabis UK CIC (&ldquo;MCUK&rdquo;)<br />
            Company number: 17373828<br />
            Registered office: 111 New Union Street, Coventry, CV1 2NT
          </p>
          <p>
            MCUK is registered with Coventry City Council to promote Small Society Lotteries under
            Schedule 11 of the Gambling Act 2005. Registration number: LN226334558.
          </p>
        </div>
        <div>
          <h3>Person responsible for the promotion</h3>
          <p>
            The member of MCUK designated, in writing by MCUK&apos;s board, as responsible for
            promoting these lotteries is:
          </p>
          <p>
            Jane Hinchliffe, Director, Medicinal Cannabis UK CIC, 111 New Union Street, Coventry,
            CV1 2NT
          </p>
        </div>
        <div>
          <h3>Ticket sales platform</h3>
          <p>
            Entries are sold through Zeffy, an online fundraising platform used by MCUK to take
            payment and issue e-tickets. Zeffy does not promote or manage the lotteries. All draws
            are conducted by MCUK.
          </p>
        </div>
        <div>
          <h3>Structure of the programme</h3>
          <p>
            The MCAW 2026 Raffle Programme consists of six separate lotteries (MCAW-01 to MCAW-06).
            Each is a separate Small Society Lottery. Entering one lottery does not enter you into
            any other.
          </p>
        </div>
      </div>

      <h2>Terms &amp; Conditions</h2>

      <h3>1. The individual lotteries</h3>
      <p>1.1 Each lottery in the programme is a separate Small Society Lottery with its own entry price, entry pool, prize or prizes, draw, winning entries, proceeds and financial records.</p>
      <p>1.2 Promoting the lotteries under the common MCAW 2026 Raffle brand does not combine them into one lottery. You must select and pay for an entry in the specific lottery you wish to enter.</p>

      <h3>2. Lottery information</h3>
      <p>2.1 The details of each lottery are set out in the Schedule and are displayed on the Zeffy entry page before you buy. They form part of these Terms for that lottery.</p>
      <p>2.2 For every lottery, the total value of entries put on sale will not exceed £20,000, and no single prize will be worth more than £25,000.</p>
      <p>2.3 The total value of entries put on sale across all MCUK lotteries in the 2026 calendar year will not exceed £250,000.</p>

      <h3>3. Eligibility</h3>
      <p>3.1 The lotteries are open to residents of Great Britain (England, Scotland and Wales) aged 18 or over.</p>
      <p>3.2 Residents of Northern Ireland, the Channel Islands and the Isle of Man may not enter, because MCUK&apos;s registration does not cover lotteries promoted there.</p>
      <p>3.3 Jane Hinchliffe and anyone involved in conducting or witnessing a draw may not enter the lotteries.</p>
      <p>3.4 Additional eligibility conditions for a particular prize, if any, are stated in the Schedule.</p>

      <h3>4. Age verification</h3>
      <p>4.1 You must be 18 or over when you enter. You will be asked for your date of birth and to confirm you are 18 or over before payment. Entries cannot be completed where the date of birth given shows the entrant is under 18.</p>
      <p>4.2 MCUK may ask any entrant for reasonable evidence of age or residency at any time, and will do so before awarding a prize.</p>
      <p>4.3 Any entry found to have been bought by a person under 18 will be cancelled and the entry price refunded. That entry cannot win.</p>

      <h3>5. Entering and paying</h3>
      <p>5.1 Every entry in the same lottery costs the same amount. Different lotteries may have different entry prices.</p>
      <p>5.2 An entry is valid only once payment of the entry price has been received in full.</p>
      <p>5.3 The entry price is the only amount payable for an entry. At checkout, Zeffy may invite you to make an optional contribution to Zeffy. This contribution is voluntary, is paid to Zeffy and not to MCUK, is not part of the entry price, and has no effect on your entry or your chance of winning.</p>

      <h3>6. Your ticket</h3>
      <p>6.1 After payment you will receive an e-ticket and confirmation email. This is your ticket. It will state:</p>
      <ul>
        <li>the name of the promoting society, Medicinal Cannabis UK CIC;</li>
        <li>the lottery ID and name;</li>
        <li>the price of each entry;</li>
        <li>the name and address of the person responsible for the promotion, Jane Hinchliffe, 111 New Union Street, Coventry, CV1 2NT;</li>
        <li>the date and time of the draw; and</li>
        <li>your unique entry number or numbers.</li>
      </ul>
      <p>6.2 Please keep your ticket until the draw has taken place and any prize has been awarded.</p>

      <h3>7. Multiple entries and one prize per person</h3>
      <p>7.1 You may buy more than one entry in a lottery, up to the maximum number of entries for that lottery. Each valid entry has a separate chance of being drawn.</p>
      <p>7.2 Each person may win no more than one prize in any single lottery. Where a lottery has more than one prize, any further entry of yours drawn after you have won is disregarded, and the draw continues as set out in clause 10.</p>
      <p>7.3 Entries in different lotteries are treated separately. You may win in more than one lottery.</p>

      <h3>8. Entry period</h3>
      <p>8.1 Each lottery opens and closes on the dates and times in the Schedule. Entries close at 20:00 (UK time) on 8 November 2026, one hour before the draw.</p>
      <p>8.2 Entries received after the closing time will not be included in the draw.</p>

      <h3>9. The prizes</h3>
      <p>9.1 Each prize is described in the Schedule. Prize values are the supplier&apos;s recommended retail price.</p>
      <p>9.2 All prizes have been donated by third parties. No proceeds of the lotteries are used to buy prizes.</p>
      <p>9.3 The prizes are vaporiser devices and may only be awarded to winners aged 18 or over. Prizes will be delivered to a Great Britain address provided by the winner.</p>
      <p>9.4 Prizes are as described. There is no cash alternative, and prizes cannot be exchanged or transferred.</p>
      <p>9.5 Unclaimed prizes are not rolled over into any other lottery.</p>

      <h3>10. The draw</h3>
      <p>10.1 Each lottery is drawn separately at 21:00 (UK time) on 8 November 2026, using only the valid entries for that lottery.</p>
      <p>10.2 Each valid entry is given a sequential number. MCUK will use the random.org Sequence Generator to produce a random ordering of all those numbers.</p>
      <p>10.3 The first number in the sequence wins the first prize. Where a lottery has more than one prize, the next numbers in the sequence win in order, skipping any number that belongs to a person who has already won in that lottery.</p>
      <p>10.4 Each draw will be witnessed by two people and recorded. MCUK will keep the record, including the random.org output, for at least one year.</p>

      <h3>11. Winner verification</h3>
      <p>11.1 Before awarding a prize, MCUK will check the winning entry, payment, the winner&apos;s age (18 or over), Great Britain residency, eligibility, and compliance with these Terms.</p>
      <p>11.2 If a winner is not eligible, their entry will be invalidated and the prize will pass to the next eligible entry under clause 13.</p>

      <h3>12. Contacting winners</h3>
      <p>12.1 Winners will be contacted using the email address and phone number given at entry, within 7 days of the draw.</p>
      <p>12.2 A winner must respond within 14 days of MCUK&apos;s first attempt to contact them.</p>

      <h3>13. Redraws</h3>
      <p>13.1 If a winner cannot be contacted, does not respond within 14 days, or is not eligible, the prize passes to the next number in that lottery&apos;s recorded random.org sequence, applying the one-prize-per-person rule in clause 7.2.</p>
      <p>13.2 A redraw affects only the lottery concerned and uses only its valid entries.</p>

      <h3>14. Invalid or fraudulent entries</h3>
      <p>14.1 MCUK may reject or invalidate an entry where it reasonably believes that:</p>
      <ul>
        <li>payment was not received in full;</li>
        <li>the entrant is under 18, lives outside Great Britain, or is otherwise ineligible;</li>
        <li>false or misleading information was given;</li>
        <li>the entry exceeds the maximum number of entries for that lottery;</li>
        <li>the entry was obtained fraudulently; or</li>
        <li>the entry otherwise breaches these Terms.</li>
      </ul>
      <p>14.2 Entries invalidated because the entrant is under 18 or lives outside Great Britain will be refunded. Entries invalidated for fraud will not be refunded where the law allows.</p>

      <h3>15. Cancellation and refunds</h3>
      <p>15.1 MCUK will not cancel a lottery because fewer entries are received than expected.</p>
      <p>15.2 If circumstances outside MCUK&apos;s reasonable control make it necessary to cancel or postpone a lottery, MCUK will tell entrants promptly by email.</p>
      <p>15.3 If a lottery is cancelled before its draw, every entrant in that lottery will receive a full refund of the entry price.</p>

      <h3>16. Use of proceeds</h3>
      <p>16.1 Each lottery is promoted to raise funds for the non-commercial purposes of Medicinal Cannabis UK CIC, namely the day-to-day running costs of Medicinal Cannabis UK CIC.</p>
      <p>16.2 At least 20% of the proceeds of each lottery will be applied directly to MCUK&apos;s purposes.</p>
      <p>16.3 Because all prizes are donated and Zeffy charges MCUK no fees, MCUK expects to apply all proceeds of each lottery to its purposes, less any prize delivery costs.</p>

      <h3>17. Separate accounting and returns</h3>
      <p>17.1 Each lottery is accounted for separately. Money paid for an entry belongs to that lottery, and any expenses are allocated to the lottery they relate to.</p>
      <p>17.2 MCUK will keep records of each lottery&apos;s entries, proceeds, expenses and draw, and will submit a return for each lottery to Coventry City Council within three months of the draw.</p>

      <h3>18. Playing responsibly</h3>
      <p>18.1 Please only spend what you can afford. Entering a lottery should never be a way to try to make money.</p>
      <p>
        18.2 If you are worried about your own or someone else&apos;s gambling, free and confidential
        support is available from GambleAware at{' '}
        <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer">begambleaware.org</a>{' '}
        or through the National Gambling Helpline on <a href="tel:08088020133">0808 8020 133</a>,
        available 24 hours a day.
      </p>

      <h3>19. Data protection</h3>
      <p>19.1 Personal information collected through the programme will be used to administer entries, verify age and eligibility, conduct draws, contact winners, deliver prizes, and meet legal and regulatory obligations.</p>
      <p>19.2 It will be processed in line with MCUK&apos;s Privacy Policy and data protection law. Zeffy also processes payment and entry data under its own privacy policy.</p>

      <h3>20. Publicity</h3>
      <p>20.1 MCUK may publish each winner&apos;s first name, county and lottery ID for transparency. No further personal information will be published without the winner&apos;s consent.</p>
      <p>20.2 Taking part in any optional publicity will not affect a winner&apos;s entitlement to their prize.</p>

      <h3>21. Liability</h3>
      <p>21.1 Nothing in these Terms excludes or limits liability where doing so would be unlawful.</p>
      <p>21.2 Subject to this, MCUK is not responsible for circumstances outside its reasonable control, including failures of Zeffy, payment providers, random.org, communication systems or delivery services.</p>
      <p>21.3 Any warranty on a prize is provided by its manufacturer or supplier, not by MCUK.</p>

      <h3>22. Changes to these Terms</h3>
      <p>22.1 MCUK will not make any change to these Terms that disadvantages entrants once a lottery has opened, except where required by law.</p>

      <h3>23. Governing law</h3>
      <p>23.1 These Terms are governed by the law of England and Wales. The courts of England and Wales have jurisdiction, subject to any rights entrants have under the law of Scotland.</p>

      <h3>24. Contact</h3>
      <p>
        Questions about the MCAW 2026 Raffle Programme should be sent to{' '}
        <a href="mailto:hello@mcukcic.co.uk">hello@mcukcic.co.uk</a> or to Medicinal Cannabis UK CIC,
        111 New Union Street, Coventry, CV1 2NT.
      </p>
      <p>
        Company number: 17373828<br />
        Small Society Lottery registration: LN226334558 (Coventry City Council)
      </p>

      <h2 id="schedule">Schedule: the lotteries</h2>
      <p>
        All six lotteries open on 26 October 2026, close at 20:00 on 8 November 2026, and are drawn
        at 21:00 on 8 November 2026. The maximum value of entries on sale in each lottery is £20,000.
      </p>

      <div className="terms-table-wrap" role="region" aria-label="Schedule of lotteries" tabIndex={0}>
        <table className="terms-table">
          <thead>
            <tr>
              <th scope="col">Lottery ID</th>
              <th scope="col">Prize</th>
              <th scope="col">No. of prizes</th>
              <th scope="col">Value each</th>
              <th scope="col">Total prize value</th>
              <th scope="col">Entry price</th>
              <th scope="col">Max entries</th>
            </tr>
          </thead>
          <tbody>
            {rafflePrizes.map((prize) => (
              <tr key={prize.id}>
                <th scope="row">{prize.id}</th>
                <td>{prize.brand} – {prize.name}</td>
                <td>{prize.quantity}</td>
                <td>{money(prize.valueEach)}</td>
                <td>{money(prize.valueEach * prize.quantity)}</td>
                <td>{money(prize.ticketPrice)}</td>
                <td>{count(prize.maxEntries)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p>All prizes are donated. Winners must be 18 or over and live in Great Britain. One prize per person per lottery.</p>
    </PolicyPage>
  )
}
