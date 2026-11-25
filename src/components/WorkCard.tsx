import type { Work } from '../data.ts'

export function WorkCard({ work }: { work: Work }) {
  const copy = (
    <span className={work.onDark ? 'card-copy on-dark' : 'card-copy'}>
      <span className="card-title">{work.title}</span>
      <span className="card-sub">{work.subtitle}</span>
    </span>
  )

  const media = work.image ? (
    <img className="card-photo" src={work.image} alt="" />
  ) : (
    <span className="placeholder" role="img" aria-label={`${work.title} placeholder`} />
  )

  if (work.href) {
    return (
      <a className="card card-link" href={work.href} target="_blank" rel="noreferrer">
        {media}
        {copy}
      </a>
    )
  }

  return (
    <article className="card">
      {media}
      {copy}
    </article>
  )
}
