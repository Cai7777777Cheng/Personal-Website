import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Nav } from './components/Nav.tsx'
import { About } from './pages/About.tsx'
import { Home } from './pages/Home.tsx'
import { Legal } from './pages/Legal.tsx'
import { Missing } from './pages/Missing.tsx'

function ScrollWithRoute() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = pathname.startsWith('/terms')
      ? 'Terms & Privacy — PENG CHENGXU'
      : pathname.startsWith('/about')
        ? 'About — PENG CHENGXU'
        : 'PENG CHENGXU'
    const root = document.documentElement
    const previous = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    const id = hash.replace('#', '')
    if (id) {
      document.getElementById(id)?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
    root.style.scrollBehavior = previous
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollWithRoute />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Legal />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </>
  )
}
