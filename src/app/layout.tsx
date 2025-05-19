import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Head from "@/components/headfoot/head"; // src/app/headfoot/head.tsx (C'est la navbar pour l'instant)
import Foot from "@/components/headfoot/foot";     // src/app/headfoot/foot.tsx (C'est le footer pour l'instant)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Application BTS SIO",
  description: "Description de la page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Head /> {/* Navbar */}
        <div className="mt-12 flex-grow flex flex-col">
          <main>{children}</main>
        </div>
        <Foot /> {/* Footer */}
      </body>
    </html>
  );
}
