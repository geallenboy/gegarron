'use client'

import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useState, useEffect, useRef } from 'react'
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
  Facebook,
  Brain,
  Cpu,
  Database,
  Globe,
  Terminal,
  Layers,
  ArrowDown,
  Play,
  Pause,
  Volume2,
  VolumeX,
  MousePointer2,
  Eye,
  Heart,
  Coffee,
  Lightbulb,
  Target,
  Briefcase
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

// 全新的动画变体系统
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
  hidden: { y: 60, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 15,
      mass: 1
    }
  }
}

const floatingVariants = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [-20, 20, -20],
    rotate: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
}

const pulseVariants = {
  initial: { scale: 1, opacity: 0.7 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
}

const magneticVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring" as const,
      stiffness: 400,
      damping: 10
    }
  }
}

// 全新的3D风格Logo组件
const InteractiveLogo = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative w-20 h-20 mx-auto mb-8"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-xl"
        animate={{
          scale: isHovered ? [1, 1.2, 1] : 1,
          rotate: [0, 360],
        }}
        transition={{
          scale: { duration: 2, repeat: Infinity },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
      />
      <motion.div
        className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-2xl"
        animate={{
          boxShadow: isHovered
            ? "0 20px 40px rgba(59, 130, 246, 0.4)"
            : "0 10px 20px rgba(59, 130, 246, 0.2)"
        }}
      >
        <motion.div
          animate={{ rotate: isHovered ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Brain size={32} className="text-white" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// 粒子系统组件
const ParticleSystem = () => {
  const particles = Array.from({ length: 50 }, (_, i) => i)

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// 互动式技能球体
const SkillOrb = ({ skill, index }: { skill: string, index: number }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, type: "spring" }}
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
    >
      <motion.div
        className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 cursor-pointer"
        whileHover={{ scale: 1.1, y: -5 }}
        animate={{
          boxShadow: isActive
            ? "0 10px 20px rgba(59, 130, 246, 0.3)"
            : "0 5px 10px rgba(59, 130, 246, 0.1)"
        }}
      >
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill}
        </span>
      </motion.div>
    </motion.div>
  )
}

const HomePage = () => {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [locale, setLocale] = useState('zh')
  const [currentSection, setCurrentSection] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  useEffect(() => {
    setMounted(true)

    // 鼠标跟踪
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const switchLanguage = () => {
    setLocale(locale === 'zh' ? 'en' : 'zh')
  }

  if (!mounted) return null

  const projects = (projectsList as any)[locale] || []
  const githubProjects = (githubProjectsList as any)[locale] || []
  const services = (coreServices as any)[locale] || []

  // 全新的内容结构
  const content = {
    zh: {
      headline: '你好，我是 Gegarron',
      tagline: '用 AI 重新定义可能性',
      introduction: '我是一名充满激情的 AI 探索者和独立开发者，专注于将前沿的人工智能技术转化为实用的自动化解决方案。我相信技术的力量在于改善人们的生活，让复杂的工作变得简单而高效。',
      contact: '开始合作',
      servicesHeadline: '我能为你做什么',
      projects: '精选作品集',
      productProjects: '核心产品',
      openSourceProjects: '开源贡献',
      footer: '用心构建每一行代码',
      stats: {
        projects: '项目完成',
        clients: '满意客户',
        experience: '年经验',
        coffee: '杯咖啡'
      },
      skills: ['独立开发者','AI 自动化','AI 探索者','全栈工程师','创业者'],
      badges: {
        aiExpert: 'AI 探索者',
        fullStack: 'AI 自动化专家',
        independent: '独立开发者',
        innovator: '全栈工程师'
      }
    },
    en: {
      headline: "Hi, I'm Gegarron",
      tagline: 'Redefining Possibilities with AI',
      introduction: "I'm a passionate AI explorer and independent developer, focused on transforming cutting-edge artificial intelligence into practical automation solutions. I believe technology's power lies in improving people's lives, making complex work simple and efficient.",
      contact: 'Start Collaboration',
      servicesHeadline: 'What I Can Do For You',
      projects: 'Featured Portfolio',
      productProjects: 'Core Products',
      openSourceProjects: 'Open Source',
      footer: 'Crafted with passion, one line at a time',
      stats: {
        projects: 'Projects Done',
        clients: 'Happy Clients',
        experience: 'Years Experience',
        coffee: 'Cups of Coffee'
      },
      skills: ['Independent Developer', 'AI Automation', 'AI Explorer', 'Full Stack Engineer', 'Entrepreneur'],
      badges: {
        aiExpert: 'AI Explorer',
        fullStack: 'AI Automation Expert',
        independent: 'Independent Developer',
        innovator: 'Full Stack Engineer'
      }
    }
  }

  const t = content[locale as keyof typeof content]

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* 动态背景系统 */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/30"
        style={{ y: backgroundY }}
      />

      {/* 粒子系统 */}
      <ParticleSystem />

      {/* 鼠标跟随光标 */}
      <motion.div
        className="fixed w-6 h-6 bg-blue-500/30 rounded-full blur-sm pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* 增强的背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-green-400/15 to-blue-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* 几何装饰元素 */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-blue-300/30 rounded-lg"
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
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-purple-300/30 rounded-full"
          animate={{
            rotate: [360, 0],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* 主容器 */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">

        {/* 移动端优化的浮动导航栏 */}
        <motion.nav
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between w-[95%] max-w-4xl px-3 sm:px-6 py-2.5 sm:py-3 bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-2xl sm:rounded-full border border-white/20 dark:border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          {/* Logo - 移动端优化 */}
          <motion.div
            className="flex items-center space-x-1.5 sm:space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Brain size={14} className="sm:w-4 sm:h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">GeGarron</span>
          </motion.div>

          {/* 控制按钮组 - 移动端紧凑布局 */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <motion.button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="p-1.5 sm:p-2 rounded-full bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={resolvedTheme}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {resolvedTheme === 'dark' ?
                    <Sun size={16} className="sm:w-[18px] sm:h-[18px] text-yellow-500" /> :
                    <Moon size={16} className="sm:w-[18px] sm:h-[18px] text-blue-600" />
                  }
                </motion.div>
              </AnimatePresence>
            </motion.button>

            <motion.button
              onClick={switchLanguage}
              className="p-1.5 sm:p-2 rounded-full bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Languages size={16} className="sm:w-[18px] sm:h-[18px] text-green-600" />
            </motion.button>

            {/* 移动端隐藏播放按钮 */}
            <motion.button
              onClick={() => setIsPlaying(!isPlaying)}
              className="hidden sm:block p-1.5 sm:p-2 rounded-full bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ?
                <Pause size={16} className="sm:w-[18px] sm:h-[18px] text-purple-600" /> :
                <Play size={16} className="sm:w-[18px] sm:h-[18px] text-purple-600" />
              }
            </motion.button>

            {/* 联系按钮 - 移动端优化 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`mailto:${email}`}
                className="flex items-center space-x-1 sm:space-x-2 px-2.5 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm font-medium"
              >
                <Mail size={12} className="sm:w-[14px] sm:h-[14px]" />
                <span className="hidden xs:inline">{t.contact}</span>
              </Link>
            </motion.div>
          </div>
        </motion.nav>

        {/* 全新的英雄区域 */}
        <motion.section
          className="min-h-screen flex flex-col justify-center items-center text-center pt-20 pb-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 互动Logo */}
          <motion.div variants={itemVariants}>
            <InteractiveLogo />
          </motion.div>

          {/* 主标题 */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1
              className="text-6xl md:text-8xl font-black mb-4 tracking-tight"
              style={{ y: textY }}
            >
              <motion.span
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {t.headline}
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-400 mb-8"
              variants={itemVariants}
            >
              {t.tagline}
            </motion.p>
          </motion.div>

          {/* 技能标签云 */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl"
            variants={itemVariants}
          >
            {t.skills.map((skill, index) => (
              <SkillOrb key={skill} skill={skill} index={index} />
            ))}
          </motion.div>

          {/* 介绍文本 */}
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12"
            variants={itemVariants}
          >
            {t.introduction}
          </motion.p>


          {/* 3D社交链接 */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center space-x-8"
          >
            {socialLinks.map((link, index) => {
              let IconComponent;
              let gradientClass = '';
              switch (link.icon) {
                case 'github':
                  IconComponent = Github;
                  gradientClass = 'from-gray-600 to-gray-800';
                  break;
                case 'x':
                  IconComponent = Twitter;
                  gradientClass = 'from-blue-400 to-blue-600';
                  break;
                case 'wechat':
                  IconComponent = MessageCircle;
                  gradientClass = 'from-green-400 to-green-600';
                  break;
                case 'facebook':
                  IconComponent = Facebook;
                  gradientClass = 'from-blue-500 to-blue-700';
                  break;
                default:
                  IconComponent = ExternalLink;
                  gradientClass = 'from-gray-500 to-gray-700';
              }

              return (
                <motion.div
                  key={link.name}
                  variants={magneticVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block p-6 rounded-2xl overflow-hidden bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500"
                    title={link.name}
                  >
                    {/* 3D背景效果 */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      whileHover={{ scale: 1.1 }}
                    />

                    {/* 光晕效果 */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(59, 130, 246, 0)",
                          "0 0 40px rgba(59, 130, 246, 0.3)",
                          "0 0 20px rgba(59, 130, 246, 0)"
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />

                    {/* 图标 */}
                    <motion.div
                      className="relative z-10"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent size={28} className="text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>

          {/* 滚动指示器 */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={24} className="text-gray-400 dark:text-gray-600" />
          </motion.div>
        </motion.section>
        {/* 全新的项目展示区域 */}
        <motion.section
          id="projects"
          className="mb-32 py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6"
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {t.productProjects}
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {locale === 'zh' ? '精心打造的数字产品，每一个都承载着创新的理念' : 'Carefully crafted digital products, each carrying innovative concepts'}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {projects.map((project: ProjectItemType, index: number) => (
              <motion.div
                key={index}
                className="group relative"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* 项目卡片 */}
                <motion.div
                  className="relative bg-white/5 dark:bg-black/5 backdrop-blur-2xl rounded-3xl border border-white/10 dark:border-white/5 overflow-hidden shadow-2xl"
                  whileHover={{
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                    borderColor: "rgba(255, 255, 255, 0.2)"
                  }}
                >
                  {/* 项目图片 */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.5 }}
                    />
                    <Image
                      src={project.logo || '/placeholder.png'}
                      alt={`${project.name} preview`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* 悬浮标签 */}
                    <motion.div
                      className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      {project.category?.[0] || 'Project'}
                    </motion.div>

                    {/* 访问按钮 */}
                    <motion.div
                      className="absolute top-4 right-4"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                      </Link>
                    </motion.div>
                  </div>

                  {/* 项目信息 */}
                  <div className="p-8">
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500"
                    >
                      {project.name}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* 技术栈 */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack?.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200/30 dark:border-blue-800/30"
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* 访问链接 */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:from-blue-700 group-hover:to-purple-700"
                      >
                        <span>{locale === 'zh' ? '访问项目' : 'Visit Project'}</span>
                        <motion.div
                          className="ml-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ExternalLink size={18} />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>

                {/* 装饰性元素 */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.8
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 全新的服务展示区域 */}
        <motion.section
          className="mb-32 py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6"
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t.servicesHeadline}
              </span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service: any, index: number) => {
              const icons = [Brain, Cpu, Lightbulb, Globe]
              const IconComponent = icons[index % icons.length]
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-green-500 to-teal-500',
                'from-orange-500 to-red-500'
              ]

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative p-8 bg-white/5 dark:bg-black/5 backdrop-blur-xl rounded-3xl border border-white/10 dark:border-white/5 hover:border-white/20 dark:hover:border-white/10 transition-all duration-700 overflow-hidden"
                  whileHover={{ y: -12, scale: 1.02 }}
                  onHoverStart={() => { }}
                  onHoverEnd={() => { }}
                >
                  {/* 动态背景 */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                    initial={{ scale: 0, rotate: 0 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.7 }}
                  />

                  {/* 光效 */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />

                  {/* 图标容器 */}
                  <motion.div
                    className={`relative w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mb-8 shadow-2xl`}
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent size={28} className="text-white" />

                    {/* 图标光晕 */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} rounded-2xl blur-xl opacity-50`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  </motion.div>

                  {/* 内容 */}
                  <div className="relative z-10">
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500"
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {service.description}
                    </motion.p>
                  </div>

                  {/* 装饰元素 */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-8 h-8 border-2 border-gray-300/30 dark:border-gray-600/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute top-4 right-4 w-4 h-4 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.7
                    }}
                  />
                </motion.div>
              )
            })}
          </div>
        </motion.section>



        {/* 全新的开源项目展示 */}
        <motion.section
          id="opensource"
          className="mb-32 py-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="text-center mb-20" variants={itemVariants}>
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-6"
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <span className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-clip-text text-transparent">
                {t.openSourceProjects}
              </span>
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {locale === 'zh' ? '开源是分享知识的最好方式，让技术惠及更多人' : 'Open source is the best way to share knowledge and benefit more people'}
            </motion.p>
          </motion.div>

          <div className="grid gap-8">
            {githubProjects.slice(0, 6).map((project: ProjectItemType, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                whileHover={{ scale: 1.01, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative p-8 bg-white/5 dark:bg-black/5 backdrop-blur-2xl rounded-2xl border border-white/10 dark:border-white/5 hover:border-white/20 dark:hover:border-white/10 transition-all duration-500 overflow-hidden"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* 背景装饰 */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />

                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex-grow mb-6 lg:mb-0 lg:pr-8">
                      <div className="flex items-center mb-4">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mr-4"
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Github size={24} className="text-white" />
                        </motion.div>

                        <div>
                          <Link
                            href={project.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <motion.h3
                              className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-500"
                              whileHover={{ x: 5 }}
                            >
                              {project.name}
                            </motion.h3>
                          </Link>
                        </div>
                      </div>

                      <motion.p
                        className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-lg"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* 技术栈标签 */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack?.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-green-500/10 to-blue-500/10 text-green-600 dark:text-green-400 rounded-full border border-green-200/30 dark:border-green-800/30"
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ duration: 0.2, delay: i * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* 右侧操作区 */}
                    <div className="flex items-center space-x-4 flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Link
                          href={project.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl font-medium hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <Github size={18} />
                          <span>{locale === 'zh' ? '查看代码' : 'View Code'}</span>
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  {/* 装饰元素 */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-6 h-6 border-2 border-green-300/30 dark:border-green-600/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* 查看更多按钮 */}
          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://github.com/geallenboy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <Github size={20} />
                <span>{locale === 'zh' ? '查看所有项目' : 'View All Projects'}</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExternalLink size={18} />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* 全新的页脚设计 */}
        <motion.footer
          className="relative py-20 border-t border-white/10 dark:border-white/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* 背景装饰 */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent" />

          <div className="relative z-10 text-center">
            {/* Logo和标语 */}
            <motion.div
              className="mb-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <Brain size={24} className="text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white">GeGarron</span>
              </div>
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto"
                whileHover={{ scale: 1.02 }}
              >
                {t.footer}
              </motion.p>
            </motion.div>

            {/* 社交链接 */}
            <motion.div
              className="flex justify-center space-x-6 mb-12"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {socialLinks.map((link, index) => {
                let IconComponent;
                switch (link.icon) {
                  case 'github': IconComponent = Github; break;
                  case 'x': IconComponent = Twitter; break;
                  case 'wechat': IconComponent = MessageCircle; break;
                  case 'facebook': IconComponent = Facebook; break;
                  default: IconComponent = ExternalLink;
                }

                return (
                  <motion.div
                    key={link.name}
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 border border-white/20 dark:border-white/10"
                    >
                      <IconComponent size={20} />
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* 版权信息 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-500 dark:text-gray-400">
                © 2025 {name}. {locale === 'zh' ? '保留所有权利' : 'All rights reserved'}.
              </p>
              <motion.p
                className="text-sm text-gray-400 dark:text-gray-500 mt-2"
                whileHover={{ scale: 1.05 }}
              >
                {locale === 'zh' ? '用 ❤️ 和 ☕ 在地球上制作' : 'Made with ❤️ and ☕ on Earth'}
              </motion.p>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </div>
  )
}

export default HomePage
