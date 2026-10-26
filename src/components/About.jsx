import { personalInfo, stats, workExperience } from '../data/content.js'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        {/* 章节标题 */}
        <div className="about__header">
          <div className="about__section-label">
            <span className="about__section-num">01</span>
            <span className="about__section-text">ABOUT</span>
          </div>
          <h2 className="about__title">
            用设计连接<br />
            产品体验与商业价值
          </h2>
        </div>

        {/* 主体内容 - 左右布局 */}
        <div className="about__body">
          {/* 左侧 - 人物图 + 联系方式 */}
          <div className="about__left">
            <div className="about__portrait">
              <div className="about__portrait-placeholder">
                <img
                  className="about__portrait-img"
                  src="/images/portrait.png"
                  alt={personalInfo.name}
                  loading="lazy"
                />
                <div className="about__portrait-grid" />
                <div className="about__portrait-frame" />
                <div className="about__portrait-corner about__portrait-corner--tl" />
                <div className="about__portrait-corner about__portrait-corner--tr" />
                <div className="about__portrait-corner about__portrait-corner--bl" />
                <div className="about__portrait-corner about__portrait-corner--br" />
              </div>
              <div className="about__portrait-caption">
                <span className="about__portrait-name">{personalInfo.name}</span>
                <span className="about__portrait-role">{personalInfo.experience}</span>
              </div>
            </div>

            <div className="about__contact">
              <div className="about__contact-item">
                <span className="about__contact-label">PHONE</span>
                <span className="about__contact-value">{personalInfo.phone}</span>
              </div>
              <div className="about__contact-item">
                <span className="about__contact-label">EMAIL</span>
                <span className="about__contact-value">{personalInfo.email}</span>
              </div>
              <div className="about__contact-item">
                <span className="about__contact-label">WECHAT</span>
                <span className="about__contact-value">{personalInfo.wechat}</span>
              </div>
              <div className="about__contact-item">
                <span className="about__contact-label">LOCATION</span>
                <span className="about__contact-value">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* 右侧 - 个人介绍 + 数据 */}
          <div className="about__right">
            <div className="about__intro">
              <p className="about__intro-text">{personalInfo.bio}</p>
              <p className="about__intro-ai">{personalInfo.aiBio}</p>
            </div>

            {/* 项目数据 */}
            <div className="about__stats">
              {stats.map((stat, i) => (
                <div key={i} className="about__stat">
                  <div className="about__stat-number">
                    <span className="about__stat-value">{stat.value}</span>
                    <span className="about__stat-unit">{stat.unit}</span>
                  </div>
                  <div className="about__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* 工作经历 */}
            <div className="about__timeline">
              <div className="about__timeline-header">
                <span className="about__timeline-title">工作经历</span>
                <span className="about__timeline-line" />
              </div>
              {workExperience.map((job, i) => (
                <div key={i} className="about__job">
                  <div className="about__job-period">{job.period}</div>
                  <div className="about__job-body">
                    <div className="about__job-company">{job.company}</div>
                    <div className="about__job-role">{job.role}</div>
                    <div className="about__job-desc">{job.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
