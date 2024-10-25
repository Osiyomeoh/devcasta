import React from "react";

import { Metadata } from "next";
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
const layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <html lang="en">
    <body
      className={`${inter.variable} antialiased`}
    >
  
      {children}
    </body>
    </html>
  );
};

export default layout;
