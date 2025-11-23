export const siteConfig = {
  name: 'Ge Garron',
  title: 'Ge Garron · AI & Web3 Developer',
  description: '构建面向投资与自动化的 AI 应用与 Web3 工具',
  url: 'https://gegarron.com',
  ogImage: 'https://gegarron.com/og.jpg',
  links: {
    github: 'https://github.com/gegarron',
    twitter: 'https://twitter.com/gegarron',
    email: 'mailto:gegarron@example.com',
  },
};

export const personalInfo = {
  name: 'Ge Garron',
  title: 'AI & Web3 Developer',
  subtitle: '构建面向投资与自动化的 AI 应用与 Web3 工具',
  bio: 'AI 应用 & Web3 开发者 / Indie Hacker。正在打造「AI Links All + 投资助手 + Web3 工具」的个人生态。专注于 AI 自动化、知识管理、投资工具和 Web3 DApp 开发。',
  tags: ['AI 应用开发', 'Web3 DApp', '投资工具', '自动化'],
};

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/gegarron',
    icon: 'github',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/gegarron',
    icon: 'twitter',
  },
  {
    name: 'Email',
    url: 'mailto:gegarron@example.com',
    icon: 'mail',
  },
];

export const skills = {
  ai: {
    title: 'AI/ML',
    items: [
      { name: 'LangChain', level: 'intermediate' },
      { name: 'n8n', level: 'intermediate' },
      { name: 'Python', level: 'intermediate' },
    ],
  },
  web: {
    title: 'Web Development',
    items: [
      { name: 'Next.js', level: 'advanced', category: 'frontend' },
      { name: 'React', level: 'advanced', category: 'frontend' },
      { name: 'TypeScript', level: 'advanced', category: 'frontend' },
      { name: 'Tailwind CSS', level: 'advanced', category: 'frontend' },
      { name: 'Node.js', level: 'advanced', category: 'backend' },
      { name: 'PostgreSQL', level: 'intermediate', category: 'backend' },
      { name: 'Supabase', level: 'intermediate', category: 'backend' },
      { name: 'Qdrant', level: 'beginner', category: 'backend' },
    ],
  },
  web3: {
    title: 'Web3',
    items: [
      { name: 'wagmi', level: 'intermediate' },
      { name: 'viem', level: 'intermediate' },
      { name: 'RainbowKit', level: 'intermediate' },
      { name: 'Solidity', level: 'beginner' },
      { name: 'Ethereum / L2', level: 'beginner' },
    ],
  },
};

export const projects = [
  {
    id: 'ai-saas-template',
    title: 'AI SaaS Template',
    description:
      'A template for building AI-powered SaaS applications using Next.js, LangChain, and vector databases.',
    category: 'ai',
    tags: ['Next.js', 'LangChain', 'AI', 'SaaS'],
    image: '/1.webp',
    links: {
      demo: 'https://demo.example.com',
      github: 'https://github.com/gegarron/ai-saas-template',
    },
    featured: true,
  },
  {
    id: 'investment-assistant',
    title: 'AI Investment Assistant',
    description:
      'An AI-based decision support system for investments, automating news and RSS processing to generate macro-research cards.',
    category: 'ai',
    tags: ['AI', 'n8n', 'Investment', 'Automation'],
    image: '/2.webp',
    links: {
      demo: 'https://demo.example.com',
    },
    featured: true,
  },
  {
    id: 'invest-hub',
    title: 'Invest-Hub',
    description:
      'A Web3 investment tool platform supporting wallet connections and on-chain data analysis.',
    category: 'web3',
    tags: ['Web3', 'wagmi', 'RainbowKit', 'DApp'],
    image: '/3.webp',
    links: {
      demo: 'https://demo.example.com',
      github: 'https://github.com/gegarron/invest-hub',
    },
    featured: true,
  },
];

export const journey = [
  {
    id: '2025-11',
    date: '2025-11',
    title: 'Web3 入门 Week 1',
    description: '开始系统学习 Web3 开发，完成了 wagmi 和 RainbowKit 的基础项目',
    tags: ['Web3', 'Learning'],
  },
  {
    id: '2025-10',
    date: '2025-10',
    title: 'AI 投资助手 v0.1',
    description: '完成了 AI 投资助手的第一版，实现了自动化新闻抓取和分析',
    tags: ['AI', 'Project'],
  },
  {
    id: '2024-12',
    date: '2024-12',
    title: 'LangChain 60 天计划',
    description: '开始系统化学习 LangChain，完成了多个 AI 应用 demo',
    tags: ['AI', 'LangChain', 'Learning'],
  },
  {
    id: '2024-11',
    date: '2024-11',
    title: '嘉伦投资成长计划启动',
    description: '开始系统化学习投资知识，并用 AI 工具辅助学习',
    tags: ['Investment', 'Learning'],
  },
];

export type Project = (typeof projects)[number];
export type JourneyItem = (typeof journey)[number];
export type Skill = (typeof skills.ai.items)[number];
