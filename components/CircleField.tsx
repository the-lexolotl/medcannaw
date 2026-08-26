type CircleFieldProps = {
  variant?: 'corner-tr' | 'corner-bl' | 'both'
  tone?: 'on-dark' | 'on-light'
}

export default function CircleField({ variant = 'both', tone = 'on-light' }: CircleFieldProps) {
  const ringClass = tone === 'on-dark' ? 'circle--ring-white' : 'circle--ring-black'
  const softFillClass = tone === 'on-dark' ? 'circle--fill-white' : 'circle--fill-lime-mist'

  return (
    <div className="circle-field" aria-hidden="true">
      {(variant === 'corner-tr' || variant === 'both') && (
        <>
          <span className="circle circle--fill-lime" style={{ width: 220, height: 220, top: '-70px', right: '-50px' }} />
          <span className={`circle ${softFillClass}`} style={{ width: 130, height: 130, top: '30px', right: '170px' }} />
          <span className={`circle ${ringClass}`} style={{ width: 64, height: 64, top: '150px', right: '70px' }} />
        </>
      )}
      {(variant === 'corner-bl' || variant === 'both') && (
        <>
          <span className="circle circle--fill-lime" style={{ width: 100, height: 100, bottom: '-30px', left: '-20px' }} />
          <span className={`circle ${softFillClass}`} style={{ width: 170, height: 170, bottom: '10px', left: '50px' }} />
          <span className={`circle ${ringClass}`} style={{ width: 80, height: 80, bottom: '140px', left: '10px' }} />
        </>
      )}
    </div>
  )
}