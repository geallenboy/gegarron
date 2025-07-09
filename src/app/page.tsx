'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Moon, 
  Sun, 
  Languages,
  Sparkles,
  Zap,
  Code2,
  Rocket,
  Star,
  GitFork,
  MessageCircle,
  Twitter,
  Facebook
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  socialLinks, 
  projectsList, 
  githubProjectsList,
  coreServices,
  name,
  email,
  type ProjectItemType
} from '@/config/infoConfig'

// 增强的动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.08
    }
  }
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    }
  }
}

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
}

const NewLogo = () => (
  <svg width="40" height="40" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'rgb(139, 92, 246)', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path d="M128 24C65.23 24 24 65.23 24 128C24 190.77 65.23 232 128 232C190.77 232 232 190.77 232 128C232 65.23 190.77 24 128 24ZM183.43 183.43C165.78 201.08 143.43 208 128 208C99.25 208 72.82 196.48 55.48 178.5C55.07 178.08 55.51 177.38 56.16 177.55L110.51 192.43C112.11 192.88 113.82 192.35 114.91 191.09L159.21 138.8C160.25 137.59 160.03 135.72 158.83 134.64L105.79 87.09C104.75 86.17 103.11 86.33 102.26 87.4L78.67 116.89C77.72 118.06 78.23 119.74 79.62 120.11L134.33 135.08C135.53 135.39 136.81 134.87 137.52 133.88L179.33 82.57C197.35 100.28 208 125.43 208 152C208 164.84 204.42 176.94 198.17 187.43C197.55 188.48 198.54 189.65 199.76 189.28L205.85 187.33C206.58 187.07 206.96 186.27 206.53 185.57C205.15 182.85 203.95 180.24 202.94 177.71C202.13 175.77 199.5 175.33 198.21 176.94L183.43 195.43C182.52 196.58 182.91 198.24 184.21 198.6L189.43 200.17C191.38 200.73 191.73 198.21 189.87 197.16L183.43 183.43Z" fill="url(#grad1)"/>
  </svg>
);

const HomePage = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [locale, setLocale] = useState('zh')

  useEffect(() => {
    setMounted(true)
  }, [])

  const switchLanguage = () => {
    setLocale(locale === 'zh' ? 'en' : 'zh')
  }

  if (!mounted) return null

  const projects = (projectsList as any)[locale] || []
  const githubProjects = (githubProjectsList as any)[locale] || []
  const services = (coreServices as any)[locale] || []

  // 增强的文本内容
  const content = {
    zh: {
      headline: '你好，我是 Gegarron',
      introduction: '我热衷于探索 AI 的无限可能，并将其转化为高效、智能的自动化解决方案。作为一名独立开发者，我致力于打造能够真正改变工作与生活方式的创新产品。',
      contact: '与我联系',
      servicesHeadline: '✨ 服务范围',
      projects: '🎯 精选作品',
      productProjects: '🏆 核心产品',
      openSourceProjects: '🌟 开源探索',
      footer: '基于 Next.js 构建',
      badges: {
        aiExpert: 'AI 探索者',
        fullStack: 'AI 自动化玩家',
        independent: '独立开发者',
        innovator: '全栈工程师'
      }
    },
    en: {
      headline: "Hi, I'm Gegarron",
      introduction: "I'm passionate about exploring the infinite possibilities of AI and transforming them into efficient, intelligent automation solutions. As an independent developer, I am dedicated to building innovative products that truly change the way we work and live.",
      contact: 'Contact Me',
      servicesHeadline: '✨ What I Do',
      projects: '🎯 Featured Works',
      productProjects: '🏆 Core Products',
      openSourceProjects: '🌟 Open Source',
      footer: 'Built with Next.js',
      badges: {
        aiExpert: 'AI Explorer',
        fullStack: 'AI Automation Player',
        independent: 'Independent Developer',
        innovator: 'Full Stack Engineer'
      }
    }
  }

  const t = content[locale as keyof typeof content]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30 transition-all duration-700">
      
      {/* 背景装饰元素 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-400/15 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* 主容器 */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        
        {/* 增强的顶部工具栏 */}
        <motion.div 
          className="flex justify-between items-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <div className="flex items-center space-x-3">
            <motion.button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-3 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 dark:border-gray-700/50"
              title={theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={resolvedTheme}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {resolvedTheme === 'dark' ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-blue-600" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
            
            <motion.button 
              onClick={switchLanguage}
              className="p-3 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 dark:border-gray-700/50"
              title={`Switch to ${locale === 'zh' ? 'English' : '中文'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Languages size={20} className="text-green-600" />
            </motion.button>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={`mailto:${email}`}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail size={16} />
              <span className="text-sm font-medium">{t.contact}</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* 增强的英雄区域 */}
        <motion.section
          className="text-center mb-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-12">
           
            <motion.h1 
              className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {t.headline}
              </span>
            </motion.h1>
            
            {/* 身份标签 */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-8"
              variants={itemVariants}
            >
              {Object.values(t.badges).map((badge, index) => (
                <motion.span
                  key={badge}
                  className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-lg border border-white/20 dark:border-gray-700/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
            
           
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {t.introduction}
            </motion.p>
          </motion.div>

          {/* 增强的社交链接 - 倾斜玻璃版本 */}
          <motion.div variants={itemVariants} className="flex justify-center items-center space-x-6">
            {socialLinks.map((link, index) => {
              let IconComponent;
              let hoverColorClass = '';
              switch (link.icon) {
                case 'github': IconComponent = Github; hoverColorClass = 'group-hover:text-black dark:group-hover:text-white'; break;
                case 'x': IconComponent = Twitter; hoverColorClass = 'group-hover:text-blue-500'; break;
                case 'wechat': IconComponent = MessageCircle; hoverColorClass = 'group-hover:text-green-500'; break;
                case 'facebook': IconComponent = Facebook; hoverColorClass = 'group-hover:text-blue-600'; break;
                default: IconComponent = ExternalLink; hoverColorClass = 'group-hover:text-gray-500';
              }
              
              return (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block p-4 rounded-full overflow-hidden bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg shadow-lg border border-white/30 dark:border-gray-700/60 transform transition-all duration-300 hover:shadow-2xl"
                    title={link.name}
                  >
                    {/* 倾斜的背景 */}
                    <div className="absolute inset-0 bg-white/20 dark:bg-gray-900/20 transform -skew-y-12 z-0"></div>

                    {/* 悬浮微光 */}
                    <div className="absolute inset-0 z-10 overflow-hidden">
                      <motion.div 
                        className="absolute -top-full -left-12 w-24 h-[400%] bg-white/30 dark:bg-white/10 opacity-50 transform -skew-x-12"
                        initial={{ x: '-200%' }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                    </div>
                    
                    {/* 图标 */}
                    <div className="relative z-20">
                      <IconComponent size={24} className={`text-gray-700 dark:text-gray-300 transition-colors duration-300 ${hoverColorClass}`} />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.section>

        {/* 增强的核心服务 */}
        <motion.section
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.servicesHeadline}
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service: any, index: number) => {
              const icons = [Sparkles, Zap, Code2, Rocket]
              const IconComponent = icons[index % icons.length]
              
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-800"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent size={24} className="text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        {/* 增强的项目展示 */}
        <motion.section 
          id="projects"
          className="mb-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white" variants={itemVariants}>
            <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">{t.productProjects}</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project: ProjectItemType, index: number) => (
              <motion.div
                key={index}
                className="group relative flex flex-col rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={project.logo || '/images/placeholder.png'}
                    alt={`${project.name} logo`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack?.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900/50 dark:text-blue-300">{tech}</span>
                    ))}
                  </div>

                  <motion.div className="mt-auto">
                    <Link href={project.link.href} target="_blank" rel="noopener noreferrer">
                      <span className="inline-flex items-center justify-center w-full px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 group-hover:shadow-xl">
                        {locale === 'zh' ? '访问网站' : 'Visit Site'}
                        <ExternalLink size={18} className="ml-2" />
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 开源项目 */}
        <motion.section 
          id="opensource"
          className="mb-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white" variants={itemVariants}>
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">{t.openSourceProjects}</span>
          </motion.h2>

          <div className="space-y-8">
            {githubProjects.map((project: ProjectItemType, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                className="group relative p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-grow mb-4 md:mb-0">
                    <Link href={project.link.href} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {project.name}
                      </h3>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.techStack?.map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full dark:bg-green-900/50 dark:text-green-300">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 flex-shrink-0">
                   
                    <Link href={project.link.href} target="_blank" rel="noopener noreferrer" className="hidden md:inline-block">
                      <Github size={24} className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 增强的页脚 */}
        <motion.footer
          className="text-center py-12 border-t border-white/20 dark:border-gray-700/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-500 dark:text-gray-400 text-lg"
            whileHover={{ scale: 1.05 }}
          >
            © 2025 {name}. {t.footer}.
          </motion.p>
        </motion.footer>
      </div>
    </div>
  )
}

export default HomePage
