import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LunchChat - 점심 메뉴 AI 어시스턴트",
  description: "점심 메뉴 고민을 해결해드리는 AI 어시스턴트입니다. 개인 취향과 상황에 맞는 맞춤형 메뉴를 추천해드립니다.",
  keywords: ["점심", "메뉴", "AI", "추천", "LunchChat"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
