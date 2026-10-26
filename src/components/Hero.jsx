import TechText from './TechText';
import './Hero.css'

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.querySelector('#about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* 视频/动画背景 */}
      <div className="hero__bg">
        {/* CSS动画背景 - 粒子浮动+光晕 */}
        <div className="hero__particles">
          {Array.from({ length: 30 }).map((_, i) => (
            <span
              key={i}
              className="hero__particle"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
                animationDelay: `${(i * 0.2) % 5}s`,
                animationDuration: `${6 + (i % 8)}s`,
              }}
            />
          ))}
        </div>
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />

        <div className="hero__overlay" />
        <div className="hero__grid" />
        <div className="hero__noise" />
      </div>

      {/* 内容 */}
      <div className="hero__content">
        <div className="hero__label">
          <span className="hero__label-dot" />
          <span>付浩然 · PORTFOLIO 2026</span>
        </div>

        <div className="hero__title">
          <div className="hero__title-canvas">
            <TechText
              text="Portfolio"
              fontFamily="'Space Grotesk', sans-serif"
              fontWeight={700}
              fontSize={180}
              letterSpacing={-0.02}
              color="#f0f0f2"
              accentColor="#c8ff3a"
              reveal="letter"
              dashLength={4}
              dashGap={2}
              specks={15}
              speed={1}
              align="left"
            />
          </div>
          <span className="hero__title-line hero__title-line--2">
            UI设计 <span className="hero__title-accent">/</span> UX设计
            <span className="hero__title-accent"> /</span> AI设计
            <span className="hero__title-accent"> /</span> 视觉设计
          </span>
        </div>

        <p className="hero__subtitle">
          8年设计经验 · 红点 / iF / 缪斯 / Good Design 四项国际大奖得主
          <br />
          从HMI到消费电子，从品牌到AI驱动，构建跨领域视觉体系
        </p>

        <div className="hero__actions">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => {
              const el = document.querySelector('#projects')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            查看作品
          </button>
          <button className="hero__btn hero__btn--ghost" onClick={scrollToAbout}>
            了解更多
          </button>
        </div>
      </div>

      {/* 底部信息条 */}
      <div className="hero__meta">
        <div className="hero__meta-item">
          <span className="hero__meta-label">LOCATION</span>
          <span className="hero__meta-value">上海 · Shanghai</span>
        </div>
        <div className="hero__meta-item">
          <span className="hero__meta-label">STATUS</span>
          <span className="hero__meta-value">离职 · 随时到岗</span>
        </div>
        <div className="hero__meta-item">
          <span className="hero__meta-label">EXPERIENCE</span>
          <span className="hero__meta-value">8 Years</span>
        </div>
        <div className="hero__meta-item">
          <span className="hero__meta-label">AWARDS</span>
          <span className="hero__meta-value hero__meta-value--accent">4 International</span>
        </div>
      </div>

      {/* 滚动提示 */}
      <div className="hero__scroll" onClick={scrollToAbout}>
        <span className="hero__scroll-text">SCROLL</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}