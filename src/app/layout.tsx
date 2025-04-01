import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Head from "@/components/headfoot/head";  // src/app/components/headfoot/head.tsx
import Foot from "../components/headfoot/foot"; // src/app/components/headfoot/foot.tsx

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Application BTS-SIO",
  description: "Description de la page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full flex flex-col`}>
        <Head /> {/* Navbar */}
        <main className="flex-grow flex flex-col">{children}</main>
        <Foot /> {/* Footer */}
      </body>
    </html>
  );
}
