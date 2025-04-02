// qswap-web/src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QSwap - Queen's University Student Marketplace",
  description:
    "Buy, sell, and trade exclusively with Queen's University students. No fees, safe on-campus meetups.",
  icons: {
    icon: "/app_icon.png",
    apple: "/app_icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
