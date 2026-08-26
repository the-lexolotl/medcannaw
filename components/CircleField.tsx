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
          <span className="circle circle--fill-lime" style={{ width: 160, height: 160, top: '-90px', right: '-90px' }} />
          <span className={`circle ${softFillClass}`} style={{ width: 90, height: 90, top: '-10px', right: '90px' }} />
          <span className={`circle ${ringClass}`} style={{ width: 44, height: 44, top: '80px', right: '20px' }} />
        </>
      )}
      {(variant === 'corner-bl' || variant === 'both') && (
        <>
          <span className="circle circle--fill-lime" style={{ width: 90, height: 90, bottom: '-50px', left: '-50px' }} />
          <span className={`circle ${softFillClass}`} style={{ width: 110, height: 110, bottom: '-40px', left: '50px' }} />
          <span className={`circle ${ringClass}`} style={{ width: 48, height: 48, bottom: '90px', left: '-10px' }} />
        </>
      )}
    </div>
  )
}