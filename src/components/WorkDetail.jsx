import { useMemo } from 'react'
import { projectCategories, findProject } from '../data/content.js'
import './WorkDetail.css'

export default function WorkDetail({ categoryKey, slug, onBack, onBackToList }) {
  const cat = useMemo(
    () => projectCategories.find((c) => c.key === categoryKey),
    [categoryKey]
  )
  const project = useMemo(
    () => findProject(categoryKey, slug),
    [categoryKey, slug]
  )

  if (!cat || !project) {
    return (
      <div className="work-detail work-detail--empty">
        <button className="work-detail__back" onClick={onBack}>
          ← Back
        </button>
        <p>作品不存在</p>
      </div>
    )
  }

  return (
    <div className="work-detail">
      <button className="work-detail__back" onClick={onBackToList}>
        <span className="work-detail__back-arrow">←</span>
        <span>Back to {cat.label}</span>
      </button>

      <section className="work-detail__hero">
        <div className="work-detail__inner">
          <header className="work-detail__intro">
            <span className="work-detail__eyebrow">
              <span className="work-detail__eyebrow-num">
                {String(
                  projectCategories.findIndex((c) => c.key === cat.key) + 1
                ).padStart(2, '0')}
              </span>
              <span className="work-detail__eyebrow-text">
                {cat.label.toUpperCase()}
              </span>
            </span>
            <h1 className="work-detail__title">{project.title}</h1>
            {project.year && (
              <p className="work-detail__year">{project.year}</p>
            )}
            {project.description && (
              <p className="work-detail__desc">{project.description}</p>
            )}
            {project.tags && project.tags.length > 0 && (
              <div className="work-detail__tags">
                {project.tags.map((t, j) => (
                  <span key={j} className="work-detail__tag">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </header>

          {(() => {
            const hasPages = project.pages && project.pages.length > 0
            const coverAsFirst = project.coverAsFirstPage && project.image
            // 避免封面与 pages[0] 重复
            const coverDup =
              coverAsFirst &&
              hasPages &&
              project.pages[0] === project.image
            // 最终要渲染的图片列表
            const detailImages = coverAsFirst && !coverDup
              ? [project.image, ...(hasPages ? project.pages : [])]
              : hasPages
                ? project.pages
                : project.image
                  ? [project.image]
                  : []

            if (detailImages.length > 0) {
              return (
                <div className="work-detail__pages">
                  {detailImages.map((src, i) => (
                    <figure key={i} className="work-detail__page">
                      <img
                        src={src}
                        alt={`${project.title} - ${i + 1}`}
                        loading={i < 2 ? 'eager' : 'lazy'}
                      />
                    </figure>
                  ))}
                </div>
              )
            }
            return (
              <div className="work-detail__no-pages">
                <p>该作品的详细内容正在整理中</p>
              </div>
            )
          })()}
        </div>
      </section>
    </div>
  )
}
