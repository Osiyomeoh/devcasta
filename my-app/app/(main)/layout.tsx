import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: ["sans-serif"],

});


export const metadata: Metadata = {
  title: "Devcasta",
  description: "DevCasta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <main className="min-h-screen bg-bgBlack max-w-[1440px] mx-auto px-5  md:px-[5rem] pt-3 pb-24">
          <Header/>
        {children}
        </main>
    
      </body>
    </html>
  );
}
