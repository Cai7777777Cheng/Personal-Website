import { useEffect, useState } from 'react'
import { heroSlides } from '../data.ts'

const intervalMs = 1750

export function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (paused || media.matches) return
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [paused, active])

  return (
    <section className="hero" aria-label="Featured projects" aria-roledescription="carousel">
      <div
        className="hero-card"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="hero-stage">
          {heroSlides.map((item, index) => {
            const on = index === active
            const photo = item.image ? (
              <img className="hero-photo" src={item.image} alt={on ? (item.alt ?? '') : ''} />
            ) : (
              <div
                className="placeholder"
                role="img"
                aria-label={on ? `${item.title} media placeholder` : undefined}
              />
            )
            const className = on ? 'hero-layer on' : 'hero-layer'
            if (item.href) {
              return (
                <a
                  key={item.id}
                  className={`${className} hero-link`}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={on ? 0 : -1}
                  aria-hidden={!on}
                >
                  {photo}
                </a>
              )
            }
            return (
              <div key={item.id} className={className} aria-hidden={!on}>
                {photo}
              </div>
            )
          })}
        </div>
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
