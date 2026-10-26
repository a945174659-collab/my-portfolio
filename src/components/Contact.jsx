import { personalInfo } from '../data/content.js'
import Lanyard from './Lanyard.jsx'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      {/* 背景效果 */}
      <div className="contact__bg">
        <div className="contact__grid" />
        <div className="contact__glow" />
      </div>

      {/* 3D 工牌 — 透明覆盖整个 contact 模块 */}
      <div className="contact__lanyard">
        <Lanyard
          frontImage="/images/工牌正面.png"
          backImage="/images/工牌背面.png"
          finish="matte"
          cornerRadius={0.2}
          size={0.36}
          anchor="right"
          strapColor="#c9ff3a"
          strapWidth={0.5}
          damping={0.25}
          elasticity={0.15}
        />
      </div>

      <div className="container contact__inner">
        {/* 章节标签 */}
        <div className="contact__label">
          <span className="contact__label-dot" />
          <span>LET'S TALK</span>
        </div>

        {/* 大标题 */}
        <h2 className="contact__title">
          有项目想聊？
          <br />
          <span className="contact__title-accent">随时联系我</span>
        </h2>

        <p className="contact__subtitle">
          目前处于离职状态，可随时到岗。无论是全职机会、项目合作还是设计咨询，
          欢迎来聊。
        </p>

        {/* 联系方式 */}
        <div className="contact__methods">
          <a href={`tel:${personalInfo.phone}`} className="contact__method">
            <span className="contact__method-label">电话</span>
            <span className="contact__method-value">{personalInfo.phone}</span>
          </a>
          <a href={`mailto:${personalInfo.email}`} className="contact__method">
            <span className="contact__method-label">邮箱</span>
            <span className="contact__method-value">{personalInfo.email}</span>
          </a>
          <div className="contact__method">
            <span className="contact__method-label">微信</span>
            <span className="contact__method-value">{personalInfo.wechat}</span>
          </div>
          <a href={personalInfo.portfolioUrl} target="_blank" rel="noopener noreferrer" className="contact__method">
            <span className="contact__method-label">作品集</span>
            <span className="contact__method-value">飞书文档 ↗</span>
          </a>
        </div>

        {/* CTA按钮 */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="contact__cta"
        >
          发送邮件
          <span className="contact__cta-arrow">→</span>
        </a>

        {/* 底部版权 */}
        <div className="contact__footer">
          <div className="contact__footer-left">
            <span className="contact__footer-name">付浩然 / Fu Haoran</span>
            <span className="contact__footer-role">视觉设计师 · AI设计师 · 品牌设计师</span>
          </div>
          <div className="contact__footer-right">
            <span className="contact__footer-copy">© 2026 ALL RIGHTS RESERVED</span>
            <span className="contact__footer-loc">SHANGHAI · CN</span>
          </div>
        </div>
      </div>
    </section>
  )
}
