import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Soham Ganatra - Building the Future | Composio.dev",
  description: "Soham Ganatra is the founder of Composio.dev, working on AI and the missing link to AGI. Based in San Francisco, passionate about BCI, robotics, and space tech.",
  keywords: ["Soham Ganatra", "Composio", "AI", "AGI", "Founder", "San Francisco", "BCI", "Robotics", "Space Tech"],
  authors: [{ name: "Soham Ganatra", url: "https://composio.dev" }],
  creator: "Soham Ganatra",
  publisher: "Soham Ganatra",
  openGraph: {
    title: "Soham Ganatra - Building the Future",
    description: "Founder of Composio.dev working on AI and the missing link to AGI",
    type: "website",
    locale: "en_US",
    siteName: "Soham Ganatra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soham Ganatra - Building the Future",
    description: "Founder of Composio.dev working on AI and the missing link to AGI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
