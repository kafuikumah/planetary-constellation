import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Afri Health — African Health Systems Dashboard",
  description: "Interactive dashboard for tracking and comparing health system performance across 54 African nations using the WHO 6 Building Blocks Framework.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased text-slate-800 bg-[#F1F5F9]`} suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
