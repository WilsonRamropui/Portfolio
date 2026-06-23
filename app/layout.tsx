import type { Metadata } from "next";
import "./globals.css";
import "@/styles/tw-animate.css";
import { NavigationDock } from "@/components/NavigationDock";
import { Footer } from "@/components/Footer";

import Portfolio from "@/components/portfolio-menu";
import PreLoader from "@/components/PreLoader";
import { Geist, Cormorant_Garamond, Crimson_Text, Cormorant, Cormorant_Upright, Goudy_Bookletter_1911, Cinzel, Saira_Stencil_One, Raleway_Dots } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans',display:'swap'});
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});
const cormorantBase = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-base',
  display: 'swap',
});
const crimson = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
  display: 'swap',
});
const cormorantUpright = Cormorant_Upright({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-upright',
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
const sairaStencil = Saira_Stencil_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-saira-stencil',
  display: 'swap',
});
const ralewayDots = Raleway_Dots({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-raleway-dots',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Wilson Portfolio",
  description: "Wilson Ramropui - Founding Engineer & Design Engineer",
};

export const unstable_instant = { prefetch: 'static' };

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
    <html suppressHydrationWarning lang="en" className={cn("dark", "font-sans", geist.variable, cormorantGaramond.variable, cormorantBase.variable, crimson.variable, cormorantUpright.variable, goudy.variable, cinzel.variable, sairaStencil.variable, ralewayDots.variable)}>
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <div className="relative flex flex-col min-h-screen w-full max-w-full overflow-x-clip">
          <PreLoader />
          <NavigationDock />
          <Portfolio />
          <main className="flex-1 flex flex-col relative pt-8">
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
