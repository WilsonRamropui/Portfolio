import type { Metadata } from "next";
import "./globals.css";
import "@/styles/tw-animate.css";
import { NavigationDock } from "@/components/NavigationDock";
import { Footer } from "@/components/Footer";

import Portfolio from "@/components/portfolio-menu";
import PageTransition from "@/components/PageTransition";
import PreLoader from "@/components/PreLoader";
import { Geist, Cormorant_Garamond, Crimson_Text, Goudy_Bookletter_1911, Cinzel, Rosarivo } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ArchitecturalGrid } from "@/components/ArchitecturalGrid";

const geist = Geist({subsets:['latin'],variable:'--font-sans',display:'swap'});
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});
const crimson = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
  display: 'swap',
});
const goudy = Goudy_Bookletter_1911({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-goudy',
  display: 'swap',
});
const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

const rosarivo = Rosarivo({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rosarivo',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://wilson-portfolio.com'),
  title: "Wilson Portfolio",
  description: "Wilson Ramropui - Founding Engineer & Design Engineer",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: 'Wilson Portfolio',
    description: 'Wilson Ramropui - Founding Engineer & Design Engineer',
    url: 'https://wilson-portfolio.com',
    siteName: 'Wilson Portfolio',
    images: [
      {
        url: '/gothic-thumb-1.png',
        width: 1200,
        height: 630,
        alt: 'Wilson Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wilson Portfolio',
    description: 'Wilson Ramropui - Founding Engineer & Design Engineer',
    creator: '@wilson',
    images: ['/gothic-thumb-1.png'],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={cn("font-sans", geist.variable, cormorantGaramond.variable, crimson.variable, goudy.variable, cinzel.variable, rosarivo.variable)}>
      <body className="antialiased transition-colors duration-500 ease-in-out">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SmoothScroll>
            <ArchitecturalGrid />
            <div className="relative flex flex-col min-h-screen w-full max-w-full overflow-x-clip">
            <PreLoader />
            <NavigationDock />
            <Portfolio />
            <main className="flex-1 flex flex-col relative pt-8">
              <PageTransition>
                {children}
                <Footer />
              </PageTransition>
            </main>
          </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
