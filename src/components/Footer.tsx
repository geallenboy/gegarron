import Link from 'next/link'
import { Github, Twitter, MessageCircle, Users } from 'lucide-react'
import { name, socialLinks } from '@/config/infoConfig'
import { defaultNavItems } from '@/config/nav'

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  github: Github,
  x: Twitter,
  wechat: MessageCircle,
  'wechat-official': Users,
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-(--line) mt-16"
      style={{ background: 'var(--card-bg-alt)' }}
    >
      <div className="mx-auto max-w-[960px] px-4 py-10">
        {/* Desktop: 3 columns, Mobile: stacked */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Column 1: Navigation */}
          <div>
            <h3
              className="mb-3 text-sm font-semibold"
              style={{ color: 'var(--ink)' }}
            >
              导航
            </h3>
            <ul className="space-y-2">
              {defaultNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-(--muted) transition-colors hover:text-(--accent)"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Social links */}
          <div>
            <h3
              className="mb-3 text-sm font-semibold"
              style={{ color: 'var(--ink)' }}
            >
              社交
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon]
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-(--muted) transition-colors hover:text-(--accent)"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={
                        link.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      aria-label={link.ariaLabel ?? link.name}
                    >
                      {Icon && <Icon size={16} />}
                      {link.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Column 3: Copyright */}
          <div>
            <h3
              className="mb-3 text-sm font-semibold"
              style={{ color: 'var(--ink)' }}
            >
              关于本站
            </h3>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              © {year} {name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
