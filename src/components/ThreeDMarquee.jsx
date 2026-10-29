/**
 * 3D Marquee 组件
 *
 * 严格还原 Figma 设计稿「3D Marquee Area」(nodeId 50:611)：
 *
 *  · 画布：1920×1080，整组 opacity 0.5，clipsContent = true
 *  · 图片组「Group 9」(50:612)：23 张横版封面
 *      - 单张尺寸 ≈ 312×176px（16:9），圆角 0，填充模式 FILL
 *      - 所有图片共享同一个仿射线性变换（Perspective Transform 插件，
 *        x 轴 -27°、y 轴 16° 的透视变换）：
 *          a=0.956305, b=0.292372, c=-0.515038, d=0.857167
 *        等价于 rotate(-17°) + skewX(-14°)，含透视效果，
 *        用 CSS rotate() 无法还原，必须用 matrix()。
 *      - 平移分量直接取自各节点 relativeTransform 的 e/f（即 node.x / node.y）
 *      - 数组顺序 = Figma 图层 z 序（从底到顶），决定遮挡关系
 *  · 渐变 mask（参考 Figma 52:30「mask-mask」渐变方向）：
 *      - CSS mask-image 应用到 .tdm-scatter-group，裁切整个图片组
 *      - 渐变方向 -92.36°（从右向左，还原 Figma gradientTransform 轴向）
 *      - 右侧 28% 完全显示 → 中间 34% 过渡 → 左侧 38% 完全隐藏
 *      - 使用 rgba alpha 控制（非 #fff/#000），确保默认 alpha mask 模式生效
 *      - 外层 50% opacity 进一步压暗，让 hero 标题文字更易读
 *
 * 另有「3D Marquee Area」(nodeId 50:423) 的 4×5 竖版网格备用方案，
 * 通过 variant="grid" 切换；默认 "scatter" 对应设计稿首屏。
 */

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { featuredProjects, projectCategories } from '../data/content.js'
import './ThreeDMarquee.css'

/**
 * Figma 50:612「Group 9」中 23 张封面的位置与尺寸。
 * x / y 即各节点的 relativeTransform 平移分量（= node.x / node.y）。
 * name 为 Figma 图层名，用于匹配项目里的封面素材。
 */
const SCATTER_LAYOUT = [
  { name: 'apple-tv-cover', x: 1119.8, y: 291.12, w: 312.42, h: 175.74 },
  { name: 'ata05-cover', x: 1589.9, y: 151.25, w: 311.9, h: 175.44 },
  { name: 'calendar-new-cover', x: 1971.12, y: 157.66, w: 311.9, h: 175.44 },
  { name: 'guangfeng-cover', x: 1020.31, y: 456.7, w: 312.95, h: 176.03 },
  { name: 'phone-manager-cover', x: 1688.57, y: -14.58, w: 312.42, h: 175.74 },
  { name: 'vcg-cover', x: 1671.39, y: 654.89, w: 312.95, h: 176.03 },
  { name: 'arglasses-cover', x: 1390.54, y: 481.43, w: 313.36, h: 176.26 },
  { name: 'philips-cover', x: 1770.51, y: 488.32, w: 313.88, h: 176.56 },
  { name: 'ruizhu-cover', x: 1490.03, y: 315.85, w: 313.36, h: 176.26 },
  { name: 'weiting-cover', x: 1571.09, y: 820.22, w: 313.88, h: 176.56 },
  { name: 'hengchi-cover', x: 1218.91, y: 124.56, w: 313.88, h: 176.56 },
  { name: 'geely-cover', x: 1318.85, y: -41.76, w: 313.88, h: 176.56 },
  { name: 'page-01', x: 1870.44, y: 322.01, w: 313.88, h: 176.56 },
  { name: 'aicg-cover', x: 1191.56, y: 812.59, w: 313.36, h: 176.26 },
  { name: 'fsp-cover', x: 638.33, y: 448.32, w: 313.88, h: 176.56 },
  { name: 'lishui-cover', x: 737.82, y: 282.74, w: 312.42, h: 175.74 },
  { name: 'simtop-cover', x: 1037.11, y: -213.75, w: 311.9, h: 175.44 },
  { name: 'banner-cover', x: 1291.05, y: 647.01, w: 313.36, h: 176.26 },
  { name: 'omron-cover', x: 820.07, y: 788.34, w: 313.88, h: 176.56 },
  { name: 'poster-cover', x: 1471.16, y: 986.53, w: 313.88, h: 176.56 },
  { name: 'taizhou-cover', x: 937.24, y: -49.15, w: 312.42, h: 175.74 },
  { name: 'theme-cover', x: 837.75, y: 116.43, w: 313.88, h: 176.56 },
  { name: 'landing-cover', x: 920.0, y: 622.03, w: 313.88, h: 176.56 },
]

/** Figma 仿射线性部分（Perspective Transform：x -27° / y 16°） */
const M = [0.956305, 0.292372, -0.515038, 0.857167]

/**
 * 背景微动效 —— 沿红色箭头轴（左上 ↔ 右下，约 -55°）的漂移参数。
 *
 *  · AXIS：归一化方向向量，所有图片（整组 + 逐张）共享同一轴，
 *    保证视觉方向统一。
 *  · CARD_DRIFT：每张卡片沿该轴的位移端点 + 周期 + 相位，
 *    23 张图复用 6 组参数，形成前后景层次（视差感），
 *    而非整块死板平移。
 *
 * 调整方向：把 AXIS.x / AXIS.y 符号对调即可。
 * 调整幅度：改 amp 基数或 @keyframes tdmDrift（见 CSS）。
 */
const AXIS = { x: 0.577, y: -0.817 }

const CARD_DRIFT = Array.from({ length: 6 }, (_, i) => {
  const amp = 3 + (i % 3) * 2.5 // 3 ~ 8px
  const sign = i % 2 === 0 ? 1 : -1
  return {
    x: AXIS.x * amp * sign,
    y: AXIS.y * amp * sign,
    duration: 12 + (i % 5) * 2.5, // 12 ~ 22s
    delay: (i * 1.3) % 9,
  }
})

/** 网格备用方案：4 列 × 5 行，118×160 竖版 */
const GRID_COLUMNS = 4
const GRID_ROWS = 5

/** 从文件名（不含扩展名）提取匹配键 */
const coverKey = (path) =>
  path
    .split('/')
    .pop()
    .replace(/\.[a-z0-9]+$/i, '')

/** 收集所有作品封面，建立 名称 → 路径 的映射 */
function useCoverMap() {
  return useMemo(() => {
    const map = new Map()
    for (const cat of projectCategories) {
      for (const item of featuredProjects[cat.key] || []) {
        if (item.image) map.set(coverKey(item.image), item.image)
      }
    }
    return map
  }, [])
}

export default function ThreeDMarquee({
  images = [],
  variant = 'scatter',
  className = '',
}) {
  const coverMap = useCoverMap()

  if (variant === 'grid') {
    return (
      <div className={`tdm-viewport tdm-viewport--grid ${className}`}>
        <div className="tdm-grid">
          {Array.from({ length: GRID_COLUMNS }, (_, colIndex) => {
            const start = colIndex * GRID_ROWS
            return (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 26 : -26 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 14 : 18,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
                key={colIndex + 'marquee'}
                className="tdm-column"
              >
                {images.slice(start, start + GRID_ROWS).map((image, i) => (
                  <div className="tdm-image-cell" key={i + image}>
                    <motion.img
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      src={image}
                      alt={`作品封面 ${start + i + 1}`}
                      className="tdm-image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            )
          })}
        </div>
      </div>
    )
  }

  // scatter 方案：按 Figma 精确坐标 + 仿射矩阵绝对定位
  // Figma 50:611 结构（从下到上）：
  //   1) Group 9 (50:612)：23 张封面
  //   2) mask 矩形 50:637（GRADIENT_LINEAR #0A0A0C，alpha 1→0）
  //      —— 位于图片上方，压暗所有封面，让 hero 标题文字更易读。
  return (
    <div className={`tdm-scatter ${className}`}>
      {/* ① 整组漂移层：沿箭头轴慢速往复（CSS keyframes，见 .tdm-scatter-drift） */}
      <div className="tdm-scatter-drift">
        <div className="tdm-scatter-group">
          {SCATTER_LAYOUT.map((box, i) => {
            const src = coverMap.get(box.name)
            if (!src) return null
            const d = CARD_DRIFT[i % CARD_DRIFT.length]
            return (
              <motion.div
                className="tdm-scatter-item"
                key={box.name}
                style={{
                  left: 0,
                  top: 0,
                  width: box.w,
                  height: box.h,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, x: d.x, y: d.y }}
                transition={{
                  opacity: {
                    duration: 0.6,
                    delay: 0.04 * i,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  x: {
                    duration: d.duration,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay: d.delay,
                  },
                  y: {
                    duration: d.duration,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay: d.delay,
                  },
                }}
              >
                {/* ② Figma 仿射矩阵留在内层 .tdm-scatter-frame，
                     避免 framer-motion 的 x/y 覆盖 transform 导致排布错乱 */}
                <div
                  className="tdm-scatter-frame"
                  style={{
                    width: box.w,
                    height: box.h,
                    transform: `matrix(${M[0]}, ${M[1]}, ${M[2]}, ${M[3]}, ${box.x}, ${box.y})`,
                  }}
                >
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    src={src}
                    alt={`作品封面 ${box.name}`}
                    className="tdm-scatter-img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.opacity = '0.2'
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      {/* mask 通过 CSS mask-image 应用到 .tdm-scatter-group，无需独立 div */}
    </div>
  )
}
