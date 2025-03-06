
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
      "start": "2016",
      "end": "2024"
    }
  ],
  zh: [
    {
      company: 'AI',
      title: '软件工程师',
      logo: '电商',
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
      "name": "AIImage",
      "description": "AI Image is an artificial intelligence-based image generation platform.",
      "link": {
        "href": "https://aiimage.nextjsbase.site/",
        "label": "AI Image"
      },
      "logo": "/images/icon/devtoolset.png",
      "category": ["网站", "AI Image"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI", "vercel"],
      "tags": ["AI", "Image"]
    },
    {
      "name": "AILogo",
      "description": "AI Logo is an innovative platform designed to generate customized logos using artificial intelligence.",
      "link": {
        "href": "https://ailogo.nextjsbase.site/",
        "label": "ai logo"
      },
      "logo": "/images/icon/devtoolset.png",
      "category": ["网站"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI"],
      "tags": ["AILogo"]
    },
    {
      "name": "AICode",
      "description": "AICode...",
      "link": {
        "href": "https://aicode.nextjsbase.site/",
        "label": "ai code"
      },
      "logo": "/images/icon/devtoolset.png",
      "category": ["网站"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI"],
      "tags": ["AICode"]
    },
    {
      "name": "AIPdf",
      "description": "AIPdf...",
      "link": {
        "href": "https://aipdf.nextjsbase.site/",
        "label": "ai pdf"
      },
      "logo": "/images/icon/devtoolset.png",
      "category": ["网站"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI"],
      "tags": ["AIPdf"]
    },
    {
      "name": "AIVideo",
      "description": "AIVideo...",
      "link": {
        "href": "https://aivideo.nextjsbase.site/",
        "label": "ai video"
      },
      "logo": "/images/icon/devtoolset.png",
      "category": ["网站"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI"],
      "tags": ["AIVideo"]
    },
    {
      "name": "AIResume",
      "description": "AIResume...",
      "link": {
        "href": "https://airesume.nextjsbase.site/",
        "label": "ai resume"
      },
      "logo": "/images/icon/devtoolset.png",
      "category": ["网站"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI"],
      "tags": ["AIResume"]
    }
  ],
  zh: [
    {
      "name": "AIImage",
      "description": "AI Image 是一款基于人工智能的图像生成平台。",
      "link": {
        "href": "https://aiimage.nextjsbase.site/",
        "label": "AI Image"
      },
      "logo": "/images/icon/devtoolset.png",
      "category": ["网站", "AI Image"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI", "vercel"],
      "tags": ["AI", "Image"]
    },
    {
      "name": "AILogo",
      "description": "AI Logo 是一款创新平台，旨在利用人工智能生成定制化的 logo。",
      "link": {
        "href": "https://ailogo.nextjsbase.site/",
        "label": "ai logo"
      },
      "logo": "/images/icon/devtoolset.png",
      "category": ["网站"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI"],
      "tags": ["AILogo"]
    },
    {
      "name": "AICode",
      "description": "AICode...",
      "link": {
        "href": "https://aicode.nextjsbase.site/",
        "label": "ai code"
      },
      "logo": "/images/icon/devtoolset.png",
      "category": ["网站"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI"],
      "tags": ["AICode"]
    },
    {
      "name": "AIPdf",
      "description": "AIPdf...",
      "link": {
        "href": "https://aipdf.nextjsbase.site/",
        "label": "ai pdf"
      },
      "logo": "/images/icon/devtoolset.png",
      "category": ["网站"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI"],
      "tags": ["AIPdf"]
    },
    {
      "name": "AIVideo",
      "description": "AIVideo...",
      "link": {
        "href": "https://aivideo.nextjsbase.site/",
        "label": "ai video"
      },
      "logo": "/images/icon/devtoolset.png",
      "category": ["网站"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI"],
      "tags": ["AIVideo"]
    },
    {
      "name": "AIResume",
      "description": "AIResume...",
      "link": {
        "href": "https://airesume.nextjsbase.site/",
        "label": "ai resume"
      },
      "logo": "/images/icon/devtoolset.png",
      "category": ["网站"],
      "techStack": ["Next.js", "TailwindCSS", "Shadcn/UI"],
      "tags": ["AIResume"]
    }
  ]
}

export const githubProjectsList: any = {
  en: [
    {
      "name": "ai-image",
      "description": "ai image",
      "link": {
        "href": "https://github.com/geallenboy/ai-image",
        "label": "ai-image"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    {
      "name": "ai-logo",
      "description": "ai logo",
      "link": {
        "href": "https://github.com/geallenboy/ai-logo",
        "label": "ai-logo"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    {
      "name": "ai-code",
      "description": "ai code",
      "link": {
        "href": "https://github.com/geallenboy/ai-code",
        "label": "ai-code"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    {
      "name": "ai-pdf",
      "description": "ai pdf",
      "link": {
        "href": "https://github.com/geallenboy/ai-pdf",
        "label": "ai-pdf"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    {
      "name": "ai-video",
      "description": "ai video",
      "link": {
        "href": "https://github.com/geallenboy/ai-video",
        "label": "ai-video"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    {
      "name": "ai-resume",
      "description": "ai resume",
      "link": {
        "href": "https://github.com/geallenboy/ai-resume",
        "label": "ai-resume"
      },
      "gitStars": 0,
      "gitForks": 0
    },
  ],
  zh: [
    {
      "name": "ai-image",
      "description": "ai image",
      "link": {
        "href": "https://github.com/geallenboy/ai-image",
        "label": "ai-image"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    {
      "name": "ai-logo",
      "description": "ai logo",
      "link": {
        "href": "https://github.com/geallenboy/ai-logo",
        "label": "ai-logo"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    {
      "name": "ai-code",
      "description": "ai code",
      "link": {
        "href": "https://github.com/geallenboy/ai-code",
        "label": "ai-code"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    {
      "name": "ai-pdf",
      "description": "ai pdf",
      "link": {
        "href": "https://github.com/geallenboy/ai-pdf",
        "label": "ai-pdf"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    {
      "name": "ai-video",
      "description": "ai video",
      "link": {
        "href": "https://github.com/geallenboy/ai-video",
        "label": "ai-video"
      },
      "gitStars": 0,
      "gitForks": 0
    },
    {
      "name": "ai-resume",
      "description": "ai resume",
      "link": {
        "href": "https://github.com/geallenboy/ai-resume",
        "label": "ai-resume"
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