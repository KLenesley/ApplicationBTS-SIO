import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Head from "@/components/head"; // src/app/headfoot/head.tsx (C'est la navbar pour l'instant)
import Foot from "../components/foot";     // src/app/headfoot/foot.tsx (C'est le footer pour l'instant)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Titre de la page",
  description: "Description de la page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Head /> {/* Navbar */}
        <main className="flex-grow flex flex-col">{children}</main>
        <Foot /> {/* Footer */}
      </body>
    </html>
  );
}
