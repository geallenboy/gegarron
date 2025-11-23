'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: '首页', href: '#hero' },
  { name: '关于', href: '#about' },
  { name: '技能', href: '#skills' },
  { name: '项目', href: '#projects' },
  { name: '联系', href: '#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'border-b border-gray-800 bg-gray-900/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="text-xl font-bold"
          >
            GG
          </a>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="hover:text-primary text-sm font-medium text-gray-200 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-gray-800 bg-gray-900 md:hidden">
          <div className="container mx-auto space-y-2 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="hover:text-primary block py-2 text-sm font-medium text-gray-200 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="border-t border-gray-800 pt-4">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
