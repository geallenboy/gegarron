import Link from 'next/link'

type Crumb = {
  label: string
  href: string
}

type BreadcrumbProps = {
  items: Crumb[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-white/50">
      {items.map((item, index) => (
        <span key={`${item.href}-${item.label}`} className="inline-flex items-center gap-2">
          <Link href={item.href} className="transition hover:text-slate-900 dark:hover:text-white">
            {item.label}
          </Link>
          {index < items.length - 1 && <span>›</span>}
        </span>
      ))}
    </div>
  )
}
