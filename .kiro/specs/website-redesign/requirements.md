# 需求文档：个人网站全面重新设计

## 简介

对 GeGarron 的个人网站进行全面视觉与布局重新设计。当前网站存在"过度 AI 化"的问题——大量毛玻璃效果、渐变装饰球、英文大写标签（kicker）、过大圆角等，导致整体风格模板化、缺乏个人辨识度。重新设计的目标是打造一个更有人味、更有个人风格的中文自媒体站点，保留首页、文章、产品、关于四个核心模块，同时优化布局结构和交互体验。

## 术语表

- **站点（Site）**：基于 Next.js App Router 构建的 GeGarron 个人网站，域名 gegarron.com
- **设计系统（Design_System）**：站点使用的全局样式体系，包括 CSS 变量、组件样式类、排版规范和色彩方案
- **首页（Home_Page）**：站点根路径 `/` 对应的页面，承担个人介绍和内容导航的入口职责
- **文章页（Posts_Page）**：路径 `/posts` 对应的文章列表页面，支持搜索和分页
- **产品页（Products_Page）**：路径 `/products` 对应的产品展示页面
- **关于页（About_Page）**：路径 `/about` 对应的个人详细介绍页面
- **导航组件（Navigation）**：站点的全局导航系统，包含侧边栏或顶部导航
- **暗色模式（Dark_Mode）**：通过 next-themes 实现的深色主题切换功能
- **Markdown 文章系统（Article_System）**：基于 `content/posts/` 目录的 Markdown 文件驱动的文章管理系统
- **毛玻璃效果（Glass_Effect）**：当前设计中大量使用的 `glass-card`、`backdrop-filter: blur()` 等视觉效果
- **Kicker 标签（Kicker_Label）**：当前设计中使用的英文大写标签元素，如 "AI Creator / Builder"、"Public Workbench" 等
- **装饰球（Decoration_Orb）**：当前页面中使用的大面积渐变模糊圆形背景装饰元素

## 需求

### 需求 1：去除过度装饰性视觉元素

**用户故事：** 作为站长，我希望移除网站中过度 AI 化的装饰元素，使网站看起来更真实、更有个人风格而非模板感。

#### 验收标准

1. WHEN 设计系统被重构时，THE Design_System SHALL 移除所有页面中的渐变模糊装饰球（Decoration_Orb）背景元素
2. WHEN 设计系统被重构时，THE Design_System SHALL 将 `glass-card` 的 `backdrop-filter: blur()` 毛玻璃效果替换为不透明或微透明的纯色卡片背景
3. WHEN 设计系统被重构时，THE Design_System SHALL 将所有英文 Kicker_Label（如 "AI Creator / Builder"、"Public Workbench"、"Build & Ship"）替换为中文标签或完全移除
4. WHEN 设计系统被重构时，THE Design_System SHALL 将卡片圆角从当前的 28px-36px 范围缩减至 8px-16px 范围
5. THE Design_System SHALL 使用简洁的纯色背景或极细微的纹理替代当前 body 上的多层径向渐变背景

### 需求 2：重新设计全局布局结构

**用户故事：** 作为站长，我希望网站的整体布局更加清晰和现代，让访客能快速理解站点结构并找到感兴趣的内容。

#### 验收标准

1. THE Navigation SHALL 提供顶部导航栏作为全局导航方式，包含首页、文章、产品、关于四个入口
2. THE Navigation SHALL 在移动端提供响应式导航方案（如汉堡菜单或底部导航栏）
3. WHEN 用户访问任意页面时，THE Site SHALL 采用单栏为主的内容布局，移除当前的固定侧边栏（Sidebar）设计
4. THE Site SHALL 在每个页面底部提供统一的页脚区域，包含社交链接、版权信息和站点导航
5. THE Design_System SHALL 将内容区域最大宽度控制在 768px-960px 之间，使阅读体验更聚焦

### 需求 3：重新设计首页

**用户故事：** 作为站长，我希望首页能清晰传达我的个人定位和核心内容，让访客在几秒内理解"这个人是谁、在做什么"。

#### 验收标准

1. THE Home_Page SHALL 在页面顶部展示一个简洁的个人介绍区域，包含头像、姓名、一句话定位描述和社交链接
2. THE Home_Page SHALL 展示最近发布的文章列表（最多 3-5 篇），每篇文章显示标题、日期和摘要
3. THE Home_Page SHALL 展示产品/项目列表区域，以简洁的卡片或列表形式呈现
4. THE Home_Page SHALL 提供一个简短的"关于我"段落，附带指向关于页的链接
5. WHEN 首页内容区域之间切换时，THE Home_Page SHALL 使用清晰的视觉分隔（如留白、细线或小标题），而非依赖卡片嵌套

### 需求 4：重新设计文章列表页

**用户故事：** 作为访客，我希望文章列表页简洁易读，能快速浏览和找到感兴趣的文章。

#### 验收标准

1. THE Posts_Page SHALL 以时间倒序的列表形式展示所有文章，每篇文章显示标题、发布日期、摘要和标签
2. THE Posts_Page SHALL 提供搜索功能，支持按标题、摘要和标签内容进行过滤
3. WHEN 文章数量超过单页显示上限时，THE Posts_Page SHALL 提供分页导航
4. THE Posts_Page SHALL 采用简洁的列表样式，避免使用大面积封面图和过度装饰的卡片
5. IF 搜索结果为空，THEN THE Posts_Page SHALL 显示友好的空状态提示信息

### 需求 5：重新设计产品展示页

**用户故事：** 作为访客，我希望产品页能清晰展示站长的作品和项目，了解每个产品的用途和访问方式。

#### 验收标准

1. THE Products_Page SHALL 以网格或列表形式展示所有产品项目，每个项目包含名称、描述、截图/图标和访问链接
2. THE Products_Page SHALL 为每个产品显示技术栈标签或分类标签
3. THE Products_Page SHALL 移除当前的筛选按钮（当前筛选功能未实现），保持页面简洁
4. WHEN 用户点击产品的访问链接时，THE Products_Page SHALL 在新标签页中打开外部链接

### 需求 6：重新设计关于页

**用户故事：** 作为访客，我希望关于页能让我深入了解站长的背景、经历和合作方式。

#### 验收标准

1. THE About_Page SHALL 展示站长的详细个人介绍，包含身份标签、个人宣言和背景故事
2. THE About_Page SHALL 展示成长路径时间线（过去、现在、未来）
3. THE About_Page SHALL 展示工作原则列表
4. THE About_Page SHALL 展示合作方式区域，说明可提供的服务类型和适合人群
5. THE About_Page SHALL 使用文字排版为主的布局，减少当前过多的照片画廊占比

### 需求 7：排版与色彩系统重构

**用户故事：** 作为站长，我希望网站的排版和色彩更有质感，体现个人审美而非 AI 生成的模板风格。

#### 验收标准

1. THE Design_System SHALL 保留 Noto Sans SC 作为正文字体，Noto Serif SC 作为标题展示字体
2. THE Design_System SHALL 定义清晰的字号层级体系，正文使用 16px 基准，标题层级不超过 4 级
3. THE Design_System SHALL 保留暖色调主色（当前的橙棕色 accent），但降低饱和度使其更沉稳
4. THE Design_System SHALL 保持亮色模式和暗色模式的完整支持，两种模式下的对比度满足 WCAG AA 标准（正文文字与背景对比度不低于 4.5:1）
5. THE Design_System SHALL 使用更克制的行高和字间距设置，正文行高控制在 1.6-1.8 之间

### 需求 8：响应式设计与移动端体验

**用户故事：** 作为移动端用户，我希望网站在手机上也能流畅浏览，布局合理且操作方便。

#### 验收标准

1. THE Site SHALL 在 320px-1440px 的视口宽度范围内提供完整的响应式布局
2. WHEN 视口宽度小于 768px 时，THE Navigation SHALL 切换为移动端导航模式
3. THE Site SHALL 确保所有可交互元素（按钮、链接）的最小触控区域为 44x44 像素
4. WHEN 在移动端浏览时，THE Site SHALL 确保文字大小可读，正文字号不小于 14px
5. THE Site SHALL 确保页面在移动端无水平滚动溢出

### 需求 9：保持现有功能完整性

**用户故事：** 作为站长，我希望重新设计只改变视觉和布局，不破坏现有的功能逻辑。

#### 验收标准

1. THE Article_System SHALL 继续正常解析和渲染 `content/posts/` 目录下的 Markdown 文章
2. THE Site SHALL 保持现有的 SEO 元数据配置（metadata、OpenGraph、Twitter Card）不变
3. THE Site SHALL 保持 Google Analytics 和 Google Search Console 集成正常工作
4. THE Dark_Mode SHALL 继续通过 next-themes 提供亮色/暗色主题切换功能
5. THE Site SHALL 保持现有的 sitemap.xml 和 robots.txt 生成逻辑不变
