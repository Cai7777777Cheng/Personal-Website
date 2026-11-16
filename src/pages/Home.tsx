import { Hero } from '../components/Hero.tsx'
import { WorkCard } from '../components/WorkCard.tsx'
import { email, mapsUrl, nomoWork, phoneDisplay, phoneHref, workRows } from '../data.ts'

const rowClass = ['row-a', 'row-b', 'row-c', 'row-b']

export function Home() {
  return (
    <main>
      <Hero />

      <section className="about" id="about">
        <p className="kicker">About</p>
        <h1>
          An industrial designer, brings ideas into commercial and social impact by delivering
          physical and digital experiences.
        </h1>
      </section>

      <section className="works" id="works" aria-label="Selected works">
        <p className="kicker">Selected works</p>
        {workRows.map((row, index) => (
          <div className={`works-row ${rowClass[index]}`} key={row[0].title}>
            {row.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        ))}
        <div className="works-row row-nomo">
          <WorkCard work={nomoWork} />
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="kicker">Contact</p>
        <div className="contact-links">
          <a href={phoneHref}>{phoneDisplay}</a>
          <a href={`mailto:${email}`}>{email}</a>
          <a href={mapsUrl} target="_blank" rel="noreferrer">
            Östra Strandgatan 30,
            <br />
            90333 Umea—&nbsp;Sweden
          </a>
        </div>
      </section>
    </main>
  )
}
