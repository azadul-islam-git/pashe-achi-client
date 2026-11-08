import type { Metadata } from "next";
import { Anek_Bangla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "./providers/ThemeProvider";

const anekBangla = Anek_Bangla({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "পাশে আছি",
  description: "প্রতিটি ভালো কাজ শুরু হোক একজনের পাশে দাঁড়িয়ে।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${anekBangla.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
