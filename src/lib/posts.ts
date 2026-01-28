import fs from 'node:fs'
import path from 'node:path'

export type PostMeta = {
  slug: string
  title: string
  date: string
  excerpt: string
  cover?: string
  tags: string[]
  readingTime: string
}

export type PostData = PostMeta & {
  content: string
  toc: Array<{ id: string; text: string; level: number }>
}

const resolvePostsDirectory = () => {
  let current = process.cwd()
  for (let i = 0; i < 5; i += 1) {
    const candidate = path.join(current, 'content', 'posts')
    if (fs.existsSync(candidate)) {
      return candidate
    }
    const parent = path.dirname(current)
    if (parent === current) break
    current = parent
  }
  return path.join(process.cwd(), 'content', 'posts')
}

const postsDirectory = resolvePostsDirectory()

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[\s/]+/g, '-')
    .replace(/[^a-z0-9\-一-龥]/g, '')

const stripMarkdown = (value: string) =>
  value
    .replace(/`{1,3}[^`]*`{1,3}/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/[*_~>#-]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const extractToc = (content: string) => {
  const toc: Array<{ id: string; text: string; level: number }> = []
  const lines = content.split(/\r?\n/)
  for (const line of lines) {
    const match = line.match(/^(##|###)\s+(.*)/)
    if (match) {
      const text = match[2].trim()
      const level = match[1] === '###' ? 3 : 2
      toc.push({ id: slugify(text), text, level })
    }
  }
  return toc
}

const parseFrontmatter = (content: string) => {
  const lines = content.split(/\r?\n/)
  if (lines[0]?.trim() !== '---') {
    return { data: {}, content }
  }
  const endIndex = lines.slice(1).findIndex((line) => line.trim() === '---')
  if (endIndex === -1) {
    return { data: {}, content }
  }
  const frontmatterLines = lines.slice(1, endIndex + 1)
  const data: Record<string, string> = {}
  for (const line of frontmatterLines) {
    const match = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/)
    if (match) {
      data[match[1]] = match[2].trim()
    }
  }
  const body = lines.slice(endIndex + 2).join('\n')
  return { data, content: body }
}

const parseTags = (value?: string) => {
  if (!value) return []
  return value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean)
}

const estimateReadingTime = (content: string) => {
  const plain = stripMarkdown(content)
  const wordCount = plain.replace(/\s+/g, ' ').trim().length
  const minutes = Math.max(1, Math.round(wordCount / 400))
  return `${minutes} min`
}

const getPostFiles = () => {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md'))
}

export const getAllPosts = (): PostMeta[] => {
  return getPostFiles()
    .map((file) => {
      const slug = file.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, file)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = parseFrontmatter(fileContents)
      const title = data.title || slug
      const date = data.date || ''
      const excerpt =
        data.excerpt ||
        stripMarkdown(content.split(/\n{2,}/).find((line) => line.trim()) || '')
      const cover = data.cover || ''
      const tags = parseTags(data.tags)
      const readingTime = estimateReadingTime(content)
      return { slug, title, date, excerpt, cover, tags, readingTime }
    })
    .sort((a, b) => {
      const dateA = Date.parse(a.date) || 0
      const dateB = Date.parse(b.date) || 0
      return dateB - dateA
    })
}

export const getPostBySlug = (slug: string): PostData | null => {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) {
    return null
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = parseFrontmatter(fileContents)
  const title = data.title || slug
  const date = data.date || ''
  const excerpt =
    data.excerpt ||
    stripMarkdown(content.split(/\n{2,}/).find((line) => line.trim()) || '')
  const cover = data.cover || ''
  const tags = parseTags(data.tags)
  const readingTime = estimateReadingTime(content)

  return {
    slug,
    title,
    date,
    excerpt,
    cover,
    tags,
    readingTime,
    content,
    toc: extractToc(content)
  }
}
