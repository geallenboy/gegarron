// personal info
export const name = 'GeGarron'
export const email = 'gejialun88@gmail.com'


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/geallenboy'
  },
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/gejialun88'
  },
  {
    name: 'Wechat',
    icon: 'wechat',
    href: '#wechat-modal' // Will trigger modal
  },
  {
    name: 'WeChat Official Account',
    icon: 'wechat-official',
    href: '#wechat-official-modal' // Will trigger official account modal
  }
]




export type ProjectItemType = {
  name: string
  description: string
  link: { href: string, label: string }
  date?: string
  logo?: string,
  category?: string[],
  tags?: string[],
  image?: string,
  techStack?: string[],
  gitStars?: number,
  gitForks?: number
}




export const projectsList: any = [{
      "name": "AI N8N 自动化平台",
      "description": "深度集成了 AI 能力的 N8N 自动化平台，旨在帮助个人和团队搭建强大、智能的工作流，实现业务流程的自动化，从而极大提升生产效率。",
      "link": {
        "href": "https://aiautomatehub.org",
        "label": "aiautomatehub.org"
      },
      "logo": "/1.webp",
      "category": ["网站", "AI N8N自动化"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI", "Vercel"],
      "tags": ["AI", "N8N"]
    },
    {
      "name": "一个现代化的 AI SaaS 应用模板",
      "description": "一个现代化的 AI SaaS 应用模板，基于 Next.js 15 构建，集成了用户认证、支付系统、AI 功能和完整的管理后台。",
      "link": {
        "href": "https://aisaas.ailinksall.com/",
        "label": "aisaas.ailinksall.com"
      },
      "logo": "/2.webp",
      "category": ["网站", "AI SaaS"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI", "Vercel"],
      "tags": ["AI", "SaaS", "AI SaaS"]
    },
    {
      "name": "专注于画图功能的创作工具",
      "description": "Drawing是一个专注于画图功能的创作工具，集成了强大的画图能力和文件夹管理功能，为用户提供高效的图形创作体验。支持云端存储和本地缓存，确保您的创作永不丢失。",
      "link": {
        "href": "https://drawing.ailinksall.com/",
        "label": "drawing.ailinksall.com"
      },
      "logo": "/3.webp",
      "category": ["网站", "画图"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI", "Vercel"],
      "tags": ["Drawing"]
    },
    {
      "name": "AILinksAI - AI导航与洞察",
      "description": "专为 AI 从业者和爱好者打造的导航平台。它不仅是一个链接集合，更是知识发现引擎，致力于节省您的认知精力，并提供富有远见的深度洞察。",
      "link": {
        "href": "https://ailinksall.com",
        "label": "ailinksall.com"
      },
      "logo": "/4.png",
      "category": ["网站", "AILinksAI"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI", "Vercel"],
      "tags": ["AI", "AILinksAI"]
    }]
