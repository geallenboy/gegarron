// personal info
export const name = 'GeGarron'
export const email = 'gejialun88@gmail.com'

// 个人身份定位
export const identities = {
  en: [
    'Independent Developer', 
    'AI Explorer',
    'AI Automation Expert',
    'AI Engineer'
  ],
  zh: [
    '独立开发者',
    'AI 探索者',
    'AI 自动化'
  ]
}

// 核心技能与服务
export const coreServices = {
  en: [
    {
      title: 'AI Automation Solutions',
      description: 'Design and develop customized AI automation workflows and systems using cutting-edge tools like n8n for individuals and enterprises.',
      icon: 'robot'
    },
    {
      title: 'Independent Product Development',
      description: 'Build and launch innovative products, tools, and services as an independent developer, focusing on AI-powered solutions.',
      icon: 'code'
    },
    {
      title: 'AI Technology Consulting',
      description: 'Share cutting-edge AI knowledge and provide technical consulting to help individuals and teams embrace AI transformation.',
      icon: 'lightbulb'
    },
    {
      title: 'Open Source Contribution',
      description: 'Actively contribute to open source communities and share technical experiences and best practices through blogs.',
      icon: 'github'
    }
  ],
  zh: [
    {
      title: 'AI 自动化解决方案',
      description: '深入分析业务流程，为您设计和实现基于 n8n、Make 等平台的定制化 AI 自动化工作流，显著提升效率。',
      icon: 'robot'
    },
    {
      title: '独立全栈开发',
      description: '从概念到上线，提供完整的产品设计、开发和部署服务，尤其擅长将 AI 能力融入各类应用。',
      icon: 'code'
    },
    {
      title: 'AI 技术咨询',
      description: '提供前沿的 AI 技术栈选型、架构设计和落地策略咨询，帮助您的团队拥抱并引领 AI 变革。',
      icon: 'lightbulb'
    },
    {
      title: '开源社区贡献',
      description: '热衷于通过贡献代码、分享知识来推动开源生态发展，并致力于将优秀技术转化为最佳实践。',
      icon: 'github'
    }
  ]
}

// 技术愿景
export const techVision = {
  en: 'Empowering the future through AI automation and independent innovation',
  zh: '赋能未来：AI 自动化与独立开发者的技术探索'
}

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
    href: '#' // Placeholder for Wechat QR code modal
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    href: 'https://www.facebook.com' // Replace with your actual Facebook profile
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




export const projectsList: any = {
  en: [
    {
      "name": "AI N8N Automation",
      "description": "A powerful automation platform based on N8N, designed to streamline your workflows and boost productivity.",
      "link": {
        "href": "https://aiautomatehub.org/",
        "label": "aiautomatehub.org"
      },
      "logo": "/1.webp",
      "category": ["Website", "AI Automation"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI", "Vercel"],
      "tags": ["AI", "N8N"]
    },
    {
      "name": "A creative tool focused on drawing functions", 
      "description": "A creative tool focused on drawing functions, integrating powerful drawing capabilities and folder management, providing users with an efficient graphic creation experience. Supports cloud storage and local caching to ensure that your creations never disappear.",
      "link": {
        "href": "https://drawing.ailinksall.com/",
        "label": "drawing.ailinksall.com"
      },
      "logo": "/1.webp",
      "category": ["Website", "Drawing"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI", "Vercel"],
      "tags": ["Drawing", "AI"]
    },
    {
      "name": "AILinksAI",
      "description": "Save cognitive energy, provide deep insights, empower users with foresight, and drive user growth.",
      "link": {
        "href": "https://ailinksall.com",
        "label": "ailinksall.com"
      },
      "logo": "/2.jpg",
      "category": ["Website", "AI Links"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI", "Vercel"],
      "tags": ["AI", "AILinksAI"]
    },
 
  ],
  zh: [
    {
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
      "name": "专注于画图功能的创作工具",
      "description": "Drawing是一个专注于画图功能的创作工具，集成了强大的画图能力和文件夹管理功能，为用户提供高效的图形创作体验。支持云端存储和本地缓存，确保您的创作永不丢失。",
      "link": {
        "href": "https://drawing.ailinksall.com/",
        "label": "drawing.ailinksall.com"
      },
      "logo": "/1.webp",
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
      "logo": "/2.jpg",
      "category": ["网站", "AILinksAI"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI", "Vercel"],
      "tags": ["AI", "AILinksAI"]
    }
  ]
}

export const githubProjectsList: any = {
  en: [
    {
      "name": "drawing",
      "description": "Drawing is a creative tool focused on drawing features, integrating powerful drawing capabilities and folder management, providing users with an efficient graphic creation experience. Supports cloud storage and local caching to ensure that your creations never disappear.",
      "link": { "href": "https://github.com/geallenboy/drawing" },
      "techStack": ["Next.js", "TailwindCSS", "Framer Motion"],
     
    },
    {
      "name": "ai-n8n",
      "description": "A collection of powerful and plug-and-play n8n workflows, leveraging AI to automate complex tasks and significantly boost your productivity.",
      "link": { "href": "https://github.com/geallenboy/ai-n8n" },
      "techStack": ["n8n", "AI", "Automation"],
     
    },
    {
      "name": "ailinksall",
      "description": "The open-source engine behind AILinksAI, providing a curated and insightful knowledge base of AI tools.",
      "link": { "href": "https://github.com/geallenboy/ailinksall" },
      "techStack": ["Next.js", "TypeScript", "Firebase"],
     
    },
    {
      "name": "ai-search",
      "description": "A prototype for an intelligent search application designed to provide semantic, context-aware search results using large language models.",
      "link": { "href": "https://github.com/geallenboy/ai-search" },
      "techStack": ["Next.js", "LangChain", "VectorDB"],
     
    },

    {
      "name": "ai-logo",
      "description": "An experimental AI logo generator capable of creating unique and creative logos from text prompts.",
      "link": { "href": "https://github.com/geallenboy/ai-logo" },
      "techStack": ["Python", "Stable Diffusion", "FastAPI"],
     
    },
    {
      "name": "ai-image",
      "description": "A generative AI project for creating stunning visuals from text descriptions, exploring the application of various image generation models.",
      "link": { "href": "https://github.com/geallenboy/ai-image" },
      "techStack": ["Python", "PyTorch", "Gradio"],
     
    },
    {
      "name": "ai-code",
      "description": "An intelligent coding assistant that utilizes AI to help you write, debug, and optimize code more efficiently.",
      "link": { "href": "https://github.com/geallenboy/ai-code" },
      "techStack": ["VSCode Extension", "TypeScript", "OpenAI"],
      
    },
    {
      "name": "gegarron",
      "description": "The source code for this personal portfolio website, built with Next.js, Tailwind CSS, and Framer Motion.",
      "link": { "href": "https://github.com/geallenboy/gegarron" },
      "techStack": ["Next.js", "TailwindCSS", "Framer Motion"],
     
    }
  ],
  zh: [
    {
      "name": "drawing",
      "description": "Drawing是一个专注于画图功能的创作工具，集成了强大的画图能力和文件夹管理功能，为用户提供高效的图形创作体验。支持云端存储和本地缓存，确保您的创作永不丢失。",
      "link": { "href": "https://github.com/geallenboy/drawing" },
      "techStack": ["Next.js", "TailwindCSS", "Framer Motion"],
     
    },
    {
      "name": "ai-n8n",
      "description": "一系列强大且即插即用的 n8n 工作流集合，利用 AI 实现复杂任务的自动化，极大地提升您的生产力。",
      "link": { "href": "https://github.com/geallenboy/ai-n8n" },
      "techStack": ["n8n", "AI", "Automation"],
    
    },
    {
      "name": "ailinksall",
      "description": "AILinksAI 背后的开源引擎，提供一个经过精心策划、富有洞察力的 AI 工具和知识库。",
      "link": { "href": "https://github.com/geallenboy/ailinksall" },
      "techStack": ["Next.js", "TypeScript", "Firebase"],
     
    },
    {
      "name": "ai-search",
      "description": "一个智能搜索应用原型，旨在利用大语言模型提供语义化、具备上下文感知能力的搜索结果。",
      "link": { "href": "https://github.com/geallenboy/ai-search" },
      "techStack": ["Next.js", "LangChain", "VectorDB"],
     
    },

    {
      "name": "ai-logo",
      "description": "一个实验性的 AI Logo 生成器，能够根据文本提示创造出独特且富有创意的徽标设计。",
      "link": { "href": "https://github.com/geallenboy/ai-logo" },
      "techStack": ["Python", "Stable Diffusion", "FastAPI"],
     
    },
    {
      "name": "ai-image",
      "description": "一个从文本描述创建惊艳视觉内容的生成式 AI 项目，探索了多种图像生成模型的应用。",
      "link": { "href": "https://github.com/geallenboy/ai-image" },
      "techStack": ["Python", "PyTorch", "Gradio"],
     
    },
    {
      "name": "ai-code",
      "description": "一个智能编码助手，利用 AI 帮助您更高效地编写、调试和优化代码。",
      "link": { "href": "https://github.com/geallenboy/ai-code" },
      "techStack": ["VSCode Extension", "TypeScript", "OpenAI"],
     
    },
    {
      "name": "gegarron",
      "description": "此个人作品集网站的源代码，使用 Next.js、Tailwind CSS 和 Framer Motion 构建。",
      "link": { "href": "https://github.com/geallenboy/gegarron" },
      "techStack": ["Next.js", "TailwindCSS", "Framer Motion"],
     
    }
  ]
}

