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
  title: "LunchChat - 교내 커피챗 플랫폼",
  description:
    "Lunch with Insight!  매일 가는 학교, 매일 먹는 점심. 런치챗과 함께라면 점심시간이 더 가치 있는 시간이 됩니다.",
  keywords: ["커피챗", "대학생", "네트워킹", "런치챗", "LunchChat"],
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
