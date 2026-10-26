import { useMemo, useState } from 'react'
import { projectCategories, featuredProjects } from '../data/content.js'
import './ProjectDetail.css'

export default function ProjectDetail({ categoryKey, onBack }) {
  const cat = useMemo(
    () => projectCategories.find((c) => c.key === categoryKey),
    [categoryKey]
  )
  const projects = useMemo(
    () => (categoryKey ? featuredProjects[categoryKey] || [] : []),
    [categoryKey]
  )

  // 默认展示第 0 项（带图片），悬停时切换
  const [hoveredId, setHoveredId] = useState(0)

  if (!cat) {
    return (
      <div className="project-detail project-detail--empty">
        <button className="project-detail__back" onClick={onBack}>
          ← Back
        </button>
        <p>分类不存在</p>
      </div>
    )
  }

  return (
    <div className="project-detail">
      {/* 左侧固定 sidebar：Back 按钮 + 分类快速导航 */}
      <aside className="project-detail__sidebar">
        <button className="project-detail__back" onClick={onBack}>
          <span className="project-detail__back-arrow">←</span>
          <span>Back</span>
        </button>

        <nav className="project-detail__cats" aria-label="作品分类导航">
          <span className="project-detail__cats-label">Categories</span>
          <ul className="project-detail__cats-list">
            {projectCategories.map((c) => (
              <li key={c.key}>
                <button
                  className={
                    'project-detail__cats-item' +
                    (c.key === cat.key ? ' is-active' : '')
                  }
                  onClick={() => {
                    window.location.hash = `#/projects/${c.key}`
                  }}
                >
                  <span className="project-detail__cats-num">
                    {String(
                      projectCategories.findIndex((x) => x.key === c.key) + 1
                    ).padStart(2, '0')}
                  </span>
                  <span className="project-detail__cats-name">{c.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <section className="project-detail__hero">
        <div className="project-detail__inner">
          <header className="project-detail__intro">
            <span className="project-detail__eyebrow">
              <span className="project-detail__eyebrow-num">
                {String(
                  projectCategories.findIndex((c) => c.key === cat.key) + 1
                ).padStart(2, '0')}
              </span>
              <span className="project-detail__eyebrow-text">
                {cat.label.toUpperCase()}
              </span>
            </span>
            <h1 className="project-detail__title">{cat.label}</h1>
            <p className="project-detail__sub">{cat.sublabel}</p>
          </header>

          <div className="project-detail__showcase">
            <ul className="project-detail__list">
              {projects.map((p, i) => (
                <li
                  key={i}
                  className={
                    'project-detail__list-item' +
                    (hoveredId === i ? ' is-hovered' : '') +
                    (hoveredId !== i ? ' is-dim' : '')
                  }
                  onMouseEnter={() => setHoveredId(i)}
                  onClick={() => {
                    if (p.slug) {
                      window.location.hash = `#/projects/${categoryKey}/${p.slug}`
                    }
                  }}
                >
                  {p.image && (
                    <div className="project-detail__list-cover">
                      <div className="project-detail__list-cover-inner">
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                        />
                        <div className="project-detail__cover-meta">
                          <span className="project-detail__cover-index">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="project-detail__cover-year">
                            {p.year || ''}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="project-detail__list-head">
                    <span className="project-detail__list-num">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="project-detail__list-name">{p.title}</span>
                    <span className="project-detail__list-tags">
                      {(p.tags || []).slice(0, 3).map((t, j) => (
                        <span key={j} className="project-detail__list-tag">
                          {t}
                        </span>
                      ))}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
