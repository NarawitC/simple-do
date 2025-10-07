import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { AppBreadcrumb } from "@/components/custom/breadcrumb";
import { Footer } from "@/components/custom/footer";
import { Header } from "@/components/custom/header";
import { ThemeProvider } from "@/components/custom/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "SimpleDo | %s",
    default: "SimpleDo",
  },
  description: "SimpleDo - Minimal task management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header></Header>
          <AppBreadcrumb></AppBreadcrumb>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
