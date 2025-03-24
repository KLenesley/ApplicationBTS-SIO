import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Head from "@/app/headfoot/head"; // src/app/headfoot/head.tsx (C'est la navbar pour l'instant)
import Foot from "./headfoot/foot";     // src/app/headfoot/foot.tsx (C'est le footer pour l'instant)

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
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Head/>     {/* Navbar */}
        <br/><br/>
        {children}  {/* Contenue de la page */}
        <br/><br/>  {/* Footer */}
        <Foot/>
      </body>
    </html>
  );
}
