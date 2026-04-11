'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { name } from '@/config/infoConfig'
import { defaultNavItems } from '@/config/nav'

export function TopNav() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href)

  return (
    <header
      className="sticky top-0 z-50 border-b border-(--line)"
      style={{
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <nav className="mx-auto flex h-14 max-w-[960px] items-center justify-between px-4">
        {/* Left: site name */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-(--ink)"
        >
          {name}
        </Link>

        {/* Center/Right: desktop nav links (hidden on mobile) */}
        <ul className="hidden items-center gap-1 md:flex">
          {defaultNavItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`inline-flex h-9 items-center rounded-md px-3 text-sm transition-colors ${
                  isActive(item.href)
                    ? 'bg-(--nav-active-bg) font-medium text-(--nav-active-fg)'
                    : 'text-(--muted) hover:text-(--ink)'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: theme toggle + mobile hamburger */}
        <div className="flex items-center gap-1">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-(--muted) transition-colors hover:text-(--ink)"
            aria-label="切换主题"
          >
            {mounted && resolvedTheme === 'dark' ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* Mobile hamburger button (visible < 768px) */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-(--muted) transition-colors hover:text-(--ink) md:hidden"
            aria-label={mobileOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div className="border-t border-(--line) md:hidden">
          <ul className="mx-auto max-w-[960px] space-y-1 px-4 py-3">
            {defaultNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex h-11 items-center rounded-md px-3 text-sm transition-colors ${
                    isActive(item.href)
                      ? 'bg-(--nav-active-bg) font-medium text-(--nav-active-fg)'
                      : 'text-(--muted) hover:text-(--ink)'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
