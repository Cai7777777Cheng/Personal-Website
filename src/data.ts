export const nomoUrl =
  'https://cai7777777cheng.github.io/Cai7777777Cheng-table-game-robot-website/'

export const email = '2867798209@qq.com'
export const phoneDisplay = '+86 13701898886'
export const phoneHref = 'tel:+8613701898886'

type HeroSlide = {
  id: string
  title: string
  subtitle: string
  image?: string
  alt?: string
  href?: string
  sentence?: boolean
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'nomo',
    title: 'NOMO',
    subtitle: 'Tabletop companion',
    image: `${import.meta.env.BASE_URL}nomo-hero.jpg`,
    alt: 'Nomo on the table between two players',
    href: nomoUrl,
  },
  {
    id: 'hapticlink',
    title: 'HAPTICLINK',
    subtitle: 'Helps visually impaired individuals experience mainstream visual games.',
    image: `${import.meta.env.BASE_URL}hapticlink-hero.jpg`,
    alt: 'HapticLink headband and wrist band',
    sentence: true,
  },
  {
    id: 'coralra',
    title: 'Coralra',
    subtitle: "Aims to elevate users' eco-awareness, so as to ease and fix the incoming extinction of coral species.",
    image: `${import.meta.env.BASE_URL}coralra-hero.jpg`,
    alt: 'Coralra vessel with a coral silhouette',
    sentence: true,
  },
  {
    id: 'xbloom',
    title: 'xBloom Studio',
    subtitle: 'Ultimate speciality coffee',
  },
]

export type Work = {
  title: string
  subtitle: string
  href?: string
  image?: string
}

export const workRows: Work[][] = [
  [
    {
      title: 'Nomo',
      subtitle: 'Tabletop project',
      href: nomoUrl,
      image: `${import.meta.env.BASE_URL}nomo-hero.jpg`,
    },
    {
      title: 'HAPTICLINK',
      subtitle: 'Helps visually impaired individuals experience mainstream visual games.',
      image: `${import.meta.env.BASE_URL}hapticlink-hero.jpg`,
    },
  ],
  [
    {
      title: 'Coralra',
      subtitle:
        "Aims to elevate users' eco-awareness, so as to ease and fix the incoming extinction of coral species.",
      image: `${import.meta.env.BASE_URL}coralra-hero.jpg`,
    },
    { title: 'xBloom Studio', subtitle: 'Ultimate speciality coffee' },
  ],
]

export type ProfileRow = {
  place: string
  detail: string
  when: string
  href?: string
}

export const educationRows: ProfileRow[] = [
  {
    place: 'The Hong Kong Polytechnic University',
    detail: 'MDes Smart Service Design',
    when: '2027.03',
  },
  {
    place: 'Dalian University of Technology',
    detail: 'BEng Industrial Design',
    when: '2025.06',
  },
]

export const experienceRows: ProfileRow[] = [
  {
    place: 'SF Technology',
    detail: 'Product Manager Intern',
    when: '2026.06-2026.10',
  },
  {
    place: 'Shokz',
    detail: 'Industrial Designer',
    when: '2026.01-2026.04',
  },
]
