import { useState } from 'react'
import { projectCategories } from '../data/content.js'
import FolderFloat from './FolderFloat.jsx'
import './Projects.css'

const ACCENT = '#c8ff3a'

export default function Projects() {
  const [activeKey, setActiveKey] = useState(null)

  // pill 上要显示分类名
  const pillItems = projectCategories.map(c => c.label)

  return (
    <section id="projects" className="projects">
      <div className="container">
        {/* 章节标题 */}
        <div className="projects__header">
          <div className="projects__section-label">
            <span className="projects__section-num">02</span>
            <span className="projects__section-text">MY WORKS</span>
          </div>
          <h2 className="projects__chapter-title">多领域产品<br/>全链路视觉与体验设计</h2>
          <p className="projects__chapter-desc">
            Click a category to explore selected work
          </p>
        </div>

        {/* 主体内容 - 左右布局 */}
        <div className="projects__body">
          {/* 左侧 - 文件夹 */}
          <div className="projects__left">
            <div
              className="projects__folder-wrap"
              onMouseEnter={() => setActiveKey('__all')}
              onMouseLeave={() => setActiveKey(null)}
            >
              <FolderFloat
                items={pillItems}
                label="My Design"
                sublabel="5 categories"
                trigger="hover"
                physics
                drift={0.5}
                closeOnSelect={false}
                folderColor="#1f1f24"
                frontColor="#2a2a32"
                paperColor="#f5f5f5"
                itemColor={ACCENT}
                itemTextColor="#0e0e10"
                labelColor="#f5f5f5"
                width={220}
                height={150}
                radius={14}
                spread={260}
                lift={32}
                tilt={6}
                flapAngle={34}
                restAngle={16}
                openDuration={520}
                stagger={50}
                bounce={0.3}
                className="projects__folder-float"
              />
            </div>
          </div>

          {/* 右侧 - RELATED WORK 分类列表 */}
          <div className="projects__right">
            <span className="projects__related-tag">RELATED WORK</span>
            <ul className="projects__related-list">
              {projectCategories.map(cat => (
                <li
                  key={cat.key}
                  className={`projects__related-item${activeKey === cat.key ? ' is-active' : ''}`}
                  onMouseEnter={() => setActiveKey(cat.key)}
                  onMouseLeave={() => setActiveKey(null)}
                >
                  <a
                    href={`#/projects/${cat.key}`}
                    className="projects__related-link"
                  >
                    <span className="projects__related-name">{cat.label}</span>
                    <span className="projects__related-sub">{cat.sublabel}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
