
// personal info
export const name = 'GeGarron'
export const headline = '软件工程师、AI全栈 Web 开发者、独立开发者。'
export const introduction = '我是Garron，一名软件工程师。喜欢编程，喜欢新的技术，喜欢构建有趣的东西。'
export const email = 'gejialun88@gmail.com'
export const githubUsername = 'geallenboy'

// about page
export const aboutMeHeadline = "我是GeGarron, 一名软件工程师。"
export const aboutParagraphs = [
  "我热爱编程。拥有10年前端编程经验、目前专注于AI应用的开发与探索，致力于将人工智能技术与实际场景相结合，打造创新、高效的解决方案。",
  "我有很多爱好、比如健身、看电影、听音乐、旅行等等。"
]


// projects
export const projectHeadLine = "我曾做过的事和我正在做的事."
export const projectIntro = "我参与过各种类型的项目，从简单的网站到复杂的网页应用程序，其中许多是开源的。以下是我最喜欢的一些项目。"


// blog
export const blogHeadLine = "我在思考的事情"
export const blogIntro = "我写了一些关于AI、编程和生活的内容."

// changelog
export const changelogHeadLine = "这个网站的新内容"
export const changelogIntro = "查看本站的最新更新。"


// friends
export const friendsHeadLine = "garron的朋友"
export const friendsIntro = "结识一些有趣的朋友。"

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
    href: 'https://mp.weixin.qq.com/s/DxnRgqNfgzXIhqj6w_x0dQ'
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



export const educationList: Array<EducationItemType> = [
  {
    school: '非传统学校',
    major: '计算机科学与技术',
    logo: '学院',
    start: '2012',
    end: '2016'
  },
]

// career
export type CareerItemType = {
  company: string
  title: string
  image?: string
  logo: string
  start: string
  end: string
}



export const careerList: Array<CareerItemType> = [
  {
    company: 'AIing',
    title: '软件工程师',
    logo: '电商',
    start: '2016',
    end: '2024'
  },
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

// projects 
export const projects: Array<ProjectItemType> = [
  {
    name: 'AI Image',
    description: 'AI 生成图片,自定义模型训练',
    link: { href: 'https://github.com/geallenboy/image-ai', label: 'AI Image' },
    logo: '/images/icon/aibesttools.png',
    category: ['网站'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['AI', 'Image']
  },
  {
    name: 'AI Logo',
    description: '您的终极目录合集。',
    link: { href: 'https://github.com/geallenboy/logo-ai', label: 'AI Logo' },
    logo: '/images/icon/bestdirectories.png',
    category: ['网站'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['目录合集']
  },
  {
    name: 'wiper',
    description: '最好用的自定义画板工具',
    link: { href: 'https://github.com/geallenboy/wiper', label: 'wiper' },
    logo: '/images/icon/usergrowth.ico',
    category: ['网站'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['画板', '', 'SEO']
  },
  {
    name: 'AI故事魔法师',
    description: 'AI 故事生成',
    link: { href: 'https://github.com/geallenboy/ai-story-wizard', label: 'ai story wizard' },
    logo: '/images/icon/devtoolset.png',
    category: ['网站'],
    techStack: ['Next.js', 'TailwindCSS', 'Shadcn/UI'],
    tags: ['AI故事', '生成式AI']
  },

]


export const githubProjects: Array<ProjectItemType> = [
  {
    name: 'landing-page',
    description: '构建一个 Next.js AI Saas 着陆页面｜TailwindCSS、React、Typescript',
    link: { href: 'https://github.com/geallenboy/landing-page', label: 'landing page' },
    gitStars: 0,
    gitForks: 0
  },

  {
    name: '独立开发者工具精选',
    description: '独立开发/出海开发相关技术栈及工具收录',
    link: { href: 'https://github.com/geallenboy', label: 'Awesome Indie Hacker Tools' },
    gitStars: 0,
    gitForks: 0
  },
  {
    name: 'AI 资源工具导航',
    description: 'AI 资源工具导航站收录',
    link: { href: 'https://github.com/geallenboy', label: 'Awesome AI Directory' },
    gitStars: 37,
    gitForks: 5
  },

]


// changelog
export type ChangelogItemType = {
  date: string
  content: [{
    title: string
    description: string
  }]
}

export const changelogList: Array<ChangelogItemType> = [
  {
    date: '2025-1-6',
    content: [
      {
        title: '💡 灵感迸发 / 想法浮现',
        description: '我想要一个作品集网站。网站不需要太华丽，但需要有良好的设计。它需要展示我所有的项目，并包含一个博客部分，用于分享我的想法和开发经验。'
      },
    ]
  },
  {
    date: '2025-1-5',
    content: [
      {
        title: '🛫 项目已部署',
        description: '我的作品集网站第一版已完成构建并部署。'
      },
    ]
  },

  {
    date: '2024-1-1',
    content: [
      {
        title: '🌿 开源',
        description: '开源我的作品集网站'
      },
    ]
  }
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "rn",
  "apple",
  "wechat"
];


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


