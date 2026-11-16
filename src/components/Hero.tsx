import { useState } from 'react'
import { heroSlides } from '../data.ts'

export function Hero() {
  const [active, setActive] = useState(0)
  const slide = heroSlides[active]

  return (
    <section className="hero" aria-label="Featured projects">
      <div className="hero-card">
        <div className="placeholder" role="img" aria-label={`${slide.title} media placeholder`} />
        {slide.soon ? <span className="soon">Coming soon</span> : null}
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
              <span className="hero-sub">{item.subtitle}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
