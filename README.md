# gegarron

> 基于 React 19 + Vite 7 + Tailwind CSS 4 的现代化前端架构

## 项目简介

## 快速开始

```bash
# 1. 进入项目目录
cd gegarron

# 2. 安装依赖
pnpm install

# 3. 启动开发服务器
pnpm dev

# 4. 访问应用
# http://localhost:9988
```

## 项目结构

```
ai-space/
├── packages/
│   ├── main-app/
│   ├── crypto-module/
│   ├── news-module/
│   └── auth/
├── pnpm-workspace.yaml
├── package.json
└── tsconfig.base.json
```

**注**: `@gegarron/main-app`
既是主应用外壳，也提供共享的 UI 组件、工具函数、Hooks、状态管理和样式系统。

## 代码质量

项目配置了完整的代码质量工具链：

- **ESLint** - TypeScript/React 代码检查
- **Prettier** - 统一代码格式化
- **EditorConfig** - 编辑器配置统一
- **Tailwind 排序** - CSS 类名自动排序
- **Git Hooks** - 提交前自动检查和格式化 (Husky + lint-staged)

**三层保护机制**：

- 🔵 **编辑器层**: VSCode 保存时自动格式化
- 🟢 **命令行层**: 手动运行 lint/format 命令
- 🔴 **Git 层**: 提交前强制检查（最后防线）

## 技术栈

- **框架**: React 19.1.1
- **语言**: TypeScript 5.9.3
- **构建**: Vite 7.1.7
- **样式**: Tailwind CSS 4.1.15
- **路由**: React Router v7.9.4
- **状态**: Zustand 5.0.8
- **UI库**: shadcn/ui (Radix UI)
- **代码质量**: ESLint 9 + Prettier 3

## 开发命令

```bash
# 开发
pnpm dev              # 启动主应用
pnpm dev:crypto
pnpm dev:news


# 构建
pnpm build            # 构建所有包

# 代码质量
pnpm lint             # ESLint 代码检查
pnpm lint:fix         # ESLint 自动修复
pnpm format           # Prettier 代码格式化
pnpm format:check     # 检查代码格式
pnpm type-check       # TypeScript 类型检查
```

## 文档

详细的代码风格和工具链配置说明请参考：

- [代码风格指南.md](./docs/代码风格指南.md) - 代码风格指南 Hooks 配置说明

## License

Copyright © 2025 gegarron
