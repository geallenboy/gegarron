# **gegarron**

**[gegarron](https://gegarron.com)** 是一个精心设计的个人网站，旨在展示个人项目、博客和技术成就。该网站提供简洁而现代的用户界面，适用于展示个人信息、作品、博客文章等。

## **Features**

- **美观的UI设计**：采用 **TailwindCSS**、**MagicUI** 和 **Shadcn/UI** 提供现代、简洁的用户界面。
- **响应式布局**：支持在所有设备上的流畅体验，自动调整内容以适应不同屏幕尺寸。
- **光/暗模式**：根据用户偏好，提供光模式和暗模式的切换。
- **多语言**：支持多语言切换。
- **Github 日历**：显示你的 GitHub 活跃度，展示你的开源贡献。
- **技术图标云**：展示你熟悉的技术栈和工具，展示你作为开发者的技能。
- **访客计数器**：实时统计访问者的数量，让你更好地了解网站的流量。
- **博客部分**：支持博客文章的创建和管理，允许你发布技术文章、个人感悟等。
- **MDX 和 Markdown 支持**：通过 MDX 和 Markdown 格式编写博客内容，轻松嵌入组件和丰富内容。
- **RSS Feed**：博客支持 RSS 订阅，方便用户跟踪你的更新。
- **Web Analytics 集成**：集成多种 Web 分析工具，如 **Google Analytics**、**OpenPanel Analytics** 和 **Plausible Analytics**，帮助你追踪网站流量和用户行为。

## **Tech Stack**

- **[Next.js](https://nextjs.org/)**：用于构建高效、SEO友好的 React 应用。
- **[TailwindCSS](https://tailwindcss.com/)**：功能强大的 CSS 框架，帮助快速构建响应式布局。
- **[Shadcn/UI](https://ui.shadcn.com/)**：现代、简洁的 UI 组件库，增强了网站的用户体验。
- **[MagicUI](https://magicui.design/)**：一款精美的 UI 组件库，提供丰富的设计元素。
- **[Phosphor Icons](https://phosphoricons.com/)**：提供一系列高质量的图标，支持多种样式。

## **Demo**

[访问 gegarron.com](https://gegarron.com) 查看实时演示。

## **Configuration**

- **`.env.local`** - 存储环境变量（如 API 密钥、数据库连接信息等）。确保在本地开发时正确配置。
- **`src/config/siteConfig.ts`** - 配置网站的基本信息，如站点标题、描述等。
- **`src/config/infoConfig.ts`** - 配置个人信息，如姓名、简介、社交链接等。
- **`src/content/blog/**.mdx`\*\* - 存放博客文章。使用 MDX 和 Markdown 格式编写内容。

## **Run**

### 本地开发

1. **安装依赖**

   使用 `pnpm` 来安装项目依赖：

   ```bash
   pnpm install
   ```

2. **启动开发服务器**

   启动本地开发服务器：

   ```bash
   pnpm dev
   ```

3. **访问本地开发环境**

   在浏览器中访问 [http://localhost:3000](http://localhost:3000)，查看本地开发版本。

### 部署到生产环境

1. 配置生产环境的 `.env` 文件。
2. 将项目部署到支持 Next.js 的平台，如 [Vercel](https://vercel.com/) 或 [Netlify](https://www.netlify.com/)。

## **部署到 Vercel**

1. 确保你已经在 Vercel 上创建了账户。
2. 连接 GitHub 仓库，选择项目进行部署。
3. 配置环境变量（如 `NEXT_PUBLIC_GITHUB_TOKEN`、`NEXT_PUBLIC_ANALYTICS_ID` 等）。
4. 一键部署，并将项目上线。

## **自定义设置**

1. **个人信息**：通过修改 `src/config/infoConfig.ts` 配置文件，定制个人信息（如姓名、社交链接、技能等）。
2. **站点配置**：通过 `src/config/siteConfig.ts` 配置文件，定制站点基本信息（如站点标题、描述、Logo 等）。
3. **博客内容**：在 `src/content/blog` 文件夹中添加 `.mdx` 或 `.md` 文件来发布新的博客文章。

## **Licenses**

本项目使用 [MIT 许可证](LICENSE)，你可以自由使用、修改和分发。

---

## **贡献指南**

欢迎参与贡献！请遵循以下步骤：

1. Fork 本项目并将其克隆到本地。
2. 在新的分支上进行开发：`git checkout -b feature/your-feature-name`。
3. 提交更改：`git commit -m "Add your feature"`。
4. 推送到远程：`git push origin feature/your-feature-name`。
5. 提交 Pull Request。

---

## **联系我们**

如果你对该项目有任何问题或建议，请通过以下方式与我们联系：

- **Email**: gejialun88@gmail.com
- **Weixin**: gegarron
- **GitHub Issues**: [提交 Issue](https://github.com/geallenboy/gegarron/issues)

---

## **感谢**

- **Next.js**：构建现代化、性能优秀的 React 应用框架。
- **TailwindCSS**：极简主义的 CSS 框架，帮助快速构建响应式布局。
- **Shadcn/UI** 和 **MagicUI**：提供了一些非常有用的 UI 组件，极大提升了开发效率。
- **Phosphor Icons**：提供了一系列优秀的图标，增强了网站的视觉效果。

---

🚀 **开始你的个人网站建设**，展示你的技术与创作，打造属于你的线上空间！
