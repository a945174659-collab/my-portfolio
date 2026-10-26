import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Strengths from './components/Strengths.jsx'
import Contact from './components/Contact.jsx'
import ProjectDetail from './components/ProjectDetail.jsx'
import WorkDetail from './components/WorkDetail.jsx'
import './App.css'

function parseHash() {
  const hash = window.location.hash || ''
  // 三级路由: #/projects/hmi/hengchi
  const workMatch = hash.match(/^#\/projects\/([\w-]+)\/([\w-]+)/)
  if (workMatch) {
    return {
      route: 'work-detail',
      categoryKey: workMatch[1],
      slug: workMatch[2],
    }
  }
  // 二级路由: #/projects/hmi
  const listMatch = hash.match(/^#\/projects\/([\w-]+)/)
  if (listMatch) {
    return { route: 'project-detail', categoryKey: listMatch[1] }
  }
  return { route: 'home' }
}

export default function App() {
  const [state, setState] = useState(parseHash())

  useEffect(() => {
    const onHashChange = () => {
      setState(parseHash())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const goHome = () => {
    history.pushState(null, '', window.location.pathname + window.location.search)
    setState({ route: 'home' })
    window.scrollTo(0, 0)
  }

  const goToList = (categoryKey) => {
    const hash = `#/projects/${categoryKey}`
    history.pushState(null, '', window.location.pathname + window.location.search + hash)
    setState({ route: 'project-detail', categoryKey })
    window.scrollTo(0, 0)
  }

  // 二级页面时点击导航项：先回主页，再滚动到目标 section
  const handleNavNavigate = (href) => {
    if (state.route !== 'home') {
      // 先回到主页
      history.pushState(null, '', window.location.pathname + window.location.search)
      setState({ route: 'home' })
      // 等 DOM 渲染后再滚动
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.querySelector(href)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        })
      })
    } else {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (state.route === 'project-detail') {
    return (
      <div className="app">
        <Navbar onNavigate={handleNavNavigate} />
        <main>
          <ProjectDetail
            categoryKey={state.categoryKey}
            onBack={goHome}
          />
        </main>
      </div>
    )
  }

  if (state.route === 'work-detail') {
    return (
      <div className="app">
        <Navbar onNavigate={handleNavNavigate} />
        <main>
          <WorkDetail
            categoryKey={state.categoryKey}
            slug={state.slug}
            onBack={goHome}
            onBackToList={() => goToList(state.categoryKey)}
          />
        </main>
      </div>
    )
  }

  return (
    <div className="app">
      <Navbar onNavigate={handleNavNavigate} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Strengths />
        <Contact />
      </main>
    </div>
  )
}
