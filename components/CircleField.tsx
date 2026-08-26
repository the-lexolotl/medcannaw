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
          <span className="circle circle--fill-lime" style={{ width: 280, height: 280, top: '-160px', right: '-160px' }} />
          <span className={`circle ${softFillClass}`} style={{ width: 160, height: 160, top: '-30px', right: '150px' }} />
          <span className={`circle ${ringClass}`} style={{ width: 70, height: 70, top: '130px', right: '30px' }} />
        </>
      )}
      {(variant === 'corner-bl' || variant === 'both') && (
        <>
          <span className="circle circle--fill-lime" style={{ width: 160, height: 160, bottom: '-90px', left: '-90px' }} />
          <span className={`circle ${softFillClass}`} style={{ width: 190, height: 190, bottom: '-70px', left: '80px' }} />
          <span className={`circle ${ringClass}`} style={{ width: 76, height: 76, bottom: '150px', left: '-15px' }} />
        </>
      )}
    </div>
  )
}