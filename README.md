# 付浩然 · 个人作品集网站

> 视觉设计师 / AI设计师 / 品牌设计师 · 个人作品集
> 暗色系 · 高级克制 · 科技感

## 🚀 快速启动

```bash
# 安装依赖
npm install

# 启动开发服务器（http://localhost:5173）
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 📁 项目结构

```
Claw/
├── index.html                    # HTML入口
├── package.json                  # 依赖配置
├── vite.config.js                # Vite配置
├── public/                       # 静态资源（视频、图片等）
└── src/
    ├── main.jsx                  # React入口
    ├── App.jsx                   # 主组件
    ├── App.css                   # App样式
    ├── styles/
    │   └── global.css            # 全局样式系统
    ├── data/
    │   └── content.js            # 内容数据（个人/项目/技能）
    └── components/
        ├── Navbar.jsx/.css       # 导航栏
        ├── Hero.jsx/.css         # 全屏首页
        ├── About.jsx/.css        # 个人经历
        ├── Projects.jsx/.css     # 精选项目
        ├── Strengths.jsx/.css    # 个人优势
        └── Contact.jsx/.css      # 底部联系
```

## 🎨 设计规范

### 配色（暗色系）

| 变量 | 色值 | 用途 |
|------|------|------|
| `--bg-primary` | `#0a0a0c` | 主背景 |
| `--bg-secondary` | `#111114` | 次背景 |
| `--bg-tertiary` | `#16161b` | 三级背景 |
| `--bg-card` | `#1a1a20` | 卡片背景 |
| `--text-primary` | `#f0f0f2` | 主文字 |
| `--text-secondary` | `#a0a0a8` | 次文字 |
| `--accent` | `#c8ff3a` | 强调色（荧光绿） |
| `--border-subtle` | `rgba(255,255,255,0.06)` | 细边框 |

### 字体

- **Display**: Space Grotesk（拉丁字符、数字）
- **Body**: Noto Sans SC（中文）
- **Mono**: SF Mono / Fira Code（标签、数据）

### 版心

`max-width: 1700px` · padding: `0 48px`

## 📦 模块说明

### 1. Hero（首页）
- 全屏 · 100vh
- CSS动画背景（粒子+光晕+网格）
- 大标题（最大156px）
- 标签 / 副标题 / 主按钮+次按钮
- 底部信息条（LOCATION/STATUS/EXPERIENCE/AWARDS）
- 右侧滚动提示

### 2. About（个人经历）
- 章节编号：01
- 左：人物图占位（带四角科技感装饰）+ 联系方式
- 右：个人介绍 + 项目数据（8年/4奖/20+/30+）+ 工作经历时间线

### 3. Projects（精选项目）
- 章节编号：02
- 6个项目，2列网格
- 特色项目（获奖）跨2列展示
- 每张卡片含 CSS 视觉图案（按类别：手机/仪表盘/AR眼镜/圆环/网格/浏览器）

### 4. Strengths（个人优势）
- 章节编号：03
- 6个能力卡片，3列网格
- 每卡：编号 + Tag + 标题 + 描述 + 装饰线
- Hover展开装饰线

### 5. Contact（联系方式·收尾页）
- 章节标签：LET'S TALK
- 全屏大标题（带渐变色）
- 4列联系方式网格（电话/邮箱/微信/作品集）
- CTA按钮（发送邮件）
- 底部版权信息

## 🔧 后续优化方向

1. **替换占位为真实素材**：
   - 人物图（About模块）
   - 项目作品截图（Projects模块）
   - 品牌logo（Navbar）

2. **添加视频背景**：
   - 下载合适的科技感视频放到 `public/video/hero-bg.mp4`
   - 在 `Hero.jsx` 中替换为 `<video>` 标签

3. **细节优化**：
   - 添加页面切换过渡动画
   - 添加鼠标悬浮时的微交互
   - 增加更多项目滚动加载
   - 添加暗/亮主题切换

4. **性能优化**：
   - 图片懒加载
   - 字体子集化
   - 代码分割

## 📝 内容修改

所有文字内容集中在 `src/data/content.js`：

- `personalInfo` - 个人信息
- `stats` - 项目数据
- `strengths` - 个人优势
- `workExperience` - 工作经历
- `featuredProjects` - 精选项目

修改对应字段即可更新页面内容。

## 💻 技术栈

- **框架**: React 18.3.1
- **构建**: Vite 5.4
- **样式**: 纯CSS（CSS变量 + CSS Grid + Flexbox）
- **字体**: Google Fonts（Space Grotesk + Noto Sans SC）
- **响应式**: 1024px / 768px 断点