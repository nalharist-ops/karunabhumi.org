import "./globals.css";
import type { Metadata } from "next";
// 1. Import both font loaders
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { ThemeProvider } from "./components/theme-switch";
import { metaData } from "./lib/config";
import SmoothScroller from "@/components/SmoothScroller";

// 2. Configure the body font (Inter) with a CSS variable
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

// 3. Configure your local display font (Abigeta Display)
const abigeta = localFont({
  src: './font/Abigeta-Display.otf', // Assumes the font is in an `app/fonts` folder
  display: 'swap',
  variable: '--font-abigeta',
});

export const metadata: Metadata = {
  // Your metadata remains the same...
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`,
  },
  description: metaData.description,
  openGraph: {
    images: metaData.ogImage,
    title: metaData.title,
    description: metaData.description,
    url: metaData.baseUrl,
    siteName: metaData.name,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: metaData.name,
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 4. Apply both font variables to the <html> tag
    <html lang="en" className={`${inter.variable} ${abigeta.variable}`}>
      <head>
        {/* Your <link> tags remain the same... */}
        <link
          rel="alternate"
          type="application/rss+xml"
          href="/rss.xml"
          title="RSS Feed"
        />
        <link
          rel="alternate"
          type="application/atom+xml"
          href="/atom.xml"
          title="Atom Feed"
        />
        <link
          rel="alternate"
          type="application/feed+json"
          href="/feed.json"
          title="JSON Feed"
        />
      </head>
      <body className="antialiased w-full overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-auto w-full flex flex-col">
            {children}
          </main>
          
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
        <SmoothScroller />
      </body>
    </html>
  );
}