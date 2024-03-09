import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";



const myFont = localFont({ src: './fonts/SF-PRO.ttf' })

export const metadata: Metadata = {
  title: "Rishav Jha",
  description: "Minimalist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
