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
      description: '为个人或企业提供基于 AI 和自动化工具（如 n8n）的定制化工作流和系统搭建服务。',
      icon: 'robot'
    },
    {
      title: '独立产品开发',
      description: '作为独立开发者孵化和推广创新产品、工具或服务，专注于 AI 驱动的解决方案。',
      icon: 'code'
    },
    {
      title: 'AI 技术咨询与赋能',
      description: '分享 AI 领域的前沿知识，提供技术咨询，助力个人或团队拥抱 AI 变革。',
      icon: 'lightbulb'
    },
    {
      title: '开源贡献与技术分享',
      description: '积极参与开源社区，并通过博客分享技术经验和最佳实践。',
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
    name: 'X',
    icon: 'x',
    href: 'https://x.com/gejialun88'
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/geallenboy'
  },
  {
    name: 'Wechat',
    icon: 'wechat',
    href: 'https://github.com/geallenboy'
  }
]

// education 
export type EducationItemType = {
  school: string
  major: string
  image?: string
  logo: string
  start: string
  end: string
}

//Array<EducationItemType>
export const educationList: any = {
  en: [
    {
      "school": "Non-traditional School",
      "major": "Computer Science and Technology",
      "logo": "Academy",
      "start": "2012",
      "end": "2016"
    },
  ],
  zh: [
    {
      school: '非传统学校',
      major: '计算机科学与技术',
      logo: '学院',
      start: '2012',
      end: '2016'
    },
  ]
}

// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
}

// Array<CareerItemType>
export const careerList: any = {
  en: [
    {
      "company": "AIing",
      "title": "Software Engineer",
      "logo": "E-commerce",
      "start": "2011",
      "end": "2024"
    }
  ],
  zh: [
    {
      company: 'AI',
      title: '软件工程师',
      logo: 'E-commerce',
      start: '2011',
      end: '2024'
    },
  ]
}

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

// changelog
export type ChangelogItemType = {
  date: string
  content: [{
    title: string
    description: string
  }]
}

// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = [
  {
    name: 'GeGarron',
    link: { href: 'https://gegarron.com' },
  }
]

export const projectsList: any = {
  en: [
    {
      "name": "AI N8N自动化",
      "description": "AI N8N自动化是一个基于N8N的自动化平台，可以帮助你自动化你的工作流程。",
      "link": {
        "href": "https://aiautomatehub.org/",
        "label": "AI N8N自动化"
      },
      "logo": "/images/icon/devtoolset.png",
      "category": ["网站", "AI N8N自动化"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI", "vercel"],
      "tags": ["AI", "N8N"]
    }
  ],
  zh: [
    {
      "name": "AI N8N自动化",
      "description": "AI N8N自动化是一个基于N8N的自动化平台，可以帮助你自动化你的工作流程。",
      "link": {
        "href": "https://aiautomatehub.org/",
        "label": "AI N8N自动化"
      },
      "logo": "/images/icon/devtoolset.png",
      "category": ["网站", "AI N8N自动化"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI", "vercel"],
      "tags": ["AI", "N8N"]
    }
  ]
}

export const githubProjectsList: any = {
  en: [
    {
      "name": "ai-image",
      "description": "ai image",
      "link": {
        "href": "#",
        "label": "ai-image"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    {
      "name": "ai-logo",
      "description": "ai logo",
      "link": {
        "href": "#",
        "label": "ai-logo"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    {
      "name": "ai-code",
      "description": "ai code",
      "link": {
        "href": "#",
        "label": "ai-code"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    
    {
      "name": "ai-search",
      "description": "ai-search",
      "link": {
        "href": "https://github.com/geallenboy/ai-search",
        "label": "ai-search"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    
    {
      "name": "ai-chat",
      "description": "ai chat",
      "link": {
        "href": "https://github.com/geallenboy/ai-chat",
        "label": "ai-chat"
      },
      "gitStars": 0,
      "gitForks": 0
    }
    
   
  ],
  zh: [
    {
      "name": "ai-image",
      "description": "ai image",
      "link": {
        "href": "#",
        "label": "ai-image"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    {
      "name": "ai-logo",
      "description": "ai logo",
      "link": {
        "href": "#",
        "label": "ai-logo"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    {
      "name": "ai-code",
      "description": "ai code",
      "link": {
        "href": "#",
        "label": "ai-code"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    
    {
      "name": "ai-search",
      "description": "ai-search",
      "link": {
        "href": "https://github.com/geallenboy/ai-search",
        "label": "ai-search"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    
    {
      "name": "ai-chat",
      "description": "ai chat",
      "link": {
        "href": "https://github.com/geallenboy/ai-chat",
        "label": "ai-chat"
      },
      "gitStars": 0,
      "gitForks": 0
    }
  ]
}

export const changelogList: any = {
  en: [
    {
      "date": "2025-1-6",
      "content": [
        {
          "title": "💡 Inspiration / Ideas Emerge",
          "description": "I want a portfolio website. It doesn't need to be too flashy, but it should have good design. It needs to showcase all my projects and include a blog section to share my thoughts and development experiences."
        }
      ]
    },
    {
      "date": "2025-1-5",
      "content": [
        {
          "title": "🛫 Project Deployed",
          "description": "The first version of my portfolio website has been built and deployed."
        }
      ]
    },
    {
      "date": "2024-1-1",
      "content": [
        {
          "title": "🌿 Open Source",
          "description": "Open-sourced my portfolio website"
        }
      ]
    }
  ],
  zh: [
    {
      "date": "2025-1-6",
      "content": [
        {
          "title": "💡 灵感迸发 / 想法浮现",
          "description": "我想要一个作品集网站。网站不需要太华丽，但需要有良好的设计。它需要展示我所有的项目，并包含一个博客部分，用于分享我的想法和开发经验。"
        }
      ]
    },
    {
      "date": "2025-1-5",
      "content": [
        {
          "title": "🛫 项目已部署",
          "description": "我的作品集网站第一版已完成构建并部署。"
        }
      ]
    },
    {
      "date": "2024-1-1",
      "content": [
        {
          "title": "🌿 开源",
          "description": "开源我的作品集网站"
        }
      ]
    }
  ]
}

export const aboutParagraphs: any = {
  en: [
    "In this rapidly evolving era of artificial intelligence, I focus on transforming cutting-edge AI technologies into practical and innovative solutions. With solid front-end development foundations and deep understanding of AI technologies, I can build AI application systems that are both aesthetically intuitive and powerfully functional. From user experience design to system architecture construction, from model integration to deployment and maintenance, I strive to build seamlessly connected technical systems throughout the AI development process.",
    "As an independent developer and entrepreneur, I focus on real-world application scenarios of AI across various industries, dedicated to solving real-world problems. I maintain an enthusiastic exploration of AGI (Artificial General Intelligence), believing that technological innovation can bring a better future for humanity. My projects emphasize combining technological breakthroughs with practical applications, based on professional engineering practices, using innovative thinking to expand the possibilities of AI.",
    "Whether you're seeking technical collaboration or share an interest in the AI field, I look forward to connecting with you to explore the unlimited potential of AI together."
  ],
  zh: [
    "在人工智能日新月异的时代，我专注于将前沿AI技术转化为实用且创新的解决方案。凭借扎实的前端开发功底和对AI技术的深入理解，我能够构建既美观直观又功能强大的AI应用系统。从用户体验设计到系统架构搭建，从模型集成到部署维护，我追求在AI开发全流程中构建无缝衔接的技术体系。",
    "作为独立开发者和创业者，我关注AI在各行业的实际应用场景，致力于解决真实世界的问题。我始终保持对AGI(通用人工智能)的探索热情，相信技术创新可以为人类带来更美好的未来。我的项目注重技术突破与实际应用相结合，以专业的工程实践为基础，用创新的思维拓展AI的可能性。",
    "无论您是寻求技术合作，还是对AI领域有共同兴趣，我期待与您建立联系，共同探索AI的无限可能。"
  ]
}

// 技术栈配置
export const techStack = {
  frontend: [
    'React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Vue.js', 
  ],
  backend: [
    'Node.js', 'Python','Prisma', 'PostgreSQL'
  ],
  ai: [
    'OpenAI', 'AI Agent', 'LangChain', 'RAG', 'MCP'
  ],
  automation: [
    'n8n',  'Docker', 'Vercel'
  ],
  tools: [
    'Git', 'cursor', 'notebooklm',  'Notion'
  ]
}

// 技术栈标签颜色配置
export const techStackColors = {
  React: '#61DAFB',
  'Next.js': '#000000',
  TypeScript: '#3178C6',
  TailwindCSS: '#06B6D4',
  'Vue.js': '#4FC08D',
  'cursor': '#00DC82',
  'Node.js': '#339933',
  Python: '#3776AB',
  "AI Agent": '#009688',
  'RAG': '#000000',
  Prisma: '#2D3748',
  PostgreSQL: '#336791',
  OpenAI: '#412991',
  "MCP": '#CC785C',
  LangChain: '#1C3A3A',
  'notebooklm': '#FFD21E',
  TensorFlow: '#FF6F00',
  PyTorch: '#EE4C2C',
  n8n: '#EA4B71',
  Zapier: '#FF4A00',
  'GitHub Actions': '#2088FF',
  Docker: '#2496ED',
  Vercel: '#000000',
  AWS: '#FF9900',
  Git: '#F05032',
  'VS Code': '#007ACC',
  Figma: '#F24E1E',
  Postman: '#FF6C37',
  Linear: '#5E6AD2',
  Notion: '#000000'
}