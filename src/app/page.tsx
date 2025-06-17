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
  Star,
  GitFork,
  Languages
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  socialLinks, 
  projectsList, 
  githubProjectsList, 
  techStack,
  techStackColors,
  coreServices,
  name,
  email,
  type ProjectItemType
} from '@/config/infoConfig'

// 动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
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

  // 简化的文本内容
  const content = {
    zh: {
      headline: '赋能未来：AI 自动化与独立开发者的技术探索',
      introduction: '在人工智能日新月异的时代，我专注于将前沿AI技术转化为实用且创新的解决方案。',
      contact: '联系我',
      servicesHeadline: '核心服务与技能',
      techStack: '技术栈',
      projects: '项目作品',
      productProjects: '产品项目',
      openSourceProjects: '开源项目',
      footer: '基于 Next.js 构建'
    },
    en: {
      headline: 'Empowering the future through AI automation and independent innovation',
      introduction: 'In this rapidly evolving era of artificial intelligence, I focus on transforming cutting-edge AI technologies into practical and innovative solutions.',
      contact: 'Contact',
      servicesHeadline: 'Core Services & Skills',
      techStack: 'Tech Stack',
      projects: 'Projects',
      productProjects: 'Product Projects',
      openSourceProjects: 'Open Source Projects',
      footer: 'Built with Next.js '
    }
  }

  const t = content[locale as keyof typeof content]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      {/* 主容器 */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        
        {/* 顶部工具栏 */}
        <motion.div 
          className="flex justify-between items-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              title={theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button 
              onClick={switchLanguage}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              title={`Switch to ${locale === 'zh' ? 'English' : '中文'}`}
            >
              <Languages size={20} />
            </button>
          </div>
          
          <Link
            href={`mailto:${email}`}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Mail size={16} />
            <span className="text-sm font-medium">{t.contact}</span>
          </Link>
        </motion.div>

        {/* 英雄区域 */}
        <motion.section
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                {name.charAt(0)}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {t.headline}
            </p>
            <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t.introduction}
            </p>
          </motion.div>

          {/* 社交链接 */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            {socialLinks.map((link) => {
              let IconComponent = Github
              if (link.name === 'X') IconComponent = ExternalLink
              if (link.name === 'Wechat') IconComponent = Mail
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors group"
                  title={link.name}
                >
                  <IconComponent size={20} className="group-hover:scale-110 transition-transform" />
                </Link>
              )
            })}
          </motion.div>
        </motion.section>

        {/* 核心服务 */}
        <motion.section
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            {t.servicesHeadline}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service: any, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        

        {/* 项目展示 */}
        <motion.section
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            {t.projects}
          </motion.h2>
          
          {/* 真实项目 */}
          {projects.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                {t.productProjects}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project: ProjectItemType, index: number) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {project.logo && (
                          <Image
                            src={project.logo}
                            alt={project.name}
                            width={40}
                            height={40}
                            className="rounded-lg"
                          />
                        )}
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {project.name}
                          </h4>
                          {project.category && (
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {project.category.join(' • ')}
                            </p>
                          )}
                        </div>
                      </div>
                      <Link
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink size={18} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                      </Link>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {project.techStack && (
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* 开源项目 */}
          {githubProjects.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                {t.openSourceProjects}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {githubProjects.map((project: ProjectItemType, index: number) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-base font-medium text-gray-900 dark:text-white">
                        {project.name}
                      </h4>
                      <Link
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Github size={16} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                      </Link>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.section>

        {/* 页脚 */}
        <motion.footer
          className="text-center py-8 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 {name}. {t.footer}.
          </p>
        </motion.footer>
      </div>
    </div>
  )
}

export default HomePage
