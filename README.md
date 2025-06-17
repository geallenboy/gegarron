# 🚀 GeGarron - AI驱动的个人作品集

> 基于 Next.js + Framer Motion 构建的现代化个人主页，展示AI专家的作品与服务。

## ✨ 项目特色

🎨 **现代化设计**
- 渐变背景与动态背景元素
- 响应式设计，完美适配移动端和桌面端
- 流畅的Framer Motion动画效果
- 优雅的玻璃态风格组件

🌓 **主题切换**
- 支持明暗主题无缝切换
- 平滑的主题过渡动画
- 系统主题自动适配

🌍 **多语言支持**
- 中文/英文双语切换
- 本地化内容展示
- 动态语言切换界面

⚡ **性能优化**
- 基于Next.js 14的最新特性
- 服务端渲染(SSR)优化
- 图片懒加载与优化
- 代码分割与优化

## 🛠️ 技术栈

### 前端核心
```json
{
  "framework": "Next.js 14",
  "language": "TypeScript",
  "animation": "Framer Motion",
  "styling": "Tailwind CSS",
  "icons": "Lucide React",
  "theme": "next-themes"
}
```

### 开发工具
```json
{
  "package_manager": "npm",
  "linting": "ESLint",
  "formatting": "Prettier",
  "git_hooks": "Husky"
}
```

## 🎯 核心功能

### 🏠 首页展示
- **英雄区域**: 个人头像、身份标签、简介
- **社交链接**: GitHub、Twitter/X、微信联系方式
- **核心服务**: AI解决方案、全栈开发、技术咨询
- **项目展示**: 产品项目与开源贡献分类展示

### 💫 动画效果
- **页面加载**: 交错式入场动画
- **滚动触发**: 视口内元素动画
- **悬浮效果**: 组件交互反馈
- **背景动效**: 浮动元素与渐变变化

### 📱 响应式设计
- **移动优先**: Mobile-first设计理念
- **断点适配**: sm/md/lg/xl多断点响应
- **触摸友好**: 移动端交互优化

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0.0
- npm >= 8.0.0

### 安装依赖
```bash
npm install
```

### 开发运行
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果

### 构建部署
```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 📁 项目结构

```
gegarron/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx       # 根布局
│   │   ├── page.tsx         # 首页
│   │   └── providers.tsx    # 全局Provider
│   ├── config/              # 配置文件
│   │   └── infoConfig.ts    # 个人信息配置
│   ├── styles/              # 样式文件
│   │   └── tailwind.css     # Tailwind CSS
│   └── types/               # TypeScript类型定义
├── public/                  # 静态资源
└── package.json            # 项目配置
```

## ⚙️ 配置说明

### 个人信息配置
编辑 `src/config/infoConfig.ts` 文件：

```typescript
export const name = '您的姓名'
export const email = 'your@email.com'

export const socialLinks = [
  {
    name: 'Github',
    href: 'https://github.com/yourusername'
  }
  // 添加更多社交链接...
]

export const projectsList = {
  zh: [
    {
      name: '项目名称',
      description: '项目描述',
      link: { href: 'https://project-url.com' },
      // 更多项目信息...
    }
  ]
}
```

### 主题配置
在 `tailwind.config.js` 中自定义主题：

```javascript
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 自定义颜色
      },
      animation: {
        // 自定义动画
      }
    }
  }
}
```

## 🎨 设计系统

### 颜色方案
- **主色调**: 蓝色系 (#3B82F6 → #6366F1)
- **辅助色**: 紫色系 (#8B5CF6 → #A855F7)
- **中性色**: 灰色系 (Gray 50-900)

### 动画时长
- **快速**: 200ms (按钮点击)
- **标准**: 300ms (悬浮效果)
- **慢速**: 500ms (页面切换)

### 间距系统
- **xs**: 0.5rem (8px)
- **sm**: 1rem (16px)
- **md**: 1.5rem (24px)
- **lg**: 2rem (32px)
- **xl**: 3rem (48px)

## 📊 性能优化

### 构建优化
- **代码分割**: 自动路由分割
- **图片优化**: Next.js Image组件
- **字体优化**: 本地字体文件
- **CSS优化**: Tailwind CSS purge

### 运行时优化
- **懒加载**: 组件按需加载
- **缓存策略**: 静态资源缓存
- **预加载**: 关键资源预加载

## 🔧 自定义指南

### 添加新页面
1. 在 `src/app/` 目录下创建新文件夹
2. 添加 `page.tsx` 文件
3. 配置路由和导航（如需要）

### 修改动画效果
1. 编辑 `src/app/page.tsx` 中的动画变体
2. 使用Framer Motion提供的动画API
3. 测试不同设备上的动画性能

### 自定义样式
1. 修改 `src/styles/tailwind.css`
2. 在 `tailwind.config.js` 中扩展主题
3. 使用Tailwind CSS的实用类

## 🐛 问题排查

### 常见问题

**问题**: 动画不流畅
```bash
# 解决方案: 检查CSS transform
# 确保使用GPU加速属性
transform: translate3d(0, 0, 0);
```

**问题**: 主题切换失效
```bash
# 解决方案: 检查Provider配置
# 确保ThemeProvider正确包裹应用
```

**问题**: TypeScript错误
```bash
# 解决方案: 检查类型定义
npm run type-check
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React框架
- [Framer Motion](https://www.framer.com/motion/) - 动画库
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [Lucide](https://lucide.dev/) - 图标库

## 📞 联系方式

- **邮箱**: contact@gegarron.com
- **GitHub**: [@gegarron](https://github.com/gegarron)
- **项目链接**: [https://github.com/gegarron/portfolio](https://github.com/gegarron/portfolio)

---

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Framer%20Motion-11-pink?style=for-the-badge&logo=framer" alt="Framer Motion">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-3-cyan?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
</div>

<div align="center">
  <p>⭐ 如果这个项目对您有帮助，请给一个星标支持！</p>
</div>
