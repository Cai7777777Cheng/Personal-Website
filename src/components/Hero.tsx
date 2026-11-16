import { useState } from 'react'
import { heroSlides } from '../data.ts'

export function Hero() {
  const [active, setActive] = useState(0)
  const slide = heroSlides[active]
  const media = slide.image ? (
    <img className="hero-photo" src={slide.image} alt={slide.alt ?? ''} />
  ) : (
    <div className="placeholder" role="img" aria-label={`${slide.title} media placeholder`} />
  )

  return (
    <section className="hero" aria-label="Featured projects">
      <div className="hero-card">
        {slide.href ? (
          <a className="hero-link" href={slide.href} target="_blank" rel="noreferrer">
            {media}
          </a>
        ) : (
          media
        )}
        <div className="hero-tabs" role="tablist" aria-label="Featured projects">
          {heroSlides.map((item, index) => (
            <button
              key={item.id}
              className="hero-tab"
              type="button"
              role="tab"
              aria-selected={index === active}
              onClick={() => setActive(index)}
            >
              <span className="hero-title">{item.title}</span>
              {item.subtitle ? (
                <span className={item.sentence ? 'hero-sub sentence' : 'hero-sub'}>{item.subtitle}</span>
              ) : null}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
