import { strengths } from '../data/content.js'
import './Strengths.css'

export default function Strengths() {
  return (
    <section id="strengths" className="strengths">
      <div className="container">
        {/* 章节标题 */}
        <div className="strengths__header">
          <div className="strengths__section-label">
            <span className="strengths__section-num">03</span>
            <span className="strengths__section-text">CORE STRENGTHS</span>
          </div>
          <h2 className="strengths__title">
            为什么<br />选择我
          </h2>
          <p className="strengths__subtitle">
            8年跨领域设计实践沉淀的核心能力体系
          </p>
        </div>

        {/* 能力卡片网格 */}
        <div className="strengths__grid">
          {strengths.map((item, i) => (
            <div key={i} className="strength-card">
              <div className="strength-card__index">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="strength-card__tag">{item.tag}</div>
              <h3 className="strength-card__title">{item.title}</h3>
              <p className="strength-card__desc">{item.description}</p>
              <div className="strength-card__line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
