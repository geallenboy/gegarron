// site config
export const utm_source = process.env.NEXT_PUBLIC_UTM_SOURCE


// navigation config
type NavItemType = {
  name: string
  href: string
}

export const footerItems: Array<NavItemType> = [
  {
    name: '首页',
    href: '/'
  },
  {
    name: '关于',
    href: '/about'
  },
  {
    name: '项目',
    href: '/projects'
  },
  {
    name: '文章',
    href: '/blogs'
  },
  {
    name: '朋友',
    href: '/friends'
  },
  {
    name: '网站日志',
    href: '/changelog'
  }
]

export const navItems: Array<NavItemType> = [
  {
    name: '首页',
    href: '/'
  },
  {
    name: '关于',
    href: '/about'
  },
  {
    name: '项目',
    href: '/projects'
  },
  {
    name: '文章',
    href: '/blogs'
  }
]
