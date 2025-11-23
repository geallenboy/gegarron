import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { cn } from '@/lib/utils';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Ge Garron · AI & Web3 Developer',
    template: '%s | Ge Garron',
  },
  description: 'Building AI applications and Web3 tools for investment and automation.',
  keywords: ['AI', 'Web3', 'Developer', 'Next.js', 'React', 'LangChain', 'Ethereum', 'DApp'],
  authors: [{ name: 'Ge Garron' }],
  creator: 'Ge Garron',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Ge Garron · AI & Web3 Developer',
    description: 'Building AI applications and Web3 tools for investment and automation.',
    siteName: 'Ge Garron',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ge Garron · AI & Web3 Developer',
    description: 'Building AI applications and Web3 tools for investment and automation.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn('bg-background min-h-screen font-sans antialiased', fontSans.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
