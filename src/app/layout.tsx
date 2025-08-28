import type { Metadata } from "next";
import { Red_Hat_Text, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import MainLayout from "@/layouts/MainLayout";

// Import Red Hat fonts from Google
const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  variable: "--font-redhat-text",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-redhat-display",
});

// Metadata including favicon references
export const metadata: Metadata = {
  title: "Ten11 Hospitality",
  description: "Corporate Website for Ten11 Hospitality",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${redHatText.variable} ${redHatDisplay.variable} antialiased`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
