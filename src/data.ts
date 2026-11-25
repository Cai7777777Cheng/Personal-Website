export const nomoUrl = 'https://cai7777777cheng.github.io/Cai7777777Cheng-table-game-robot-website/'

export const instagramUrl = 'https://www.instagram.com/alex_yuan_na/'
export const linkedinUrl = 'https://www.linkedin.com/in/yuan-hong-022736181/'
export const email = 'design.by.yuan@gmail.com'
export const phoneDisplay = '+46(0)72 443 72 99'
export const phoneHref = 'tel:+46724437299'
export const mapsUrl =
  'https://www.google.com/maps/search/?api=1&query=%C3%96stra+Strandgatan+30%2C+90333+Umea%2C+Sweden'

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
    { title: 'PEBBLE', subtitle: 'Work-life balance communication' },
  ],
  [
    { title: 'NORA', subtitle: 'Multigen family privacy and comfort' },
    { title: 'Mori', subtitle: 'Home Robot & Nature Companion' },
  ],
  [
    { title: 'Xiaomi Portable Vacuum', subtitle: 'Less mess More freedom' },
    { title: 'DIMSUM', subtitle: 'Culture inspired furniture series' },
    { title: 'Next Gen Robot Vacuum', subtitle: 'innovative robot vacuum cleaning solution' },
  ],
  [
    { title: 'CUDA', subtitle: 'Underground mining safety system' },
    { title: 'BD Spot', subtitle: 'electric screwdriver' },
  ],
]
