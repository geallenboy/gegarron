export const name = 'GeGarron'
export const email = 'gejialun88@gmail.com'
export const location = 'Shanghai / Remote'

export const identityLabels = [
  'AI 内容创作者',
  '独立开发者',
  'AI 工作流升级顾问',
]

export const profileHeadline =
  '把 AI 变成内容生产力，也变成个人成长的基础设施。'

export const profileSummary =
  '我在这里记录日常思考、文章、产品和实验，也帮助个人与企业把 AI 接进真实工作流，让效率、判断力和行动力一起升级。'

export const profileManifesto =
  'Think in public, build in public, compound in public.'

export const openFor = '开放顾问、共创、内容系统搭建、原型开发与效率升级合作。'

export type FocusAreaType = {
  title: string
  description: string
  note: string
}

export const focusAreas: FocusAreaType[] = [
  {
    title: '内容系统',
    description:
      '围绕 AI、自媒体、独立开发和成长系统，持续输出可执行内容与复盘。',
    note: '记录每天在想什么、做什么、为什么。',
  },
  {
    title: '产品实验',
    description: '把洞察变成小而快的产品、工具站和原型，验证真实需求是否成立。',
    note: '从一个问题出发，用产品回答它。',
  },
  {
    title: '工作流升级',
    description: '帮助个人与企业梳理流程、接入 AI 和自动化，提升协作效率。',
    note: '让 AI 真正进入业务，而不是停留在演示里。',
  },
]

export type ContentPillarType = {
  title: string
  description: string
  accent: string
}

export const contentPillars: ContentPillarType[] = [
  {
    title: '日常思考',
    description: '记录我对 AI、增长、职业与长期主义的判断。',
    accent: 'Think',
  },
  {
    title: '文章复盘',
    description: '拆解一个产品、一次实验或一套工作流为什么成立。',
    accent: 'Write',
  },
  {
    title: '产品日志',
    description: '公开构建独立产品，保留决策、迭代和失败样本。',
    accent: 'Build',
  },
  {
    title: '成长实验',
    description: '把成为超级个体这件事，变成可观察、可复盘的长期实验。',
    accent: 'Compound',
  },
]

export type CollaborationModeType = {
  title: string
  description: string
  fit: string
}

export const collaborationModes: CollaborationModeType[] = [
  {
    title: 'AI 工作流诊断',
    description: '梳理团队流程，识别可自动化节点，给出 AI 接入与协作路线。',
    fit: '适合企业与团队升级效率',
  },
  {
    title: '内容系统共创',
    description: '设计选题、写作、分发和复盘链路，让内容生产更稳定可持续。',
    fit: '适合个人品牌和自媒体账号',
  },
  {
    title: '原型与工具交付',
    description:
      '针对具体场景快速搭建 MVP、内部工具或验证型产品，缩短落地周期。',
    fit: '适合想尽快验证价值的人',
  },
]

export const workingPrinciples = [
  '公开思考，把判断过程也记录下来',
  '用产品和工作流验证观点，而不是只讲概念',
  '先解决真实问题，再谈规模化和品牌感',
  '长期主义不是慢，而是持续、稳定和可复利',
]

export type JourneyMilestoneType = {
  period: string
  title: string
  description: string
}

export const journeyTimeline: JourneyMilestoneType[] = [
  {
    period: '过去',
    title: '程序员与产品实践',
    description: '长期做技术与产品，理解系统如何被设计、实现和持续迭代。',
  },
  {
    period: '现在',
    title: 'AI 创作者与独立开发者',
    description: '一边写、一边做、一边公开复盘，把 AI 变成真实的生产力。',
  },
  {
    period: '接下来',
    title: '超级个体的长期实验',
    description: '持续积累内容资产、产品资产和方法资产，让个人能力形成复利。',
  },
]

export const sidebarTopics = ['AI 内容系统', 'Agent 工作流', '独立产品实验']

export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: SocialLinkType[] = [
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/geallenboy',
  },
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/gejialun88',
  },
  {
    name: 'Wechat',
    icon: 'wechat',
    href: '#wechat-modal',
  },
  {
    name: 'WeChat Official Account',
    icon: 'wechat-official',
    href: '#wechat-official-modal',
  },
]

export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  date?: string
  logo?: string
  category?: string[]
  tags?: string[]
  image?: string
  techStack?: string[]
  gitStars?: number
  gitForks?: number
}

export const projectsList: ProjectItemType[] = [
  {
    name: 'AI N8N 自动化平台',
    description:
      '深度集成了 AI 能力的 N8N 自动化平台，帮助个人和团队搭建智能工作流，把重复业务流程真正跑起来。',
    link: {
      href: 'https://aiautomatehub.org',
      label: 'aiautomatehub.org',
    },
    logo: '/1.webp',
    category: ['网站', 'AI N8N 自动化'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI', 'Vercel'],
    tags: ['AI', 'N8N'],
  },
  {
    name: '现代化 AI SaaS 应用模板',
    description:
      '基于 Next.js 15 的 AI SaaS 模板，覆盖认证、支付、AI 能力与管理后台，适合快速启动产品。',
    link: {
      href: 'https://aisaas.ailinksall.com/',
      label: 'aisaas.ailinksall.com',
    },
    logo: '/2.webp',
    category: ['网站', 'AI SaaS'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI', 'Vercel'],
    tags: ['AI', 'SaaS', '模板'],
  },
  {
    name: 'Drawing 创作工具',
    description:
      '围绕画图创作构建的工具产品，集成图像生成、文件夹管理、云端存储与本地缓存能力。',
    link: {
      href: 'https://drawing.ailinksall.com/',
      label: 'drawing.ailinksall.com',
    },
    logo: '/3.webp',
    category: ['网站', '画图'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI', 'Vercel'],
    tags: ['Drawing', '创作工具'],
  },
  {
    name: 'AILinksAI',
    description:
      '面向 AI 从业者和爱好者的导航与洞察平台，用更低的认知成本发现工具、信息和趋势。',
    link: {
      href: 'https://ailinksall.com',
      label: 'ailinksall.com',
    },
    logo: '/4.png',
    category: ['网站', 'AI 导航'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI', 'Vercel'],
    tags: ['AI', '导航', '洞察'],
  },
]
