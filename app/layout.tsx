import type { Metadata } from "next";
import "./globals.css";
import "@/styles/tw-animate.css";
import { NavigationDock } from "@/components/NavigationDock";
import { Footer } from "@/components/Footer";

import Portfolio from "@/components/portfolio-menu";
import { Geist, Cormorant_Garamond, Crimson_Text, Cormorant, Cormorant_Upright, Goudy_Bookletter_1911, Cinzel, Saira_Stencil_One, Raleway_Dots } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});
const cormorantBase = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-base',
});
const crimson = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
});
const cormorantUpright = Cormorant_Upright({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-upright',
});
const goudy = Goudy_Bookletter_1911({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-goudy',
});
const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
});
const sairaStencil = Saira_Stencil_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-saira-stencil',
});
const ralewayDots = Raleway_Dots({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-raleway-dots',
});

export const metadata: Metadata = {
  title: "Wilson Portfolio",
  description: "Wilson Ramropui - Founding Engineer & Design Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable, cormorantGaramond.variable, cormorantBase.variable, crimson.variable, cormorantUpright.variable, goudy.variable, cinzel.variable, sairaStencil.variable, ralewayDots.variable)}>
      <body className="bg-zinc-950 text-zinc-100 flex flex-col antialiased min-h-screen relative">
        <NavigationDock />
        <Portfolio />
        <main className="flex-1 flex flex-col min-h-screen relative pt-8">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
