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
  title: "Fundraising Campaign",
  description: "Join our exciting fundraising campaign and make a difference!",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1fe169" />
      </head>
      <body className="min-h-screen w-full antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
