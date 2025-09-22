import type { Metadata } from "next";
import { Red_Hat_Text, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import MainLayout from "@/layouts/MainLayout";

const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  variable: "--font-redhat-text",
  display: "swap",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-redhat-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ten11.com"),
  title: "Ten11 Hospitality",
  description: "Corporate Website for Ten11 Hospitality",
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-32x32.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Ten11 Hospitality",
    description: "Discover our brand purpose, projects, and vision.",
    url: "https://ten11.com",
    siteName: "Ten11 Hospitality",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ten11 Hospitality",
    description: "Corporate Website for Ten11 Hospitality",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ten11 Hospitality",
              url: "https://ten11.com",
              logo: "https://ten11.com/logo.png",
              sameAs: ["https://www.linkedin.com/company/ten11"],
            }),
          }}
        />
      </head>
      <body
        className={`${redHatText.variable} ${redHatDisplay.variable} antialiased`}
      >
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
