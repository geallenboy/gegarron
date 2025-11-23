'use client';

import { createContext } from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'next-themes';

export const AppContext = createContext<{ previousPathname?: string }>({});

export function Providers({ children }: { children: React.ReactNode }) {
  let pathname = usePathname();
  // let previousPathname = usePrevious(pathname); // This can be added back if needed for animations

  return (
    <AppContext.Provider value={{ previousPathname: pathname }}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
}
