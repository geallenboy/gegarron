'use client'

import { motion } from 'framer-motion'
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
  Rocket
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

const HomePage = () => {
  const { theme, setTheme } = useTheme()
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
      headline: '🚀 AI 驱动的未来创造者',
      introduction: '专注于将前沿AI技术转化为实用创新解决方案，用代码构建更智能的世界',
      contact: '💬 联系我',
      servicesHeadline: '✨ 核心服务',
      projects: '🎯 精选作品',
      productProjects: '🏆 产品项目',
      openSourceProjects: '🌟 开源贡献',
      footer: '基于 Next.js 构建',
      badges: {
        aiExpert: 'AI 专家',
        fullStack: '全栈工程师',
        independent: '独立开发者',
        innovator: '技术创新者'
      }
    },
    en: {
      headline: '🚀 AI-Powered Future Creator',
      introduction: 'Transforming cutting-edge AI technology into practical innovative solutions, building a smarter world with code',
      contact: '💬 Contact',
      servicesHeadline: '✨ Core Services',
      projects: '🎯 Featured Works',
      productProjects: '🏆 Product Projects',
      openSourceProjects: '🌟 Open Source',
      footer: 'Built with Next.js',
      badges: {
        aiExpert: 'AI Expert',
        fullStack: 'Full-Stack Engineer',
        independent: 'Independent Developer',
        innovator: 'Tech Innovator'
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
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-3 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:bg-white/90 dark:hover:bg-gray-700/90 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 dark:border-gray-700/50"
              title={theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-blue-600" />}
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
            <motion.div 
              className="w-32 h-32 mx-auto mb-8 relative"
              variants={floatingVariants}
              initial="initial"
              animate="animate"
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-2xl">
                {name.charAt(0)}
              </div>
              <motion.div
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-75 blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                {name}
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
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 max-w-4xl mx-auto font-medium leading-relaxed"
              variants={itemVariants}
            >
              {t.headline}
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {t.introduction}
            </motion.p>
          </motion.div>

          {/* 增强的社交链接 */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => {
              let IconComponent = Github
              if (link.name === 'X') IconComponent = ExternalLink
              if (link.name === 'Wechat') IconComponent = Mail
              
              return (
                <motion.div
                  key={link.name}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl  border-white/20 dark:border-gray-700/50"
                    title={link.name}
                  >
                    <IconComponent size={24} className="group-hover:scale-110 transition-transform text-gray-700 dark:text-gray-300" />
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
              {t.projects}
            </span>
          </motion.h2>
          
          {/* 产品项目 */}
          {projects.length > 0 && (
            <motion.div className="mb-16" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
                {t.productProjects}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project: ProjectItemType, index: number) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 dark:border-gray-700/50"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        {project.logo && (
                          <motion.div
                            className="relative"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Image
                              src={project.logo}
                              alt={project.name}
                              width={48}
                              height={48}
                              className="rounded-xl shadow-md"
                            />
                          </motion.div>
                        )}
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.name}
                          </h4>
                          {project.category && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {project.category.join(' • ')}
                            </p>
                          )}
                        </div>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Link
                          href={project.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-100 dark:bg-blue-900/50 hover:bg-blue-200 dark:hover:bg-blue-800/70 rounded-lg transition-colors"
                        >
                          <ExternalLink size={20} className="text-blue-600 dark:text-blue-400" />
                        </Link>
                      </motion.div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {project.techStack && (
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech: string, techIndex: number) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full"
                            whileHover={{ scale: 1.05 }}
                            transition={{ delay: techIndex * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 开源项目 */}
          {githubProjects.length > 0 && (
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
                {t.openSourceProjects}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {githubProjects.map((project: ProjectItemType, index: number) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-gray-700/50"
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h4>
                      
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Link
                          href={project.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                        >
                          <Github size={16} className="text-gray-600 dark:text-gray-400" />
                        </Link>
                      </motion.div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
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
