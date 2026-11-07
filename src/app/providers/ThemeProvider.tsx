"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider {...props} storageKey="pashe-achi-theme">
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
