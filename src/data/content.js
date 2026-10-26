// 个人信息数据 - 来源于简历

export const personalInfo = {
  name: '付浩然',
  nameEn: 'Fu Haoran',
  title: '视觉设计师 · AI设计师 · 品牌设计师',
  experience: '8年设计经验',
  location: '上海',
  status: '离职-随时到岗',
  phone: '18162352729',
  email: 'fuhaoran@qq.com',
  wechat: 'Hoyin',
  education: '江汉大学 · 数字媒体艺术设计 · 本科',
  portfolioUrl: 'https://my.feishu.cn/docx/R4a5dFnZlojD5pxuw9Mc45Ornbh',
  bio: '8年设计经验，主导设计的ata05远程替身机器APP荣获红点、iF、缪斯、Good Design四项国际大奖。独立完成产品App UI设计及天猫/京东/亚马逊店铺从0到1搭建，具备从产品体验到商业转化的完整闭环能力。项目经验覆盖汽车HMI/智能座舱、消费电子/智能设备、医疗仪器、B端后台、C端App、AR/VR、电商搭建等多个领域，能快速理解不同业务场景并输出匹配的视觉方案。',
  aiBio: '熟练将AI工具嵌入需求拆解、方案探索与素材生成环节，核心优势在于对AI生成结果的专业判断与修正，而非停留在工具使用层面。',
}

// 项目数据
export const stats = [
  { value: '8', unit: '年', label: '设计经验' },
  { value: '4', unit: '项', label: '国际大奖' },
  { value: '20+', unit: '', label: '行业领域' },
  { value: '30+', unit: '', label: '交付项目' },
]

// 个人优势/能力
export const strengths = [
  {
    title: '国际奖项背书',
    description: '主导设计作品荣获红点、iF、缪斯设计奖、Good Design Award四项国际设计大奖，设计能力获全球权威认可。',
    tag: 'AWARDS',
  },
  {
    title: '全链路设计闭环',
    description: '从产品体验设计到商业转化，独立完成App UI设计及天猫/京东/亚马逊店铺从0到1搭建，覆盖完整业务闭环。',
    tag: 'FULL STACK',
  },
  {
    title: '跨领域适应力',
    description: '项目经验覆盖汽车HMI、消费电子、医疗仪器、B端后台、C端App、AR/VR、电商等多个领域，能快速理解不同业务场景。',
    tag: 'VERSATILE',
  },
  {
    title: 'AI设计驱动',
    description: '熟练将AI工具嵌入需求拆解、方案探索与素材生成环节，核心优势在于对AI生成结果的专业判断与修正。',
    tag: 'AI EMPOWERED',
  },
  {
    title: '从0到1视觉定义',
    description: '多次主导操作系统、HMI、品牌视觉从概念到量产的全流程设计，具备从0建立视觉体系的系统能力。',
    tag: '0 TO 1',
  },
  {
    title: '设计落地能力',
    description: '精通视觉定义、方案执行、动效输出、设计规范制定、切图交付、开发落地全流程，确保设计高质量还原。',
    tag: 'EXECUTION',
  },
]

// 工作经历
export const workExperience = [
  {
    company: 'TOALL DESIGN',
    role: '高级视觉设计师',
    period: '2024.09 — 2026.09',
    description: '负责智能产品开发项目中的软件界面与交互体验设计，涵盖智能家居系统、远程替身、AR/VR系统、智能穿戴设备等产品的配套App、HMI及系统级UI设计。独立完成ata05远程替身机器人的App UI设计，荣获红点奖、iF设计奖、缪斯设计奖、Good Design Award等多项国际设计大奖。',
  },
  {
    company: '卓易网络科技有限公司',
    role: '高级UI设计师',
    period: '2023.05 — 2024.09',
    description: '负责公司APP产品矩阵（最美天气、最美万年历、搜搜浏览器等移动端APP）视觉版本迭代及运营设计工作。负责公司FreemeOS安卓系统的视觉设计工作，包括系统操作界面、主题设计、动效制作等。',
  },
  {
    company: 'TOALL DESIGN',
    role: '高级UI设计师',
    period: '2021.01 — 2023.02',
    description: '根据项目需求，关注客户业务需求、用户需求与用户场景，协助团队准确评估项目周期，安排项目计划。独立承担视觉项目，协同沟通内外部资源，设计提案并根据需求持续优化设计、完成项目交付。',
  },
  {
    company: '上海洛可可整合设计有限公司',
    role: 'UI设计师',
    period: '2019.05 — 2021.01',
    description: '工作内容包括但不限于APP、Web、HMI、H5、智能硬件等各类人机交互视觉设计。设计工作流程涵盖视觉定义、视觉执行、动效动画输出、设计规范制定、切图输出交付、沟通开发落地实现等。',
  },
]

// 精选项目分类（用于左侧文件夹）
export const projectCategories = [
  {
    key: 'app',
    label: 'APP',
    sublabel: 'APP',
    items: [
      'ata05 远程替身机器APP',
      '最美天气 / 最美万年历',
      'FreemeOS 手机管家升级',
      '广丰出行小程序',
      '视觉中国App',
      'Bees 小程序设计',
    ],
  },
  {
    key: 'device',
    label: '智能硬件',
    sublabel: '消费电子/操作系统/AR/VR/数字终端',
    items: [
      '睿住科技智慧屏设计',
      '博日PCR基因扩增仪',
      '飞利浦智能洗地机 LCD屏',
      '亮风台 AR 眼镜UI设计',
      '微婷脱毛仪屏显设计',
    ],
  },
  {
    key: 'hmi',
    label: 'HMI Design',
    sublabel: '汽车HMI / 智能座舱',
    items: [
      '恒驰汽车 HMI 操作系统',
      '森海塞尔品牌音响系统设计',
      '智能座舱交互设计',
      '车载量产视觉规范',
    ],
  },
  {
    key: 'web',
    label: 'Web Design',
    sublabel: 'B端/SaaS/官网',
    items: [
      '丽水摄影平台官网',
      'FSP后台管理系统',
      'simtop形拓科技官网',
      'AICG耀火计划KV',
    ],
  },
  {
    key: 'other',
    label: '其他设计',
    sublabel: '品牌 / 电商 / 视觉延展',
    items: [
      '欧姆龙H5界面设计',
      '主题设计',
      '台州道路一体化运维',
      '运营海报设计',
      '运营专题页设计',
      '运营Banner设计',
    ],
  },
]

// 精选项目（按分类组织的卡片网格）
// slug: 用于三级路由，pages: PDF提取的页面图片路径数组
export const featuredProjects = {
  web: [
    {
      title: '丽水摄影平台官网',
      description: '负责丽水摄影平台官网整体视觉与页面设计，覆盖首页、作品展示、活动专题等核心页面。',
      tags: ['平台官网', '视觉设计', '页面设计'],
      year: '2023',
      image: '/projects/web/lishui-cover.png',
      slug: 'lishui',
      coverAsFirstPage: true,
      pages: Array.from({ length: 21 }, (_, i) => `/projects/web/lishui/page-${String(i + 1).padStart(2, '0')}.png`),
    },
    {
      title: 'FSP后台管理系统',
      description: '负责FSP后台管理系统整体视觉与交互设计，覆盖数据看板、业务管理、配置中心等核心模块。',
      tags: ['B端后台', '数据可视化', '交互设计'],
      year: '2024',
      image: '/projects/web/fsp-cover.png',
      slug: 'fsp',
      coverAsFirstPage: true,
      pages: Array.from({ length: 7 }, (_, i) => `/projects/web/fsp/page-${String(i + 1).padStart(2, '0')}.png`),
    },
    {
      title: 'simtop形拓科技官网',
      description: '负责官网整体视觉风格与页面设计，输出设计规范并跟进前端还原。',
      tags: ['企业官网', '品牌视觉', '前端还原'],
      year: '2022',
      image: '/projects/web/simtop-cover.png',
      slug: 'simtop',
      coverAsFirstPage: true,
      pages: [
        '/projects/web/simtop/page-01.png',
        '/projects/web/simtop/page-03.png',
        '/projects/web/simtop/page-04.png',
        '/projects/web/simtop/page-05.png',
        '/projects/web/simtop/page-06.png',
        '/projects/web/simtop/page-07.png',
      ],
    },
    {
      title: 'AICG耀火计划KV',
      description: '负责AICG耀火计划活动主视觉KV设计，围绕活动主题输出创意视觉方案。',
      tags: ['KV设计', '活动主视觉', '创意'],
      year: '2024',
      image: '/projects/web/aicg-cover.png',
      slug: 'aicg',
      coverAsFirstPage: true,
      pages: ['/projects/web/aicg/page-01.png'],
    },
  ],
  hmi: [
    {
      title: '恒驰汽车 HMI 操作系统',
      description: '主导从概念设计到量产车搭载的全流程视觉设计，完成视觉定义、界面执行、动效规范与切图交付，协同HMI交互、开发、车机测试团队完成实车联调，项目最终随量产车搭载上线。',
      tags: ['HMI', '智能座舱', '从0到1', '量产落地'],
      year: '2021—2023',
      image: '/projects/hengchi-cover.png',
      slug: 'hengchi',
      coverAsFirstPage: true,
      pages: Array.from({ length: 22 }, (_, i) => `/projects/hmi/hengchi/page-${String(i + 1).padStart(2, '0')}.png`),
    },
    {
      title: '森海塞尔品牌音响系统设计',
      description: '为森海塞尔品牌音响系统提供完整的HMI视觉设计方案，围绕"声之形""声之纹""声之拓"三个设计概念，从视觉探索、情绪板、关键词提炼到视觉执行，输出音效设置、调频设置等核心界面的完整设计稿与交互动效。',
      tags: ['HMI', '品牌设计', '视觉系统', '动效'],
      year: '2025',
      image: '/projects/hmi/sennheiser/page-01.jpg',
      slug: 'sennheiser',
      pages: Array.from({ length: 57 }, (_, i) => `/projects/hmi/sennheiser/page-${String(i + 1).padStart(2, '0')}.jpg`),
    },
    {
      title: '吉利远程 HMI 交互设计',
      description: '负责吉利远程汽车HMI交互与视觉设计，完成核心驾驶场景界面方案与设计规范。',
      tags: ['HMI', '交互设计', '量产'],
      year: '2022',
      image: '/projects/hmi/geely-cover.png',
      slug: 'geely',
      coverAsFirstPage: false,
      pages: Array.from({ length: 32 }, (_, i) => `/projects/hmi/geely/page-${String(i + 1).padStart(2, '0')}.png`),
    },
  ],
  app: [
    {
      title: 'ata05 远程替身机器APP',
      description: '独立完成远程替身机器人的App UI设计，围绕远程替身控制、实时交互反馈等核心场景，构建直观、低学习成本的移动端操控体验。荣获红点奖、iF设计奖、缪斯设计奖、Good Design Award四项国际大奖。',
      tags: ['红点奖', 'iF设计奖', '缪斯设计奖', 'Good Design'],
      year: '2024—2026',
      image: '/projects/app/ata05-cover.png',
      slug: 'ata05',
      pages: Array.from({ length: 20 }, (_, i) => `/projects/app/ata05/page-${String(i + 1).padStart(2, '0')}.png`),
    },
    {
      title: '最美天气 / 最美万年历',
      description: '负责公司App矩阵的视觉版本迭代与运营设计，覆盖天气、万年历等C端产品。',
      tags: ['App迭代', '运营设计'],
      year: '2023—2024',
      image: '/projects/app/calendar-new-cover.png',
      slug: 'calendar',
      coverAsFirstPage: true,
      pages: Array.from({ length: 13 }, (_, i) => `/projects/app/calendar-new/page-${String(i + 1).padStart(2, '0')}.png`),
    },
    {
      title: 'FreemeOS 手机管家升级',
      description: '负责浏览器App的整体视觉改版与功能迭代，输出界面规范。',
      tags: ['App UI', '视觉改版'],
      year: '2023—2024',
      image: '/projects/app/phone-manager-cover.png',
      slug: 'browser',
    },
    {
      title: '广丰出行小程序',
      description: '负责广丰出行小程序整体视觉设计与交互方案，覆盖出行服务核心场景。',
      tags: ['小程序', '出行服务', '视觉设计'],
      year: '2024',
      image: '/projects/app/guangfeng-cover.png',
      slug: 'guangfeng',
    },
    {
      title: '视觉中国App',
      description: '负责视觉中国App界面视觉设计，输出核心页面方案。',
      tags: ['App UI', '视觉设计'],
      year: '2023',
      image: '/projects/app/vcg-cover.png',
      slug: 'vcg',
    },
    {
      title: 'Bees 小程序设计',
      description: '负责Apple TV界面视觉设计方案，探索大屏交互体验。',
      tags: ['TV UI', '大屏交互', '视觉设计'],
      year: '2023',
      image: '/projects/app/apple-tv-cover.png',
      slug: 'apple-tv',
    },
  ],
  device: [
    {
      title: '睿住科技智慧屏设计',
      description: '主导智慧屏操作系统从0到1的视觉设计，涵盖系统界面、控件、图标、动效，制定设计规范并推动多模块视觉统一。',
      tags: ['OS设计', '智慧屏', '从0到1'],
      year: '2022',
      image: '/projects/device/ruizhu-cover.png',
      slug: 'remac-os',
      coverAsFirstPage: true,
      pages: Array.from({ length: 33 }, (_, i) => `/projects/device/ruizhu-new/page-${String(i + 1).padStart(2, '0')}.jpg`),
    },
    {
      title: '博日PCR基因扩增仪',
      description: '负责医疗仪器HMI界面视觉设计，输出界面方案与设计规范。',
      tags: ['医疗仪器', 'HMI'],
      year: '2023',
      image: '/projects/device/bori-new/page-01.jpg',
      slug: 'bori',
      pages: Array.from({ length: 3 }, (_, i) => `/projects/device/bori-new/page-${String(i + 1).padStart(2, '0')}.jpg`),
    },
    {
      title: '飞利浦智能洗地机 LCD数字屏',
      description: '负责LCD数字屏UI整体视觉设计，输出界面方案与设计规范，跟进屏幕显示效果与设计还原。',
      tags: ['LCD屏UI', 'IoT', '飞利浦'],
      year: '2023',
      image: '/projects/device/philips-cover.png',
      slug: 'philips',
    },
    {
      title: '亮风台 AR 眼镜UI设计',
      description: '负责AR眼镜操作系统界面视觉设计，探索增强现实场景下的交互体验与视觉表达。',
      tags: ['AR', 'OS设计', '智能穿戴'],
      year: '2023',
      image: '/projects/device/arglasses-cover.png',
      slug: 'arglasses',
    },
    {
      title: '微婷脱毛仪屏显设计',
      description: '负责脱毛仪LCD屏显视觉设计，输出界面方案与交互规范。',
      tags: ['LCD屏显', '消费电子', 'IoT'],
      year: '2024',
      image: '/projects/device/weiting-cover.png',
      slug: 'weiting',
    },
  ],
  other: [
    {
      title: '欧姆龙H5界面设计',
      description: '负责欧姆龙H5页面视觉设计，围绕健康场景输出界面方案。',
      tags: ['H5', '健康', '视觉设计'],
      year: '2023',
      image: '/projects/other/omron-cover.png',
      slug: 'omron',
      coverAsFirstPage: true,
      pages: [
        '/projects/other/omron/page-01.png',
        '/projects/other/omron/page-02.png',
        '/projects/other/omron/page-03.png',
        '/projects/other/omron/page-04.png',
        '/projects/other/omron/page-05.png',
        '/projects/other/omron/page-06.png',
        '/projects/other/omron/page-07.png',
      ],
    },
    {
      title: '主题设计',
      description: '负责主题视觉设计方案，输出完整视觉体系。',
      tags: ['主题设计', '视觉系统'],
      year: '2023',
      image: '/projects/other/theme-cover.png',
      slug: 'theme',
      coverAsFirstPage: true,
      pages: [
        '/projects/other/theme/page-01.png',
        '/projects/other/theme/page-02.png',
        '/projects/other/theme/page-03.png',
        '/projects/other/theme/page-04.png',
        '/projects/other/theme/page-05.png',
        '/projects/other/theme/page-06.png',
        '/projects/other/theme/page-07.png',
        '/projects/other/theme/page-08.png',
        '/projects/other/theme/page-09.png',
      ],
    },
    {
      title: '台州道路一体化运维',
      description: '负责台州道路一体化运维平台视觉设计，覆盖数据可视化与管控界面。',
      tags: ['数据可视化', '平台设计', '运维'],
      year: '2023',
      image: '/projects/other/taizhou-cover.png',
      slug: 'taizhou',
    },
    {
      title: '运营海报设计',
      description: '负责各类运营活动海报视觉设计，快速响应不同业务场景的创意需求。',
      tags: ['海报', '运营', '创意'],
      year: '2021—2024',
      image: '/projects/other/poster-cover.png',
      slug: 'poster',
    },
    {
      title: '运营专题页设计',
      description: '负责运营活动专题页视觉设计，输出完整页面方案。',
      tags: ['专题页', '运营', '视觉设计'],
      year: '2021—2024',
      image: '/projects/other/landing-cover.png',
      slug: 'landing',
    },
    {
      title: '运营Banner设计',
      description: '负责各类运营Banner视觉设计，快速响应不同位置与场景的视觉需求。',
      tags: ['Banner', '运营', '视觉延展'],
      year: '2021—2024',
      image: '/projects/other/banner-cover.png',
      slug: 'banner',
    },
  ],
}

// 辅助函数：根据分类key和作品slug查找项目
export function findProject(categoryKey, slug) {
  const projects = featuredProjects[categoryKey] || []
  return projects.find((p) => p.slug === slug) || projects[0]
}
