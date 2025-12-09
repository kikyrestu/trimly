import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import MobileLayout from "./components/MobileLayout";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Trimly",
  description: "Modern Web3 Beauty & Grooming Ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, spaceGrotesk.variable, "bg-gray-50 text-gray-900 antialiased")}>
        {children}
      </body>
    </html>
  );
}
